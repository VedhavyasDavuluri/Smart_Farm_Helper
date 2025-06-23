
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage } from "@/contexts/LanguageContext";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  User,
  Phone,
  MapPin,
  LandPlot,
  Calendar,
  Leaf,
  CheckCircle,
} from "lucide-react";

const setupSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  location: z.string().min(2, "Location is required"),
  farmSize: z.string().min(1, "Farm size is required"),
  experience: z.string().min(1, "Experience is required"),
  primaryCrops: z.string().min(2, "Primary crops information is required"),
  farmingType: z.string().min(1, "Farming type is required"),
});

const Setup = () => {
  const { user } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<z.infer<typeof setupSchema>>({
    resolver: zodResolver(setupSchema),
    defaultValues: {
      fullName: user?.user_metadata?.full_name || "",
      phone: "",
      location: "",
      farmSize: "",
      experience: "",
      primaryCrops: "",
      farmingType: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof setupSchema>) => {
    if (!user) return;

    setLoading(true);
    try {
      // Update profile in Supabase
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          email: user.email,
          full_name: values.fullName,
          updated_at: new Date().toISOString(),
        });

      if (profileError) {
        throw profileError;
      }

      // Save additional setup data to localStorage
      localStorage.setItem('userPhone', values.phone);
      localStorage.setItem('userLocation', values.location);
      localStorage.setItem('userFarmSize', values.farmSize);
      localStorage.setItem('userExperience', values.experience);
      localStorage.setItem('userPrimaryCrops', values.primaryCrops);
      localStorage.setItem('userFarmingType', values.farmingType);
      localStorage.setItem('setupCompleted', 'true');

      toast({
        title: "Setup Complete!",
        description: "Your account has been set up successfully.",
      });

      navigate('/');
    } catch (error) {
      console.error('Error saving setup data:', error);
      toast({
        title: "Error",
        description: "Failed to save setup data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Farm Details", icon: LandPlot },
    { number: 3, title: "Farming Info", icon: Leaf },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm border-b dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">FarmWise AI Setup</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Complete your profile</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = currentStep === step.number;
              const isCompleted = currentStep > step.number;
              
              return (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    isCompleted 
                      ? 'bg-green-600 text-white' 
                      : isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-400'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <div className="ml-2 text-sm">
                    <p className={`font-medium ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 mx-4 ${
                      isCompleted ? 'bg-green-600' : 'bg-gray-200 dark:bg-gray-700'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0">
          <CardHeader>
            <CardTitle className="dark:text-white">
              {currentStep === 1 && "Personal Information"}
              {currentStep === 2 && "Farm Details"}
              {currentStep === 3 && "Farming Information"}
            </CardTitle>
            <CardDescription className="dark:text-gray-400">
              {currentStep === 1 && "Tell us about yourself"}
              {currentStep === 2 && "Share your farm details"}
              {currentStep === 3 && "Your farming experience and preferences"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-200">Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                              <Input
                                placeholder="Enter your full name"
                                className="pl-10 bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-200">Phone Number</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                              <Input
                                placeholder="Enter your phone number"
                                className="pl-10 bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-200">Location</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                              <Input
                                placeholder="Enter your location (Village, District)"
                                className="pl-10 bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Step 2: Farm Details */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="farmSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-200">Farm Size (Acres)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <LandPlot className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                              <Input
                                type="number"
                                placeholder="Enter farm size in acres"
                                className="pl-10 bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="farmingType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-200">Farming Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600">
                                <SelectValue placeholder="Select farming type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
                              <SelectItem value="organic" className="dark:text-white dark:focus:bg-gray-700">Organic Farming</SelectItem>
                              <SelectItem value="conventional" className="dark:text-white dark:focus:bg-gray-700">Conventional Farming</SelectItem>
                              <SelectItem value="mixed" className="dark:text-white dark:focus:bg-gray-700">Mixed Farming</SelectItem>
                              <SelectItem value="subsistence" className="dark:text-white dark:focus:bg-gray-700">Subsistence Farming</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Step 3: Farming Information */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-200">Years of Experience</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                              <Input
                                type="number"
                                placeholder="Enter years of farming experience"
                                className="pl-10 bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="primaryCrops"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-gray-200">Primary Crops</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Enter the main crops you grow (e.g., Paddy, Cotton, Groundnut)"
                              className="bg-white/50 dark:bg-gray-700/50 dark:text-white dark:border-gray-600"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                    >
                      Next
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={loading}
                      className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800"
                    >
                      {loading ? "Completing Setup..." : "Complete Setup"}
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Setup;
