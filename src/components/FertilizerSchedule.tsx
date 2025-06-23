
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Beaker, Calendar, Sprout, TrendingUp, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface FertilizerSchedule {
  crop: string;
  teluguName: string;
  stage: string;
  daysAfterSowing: string;
  fertilizer: string;
  dosage: string;
  method: string;
  notes: string;
}

const fertilizerData: FertilizerSchedule[] = [
  {
    crop: 'Paddy',
    teluguName: 'వరి',
    stage: 'Basal',
    daysAfterSowing: '0',
    fertilizer: 'DAP + MOP',
    dosage: '100kg DAP + 50kg MOP per acre',
    method: 'Soil application before transplanting',
    notes: 'Mix with soil during last ploughing'
  },
  {
    crop: 'Paddy',
    teluguName: 'వరి',
    stage: 'Tillering',
    daysAfterSowing: '25-30',
    fertilizer: 'Urea',
    dosage: '50kg per acre',
    method: 'Broadcast in standing water',
    notes: 'Ensure 3-5cm water level'
  },
  {
    crop: 'Paddy',
    teluguName: 'వరి',
    stage: 'Panicle Initiation',
    daysAfterSowing: '55-60',
    fertilizer: 'Urea',
    dosage: '25kg per acre',
    method: 'Broadcast',
    notes: 'Apply during evening hours'
  },
  {
    crop: 'Cotton',
    teluguName: 'పత్తి',
    stage: 'Basal',
    daysAfterSowing: '0',
    fertilizer: 'NPK 20:20:0',
    dosage: '100kg per acre',
    method: 'Soil application',
    notes: 'Apply during sowing in furrows'
  },
  {
    crop: 'Cotton',
    teluguName: 'పత్తి',
    stage: 'Squaring',
    daysAfterSowing: '45-50',
    fertilizer: 'Urea',
    dosage: '50kg per acre',
    method: 'Side dressing',
    notes: 'Apply 6 inches away from plant'
  },
  {
    crop: 'Cotton',
    teluguName: 'పత్తి',
    stage: 'Flowering',
    daysAfterSowing: '75-80',
    fertilizer: 'Urea + Potash',
    dosage: '25kg Urea + 25kg MOP per acre',
    method: 'Soil application',
    notes: 'Ensure adequate soil moisture'
  },
  {
    crop: 'Groundnut',
    teluguName: 'వేరుసెనగ',
    stage: 'Basal',
    daysAfterSowing: '0',
    fertilizer: 'SSP + Gypsum',
    dosage: '100kg SSP + 200kg Gypsum per acre',
    method: 'Soil application',
    notes: 'Essential for pod development'
  },
  {
    crop: 'Groundnut',
    teluguName: 'వేరుసెనగ',
    stage: 'Flowering',
    daysAfterSowing: '35-40',
    fertilizer: 'Foliar spray',
    dosage: '2% DAP solution',
    method: 'Foliar application',
    notes: 'Spray during morning or evening'
  },
  {
    crop: 'Chilli',
    teluguName: 'మిరపకాయలు',
    stage: 'Transplanting',
    daysAfterSowing: '0',
    fertilizer: 'FYM + NPK',
    dosage: '5 tons FYM + 80kg NPK per acre',
    method: 'Soil incorporation',
    notes: 'Apply FYM 15 days before transplanting'
  },
  {
    crop: 'Chilli',
    teluguName: 'మిరపకాయలు',
    stage: 'Flowering',
    daysAfterSowing: '45-60',
    fertilizer: 'Urea',
    dosage: '40kg per acre',
    method: 'Side dressing',
    notes: 'Split application in 2 doses'
  },
  {
    crop: 'Chilli',
    teluguName: 'మిరపకాయలు',
    stage: 'Fruiting',
    daysAfterSowing: '75-90',
    fertilizer: 'NPK 19:19:19',
    dosage: '25kg per acre',
    method: 'Drip fertigation',
    notes: 'Weekly application through drip'
  }
];

