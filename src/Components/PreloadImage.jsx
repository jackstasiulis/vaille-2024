import React, { useEffect } from 'react';

const PreloadImage = ({ src }) => {
  useEffect(() => {
    const img = new Image();
    img.src = src;

    return () => {
      // Clean up to prevent memory leaks
      img.onload = null;
    };
  }, [src]);

  return null; // PreloadImage component doesn't render anything
};

export default PreloadImage;
