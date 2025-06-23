
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import TeluguDubbing from '@/components/TeluguDubbing';

const PhotoTips = () => {
  const doTips = [
    { icon: '📸', text: 'Take clear, close-up photos' },
    { icon: '🔍', text: 'Capture parts showing disease symptoms' },
    { icon: '💡', text: 'Take photos in good lighting' },
    { icon: '🍃', text: 'Include both top and bottom of leaves' }
  ];

  const dontTips = [
    { icon: '🚫', text: 'Take blurry or distant photos' },
    { icon: '🌑', text: 'Take photos in dark or shaded areas' },
    { icon: '⚠️', text: 'Show only one type of symptom' },
    { icon: '📏', text: 'Use very small or large images' }
  ];

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl rounded-2xl overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center space-x-2">
            <div className="bg-white/20 p-2 rounded-full">
              <Lightbulb className="h-5 w-5" />
            </div>
            <span>Photography Tips</span>
          </div>
          <TeluguDubbing 
            text="Tips for taking good photos. Take clear close-up photos. Capture parts showing disease symptoms. Take photos in good lighting. Avoid blurry or distant photos."
            variant="ghost"
            className="text-white hover:bg-white/20"
          />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Introduction */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
          <div className="flex items-center space-x-2 mb-2">
            <Leaf className="h-5 w-5 text-green-600" />
            <h3 className="font-semibold text-green-800">Perfect Disease Detection</h3>
          </div>
          <p className="text-sm text-green-700 leading-relaxed">
            Follow these guidelines to capture the best photos for accurate AI disease analysis
          </p>
        </div>

        {/* Do's Section */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 mb-3">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <h4 className="font-semibold text-green-800">Best Practices</h4>
          </div>
          <div className="grid gap-3">
            {doTips.map((tip, index) => (
              <div key={index} className="flex items-center space-x-3 bg-green-50 p-3 rounded-lg border border-green-200">
                <span className="text-lg">{tip.icon}</span>
                <span className="text-sm text-green-800 font-medium">{tip.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Don'ts Section */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 mb-3">
            <XCircle className="h-5 w-5 text-red-500" />
            <h4 className="font-semibold text-red-800">Avoid These</h4>
          </div>
          <div className="grid gap-3">
            {dontTips.map((tip, index) => (
              <div key={index} className="flex items-center space-x-3 bg-red-50 p-3 rounded-lg border border-red-200">
                <span className="text-lg">{tip.icon}</span>
                <span className="text-sm text-red-800 font-medium">{tip.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tip */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center">
              <span className="text-white text-xs font-bold">💡</span>
            </div>
            <h4 className="font-semibold text-blue-800">Pro Tip</h4>
          </div>
          <p className="text-sm text-blue-700 leading-relaxed">
            Take multiple photos from different angles for the most accurate disease identification results
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoTips;
