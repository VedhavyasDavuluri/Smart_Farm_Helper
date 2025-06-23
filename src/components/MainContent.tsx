
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Sprout, Calendar, Bug, Coins, Shield, Bot } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import WeatherDisplay from '@/components/WeatherDisplay';
import MarketPricesTable from '@/components/MarketPricesTable';
import CropInfoTable from '@/components/CropInfoTable';
import FertilizerSchedule from '@/components/FertilizerSchedule';
import PestManagement from '@/components/PestManagement';
import GovernmentSchemes from '@/components/GovernmentSchemes';
import CropRecommendationSystem from '@/components/CropRecommendationSystem';

const MainContent = () => {
  const { t, language } = useLanguage();

  const getTabLabels = () => {
    switch (language) {
      case 'te':
        return {
          ai: 'AI సలహా',
          weather: 'వాతావరణం',
          crops: 'పంటలు',
          market: 'మార్కెట్',
          fertilizer: 'ఎరువులు',
          pests: 'కీటకాలు',
          schemes: 'పథకాలు'
        };
      case 'hi':
        return {
          ai: 'AI सलाह',
          weather: 'मौसम',
          crops: 'फसलें',
          market: 'बाजार',
          fertilizer: 'उर्वरक',
          pests: 'कीट',
          schemes: 'योजनाएं'
        };
      default:
        return {
          ai: 'AI Advice',
          weather: 'Weather',
          crops: 'Crops',
          market: 'Market',
          fertilizer: 'Fertilizer',
          pests: 'Pests',
          schemes: 'Schemes'
        };
    }
  };

  const getCropInfoTitle = () => {
    switch (language) {
      case 'te':
        return 'పంట సమాచారం';
      case 'hi':
        return 'फसल जानकारी';
      default:
        return 'Crop Information';
    }
  };

  const getCropInfoDescription = () => {
    switch (language) {
      case 'te':
        return 'ప్రధాన పంటల సాగు సమాచారం';
      case 'hi':
        return 'मुख्य फसलों की खेती की जानकारी';
      default:
        return 'Main crops cultivation information';
    }
  };

  const getMarketPricesDescription = () => {
    switch (language) {
      case 'te':
        return 'నేటి కమోడిటీ ధరలు';
      case 'hi':
        return 'आज की कमोडिटी दरें';
      default:
        return "Today's commodity prices";
    }
  };

  const tabLabels = getTabLabels();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Tabs defaultValue="ai" className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 mb-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20 dark:border-gray-700/30">
          <TabsTrigger 
            value="ai" 
            className="flex items-center gap-2 text-xs sm:text-sm rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            <Bot className="w-4 h-4" />
            <span className="hidden sm:inline">{tabLabels.ai}</span>
          </TabsTrigger>
          <TabsTrigger 
            value="weather" 
            className="flex items-center gap-2 text-xs sm:text-sm rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            <TrendingUp className="w-4 h-4" />
            <span className="hidden sm:inline">{tabLabels.weather}</span>
          </TabsTrigger>
          <TabsTrigger 
            value="crops" 
            className="flex items-center gap-2 text-xs sm:text-sm rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            <Sprout className="w-4 h-4" />
            <span className="hidden sm:inline">{tabLabels.crops}</span>
          </TabsTrigger>
          <TabsTrigger 
            value="market" 
            className="flex items-center gap-2 text-xs sm:text-sm rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            <Coins className="w-4 h-4" />
            <span className="hidden sm:inline">{tabLabels.market}</span>
          </TabsTrigger>
          <TabsTrigger 
            value="fertilizer" 
            className="flex items-center gap-2 text-xs sm:text-sm rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">{tabLabels.fertilizer}</span>
          </TabsTrigger>
          <TabsTrigger 
            value="pests" 
            className="flex items-center gap-2 text-xs sm:text-sm rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-orange-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            <Bug className="w-4 h-4" />
            <span className="hidden sm:inline">{tabLabels.pests}</span>
          </TabsTrigger>
          <TabsTrigger 
            value="schemes" 
            className="flex items-center gap-2 text-xs sm:text-sm rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg"
          >
            <Shield className="w-4 h-4" />
            <span className="hidden sm:inline">{tabLabels.schemes}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="ai" className="mt-0">
          <div className="bg-gradient-to-r from-green-50/80 to-emerald-50/80 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-6 border border-green-100/50 dark:border-green-800/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <CropRecommendationSystem />
          </div>
        </TabsContent>

        <TabsContent value="weather" className="mt-0">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300">
            <WeatherDisplay />
          </div>
        </TabsContent>

        <TabsContent value="crops" className="mt-0">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4 bg-gradient-to-r from-green-50/80 to-emerald-50/80 dark:from-gray-700/50 dark:to-gray-800/50 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="flex items-center gap-3 text-xl text-gray-900 dark:text-white">
                <div className="p-2.5 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                  <Sprout className="w-5 h-5 text-white" />
                </div>
                {getCropInfoTitle()}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                {getCropInfoDescription()}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <CropInfoTable />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="market" className="mt-0">
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border-0 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4 bg-gradient-to-r from-orange-50/80 to-red-50/80 dark:from-gray-700/50 dark:to-gray-800/50 border-b border-gray-100 dark:border-gray-700">
              <CardTitle className="flex items-center gap-3 text-xl text-gray-900 dark:text-white">
                <div className="p-2.5 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                {t('marketPrices')}
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-400 text-base">
                {getMarketPricesDescription()}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <MarketPricesTable />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fertilizer" className="mt-0">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300">
            <FertilizerSchedule />
          </div>
        </TabsContent>

        <TabsContent value="pests" className="mt-0">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 dark:border-gray-700/30 hover:shadow-xl transition-all duration-300">
            <PestManagement />
          </div>
        </TabsContent>

        <TabsContent value="schemes" className="mt-0">
          <div className="bg-gradient-to-br from-blue-50/70 to-indigo-50/70 dark:from-blue-950/20 dark:to-indigo-950/20 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100/50 dark:border-blue-800/30 hover:shadow-xl transition-all duration-300">
            <GovernmentSchemes />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MainContent;
