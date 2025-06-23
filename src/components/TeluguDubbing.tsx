
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Pause, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { textToSpeechService } from '@/services/textToSpeechService';
import { toast } from 'sonner';

interface TeluguDubbingProps {
  text: string;
  size?: 'sm' | 'lg' | 'default' | 'icon';
  variant?: 'default' | 'ghost' | 'outline';
  className?: string;
}

const TeluguDubbing = ({ 
  text, 
  size = 'sm', 
  variant = 'ghost',
  className = '' 
}: TeluguDubbingProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { language } = useLanguage();

  const handleSpeak = async () => {
    if (!textToSpeechService.isSupported()) {
      toast.error('Text-to-speech is not supported in your browser');
      return;
    }

    try {
      if (isPlaying && !isPaused) {
        // Currently playing - pause
        textToSpeechService.pause();
        setIsPaused(true);
      } else if (isPaused) {
        // Currently paused - resume
        textToSpeechService.resume();
        setIsPaused(false);
      } else {
        // Start new speech
        setIsPlaying(true);
        setIsPaused(false);
        
        await textToSpeechService.speak({
          text,
          language,
          rate: 0.8, // Slightly slower for better comprehension
          pitch: 1,
          volume: 1
        });
        
        setIsPlaying(false);
        setIsPaused(false);
      }
    } catch (error) {
      console.error('Text-to-speech error:', error);
      toast.error('Error playing audio');
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    textToSpeechService.stop();
    setIsPlaying(false);
    setIsPaused(false);
  };

  const getIcon = () => {
    if (isPlaying && !isPaused) {
      return <Pause className="h-4 w-4" />;
    } else if (isPaused) {
      return <Play className="h-4 w-4" />;
    } else {
      return <Volume2 className="h-4 w-4" />;
    }
  };

  const getTooltip = () => {
    if (isPlaying && !isPaused) {
      return language === 'te' ? 'ఆపండి' : 'Pause';
    } else if (isPaused) {
      return language === 'te' ? 'కొనసాగించండి' : 'Resume';
    } else {
      return language === 'te' ? 'వినండి' : 'Listen';
    }
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <Button
        onClick={handleSpeak}
        variant={variant}
        size={size}
        title={getTooltip()}
        className="text-blue-600 hover:text-blue-700"
      >
        {getIcon()}
      </Button>
      
      {(isPlaying || isPaused) && (
        <Button
          onClick={handleStop}
          variant="ghost"
          size={size}
          title={language === 'te' ? 'ఆపండి' : 'Stop'}
          className="text-red-600 hover:text-red-700"
        >
          <VolumeX className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default TeluguDubbing;
