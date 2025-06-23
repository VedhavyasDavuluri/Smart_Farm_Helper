
import React, { useRef, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Square, RotateCcw, X } from 'lucide-react';
import { toast } from "sonner";

interface CameraCaptureProps {
  onCapture: (file: File) => void;
  isActive: boolean;
  onClose: () => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture, isActive, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');

  const startCamera = useCallback(async () => {
    try {
      const constraints = {
        video: {
          facingMode: facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsStreaming(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast.error('Could not access camera. Please check permissions.');
    }
  }, [facingMode]);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsStreaming(false);
  }, []);

  const switchCamera = useCallback(() => {
    stopCamera();
    setFacingMode(prev => prev === 'user' ? 'environment' : 'user');
  }, [stopCamera]);

  const capturePhoto = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0);

    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], 'camera-capture.jpg', { type: 'image/jpeg' });
        onCapture(file);
        stopCamera();
        onClose();
        toast.success('Photo captured successfully!');
      }
    }, 'image/jpeg', 0.9);
  }, [onCapture, stopCamera, onClose]);

  React.useEffect(() => {
    if (isActive) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => {
      stopCamera();
    };
  }, [isActive, startCamera, stopCamera]);

  React.useEffect(() => {
    if (isStreaming && facingMode) {
      startCamera();
    }
  }, [facingMode, isStreaming, startCamera]);

  if (!isActive) return null;

  return (
    <Card className="fixed inset-0 z-50 bg-black">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-black text-white">
          <h3 className="text-lg font-semibold">Camera</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-gray-800"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Camera View */}
        <div className="flex-1 relative bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            className="max-w-full max-h-full object-contain"
            playsInline
            muted
          />
          
          {/* Overlay Guide */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="border-2 border-white border-dashed rounded-lg w-64 h-64 flex items-center justify-center">
              <p className="text-white text-sm text-center px-4">
                Position crop leaves or affected parts within this frame
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-black p-6">
          <div className="flex items-center justify-center space-x-8">
            {/* Switch Camera */}
            <Button
              variant="ghost"
              size="lg"
              onClick={switchCamera}
              className="text-white hover:bg-gray-800"
              disabled={!isStreaming}
            >
              <RotateCcw className="h-6 w-6" />
            </Button>

            {/* Enhanced Capture Button */}
            <Button
              size="lg"
              onClick={capturePhoto}
              disabled={!isStreaming}
              className="w-20 h-20 rounded-full bg-white hover:bg-gray-200 text-black shadow-2xl border-4 border-gray-300 hover:border-gray-400 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              <div className="flex flex-col items-center">
                <Camera className="h-8 w-8 mb-1" />
                <span className="text-xs font-semibold">CLICK</span>
              </div>
            </Button>

            {/* Placeholder for balance */}
            <div className="w-12 h-12"></div>
          </div>
          
          {/* Additional instruction text */}
          <div className="mt-4 text-center">
            <p className="text-white text-sm opacity-75">
              Tap the camera button to capture the image
            </p>
          </div>
        </div>

        {/* Hidden canvas for capture */}
        <canvas ref={canvasRef} className="hidden" />
      </CardContent>
    </Card>
  );
};

export default CameraCapture;
