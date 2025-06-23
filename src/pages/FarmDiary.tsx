import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Calendar, Plus, Sprout, DollarSign, Clock, AlertTriangle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

type ActivityType = 'fertilizing' | 'irrigation' | 'pest_control' | 'weeding' | 'soil_preparation' | 'other';

interface ActivityEntry {
  id?: string;
  activity_type: ActivityType;
  activity_date: string;
  description: string;
  cost?: number;
  materials_used?: string;
  notes?: string;
  created_at?: string;
  user_id?: string;
  crop_record_id?: string | null;
}

// Helper function to safely cast activity type
const castToActivityType = (data: any): ActivityEntry => ({
  ...data,
  activity_type: data.activity_type as ActivityType
});

const FarmDiary = () => {
  const { t, language } = useLanguage();
  const { user } = useAuth();
  const { toast } = useToast();
  const [activities, setActivities] = useState<ActivityEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [newActivity, setNewActivity] = useState<Omit<ActivityEntry, 'id' | 'created_at' | 'user_id' | 'crop_record_id'>>({
    activity_type: 'fertilizing',
    activity_date: new Date().toISOString().split('T')[0],
    description: '',
    cost: 0,
    materials_used: '',
    notes: ''
  });

  // Fetch activities from database
  const fetchActivities = async () => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('farm_activities')
        .select('*')
        .eq('user_id', user.id)
        .order('activity_date', { ascending: false });

      if (error) throw error;
      
      // Cast the data to proper type
      const typedActivities = data.map(castToActivityType);
      setActivities(typedActivities);
    } catch (error) {
      console.error('Error fetching activities:', error);
      toast({
        title: "Error",
        description: "Failed to load farm activities",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [user]);

  const handleInputChange = (field: keyof typeof newActivity, value: string | number) => {
    setNewActivity(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddActivity = async () => {
    if (!user || !newActivity.description.trim()) {
      toast({
        title: "Error",
        description: "Please fill in the description",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const activityData = {
        user_id: user.id,
        activity_type: newActivity.activity_type,
        activity_date: newActivity.activity_date,
        description: newActivity.description,
        cost: newActivity.cost || 0,
        materials_used: newActivity.materials_used || '',
        notes: newActivity.notes || '',
        crop_record_id: null
      };

      const { data, error } = await supabase
        .from('farm_activities')
        .insert([activityData])
        .select()
        .single();

      if (error) throw error;

      // Cast the response to proper type
      const typedActivity = castToActivityType(data);
      setActivities(prev => [typedActivity, ...prev]);
      
      // Reset form
      setNewActivity({
        activity_type: 'fertilizing',
        activity_date: new Date().toISOString().split('T')[0],
        description: '',
        cost: 0,
        materials_used: '',
        notes: ''
      });

      toast({
        title: "Success",
        description: "Farm activity added successfully",
      });
    } catch (error) {
      console.error('Error adding activity:', error);
      toast({
        title: "Error",
        description: "Failed to add farm activity",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const activityTypeMapping = {
    fertilizing: {
      te: 'ఎరువుల వేయడం',
      hi: 'उर्वरक डालना',
      en: 'Fertilizing'
    },
    irrigation: {
      te: 'నీటిపారుదల',
      hi: 'सिंचाई',
      en: 'Irrigation'
    },
    pest_control: {
      te: 'కీటకాల నియంత్రణ',
      hi: 'कीट नियंत्रण',
      en: 'Pest Control'
    },
    weeding: {
      te: 'కలుపు తీయడం',
      hi: 'खरपतवार हटाना',
      en: 'Weeding'
    },
    soil_preparation: {
      te: 'మట్టి తయారీ',
      hi: 'मिट्टी तैयारी',
      en: 'Soil Preparation'
    },
    other: {
      te: 'ఇతర',
      hi: 'अन्य',
      en: 'Other'
    }
  };

  const getActivityTypeName = (type: ActivityType) => {
    return activityTypeMapping[type][language] || activityTypeMapping[type].en;
  };

  const smartReminders = [
    {
      type: 'fertilizing',
      message: language === 'te' 
        ? 'మీ పంట 3 వారాల వయస్సు అయింది. ఎరువులు వేసే సమయం!'
        : language === 'hi'
        ? 'आपकी फसल 3 सप्ताह पुरानी है। उर्वरक डालने का समय!'
        : 'Your crop is 3 weeks old. Time for fertilizing!',
      urgency: 'high'
    },
    {
      type: 'irrigation',
      message: language === 'te' 
        ? 'రాబోయే రోజుల్లో వర్షం లేదు. నీటిపారుదల చేయండి'
        : language === 'hi'
        ? 'आने वाले दिनों में बारिश नहीं है। सिंचाई करें'
        : 'No rain expected in coming days. Consider irrigation',
      urgency: 'medium'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2 flex items-center gap-3">
            <Sprout className="h-10 w-10" />
            {language === 'te' ? 'వ్యవసాయ డైరీ' : language === 'hi' ? 'कृषि डायरी' : 'Farm Diary'}
          </h1>
          <p className="text-gray-600 text-lg">
            {language === 'te' 
              ? 'మీ వ్యవసాయ కార్యకలాపాలను రికార్డ్ చేయండి మరియు ట్రాక్ చేయండి'
              : language === 'hi'
              ? 'अपनी कृषि गतिविधियों को रिकॉर्ड और ट्रैक करें'
              : 'Record and track your farming activities'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add New Activity Form */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Plus className="h-5 w-5" />
                  {language === 'te' ? 'కొత్త కార్యకలాపం' : language === 'hi' ? 'नई गतिविधि' : 'New Activity'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'te' ? 'కార్యకలాప రకం' : language === 'hi' ? 'गतिविधि प्रकार' : 'Activity Type'}
                  </label>
                  <Select 
                    value={newActivity.activity_type} 
                    onValueChange={(value: ActivityType) => handleInputChange('activity_type', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(Object.keys(activityTypeMapping) as ActivityType[]).map((type) => (
                        <SelectItem key={type} value={type}>
                          {getActivityTypeName(type)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'te' ? 'తేదీ' : language === 'hi' ? 'दिनांक' : 'Date'}
                  </label>
                  <Input
                    type="date"
                    value={newActivity.activity_date}
                    onChange={(e) => handleInputChange('activity_date', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'te' ? 'వివరణ' : language === 'hi' ? 'विवरण' : 'Description'}
                  </label>
                  <Textarea
                    value={newActivity.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder={language === 'te' ? 'కార్యకలాప వివరణ...' : language === 'hi' ? 'गतिविधि विवरण...' : 'Activity description...'}
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'te' ? 'ఖర్చు (₹)' : language === 'hi' ? 'लागत (₹)' : 'Cost (₹)'}
                  </label>
                  <Input
                    type="number"
                    value={newActivity.cost}
                    onChange={(e) => handleInputChange('cost', parseFloat(e.target.value) || 0)}
                    placeholder="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'te' ? 'ఉపయోగించిన పదార్థాలు' : language === 'hi' ? 'उपयोग की गई सामग्री' : 'Materials Used'}
                  </label>
                  <Input
                    value={newActivity.materials_used}
                    onChange={(e) => handleInputChange('materials_used', e.target.value)}
                    placeholder={language === 'te' ? 'ఎరువులు, పురుగుమందులు...' : language === 'hi' ? 'उर्वरक, कीटनाशक...' : 'Fertilizers, pesticides...'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    {language === 'te' ? 'గమనికలు' : language === 'hi' ? 'नोट्स' : 'Notes'}
                  </label>
                  <Textarea
                    value={newActivity.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder={language === 'te' ? 'అదనపు గమనికలు...' : language === 'hi' ? 'अतिरिक्त नोट्स...' : 'Additional notes...'}
                    rows={2}
                  />
                </div>

                <Button 
                  onClick={handleAddActivity} 
                  className="w-full bg-green-600 hover:bg-green-700"
                  disabled={isLoading}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  {isLoading 
                    ? (language === 'te' ? 'జోడిస్తోంది...' : language === 'hi' ? 'जोड़ा जा रहा...' : 'Adding...')
                    : (language === 'te' ? 'కార్యకలాపం జోడించు' : language === 'hi' ? 'गतिविधि जोड़ें' : 'Add Activity')
                  }
                </Button>
              </CardContent>
            </Card>

            {/* Smart Reminders */}
            <Card className="shadow-lg mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <AlertTriangle className="h-5 w-5" />
                  {language === 'te' ? 'స్మార్ట్ రిమైండర్లు' : language === 'hi' ? 'स्मार्ट रिमाइंडर' : 'Smart Reminders'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {smartReminders.map((reminder, index) => (
                  <div key={index} className={`p-3 rounded-lg border-l-4 ${
                    reminder.urgency === 'high' ? 'border-red-500 bg-red-50' : 'border-yellow-500 bg-yellow-50'
                  }`}>
                    <p className="text-sm font-medium">{reminder.message}</p>
                    <Badge variant={reminder.urgency === 'high' ? 'destructive' : 'default'} className="mt-1">
                      {reminder.urgency === 'high' 
                        ? (language === 'te' ? 'అత్యవసరం' : language === 'hi' ? 'जरूरी' : 'Urgent')
                        : (language === 'te' ? 'సాధారణ' : language === 'hi' ? 'सामान्य' : 'Normal')
                      }
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Activities List */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Calendar className="h-5 w-5" />
                  {language === 'te' ? 'ఇటీవలి కార్యకలాపాలు' : language === 'hi' ? 'हाल की गतिविधियां' : 'Recent Activities'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-8">
                    <p>{language === 'te' ? 'లోడ్ అవుతోంది...' : language === 'hi' ? 'लोड हो रहा...' : 'Loading...'}</p>
                  </div>
                ) : activities.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <Sprout className="h-12 w-12 mx-auto mb-3 opacity-50" />
                    <p>{language === 'te' ? 'ఇంకా కార్యకలాపాలు లేవు' : language === 'hi' ? 'अभी तक कोई गतिविधि नहीं' : 'No activities yet'}</p>
                    <p className="text-sm">{language === 'te' ? 'మీ మొదటి కార్యకలాపం జోడించండి' : language === 'hi' ? 'अपनी पहली गतिविधि जोड़ें' : 'Add your first activity'}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {activities.map((activity) => (
                      <div key={activity.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{getActivityTypeName(activity.activity_type)}</Badge>
                            <span className="text-sm text-gray-600">{activity.activity_date}</span>
                          </div>
                          {activity.cost && activity.cost > 0 && (
                            <div className="flex items-center gap-1 text-green-600">
                              <DollarSign className="h-4 w-4" />
                              <span className="font-medium">₹{activity.cost}</span>
                            </div>
                          )}
                        </div>
                        
                        <p className="text-gray-800 mb-2">{activity.description}</p>
                        
                        {activity.materials_used && (
                          <p className="text-sm text-gray-600 mb-1">
                            <strong>{language === 'te' ? 'పదార్థాలు:' : language === 'hi' ? 'सामग्री:' : 'Materials:'}</strong> {activity.materials_used}
                          </p>
                        )}
                        
                        {activity.notes && (
                          <p className="text-sm text-gray-600">
                            <strong>{language === 'te' ? 'గమనికలు:' : language === 'hi' ? 'नोट्स:' : 'Notes:'}</strong> {activity.notes}
                          </p>
                        )}
                        
                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-2">
                          <Clock className="h-3 w-3" />
                          <span>{language === 'te' ? 'జోడించబడింది:' : language === 'hi' ? 'जोड़ा गया:' : 'Added:'} {new Date(activity.created_at!).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmDiary;
