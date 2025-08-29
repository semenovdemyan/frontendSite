import styles from './LangToggle.module.css';

interface LangToggleProps {
  lang: 'en' | 'ru';
  setLang: React.Dispatch<React.SetStateAction<'en' | 'ru'>>;
}

export const LangToggle: React.FC<LangToggleProps> = ({ lang, setLang }) => {
  const langToggle = () => {
    setLang((prevLang) => (prevLang === 'ru' ? 'en' : 'ru'));
  };

  return (
    <div className={styles.langToggle}>
      <button style={{ minWidth: '50px' }} onClick={langToggle}>
        <p>{lang === 'ru' ? 'RU' : 'ENG'}</p>
      </button>
    </div>
  );
};
