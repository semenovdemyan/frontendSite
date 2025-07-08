'use client';
import { useEffect, useState } from 'react';

export function useImagePreloader(images: string[]) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let loaded = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === images.length) {
          setReady(true);
        }
      };
    });
  }, [images]);

  return ready;
}
