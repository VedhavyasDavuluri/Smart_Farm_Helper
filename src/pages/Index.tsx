
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import AppHeader from "@/components/AppHeader";
import WelcomeSection from "@/components/WelcomeSection";
import QuickActions from "@/components/QuickActions";
import MainContent from "@/components/MainContent";
import EmergencyContact from "@/components/EmergencyContact";
import UserProfile from "@/components/UserProfile";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";
import EnhancedMobileNavigation from "@/components/EnhancedMobileNavigation";
import { WelcomeSkeleton } from "@/components/LoadingSkeletons";
import { useLoadingState } from "@/hooks/useLoadingState";
import { Phone, MessageCircle } from "lucide-react";

const Index = () => {
  const { user } = useAuth();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const showLoading = useLoadingState(isInitialLoading, { minimumDuration: 800 });

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleEmergencyCall = () => {
    window.open('tel:1551', '_self');
  };

  const handleQuickHelp = () => {
    // Open help or chat functionality
    console.log('Quick help requested');
  };

  if (showLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <AppHeader />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-6">
          <div className="space-y-6">
            <WelcomeSkeleton />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 via-emerald-50/30 to-blue-100/40 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-blue-950/20"></div>
        
        {/* Floating gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-green-300/30 via-emerald-200/20 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-300/25 via-green-200/20 to-transparent rounded-full blur-2xl animate-float animation-delay-300"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-400/20 via-green-300/15 to-transparent rounded-full blur-xl animate-float animation-delay-600"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.02),transparent_50%)]"></div>
      </div>

      <AppHeader />

      <main className="relative z-10 pb-24 md:pb-8">
        {/* Hero Section with enhanced spacing */}
        <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="max-w-7xl mx-auto">
            <div className="animate-fade-in">
              <WelcomeSection />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* User Profile Section */}
            {user && (
              <div className="animate-fade-in animation-delay-200">
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 dark:border-gray-700/30 p-6 hover:shadow-2xl transition-all duration-300">
                  <UserProfile />
                </div>
              </div>
            )}

            {/* Quick Actions with enhanced styling */}
            <div className="animate-fade-in animation-delay-400">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl shadow-lg border border-white/30 dark:border-gray-700/30 p-6 hover:shadow-xl transition-all duration-300">
                <QuickActions />
              </div>
            </div>

            {/* Main Tabbed Content */}
            <div className="animate-fade-in animation-delay-600">
              <MainContent />
            </div>

            {/* Emergency Contact with enhanced design */}
            <div className="animate-fade-in animation-delay-800">
              <div className="bg-gradient-to-r from-red-50/80 to-orange-50/80 dark:from-red-950/30 dark:to-orange-950/30 backdrop-blur-sm rounded-3xl shadow-lg border border-red-100/50 dark:border-red-800/30 p-6 hover:shadow-xl transition-all duration-300">
                <EmergencyContact />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-green-400/60 rounded-full animate-ping opacity-40"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-ping animation-delay-500 opacity-40"></div>
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-green-500/60 rounded-full animate-ping animation-delay-700 opacity-40"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-blue-400/50 rounded-full animate-ping animation-delay-1000 opacity-30"></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:20px_20px] dark:bg-[linear-gradient(rgba(34,197,94,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.01)_1px,transparent_1px)]"></div>
        </div>
      </main>

      {/* Enhanced Floating Action Buttons */}
      <FloatingActionButton
        variant="emergency"
        icon={<Phone className="w-6 h-6" />}
        onClick={handleEmergencyCall}
        className="bottom-24 right-4 shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300"
      />
      
      <FloatingActionButton
        variant="secondary"
        icon={<MessageCircle className="w-6 h-6" />}
        onClick={handleQuickHelp}
        className="bottom-24 right-20 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300"
      />

      {/* Enhanced Mobile Navigation */}
      <EnhancedMobileNavigation />

      <Footer />
    </div>
  );
};

export default Index;
