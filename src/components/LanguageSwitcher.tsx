
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'hi', name: 'हिंदी', label: 'Hindi' },
    { code: 'te', name: 'తెలుగు', label: 'Telugu' },
    { code: 'en', name: 'English', label: 'English' }
  ];

  const currentIndex = languages.findIndex(lang => lang.code === language);
  const nextIndex = (currentIndex + 1) % languages.length;

  const toggleLanguage = () => {
    setLanguage(languages[nextIndex].code as 'hi' | 'te' | 'en');
  };

  const getCurrentLanguageDisplay = () => {
    const current = languages.find(lang => lang.code === language);
    return current?.name || 'हिंदी';
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 border-2 border-blue-200 dark:border-blue-600 text-gray-900 dark:text-white hover:from-blue-100 hover:to-indigo-100 dark:hover:from-gray-600 dark:hover:to-gray-700 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-blue-300 dark:hover:border-blue-500 backdrop-blur-sm group"
      title={`Switch to ${languages[nextIndex].label}`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
      
      <Globe className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300 group-hover:rotate-12 transform" />
      
      <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 dark:group-hover:from-blue-300 dark:group-hover:to-purple-300 transition-all duration-300 relative z-10">
        {getCurrentLanguageDisplay()}
      </span>
      
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-1000"></div>
    </Button>
  );
};

export default LanguageSwitcher;
