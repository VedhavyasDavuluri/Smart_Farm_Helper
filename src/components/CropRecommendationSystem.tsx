
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Leaf, BarChart3, Droplets, Thermometer } from 'lucide-react';
import { recommendCrops } from '@/data/cropRecommendationData';
import { useLanguage } from '@/contexts/LanguageContext';

const CropRecommendationSystem = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: ''
  });
  const [recommendations, setRecommendations] = useState<Array<{ crop: string, teluguName: string, similarity: number }>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTitle = () => {
    switch (language) {
      case 'te':
        return 'స్మార్ట్ పంట సిఫార్సు వ్యవస్థ';
      case 'hi':
        return 'स्मार्ट फसल सिफारिश प्रणाली';
      default:
        return 'Smart Crop Recommendation System';
    }
  };

  const getDescription = () => {
    switch (language) {
      case 'te':
        return 'మట్టి మరియు వాతావరణ పరిస్థితుల ఆధారంగా ఉత్తమ పంటలను కనుగొనండి';
      case 'hi':
        return 'मिट्टी और मौसम की स्थिति के आधार पर सर्वोत्तम फसलें खोजें';
      default:
        return 'Find the best crops based on soil and weather conditions';
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRecommendation = async () => {
    setIsLoading(true);
    
    // Convert string values to numbers
    const inputConditions = {
      nitrogen: parseFloat(formData.nitrogen) || 0,
      phosphorus: parseFloat(formData.phosphorus) || 0,
      potassium: parseFloat(formData.potassium) || 0,
      temperature: parseFloat(formData.temperature) || 0,
      humidity: parseFloat(formData.humidity) || 0,
      ph: parseFloat(formData.ph) || 0,
      rainfall: parseFloat(formData.rainfall) || 0
    };

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const results = recommendCrops(inputConditions);
    setRecommendations(results);
    setIsLoading(false);
  };

  const getSimilarityColor = (similarity: number) => {
    if (similarity >= 0.8) return 'bg-green-100 text-green-800';
    if (similarity >= 0.6) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  const getSimilarityLabel = (similarity: number) => {
    if (similarity >= 0.8) return 'Excellent Match';
    if (similarity >= 0.6) return 'Good Match';
    return 'Fair Match';
  };

  return (
    <Card className="bg-white dark:bg-gray-800 shadow-lg elevation-4 border-0 rounded-2xl overflow-hidden">
      <CardHeader className="pb-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-800 border-b border-gray-100 dark:border-gray-700">
        <CardTitle className="flex items-center gap-3 text-xl text-gray-900 dark:text-white">
          <div className="p-2 bg-green-500 rounded-xl shadow-lg elevation-2">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          {getTitle()}
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {getDescription()}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6 space-y-6">
        {/* Input Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nitrogen" className="text-sm font-medium flex items-center gap-2">
              <Leaf className="w-4 h-4 text-green-600" />
              Nitrogen (N)
            </Label>
            <Input
              id="nitrogen"
              type="number"
              placeholder="0-200"
              value={formData.nitrogen}
              onChange={(e) => handleInputChange('nitrogen', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-green-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phosphorus" className="text-sm font-medium flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-orange-600" />
              Phosphorus (P)
            </Label>
            <Input
              id="phosphorus"
              type="number"
              placeholder="0-150"
              value={formData.phosphorus}
              onChange={(e) => handleInputChange('phosphorus', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-green-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="potassium" className="text-sm font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              Potassium (K)
            </Label>
            <Input
              id="potassium"
              type="number"
              placeholder="0-205"
              value={formData.potassium}
              onChange={(e) => handleInputChange('potassium', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-green-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="temperature" className="text-sm font-medium flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-red-600" />
              Temperature (°C)
            </Label>
            <Input
              id="temperature"
              type="number"
              placeholder="15-45"
              value={formData.temperature}
              onChange={(e) => handleInputChange('temperature', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-green-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="humidity" className="text-sm font-medium flex items-center gap-2">
              <Droplets className="w-4 h-4 text-blue-600" />
              Humidity (%)
            </Label>
            <Input
              id="humidity"
              type="number"
              placeholder="10-100"
              value={formData.humidity}
              onChange={(e) => handleInputChange('humidity', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-green-500"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ph" className="text-sm font-medium">
              pH Level
            </Label>
            <Input
              id="ph"
              type="number"
              step="0.1"
              placeholder="3.5-9.9"
              value={formData.ph}
              onChange={(e) => handleInputChange('ph', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-green-500"
            />
          </div>
          
          <div className="space-y-2 md:col-span-2 lg:col-span-1">
            <Label htmlFor="rainfall" className="text-sm font-medium">
              Rainfall (mm)
            </Label>
            <Input
              id="rainfall"
              type="number"
              placeholder="20-300"
              value={formData.rainfall}
              onChange={(e) => handleInputChange('rainfall', e.target.value)}
              className="rounded-xl border-gray-200 focus:border-green-500"
            />
          </div>
        </div>

        {/* Recommend Button */}
        <Button
          onClick={handleRecommendation}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg elevation-4 hover:elevation-8 transition-all duration-300"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Analyzing...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              Get Crop Recommendations
            </div>
          )}
        </Button>

        {/* Recommendations */}
        {recommendations.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              🌱 Recommended Crops for Your Conditions
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {recommendations.map((rec, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-700 dark:to-gray-800 rounded-xl border border-green-200 dark:border-green-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white capitalize">
                          {rec.crop} ({rec.teluguName})
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Compatibility: {(rec.similarity * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                    <Badge className={getSimilarityColor(rec.similarity)}>
                      {getSimilarityLabel(rec.similarity)}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Help Text */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div className="text-sm text-blue-800 dark:text-blue-300">
              <p className="font-medium mb-1">How it works:</p>
              <p>Enter your soil nutrient levels (N-P-K), current weather conditions, and soil pH. Our AI will analyze over 100 data points to recommend the most suitable crops for your specific conditions.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CropRecommendationSystem;
