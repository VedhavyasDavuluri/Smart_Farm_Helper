
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Camera, 
  ArrowLeft,
  ImageIcon,
  Microscope,
  Lightbulb
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { analyzeCropImage } from '@/services/diseaseDetectionService';
import { toast } from "sonner";
import { Link } from 'react-router-dom';
import TeluguDubbing from '@/components/TeluguDubbing';
import CameraCapture from '@/components/CameraCapture';
import ImageUploadSection from '@/components/disease-detection/ImageUploadSection';
import AnalysisResults from '@/components/disease-detection/AnalysisResults';
import PhotoTips from '@/components/disease-detection/PhotoTips';

const DiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [showCamera, setShowCamera] = useState(false);
  const { t } = useLanguage();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processImageFile(file);
    }
  };

  const handleCameraCapture = (file: File) => {
    processImageFile(file);
  };

  const processImageFile = (file: File) => {
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    setAnalysisResult(null);
  };

  const analyzeImage = async () => {
    if (!selectedImage) {
      toast.error("Please select an image first");
      return;
    }

    setIsAnalyzing(true);
    try {
      const result = await analyzeCropImage(selectedImage);
      setAnalysisResult(result);
      toast.success("Image analysis completed!");
    } catch (error) {
      toast.error("Error in image analysis. Please try again.");
      console.error('Disease detection error:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const contactAdvisor = () => {
    toast.success("Contacting agricultural advisor...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 dark:from-gray-900 dark:via-green-900/20 dark:to-gray-900">
      {/* Mobile-First Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-xl">
        <div className="safe-area-top"></div>
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-full p-2">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="bg-white/20 p-2 rounded-full">
                <Camera className="h-6 w-6" />
              </div>
            </div>
            <TeluguDubbing 
              text="Disease Detection. AI-powered crop disease identification system"
              variant="ghost"
              className="text-white hover:bg-white/20"
            />
          </div>
          <div className="mt-3">
            <h1 className="text-xl font-bold">Disease Detection</h1>
            <p className="text-green-100 text-sm opacity-90">AI-powered crop disease identification</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-6 pb-24 max-w-md mx-auto">
        {/* Mobile-Optimized Tabs */}
        <Tabs defaultValue="capture" className="w-full">
          <TabsList className="grid w-full grid-cols-3 h-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border-0 p-1">
            <TabsTrigger 
              value="capture" 
              className="flex items-center justify-center space-x-2 rounded-lg data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200"
            >
              <ImageIcon className="h-4 w-4" />
              <span className="text-xs font-medium">Capture</span>
            </TabsTrigger>
            <TabsTrigger 
              value="results" 
              className="flex items-center justify-center space-x-2 rounded-lg data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200"
            >
              <Microscope className="h-4 w-4" />
              <span className="text-xs font-medium">Results</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tips" 
              className="flex items-center justify-center space-x-2 rounded-lg data-[state=active]:bg-green-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200"
            >
              <Lightbulb className="h-4 w-4" />
              <span className="text-xs font-medium">Tips</span>
            </TabsTrigger>
          </TabsList>

          <div className="mt-6 space-y-4">
            <TabsContent value="capture" className="mt-0">
              <ImageUploadSection
                onImageUpload={handleImageUpload}
                onCameraOpen={() => setShowCamera(true)}
                imagePreview={imagePreview}
                onAnalyze={analyzeImage}
                isAnalyzing={isAnalyzing}
              />
            </TabsContent>

            <TabsContent value="results" className="mt-0">
              {analysisResult ? (
                <AnalysisResults
                  analysisResult={analysisResult}
                  onContactAdvisor={contactAdvisor}
                />
              ) : (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg border-0">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Microscope className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">No Analysis Yet</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Capture or upload an image to get started with AI-powered disease detection
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="tips" className="mt-0">
              <PhotoTips />
            </TabsContent>
          </div>
        </Tabs>
      </div>

      {/* Camera Capture Modal */}
      <CameraCapture
        isActive={showCamera}
        onCapture={handleCameraCapture}
        onClose={() => setShowCamera(false)}
      />
    </div>
  );
};

export default DiseaseDetection;
