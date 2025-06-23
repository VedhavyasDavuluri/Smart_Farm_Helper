
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TeluguDubbing from './TeluguDubbing';

interface DubbableCardProps {
  title: string;
  children: React.ReactNode;
  dubbingText?: string;
  className?: string;
}

const DubbableCard = ({ 
  title, 
  children, 
  dubbingText, 
  className = '' 
}: DubbableCardProps) => {
  // Extract text content for dubbing if not provided
  const getTextContent = (element: React.ReactNode): string => {
    if (typeof element === 'string') return element;
    if (typeof element === 'number') return element.toString();
    if (React.isValidElement(element)) {
      if (element.props.children) {
        return getTextContent(element.props.children);
      }
    }
    if (Array.isArray(element)) {
      return element.map(getTextContent).join(' ');
    }
    return '';
  };

  const textToSpeak = dubbingText || `${title}. ${getTextContent(children)}`;

  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <TeluguDubbing text={textToSpeak} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default DubbableCard;
