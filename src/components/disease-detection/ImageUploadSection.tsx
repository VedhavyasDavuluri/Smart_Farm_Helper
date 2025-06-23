
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Camera, Upload, ImageIcon, Sparkles } from 'lucide-react';
import TeluguDubbing from '@/components/TeluguDubbing';

interface ImageUploadSectionProps {
  onImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCameraOpen: () => void;
  imagePreview: string | null;
  onAnalyze: () => void;
  isAnalyzing: boolean;
}

const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({
  onImageUpload,
  onCameraOpen,
  imagePreview,
  onAnalyze,
  isAnalyzing
}) => {
  return (
    <div className="space-y-4">
      {/* Header Card */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4">
          <CardTitle className="flex items-center justify-between text-lg">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-2 rounded-full">
                <ImageIcon className="h-5 w-5" />
              </div>
              <span>Capture Disease Image</span>
            </div>
            <TeluguDubbing 
              text="Capture or upload crop image section. Take a photo directly or upload existing image showing disease symptoms"
              variant="ghost"
              className="text-white hover:bg-white/20"
            />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-gray-600 text-sm text-center">
            Choose how you'd like to add your crop image for AI analysis
          </p>
        </CardContent>
      </Card>

      {/* Action Cards */}
      <div className="grid grid-cols-1 gap-4">
        {/* Live Camera Option */}
        <Card 
          className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-300 transition-all duration-300 cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
          onClick={onCameraOpen}
        >
          <CardContent className="p-6 text-center">
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Camera className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Live Camera</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Point your camera at the affected crop area for instant capture
            </p>
            <Button
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              size="sm"
            >
              <Camera className="h-4 w-4 mr-2" />
              Open Camera
            </Button>
          </CardContent>
        </Card>

        {/* File Upload Option */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
          <CardContent className="p-6 text-center">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Upload className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Upload Image</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Select an existing photo from your device gallery
            </p>
            <Input
              type="file"
              accept="image/*"
              onChange={onImageUpload}
              className="hidden"
              id="image-upload"
            />
            <Button asChild className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer" size="sm">
              <label htmlFor="image-upload">
                <Upload className="h-4 w-4 mr-2" />
                Choose File
              </label>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Image Preview & Analysis */}
      {imagePreview && (
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-4">
            <div className="relative">
              <img
                src={imagePreview}
                alt="Uploaded crop"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                Ready for Analysis
              </div>
            </div>
            
            <div className="mt-4 flex justify-center">
              <Button
                onClick={onAnalyze}
                disabled={isAnalyzing}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <div className="h-5 w-5 mr-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5 mr-3" />
                    Detect Disease
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ImageUploadSection;
