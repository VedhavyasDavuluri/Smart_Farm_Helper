
import { useState, useEffect } from 'react';

interface UseLoadingStateOptions {
  initialDelay?: number;
  minimumDuration?: number;
}

export const useLoadingState = (
  isLoading: boolean, 
  options: UseLoadingStateOptions = {}
) => {
  const { initialDelay = 0, minimumDuration = 500 } = options;
  const [showLoading, setShowLoading] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isLoading) {
      setStartTime(Date.now());
      if (initialDelay > 0) {
        timeoutId = setTimeout(() => {
          setShowLoading(true);
        }, initialDelay);
      } else {
        setShowLoading(true);
      }
    } else if (startTime) {
      const elapsed = Date.now() - startTime;
      const remaining = minimumDuration - elapsed;

      if (remaining > 0) {
        timeoutId = setTimeout(() => {
          setShowLoading(false);
          setStartTime(null);
        }, remaining);
      } else {
        setShowLoading(false);
        setStartTime(null);
      }
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isLoading, initialDelay, minimumDuration, startTime]);

  return showLoading;
};

export const useStaggeredLoading = (itemCount: number, staggerDelay: number = 100) => {
  const [loadedItems, setLoadedItems] = useState<number[]>([]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    
    for (let i = 0; i < itemCount; i++) {
      const timeout = setTimeout(() => {
        setLoadedItems(prev => [...prev, i]);
      }, i * staggerDelay);
      
      timeouts.push(timeout);
    }

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [itemCount, staggerDelay]);

  return loadedItems;
};
