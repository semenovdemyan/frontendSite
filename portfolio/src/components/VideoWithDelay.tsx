import React, { useEffect, useRef, useState } from 'react';
import videoUrl from '../assets/video/video.mp4';
import styles from '../App.module.css';
import { gsap } from 'gsap';

export const VideoWithDelay: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current; // Сохраняем значение ref в переменную

    if (videoElement) {
      // Добавляем слушатель события окончания видео
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    // Функция очистки
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, []); // useEffect должен зависеть только от пустого массива, так как мы работаем с видео

  const handleVideoEnd = () => {
    if (containerRef.current) {
      // Плавное исчезновение контейнера с помощью GSAP
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 1.5, // Увеличиваем продолжительность для более плавного эффекта
        ease: 'power2.out', // Добавляем easing для плавности
      });
    }
  };

  return (
    <div ref={containerRef} className={styles.videoContainer}>
      <video
        ref={videoRef}
        muted
        src={videoUrl}
        className={styles.video}
        autoPlay={isPlaying}
        preload="auto"
      />
    </div>
  );
};
