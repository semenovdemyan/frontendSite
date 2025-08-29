import React from 'react';

interface LazyImgProps {
  src: string;
  alt?: string;
  className?: string;
}

const LazyImage: React.FC<LazyImgProps> = ({ src, alt, className }) => {
  return <img className={className} src={src} alt={alt} loading="lazy" />;
};

export default LazyImage;
