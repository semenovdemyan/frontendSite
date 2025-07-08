'use client';

import data from './data.json';
import { Slider } from '@/components/Slider/Slider';
import { useImagePreloader } from '@/hooks/useImagePreloader';

export default function Page() {
  const loaded = useImagePreloader(data.images);

  return loaded ? <Slider images={data.images} /> : null;
}
