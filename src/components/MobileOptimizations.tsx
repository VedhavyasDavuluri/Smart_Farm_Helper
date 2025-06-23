
import React, { useEffect } from 'react';

const MobileOptimizations = () => {
  useEffect(() => {
    // Prevent zoom on input focus for iOS
    const addMaximumScaleToMetaViewport = () => {
      const el = document.querySelector('meta[name=viewport]');
      if (el !== null) {
        let content = el.getAttribute('content');
        let re = /maximum\-scale=[0-9\.]+/g;
        if (re.test(content)) {
          content = content.replace(re, 'maximum-scale=1.0');
        } else {
          content = [content, 'maximum-scale=1.0'].join(', ');
        }
        el.setAttribute('content', content);
      }
    };

    const disableIosTextFieldZoom = addMaximumScaleToMetaViewport;

    // Disable zoom on double tap for iOS
    let lastTouchEnd = 0;
    const preventZoom = (e: TouchEvent) => {
      const now = new Date().getTime();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    document.addEventListener('touchend', preventZoom, false);
    disableIosTextFieldZoom();

    return () => {
      document.removeEventListener('touchend', preventZoom, false);
    };
  }, []);

  return null;
};

export default MobileOptimizations;
