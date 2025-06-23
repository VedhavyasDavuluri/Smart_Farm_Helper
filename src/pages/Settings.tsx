
import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Globe,
  Moon,
  Sun,
  ArrowLeft,
  Save,
  Smartphone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Settings = () => {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [notifications, setNotifications] = useState({
    weather: true,
    market: true,
    reminders: true,
    sms: false,
  });
  
  const [profile, setProfile] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    farmSize: "",
    experience: "",
  });

  const [preferences, setPreferences] = useState({
    language: 'te',
    preferred_units: 'metric',
    default_currency: 'INR',
    weather_location: 'guntur',
    theme: 'light'
  });

  // Load all user data from Supabase on component mount
  useEffect(() => {
    const loadUserData = async () => {
      if (!user) return;

      try {
        // Get user profile from Supabase
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        if (profileError && profileError.code !== 'PGRST116') {
          console.error('Error loading profile:', profileError);
        }

        // Get user preferences from Supabase
        const { data: preferencesData, error: preferencesError } = await supabase
          .from('user_preferences')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (preferencesError && preferencesError.code !== 'PGRST116') {
          console.error('Error loading preferences:', preferencesError);
        }

        // Set profile data
        setProfile({
          full_name: profileData?.full_name || user.user_metadata?.full_name || "",
          email: profileData?.email || user.email || "",
          phone: preferencesData?.phone || "",
          location: preferencesData?.address || "",
          farmSize: preferencesData?.farm_size_acres?.toString() || "",
          experience: preferencesData?.years_experience?.toString() || "",
        });

        // Set preferences data
        if (preferencesData) {
          setPreferences({
            language: preferencesData.language || 'te',
            preferred_units: preferencesData.preferred_units || 'metric',
            default_currency: preferencesData.default_currency || 'INR',
            weather_location: preferencesData.weather_location || 'guntur',
            theme: preferencesData.theme || 'light'
          });

          setNotifications({
            weather: preferencesData.notification_weather ?? true,
            market: preferencesData.notification_market ?? true,
            reminders: preferencesData.notification_reminders ?? true,
            sms: preferencesData.notification_sms ?? false,
          });
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadUserData();
  }, [user]);

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handleProfileChange = (key: string, value: string) => {
    setProfile(prev => ({ ...prev, [key]: value }));
  };

  const handlePreferenceChange = (key: string, value: string) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    if (!user) return;

    setLoading(true);
    try {
      // Update profile in Supabase
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          email: profile.email,
          full_name: profile.full_name,
          updated_at: new Date().toISOString(),
        });

      if (profileError) {
        throw profileError;
      }

      // Check if user preferences already exist
      const { data: existingPreferences } = await supabase
        .from('user_preferences')
        .select('id')
        .eq('user_id', user.id)
        .single();

      const preferencesData = {
        user_id: user.id,
        language: preferences.language,
        preferred_units: preferences.preferred_units,
        default_currency: preferences.default_currency,
        weather_location: preferences.weather_location,
        notification_weather: notifications.weather,
        notification_market: notifications.market,
        notification_reminders: notifications.reminders,
        notification_sms: notifications.sms,
        theme: preferences.theme,
        farm_size_acres: profile.farmSize ? parseFloat(profile.farmSize) : null,
        years_experience: profile.experience ? parseInt(profile.experience) : null,
        phone: profile.phone,
        address: profile.location,
        updated_at: new Date().toISOString(),
      };

      let preferencesError;
      if (existingPreferences) {
        // Update existing preferences
        const { error } = await supabase
          .from('user_preferences')
          .update(preferencesData)
          .eq('user_id', user.id);
        preferencesError = error;
      } else {
        // Insert new preferences
        const { error } = await supabase
          .from('user_preferences')
          .insert(preferencesData);
        preferencesError = error;
      }

      if (preferencesError) {
        throw preferencesError;
      }
      
      console.log("Settings saved successfully:", { profile, preferences, notifications });
      
      toast({
        title: "Settings Saved",
        description: "Your preferences have been saved successfully to the database.",
      });
    } catch (error) {
      console.error('Error saving settings:', error);
      toast({
        title: "Error",
        description: "Failed to save settings. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Mobile-Optimized Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link to="/" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300" />
              </Link>
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <SettingsIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Settings</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400 hidden sm:block">Manage your preferences</p>
              </div>
            </div>
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="space-y-6 sm:space-y-8">
          {/* Profile Settings - Mobile Responsive */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl dark:text-white">
                <User className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
                Profile Information
              </CardTitle>
              <CardDescription className="dark:text-gray-400 text-sm">
                Update your personal information and farm details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="full_name" className="dark:text-gray-200 text-sm">Full Name</Label>
                  <Input
                    id="full_name"
                    value={profile.full_name}
                    onChange={(e) => handleProfileChange("full_name", e.target.value)}
                    className="bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600 h-10 sm:h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="dark:text-gray-200 text-sm">Phone Number</Label>
                  <div className="relative">
                    <Smartphone className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <Input
                      id="phone"
                      value={profile.phone}
                      onChange={(e) => handleProfileChange("phone", e.target.value)}
                      className="pl-10 bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600 h-10 sm:h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="dark:text-gray-200 text-sm">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => handleProfileChange("email", e.target.value)}
                      className="pl-10 bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600 h-10 sm:h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="dark:text-gray-200 text-sm">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                    <Input
                      id="location"
                      value={profile.location}
                      onChange={(e) => handleProfileChange("location", e.target.value)}
                      className="pl-10 bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600 h-10 sm:h-11"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="farmSize" className="dark:text-gray-200 text-sm">Farm Size (Acres)</Label>
                  <Input
                    id="farmSize"
                    type="number"
                    value={profile.farmSize}
                    onChange={(e) => handleProfileChange("farmSize", e.target.value)}
                    className="bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600 h-10 sm:h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience" className="dark:text-gray-200 text-sm">Years of Experience</Label>
                  <Input
                    id="experience"
                    type="number"
                    value={profile.experience}
                    onChange={(e) => handleProfileChange("experience", e.target.value)}
                    className="bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600 h-10 sm:h-11"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings - Mobile Optimized */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl dark:text-white">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 dark:text-yellow-400" />
                Notification Preferences
              </CardTitle>
              <CardDescription className="dark:text-gray-400 text-sm">
                Choose what notifications you'd like to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5 flex-1 pr-4">
                    <Label className="text-sm sm:text-base dark:text-gray-200">Weather Alerts</Label>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Get notified about weather changes and warnings
                    </p>
                  </div>
                  <Switch
                    checked={notifications.weather}
                    onCheckedChange={(checked) => handleNotificationChange("weather", checked)}
                  />
                </div>
                <Separator className="dark:bg-gray-600" />
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5 flex-1 pr-4">
                    <Label className="text-sm sm:text-base dark:text-gray-200">Market Price Updates</Label>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Receive updates on commodity prices
                    </p>
                  </div>
                  <Switch
                    checked={notifications.market}
                    onCheckedChange={(checked) => handleNotificationChange("market", checked)}
                  />
                </div>
                <Separator className="dark:bg-gray-600" />
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5 flex-1 pr-4">
                    <Label className="text-sm sm:text-base dark:text-gray-200">Farm Activity Reminders</Label>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Get AI-powered reminders for farm activities
                    </p>
                  </div>
                  <Switch
                    checked={notifications.reminders}
                    onCheckedChange={(checked) => handleNotificationChange("reminders", checked)}
                  />
                </div>
                <Separator className="dark:bg-gray-600" />
                <div className="flex items-center justify-between py-2">
                  <div className="space-y-0.5 flex-1 pr-4">
                    <Label className="text-sm sm:text-base dark:text-gray-200">SMS Notifications</Label>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Receive important alerts via SMS
                    </p>
                  </div>
                  <Switch
                    checked={notifications.sms}
                    onCheckedChange={(checked) => handleNotificationChange("sms", checked)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* App Settings - Mobile Responsive */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl dark:text-white">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400" />
                App Preferences
              </CardTitle>
              <CardDescription className="dark:text-gray-400 text-sm">
                Customize your app experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 py-2">
                  <div className="space-y-0.5">
                    <Label className="text-sm sm:text-base dark:text-gray-200">Language</Label>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Choose your preferred language
                    </p>
                  </div>
                  <Select value={preferences.language} onValueChange={(value) => handlePreferenceChange("language", value)}>
                    <SelectTrigger className="w-full sm:w-40 bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                      <SelectItem value="te" className="dark:text-white dark:focus:bg-gray-700">Telugu (తెలుగు)</SelectItem>
                      <SelectItem value="en" className="dark:text-white dark:focus:bg-gray-700">English</SelectItem>
                      <SelectItem value="hi" className="dark:text-white dark:focus:bg-gray-700">Hindi (हिंदी)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator className="dark:bg-gray-600" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 py-2">
                  <div className="space-y-0.5">
                    <Label className="text-sm sm:text-base dark:text-gray-200">Dark Mode</Label>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Toggle dark theme for better night viewing
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sun className="h-4 w-4 text-yellow-500" />
                    <Switch
                      checked={theme === 'dark'}
                      onCheckedChange={toggleTheme}
                    />
                    <Moon className="h-4 w-4 text-blue-500" />
                  </div>
                </div>
                <Separator className="dark:bg-gray-600" />
                <div className="space-y-2">
                  <Label className="dark:text-gray-200 text-sm">Default Weather Location</Label>
                  <Select value={preferences.weather_location} onValueChange={(value) => handlePreferenceChange("weather_location", value)}>
                    <SelectTrigger className="bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                      <SelectItem value="guntur" className="dark:text-white dark:focus:bg-gray-700">Guntur</SelectItem>
                      <SelectItem value="vijayawada" className="dark:text-white dark:focus:bg-gray-700">Vijayawada</SelectItem>
                      <SelectItem value="kurnool" className="dark:text-white dark:focus:bg-gray-700">Kurnool</SelectItem>
                      <SelectItem value="nellore" className="dark:text-white dark:focus:bg-gray-700">Nellore</SelectItem>
                      <SelectItem value="anantapur" className="dark:text-white dark:focus:bg-gray-700">Anantapur</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Section - Mobile Responsive */}
          <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl dark:text-white">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 dark:text-red-400" />
                Security & Privacy
              </CardTitle>
              <CardDescription className="dark:text-gray-400 text-sm">
                Manage your account security and data privacy
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <Button variant="outline" className="justify-start bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 h-10 sm:h-11 text-sm">
                  Change Password
                </Button>
                <Button variant="outline" className="justify-start bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 h-10 sm:h-11 text-sm">
                  Export My Data
                </Button>
                <Button variant="outline" className="justify-start bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 h-10 sm:h-11 text-sm">
                  Privacy Policy
                </Button>
                <Button variant="outline" className="justify-start bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 h-10 sm:h-11 text-sm">
                  Terms of Service
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Save Button - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pb-4">
            <Button variant="outline" asChild className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 w-full sm:w-auto h-11">
              <Link to="/">Cancel</Link>
            </Button>
            <Button 
              onClick={handleSave} 
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 w-full sm:w-auto h-11"
            >
              <Save className="w-4 h-4 mr-2" />
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
