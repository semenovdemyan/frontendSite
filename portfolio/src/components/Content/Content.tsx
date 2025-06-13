import { FC, useRef, useEffect } from 'react';
import { Start } from '../../Pages/PageStart/Start';
import { Me } from '../../Pages/PageMe/Me';
import { Contacts } from '../../Pages/PageContacts/Contacts';
import { MySkills } from '../../Pages/PageMySkills/MySkills';
import { gsap } from 'gsap';
import styles from './Content.module.css';

interface ContentProps {
  currentPage: 'Start' | 'Me' | 'MySkills' | 'Contacts';
  lang: 'en' | 'ru';
}

export const Content: FC<ContentProps> = ({ currentPage, lang }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const pages = {
    Start: <Start lang={lang} />,
    Me: <Me lang={lang} />,
    MySkills: <MySkills lang={lang} />,
    Contacts: <Contacts lang={lang} />,
  };

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
    }
  }, [currentPage]);

  return (
    <div className={styles.content} ref={contentRef}>
      {pages[currentPage]}
    </div>
  );
};
