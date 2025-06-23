
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sprout, Settings, Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const AppHeader = () => {
  const { language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getAppTitle = () => {
    switch (language) {
      case 'te':
        return 'స్మార్ట్ రైతు సహాయకుడు';
      case 'hi':
        return 'स्मार्ट किसान सहायक';
      default:
        return 'Smart Farmer Assistant';
    }
  };

  const getAppSubtitle = () => {
    return 'Smart Farmer Assistant';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Enhanced status bar with gradient */}
      <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-r from-green-700 via-emerald-700 to-green-800 z-50 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/50 to-emerald-600/50 animate-shimmer"></div>
      </div>

      {/* Enhanced Material Design App Bar */}
      <header className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl elevation-12 sticky top-6 z-40 border-b border-green-200/50 dark:border-green-800/50">
        {/* Beautiful background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/80 via-white/90 to-emerald-50/80 dark:from-gray-800/90 dark:via-gray-900/95 dark:to-gray-800/90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-100/20 to-transparent dark:via-green-900/10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo with more effects */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-glow"></div>
                
                <div className="relative p-4 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 rounded-2xl shadow-2xl elevation-8 hover:elevation-16 transition-all duration-500 hover:scale-110 group overflow-hidden">
                  {/* Multiple gradient layers */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-green-400/40 to-emerald-500/40 rounded-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-green-700/20 rounded-2xl"></div>
                  
                  <Sprout className="h-8 w-8 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500 drop-shadow-xl" />
                  
                  {/* Floating particles around icon */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full animate-ping opacity-60"></div>
                  <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-white rounded-full animate-ping animation-delay-300 opacity-60"></div>
                  
                  {/* Rotating ring */}
                  <div className="absolute inset-0 border-2 border-white/30 rounded-2xl animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '4s' }}></div>
                </div>
              </div>
              
              <div className="hidden sm:block">
                <h1 className="text-2xl lg:text-3xl font-bold relative">
                  <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-800 dark:from-green-400 dark:via-emerald-300 dark:to-green-500 bg-clip-text text-transparent drop-shadow-sm">
                    {getAppTitle()}
                  </span>
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium opacity-80">{getAppSubtitle()}</p>
              </div>
              
              <div className="block sm:hidden">
                <h1 className="text-xl font-bold">
                  <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-800 dark:from-green-400 dark:via-emerald-300 dark:to-green-500 bg-clip-text text-transparent">
                    {getAppTitle()}
                  </span>
                </h1>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <LanguageSwitcher />
              <Link to="/settings">
                <Button
                  variant="outline"
                  size="lg"
                  className="relative group overflow-hidden bg-gradient-to-r from-white via-green-50 to-white dark:from-gray-700 dark:to-gray-800 border-2 border-green-300/60 dark:border-green-600/60 text-gray-900 dark:text-white hover:border-green-400 dark:hover:border-green-500 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 backdrop-blur-sm rounded-2xl px-8 py-4 elevation-6 hover:elevation-12"
                >
                  {/* Beautiful background animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-emerald-400/15 to-green-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-1000"></div>
                  
                  <Settings className="h-5 w-5 mr-3 text-green-600 dark:text-green-400 group-hover:rotate-180 transition-transform duration-700 relative z-10" />
                  <span className="font-semibold relative z-10 text-lg">Settings</span>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 border-2 border-green-400/0 group-hover:border-green-400/50 rounded-2xl transition-all duration-500"></div>
                </Button>
              </Link>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="lg"
                onClick={toggleMobileMenu}
                className="relative group p-4 hover:bg-green-100/60 dark:hover:bg-green-900/30 rounded-2xl transition-all duration-300 elevation-2 hover:elevation-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-emerald-100/50 dark:from-green-900/20 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-green-600 dark:text-green-400 relative z-10 transition-transform duration-300 group-hover:rotate-90" />
                ) : (
                  <Menu className="h-6 w-6 text-green-600 dark:text-green-400 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                )}
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-green-200/60 dark:border-green-700/60 py-8 space-y-6 relative">
              {/* Beautiful background for mobile menu */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-50/80 via-white/90 to-emerald-50/80 dark:from-gray-800/90 dark:to-gray-900/90 rounded-b-2xl"></div>
              
              <div className="relative z-10 flex flex-col space-y-6">
                <LanguageSwitcher />
                <Link to="/settings" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start group bg-gradient-to-r from-white via-green-50 to-white dark:from-gray-700 dark:to-gray-800 border-2 border-green-300/60 dark:border-green-600/60 text-gray-900 dark:text-white hover:border-green-400 dark:hover:border-green-500 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-102 backdrop-blur-sm rounded-2xl px-8 py-5 elevation-4 hover:elevation-8 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Settings className="h-5 w-5 mr-3 text-green-600 dark:text-green-300 group-hover:rotate-180 transition-transform duration-500 relative z-10" />
                    <span className="font-semibold text-lg relative z-10">Settings</span>
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default AppHeader;
