
import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, TrendingUp, BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import SwipeableCard from '@/components/SwipeableCard';
import InteractiveTooltip from '@/components/InteractiveTooltip';
import { useStaggeredLoading } from '@/hooks/useLoadingState';
import { QuickActionsSkeleton } from '@/components/LoadingSkeletons';

const QuickActions = () => {
  const { t } = useLanguage();
  const loadedItems = useStaggeredLoading(3, 150);

  const quickActions = [
    {
      icon: Camera,
      title: t('diseaseDetection'),
      description: t('diseaseDetection'),
      href: "/disease-detection",
      gradient: "from-red-500 via-pink-500 to-rose-500",
      bgGradient: "from-red-50 via-pink-50 to-rose-50",
      darkBgGradient: "from-red-950/30 via-pink-950/30 to-rose-950/30",
      iconBg: "bg-gradient-to-br from-red-500 to-pink-600",
      tooltip: "Scan plant images to detect diseases and get treatment recommendations"
    },
    {
      icon: TrendingUp,
      title: t('profitCalculator'),
      description: t('profitCalculator'),
      href: "/yield-estimator",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
      bgGradient: "from-blue-50 via-indigo-50 to-purple-50",
      darkBgGradient: "from-blue-950/30 via-indigo-950/30 to-purple-950/30",
      iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
      tooltip: "Calculate potential profits and yield estimates for your crops"
    },
    {
      icon: BookOpen,
      title: "Farm Diary",
      description: "Farm Diary",
      href: "/farm-diary",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgGradient: "from-green-50 via-emerald-50 to-teal-50",
      darkBgGradient: "from-green-950/30 via-emerald-950/30 to-teal-950/30",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
      tooltip: "Keep track of your farming activities, expenses, and observations"
    },
  ];

  if (loadedItems.length === 0) {
    return <QuickActionsSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {quickActions.map((action, index) => (
        <div
          key={index}
          className={`transform transition-all duration-700 ${
            loadedItems.includes(index) 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <Link to={action.href} className="group block">
            <SwipeableCard 
              className="relative overflow-hidden bg-white dark:bg-gray-800 shadow-2xl elevation-6 hover:elevation-20 border-0 transition-all duration-500 hover:scale-105 rounded-3xl group-hover:-translate-y-3"
              onSwipeRight={() => window.location.href = action.href}
            >
              {/* Beautiful background gradient with enhanced effects */}
              <div className={`absolute inset-0 bg-gradient-to-br ${action.bgGradient} dark:${action.darkBgGradient} opacity-50 group-hover:opacity-80 transition-all duration-500`}></div>
              
              {/* Multiple animated background layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 group-hover:rotate-45 transition-all duration-1000"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-1000"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-8 text-center z-10">
                {/* Enhanced icon container with more effects */}
                <div className={`relative w-20 h-20 ${action.iconBg} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 shadow-2xl elevation-8 group-hover:elevation-16 overflow-hidden`}>
                  {/* Icon background effects */}
                  <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl"></div>
                  
                  <action.icon className="w-10 h-10 text-white relative z-10 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-500" />
                  
                  {/* Enhanced floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-3 left-3 w-1 h-1 bg-white rounded-full animate-pulse animation-delay-200"></div>
                    <div className="absolute top-1/2 left-2 w-0.5 h-0.5 bg-white rounded-full animate-bounce animation-delay-400"></div>
                  </div>
                  
                  {/* Rotating ring effect */}
                  <div className="absolute inset-0 border-2 border-white/30 rounded-3xl animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: '3s' }}></div>
                </div>
                
                {/* Enhanced text with better animations */}
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500 group-hover:from-gray-800 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-200">
                      {action.title}
                    </h3>
                    <InteractiveTooltip content={action.tooltip} variant="info" />
                  </div>
                  <p className="text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 font-medium leading-relaxed">
                    {action.description}
                  </p>
                </div>
                
                {/* Enhanced decorative elements */}
                <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full animate-pulse"></div>
                    <div className="w-8 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full"></div>
                    <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full animate-pulse animation-delay-200"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-all duration-1000 rounded-3xl"></div>
              
              {/* Pulse effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-pulse"></div>
            </SwipeableCard>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default QuickActions;
