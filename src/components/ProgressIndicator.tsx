
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  id: string;
  title: string;
  completed: boolean;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
  variant?: 'linear' | 'circular';
}

const ProgressIndicator = ({ steps, currentStep, variant = 'linear' }: ProgressIndicatorProps) => {
  const progressPercentage = (currentStep / steps.length) * 100;

  if (variant === 'circular') {
    return (
      <div className="flex items-center justify-center space-x-4">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center space-y-2">
            <div className={cn(
              "relative w-10 h-10 rounded-full border-2 transition-all duration-300",
              index < currentStep 
                ? "bg-green-500 border-green-500" 
                : index === currentStep
                ? "bg-blue-500 border-blue-500 animate-pulse"
                : "bg-gray-200 border-gray-300"
            )}>
              {index < currentStep ? (
                <CheckCircle className="w-6 h-6 text-white absolute inset-1" />
              ) : (
                <Circle className={cn(
                  "w-6 h-6 absolute inset-1",
                  index === currentStep ? "text-white" : "text-gray-400"
                )} />
              )}
            </div>
            <span className={cn(
              "text-xs font-medium",
              index <= currentStep ? "text-gray-900" : "text-gray-500"
            )}>
              {step.title}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm font-medium text-gray-700">
        <span>Progress</span>
        <span>{Math.round(progressPercentage)}%</span>
      </div>
      <Progress value={progressPercentage} className="h-2 bg-gray-200">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progressPercentage}%` }}
        />
      </Progress>
      <div className="space-y-2">
        {steps.map((step, index) => (
          <div key={step.id} className={cn(
            "flex items-center space-x-3 p-2 rounded-lg transition-all duration-200",
            index === currentStep && "bg-blue-50 border border-blue-200"
          )}>
            {step.completed ? (
              <CheckCircle className="w-5 h-5 text-green-500" />
            ) : index === currentStep ? (
              <div className="w-5 h-5 border-2 border-blue-500 rounded-full animate-spin">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            ) : (
              <Circle className="w-5 h-5 text-gray-400" />
            )}
            <span className={cn(
              "font-medium",
              step.completed ? "text-green-700" : 
              index === currentStep ? "text-blue-700" : "text-gray-500"
            )}>
              {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
