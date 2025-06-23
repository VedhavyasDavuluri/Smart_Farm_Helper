
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const EmergencyContact = () => {
  const { language } = useLanguage();

  const getEmergencyTitle = () => {
    switch (language) {
      case 'te':
        return 'అత్యవసర సహాయం';
      case 'hi':
        return 'आपातकालीन सहायता';
      default:
        return 'Emergency Help';
    }
  };

  const getEmergencyText = () => {
    switch (language) {
      case 'te':
        return 'వ్యవసాయ సలహాల కోసం హెల్ప్‌లైన్: 1551';
      case 'hi':
        return 'कृषि सलाह के लिए हेल्पलाइन: 1551';
      default:
        return 'Agricultural advice helpline: 1551';
    }
  };

  const getCallButtonText = () => {
    switch (language) {
      case 'te':
        return 'కాల్ చేయండి';
      case 'hi':
        return 'कॉल करें';
      default:
        return 'Call Now';
    }
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-to-r from-red-500 via-red-600 to-rose-600 text-white shadow-2xl elevation-12 border-0 rounded-3xl group hover:elevation-16 transition-all duration-500 hover:scale-[1.02]">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-400/30 via-transparent to-rose-700/30 opacity-50"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-1000"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-1000"></div>
      
      <CardContent className="relative p-8 z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
          <div className="text-center sm:text-left flex-1">
            <div className="flex items-center gap-3 justify-center sm:justify-start mb-4">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">
                {getEmergencyTitle()}
              </h3>
            </div>
            <p className="text-lg opacity-95 font-medium leading-relaxed">
              {getEmergencyText()}
            </p>
            
            {/* Decorative pulse indicator */}
            <div className="flex items-center gap-2 mt-4 justify-center sm:justify-start">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm opacity-80 font-medium">24/7 Available</span>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <Button 
              size="lg"
              className="relative overflow-hidden bg-white text-red-600 hover:bg-gray-100 shadow-2xl elevation-8 hover:elevation-12 transition-all duration-500 hover:scale-110 rounded-2xl font-bold text-lg px-8 py-4 group/btn border-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
              <Phone className="w-5 h-5 mr-3 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">{getCallButtonText()}</span>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-all duration-1000 rounded-2xl"></div>
            </Button>
          </div>
        </div>
      </CardContent>
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-400 via-rose-400 to-red-500 opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
    </Card>
  );
};

export default EmergencyContact;
