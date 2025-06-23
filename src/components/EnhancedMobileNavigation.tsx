
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Camera, 
  TrendingUp, 
  BookOpen, 
  Settings,
  MoreHorizontal
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const EnhancedMobileNavigation = () => {
  const location = useLocation();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const mainNavItems = [
    {
      icon: Home,
      label: 'Home',
      href: '/',
    },
    {
      icon: Camera,
      label: 'Detect',
      href: '/disease-detection',
    },
    {
      icon: TrendingUp,
      label: 'Yield',
      href: '/yield-estimator',
    },
    {
      icon: BookOpen,
      label: 'Diary',
      href: '/farm-diary',
    },
  ];

  const moreNavItems = [
    {
      icon: Settings,
      label: 'Settings',
      href: '/settings',
    },
  ];

  const NavItem = ({ item, onClick }: { item: any; onClick?: () => void }) => {
    const isActive = location.pathname === item.href;
    return (
      <Link
        to={item.href}
        onClick={onClick}
        className={cn(
          "flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 min-w-0 flex-1 group",
          isActive
            ? "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 scale-105"
            : "text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-gray-50 dark:hover:bg-gray-800"
        )}
      >
        <div className={cn(
          "p-2 rounded-lg transition-all duration-200",
          isActive && "bg-green-100 dark:bg-green-800/30 shadow-lg"
        )}>
          <item.icon className={cn(
            "w-5 h-5 transition-transform duration-200",
            "group-hover:scale-110",
            isActive && "drop-shadow-sm"
          )} />
        </div>
        <span className="text-xs font-medium truncate mt-1">{item.label}</span>
        {isActive && (
          <div className="w-4 h-0.5 bg-green-500 rounded-full mt-1 animate-fade-in"></div>
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 z-50 md:hidden shadow-2xl">
        <div className="flex items-center justify-around px-2 py-2 safe-area-pb max-w-md mx-auto">
          {mainNavItems.map((item) => (
            <NavItem key={item.href} item={item} />
          ))}
          
          {/* More Button */}
          <Sheet open={isMoreOpen} onOpenChange={setIsMoreOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm"
                className="flex flex-col items-center justify-center p-3 rounded-xl min-w-0 flex-1 group"
              >
                <div className="p-2 rounded-lg transition-all duration-200 group-hover:bg-gray-100 dark:group-hover:bg-gray-800">
                  <MoreHorizontal className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </div>
                <span className="text-xs font-medium mt-1">More</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-auto p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-center">More Options</h3>
                <div className="grid grid-cols-2 gap-4">
                  {moreNavItems.map((item) => (
                    <NavItem 
                      key={item.href} 
                      item={item} 
                      onClick={() => setIsMoreOpen(false)}
                    />
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Floating indicator */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mb-2"></div>
      </nav>

      {/* Safe area spacer */}
      <div className="h-20 md:hidden"></div>
    </>
  );
};

export default EnhancedMobileNavigation;
