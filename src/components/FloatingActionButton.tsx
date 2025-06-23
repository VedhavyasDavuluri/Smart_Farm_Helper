
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, MessageCircle, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingActionButtonProps {
  variant?: 'primary' | 'secondary' | 'emergency';
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const FloatingActionButton = ({ 
  variant = 'primary', 
  icon, 
  onClick, 
  className 
}: FloatingActionButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'emergency':
        return 'bg-red-500 hover:bg-red-600 text-white shadow-red-500/25';
      case 'secondary':
        return 'bg-blue-500 hover:bg-blue-600 text-white shadow-blue-500/25';
      default:
        return 'bg-green-500 hover:bg-green-600 text-white shadow-green-500/25';
    }
  };

  const getDefaultIcon = () => {
    switch (variant) {
      case 'emergency':
        return <Phone className="w-6 h-6" />;
      case 'secondary':
        return <MessageCircle className="w-6 h-6" />;
      default:
        return <Plus className="w-6 h-6" />;
    }
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        "fixed w-14 h-14 rounded-full shadow-2xl transition-all duration-300 z-50",
        "hover:scale-110 hover:shadow-3xl active:scale-95",
        "animate-bounce-subtle hover:animate-none",
        getVariantStyles(),
        className
      )}
      size="icon"
    >
      {icon || getDefaultIcon()}
      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </Button>
  );
};

export default FloatingActionButton;
