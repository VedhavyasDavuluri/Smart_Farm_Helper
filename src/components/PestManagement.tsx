import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bug, Droplets, Shield, AlertTriangle, Calendar, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PestInfo {
  crop: string;
  teluguName: string;
  pest: string;
  pestTelugu: string;
  symptoms: string;
  solution: string;
  preventive: string;
  severity: 'low' | 'medium' | 'high';
  season: string;
}

const pestData: PestInfo[] = [
  {
    crop: 'Paddy',
    teluguName: 'వరి',
    pest: 'Stem Borer',
    pestTelugu: 'కాండ శిలీంధ్రం',
    symptoms: 'Dead hearts, white ears, holes in stem',
    solution: 'Chlorpyrifos 20EC @ 2ml/L or Cartap Hydrochloride',
    preventive: 'Use pheromone traps, avoid excess nitrogen',
    severity: 'high',
    season: 'Kharif'
  },
  {
    crop: 'Cotton',
    teluguName: 'పత్తి',
    pest: 'Bollworm',
    pestTelugu: 'గుచ్చే పురుగు',
    symptoms: 'Holes in bolls, caterpillars inside',
    solution: 'Profenofos 50EC @ 2ml/L + Bt spray',
    preventive: 'Install pheromone traps, intercrop with marigold',
    severity: 'high',
    season: 'Kharif'
  },
  {
    crop: 'Groundnut',
    teluguName: 'వేరుసెనగ',
    pest: 'Tikka Leaf Spot',
    pestTelugu: 'టిక్కా దద్దుర్లు',
    symptoms: 'Brown spots on leaves, yellowing',
    solution: 'Mancozeb 75WP @ 2g/L spray',
    preventive: 'Crop rotation, resistant varieties',
    severity: 'medium',
    season: 'Kharif'
  },
  {
    crop: 'Chilli',
    teluguName: 'మిరపకాయలు',
    pest: 'Thrips',
    pestTelugu: 'త్రిప్స్ పురుగు',
    symptoms: 'Silver patches on leaves, curling',
    solution: 'Spinosad 45SC @ 0.3ml/L or Blue sticky traps',
    preventive: 'Mulching, avoid water stress',
    severity: 'medium',
    season: 'Rabi'
  },
  {
    crop: 'Maize',
    teluguName: 'మొక్కజొన్న',
    pest: 'Fall Army Worm',
    pestTelugu: 'పతన సైన్య పురుగు',
    symptoms: 'Whorl damage, window pane feeding',
    solution: 'Chlorantraniliprole 18.5SC @ 0.4ml/L',
    preventive: 'Early detection, pheromone traps',
    severity: 'high',
    season: 'All seasons'
  },
  {
    crop: 'Tomato',
    teluguName: 'టమాటో',
    pest: 'Leaf Curl Virus',
    pestTelugu: 'ఆకు వంగు వైరస్',
    symptoms: 'Upward curling of leaves, stunted growth',
    solution: 'Remove infected plants, control whitefly vector',
    preventive: 'Use virus-free seeds, reflective mulch',
    severity: 'high',
    season: 'Rabi'
  }
];

const PestManagement = () => {
  const [selectedCrop, setSelectedCrop] = useState<string>('All');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('All');
  const { t, language } = useLanguage();

  const crops = ['All', ...Array.from(new Set(pestData.map(p => p.crop)))];
  const severities = ['All', 'low', 'medium', 'high'];

  const filteredPests = pestData.filter(pest => {
    const cropMatch = selectedCrop === 'All' || pest.crop === selectedCrop;
    const severityMatch = selectedSeverity === 'All' || pest.severity === selectedSeverity;
    return cropMatch && severityMatch;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="w-4 h-4" />;
      case 'medium': return <Shield className="w-4 h-4" />;
      case 'low': return <Leaf className="w-4 h-4" />;
      default: return <Bug className="w-4 h-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bug className="w-5 h-5 text-red-600" />
          {language === 'te' ? 'పేషీ నిర్వహణ' : language === 'hi' ? 'कीट प्रबंधन' : 'Pest & Disease Management'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium">
              {language === 'te' ? 'పంట:' : language === 'hi' ? 'फसल:' : 'Crop:'}
            </span>
            {crops.map(crop => (
              <Button
                key={crop}
                variant={selectedCrop === crop ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCrop(crop)}
              >
                {crop}
              </Button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium">
              {language === 'te' ? 'తీవ్రత:' : language === 'hi' ? 'गंभीरता:' : 'Severity:'}
            </span>
            {severities.map(severity => (
              <Button
                key={severity}
                variant={selectedSeverity === severity ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSeverity(severity)}
              >
                {severity === 'All' ? (language === 'te' ? 'అన్నీ' : language === 'hi' ? 'सभी' : 'All') : severity}
              </Button>
            ))}
          </div>
        </div>

        {/* Pest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPests.map((pest, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">
                    {pest.crop} ({pest.teluguName})
                  </h3>
                  <p className="text-sm text-gray-600">
                    {pest.pest} - {pest.pestTelugu}
                  </p>
                </div>
                <Badge className={`${getSeverityColor(pest.severity)} flex items-center gap-1`}>
                  {getSeverityIcon(pest.severity)}
                  {pest.severity}
                </Badge>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">
                      {language === 'te' ? 'లక్షణాలు:' : language === 'hi' ? 'लक्षण:' : 'Symptoms:'}
                    </p>
                    <p className="text-sm text-gray-600">{pest.symptoms}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Droplets className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">
                      {language === 'te' ? 'చికిత్స:' : language === 'hi' ? 'उपचार:' : 'Treatment:'}
                    </p>
                    <p className="text-sm text-gray-600">{pest.solution}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-green-500 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">
                      {language === 'te' ? 'నివారణ:' : language === 'hi' ? 'रोकथाम:' : 'Prevention:'}
                    </p>
                    <p className="text-sm text-gray-600">{pest.preventive}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">
                    {language === 'te' ? 'సీజన్:' : language === 'hi' ? 'मौसम:' : 'Season:'} {pest.season}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center">
            <Bug className="w-5 h-5 text-blue-600 mr-2" />
            <p className="text-sm text-blue-800">
              {language === 'te' 
                ? 'సమీపంలోని కృషి అధికారి లేదా హెల్ప్‌లైన్ 1551కి సంప్రదించండి'
                : language === 'hi'
                ? 'नजदीकी कृषि अधिकारी या हेल्पलाइन 1551 से संपर्क करें'
                : 'Contact nearest agriculture officer or helpline 1551 for expert advice'
              }
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PestManagement;
