import React, { useState } from 'react';
import styles from './RadioSlider.module.css';

interface RadioSliderProps {
  lang?: 'en' | 'ru';
}

const slides = [
  {
    id: 'c1',
    title: 'First',
  },
  {
    id: 'c2',
    title: 'Second',
  },
  {
    id: 'c3',
    title: 'Third',
  },
  {
    id: 'c4',
    title: 'Fouth',
  },
  {
    id: 'c5',
    title: 'Fifth',
  },
  {
    id: 'c6',
    title: 'Sixth',
  },
];

export const RadioSlider: React.FC<RadioSliderProps> = () => {
  const [selectedSlide, setSelectedSlide] = useState<string>('c6');

  const handleSlideChange = (id: string) => {
    setSelectedSlide(id);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.radioContainer}>
        {slides.map((slide) => (
          <React.Fragment key={slide.id}>
            <input
              className={styles.radioInput}
              type="radio"
              name="slide"
              id={slide.id}
              checked={selectedSlide === slide.id}
              onChange={() => handleSlideChange(slide.id)}
            />
            <label htmlFor={slide.id} className={styles.card}>
              <div className={styles.row}>
                <h2 className={styles.title}>{slide.title}</h2>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
