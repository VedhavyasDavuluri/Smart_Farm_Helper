
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building2, Phone, CreditCard, Users, FileText, ExternalLink, Globe, Sparkles, Star, Shield, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { governmentSchemes, helplineNumbers } from '@/data/governmentData';

const GovernmentSchemes = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { language } = useLanguage();

  const categories = ['all', 'income', 'loan', 'insurance', 'subsidy', 'training'];

  const handleVisitWebsite = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-blue-50/40 to-green-50/40 overflow-hidden relative">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-green-100/30"></div>
      <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center gap-4 text-3xl">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 rounded-2xl shadow-2xl">
            <Building2 className="w-8 h-8 text-white drop-shadow-lg" />
          </div>
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">
            {language === 'te' ? 'ప్రభుత్వ పథకాలు' : language === 'hi' ? 'सरकारी योजनाएं' : 'Government Schemes'}
          </span>
          <Sparkles className="w-7 h-7 text-yellow-500 animate-pulse" />
        </CardTitle>
        <p className="text-gray-600 text-lg mt-3 font-medium">
          {language === 'te' 
            ? 'రైతులకు ప్రభుత్వం అందించే అన్ని పథకాలు మరియు సేవలు'
            : language === 'hi'
            ? 'किसानों के लिए सरकार की सभी योजनाएं और सेवाएं'
            : 'All government schemes and services for farmers'
          }
        </p>
      </CardHeader>
      
      <CardContent className="space-y-10 relative z-10">
        {/* Enhanced Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {governmentSchemes.map((scheme, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm border-0 rounded-3xl p-10 space-y-6 hover:shadow-3xl transition-all duration-700 hover:scale-105 group shadow-2xl relative overflow-hidden">
              {/* Card background effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/30 to-green-100/30 rounded-full blur-2xl"></div>
              
              <div className="flex items-start justify-between relative z-10">
                <div className="flex-1">
                  <h3 className="font-bold text-2xl text-gray-800 group-hover:text-gray-900 transition-colors mb-2">
                    {language === 'te' ? scheme.teluguName : scheme.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-gold-500" />
                    <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 px-4 py-2 font-semibold shadow-lg rounded-xl">
                      {scheme.coverage}
                    </Badge>
                  </div>
                </div>
                <Star className="w-6 h-6 text-yellow-500 animate-pulse" />
              </div>

              <p className="text-gray-600 leading-relaxed font-medium text-lg relative z-10">{scheme.description}</p>

              <div className="space-y-5 relative z-10">
                <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 shadow-lg">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-2xl shadow-lg">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-green-800 mb-2">
                      {language === 'te' ? 'ప్రయోజనం:' : language === 'hi' ? 'लाभ:' : 'Benefit:'}
                    </p>
                    <p className="text-base text-green-700 font-semibold">{scheme.benefit}</p>
                  </div>
                </div>

                {scheme.eligibility && (
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 shadow-lg">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-2xl shadow-lg">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-blue-800 mb-2">
                        {language === 'te' ? 'అర్హత:' : language === 'hi' ? 'पात्रता:' : 'Eligibility:'}
                      </p>
                      <p className="text-base text-blue-700 font-semibold">{scheme.eligibility}</p>
                    </div>
                  </div>
                )}

                {scheme.website && (
                  <Button
                    onClick={() => handleVisitWebsite(scheme.website!)}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 py-4 rounded-2xl font-bold text-lg"
                    size="lg"
                  >
                    <Globe className="w-6 h-6 mr-3" />
                    {language === 'te' ? 'వెబ్‌సైట్‌కి వెళ్ళండి' : language === 'hi' ? 'वेबसाइट पर जाएं' : 'Visit Website'}
                    <ExternalLink className="w-5 h-5 ml-3" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Helplines Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-4">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl shadow-2xl">
              <Phone className="w-8 h-8 text-white drop-shadow-lg" />
            </div>
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {language === 'te' ? 'హెల్ప్‌లైన్ నంబర్లు' : language === 'hi' ? 'हेल्पलाइन नंबर' : 'Helpline Numbers'}
            </span>
            <Shield className="w-6 h-6 text-blue-500 animate-pulse" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {helplineNumbers.map((helpline, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden">
                {/* Background effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-full blur-2xl"></div>
                
                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-2xl shadow-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-green-800 text-xl">
                    {language === 'te' ? helpline.teluguName : helpline.department}
                  </h4>
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent my-4 drop-shadow-sm relative z-10">{helpline.phoneNumber}</p>
                <p className="text-base text-gray-600 font-semibold relative z-10">{helpline.language}</p>
                <div className="mt-4 w-full h-1 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full relative z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call-to-Action */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center">
              <div className="bg-white/20 p-4 rounded-2xl mr-6 shadow-lg backdrop-blur-sm">
                <ExternalLink className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <div>
                <p className="font-bold text-2xl mb-2 drop-shadow-lg">
                  {language === 'te' ? 'ఆన్‌లైన్ దరఖాస్తు' : language === 'hi' ? 'ऑनलाइन आवेदन' : 'Online Application'}
                </p>
                <p className="text-blue-100 text-lg font-semibold drop-shadow-sm">
                  {language === 'te' 
                    ? 'పై వెబ్‌సైట్‌లలో లేదా సమీపంలోని CSC కేంద్రంలో దరఖాస్తు చేయండి'
                    : language === 'hi'
                    ? 'ऊपर दी गई वेबसाइटों या नजदीकी CSC केंद्र पर आवेदन करें'
                    : 'Apply on the websites above or at nearest CSC center'
                  }
                </p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Sparkles className="w-10 h-10 text-yellow-300 animate-pulse" />
              <Star className="w-8 h-8 text-yellow-300 animate-bounce delay-300" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GovernmentSchemes;
