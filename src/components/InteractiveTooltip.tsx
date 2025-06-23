
import React, { useState } from 'react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InteractiveTooltipProps {
  content: string;
  children?: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  variant?: 'info' | 'help' | 'warning';
}

const InteractiveTooltip = ({ 
  content, 
  children, 
  side = 'top',
  variant = 'info' 
}: InteractiveTooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getVariantStyles = () => {
    switch (variant) {
      case 'warning':
        return 'bg-orange-500 text-white border-orange-600';
      case 'help':
        return 'bg-blue-500 text-white border-blue-600';
      default:
        return 'bg-gray-900 text-white border-gray-700';
    }
  };

  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger asChild>
          <div className="inline-flex items-center gap-1 cursor-help">
            {children || <HelpCircle className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-colors" />}
          </div>
        </TooltipTrigger>
        <TooltipContent 
          side={side}
          className={cn(
            "max-w-xs p-3 rounded-lg shadow-xl animate-in fade-in-0 zoom-in-95",
            getVariantStyles()
          )}
        >
          <p className="text-sm leading-relaxed">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default InteractiveTooltip;