const FertilizerSchedule = () => {
  const [selectedCrop, setSelectedCrop] = useState<string>('All');
  const { language } = useLanguage();

  const crops = ['All', ...Array.from(new Set(fertilizerData.map(f => f.crop)))];

  const filteredSchedule = fertilizerData.filter(item => 
    selectedCrop === 'All' || item.crop === selectedCrop
  );

  const getStageColor = (stage: string) => {
    switch (stage.toLowerCase()) {
      case 'basal': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'tillering': case 'squaring': return 'bg-green-100 text-green-800 border-green-200';
      case 'flowering': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'fruiting': case 'panicle initiation': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'transplanting': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Beaker className="w-5 h-5 text-green-600" />
          {language === 'te' ? 'ఎరువుల కార్యక్రమం' : language === 'hi' ? 'उर्वरक कार्यक्रम' : 'Fertilizer Schedule'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Crop Filter */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-medium self-center">
            {language === 'te' ? 'పంట ఎంచుకోండి:' : language === 'hi' ? 'फसल चुनें:' : 'Select Crop:'}
          </span>
          {crops.map(crop => (
            <Button
              key={crop}
              variant={selectedCrop === crop ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCrop(crop)}
            >
              {crop === 'All' ? (language === 'te' ? 'అన్నీ' : language === 'hi' ? 'सभी' : 'All') : crop}
            </Button>
          ))}
        </div>

        {/* Schedule Cards */}
        <div className="space-y-4">
          {crops.filter(crop => crop !== 'All').map(cropName => {
            const cropSchedule = filteredSchedule.filter(item => item.crop === cropName);
            if (cropSchedule.length === 0) return null;

            return (
              <div key={cropName} className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Sprout className="w-5 h-5 text-green-600" />
                  {cropName} ({cropSchedule[0].teluguName})
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cropSchedule.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge className={getStageColor(item.stage)}>
                          {item.stage}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          {item.daysAfterSowing === '0' ? 
                            (language === 'te' ? 'నాటేటప్పుడు' : language === 'hi' ? 'बुवाई के समय' : 'At sowing') : 
                            `${item.daysAfterSowing} ${language === 'te' ? 'రోజులు' : language === 'hi' ? 'दिन' : 'days'}`
                          }
                        </div>
                      </div>

                      <div>
                        <p className="font-medium text-sm">
                          {language === 'te' ? 'ఎరువు:' : language === 'hi' ? 'उर्वरक:' : 'Fertilizer:'}
                        </p>
                        <p className="text-sm text-gray-700">{item.fertilizer}</p>
                      </div>

                      <div>
                        <p className="font-medium text-sm">
                          {language === 'te' ? 'మోతాదు:' : language === 'hi' ? 'मात्रा:' : 'Dosage:'}
                        </p>
                        <p className="text-sm text-gray-700">{item.dosage}</p>
                      </div>

                      <div>
                        <p className="font-medium text-sm">
                          {language === 'te' ? 'పద్ధతి:' : language === 'hi' ? 'विधि:' : 'Method:'}
                        </p>
                        <p className="text-sm text-gray-700">{item.method}</p>
                      </div>

                      {item.notes && (
                        <div className="bg-blue-50 p-2 rounded border-l-4 border-blue-400">
                          <p className="text-sm text-blue-800">
                            <strong>
                              {language === 'te' ? 'గమనిక:' : language === 'hi' ? 'नोट:' : 'Note:'}
                            </strong> {item.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
            <p className="text-sm text-green-800">
              {language === 'te' 
                ? 'మట్టి పరీక్ష ఆధారంగా ఎరువుల మోతాదు సర్దుబాటు చేయండి. సాయంత్రం సమయంలో వేయడం మంచిది.'
                : language === 'hi'
                ? 'मिट्टी परीक्षण के आधार पर उर्वरक की मात्रा समायोजित करें। शाम के समय छिड़काव करना बेहतर है।'
                : 'Adjust fertilizer doses based on soil test. Apply during evening hours for better results.'
              }
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FertilizerSchedule;
