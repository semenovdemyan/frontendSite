import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { Button } from '../Button/Button'; // Убедитесь, что Button импортируется корректно

// Интерфейс для пропсов компонента ContactForm
interface ContactFormProps {
  lang: 'ru' | 'en';
}

export const ContactForm: React.FC<ContactFormProps> = ({ lang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [popup, setPopup] = useState<{ visible: boolean; message: string }>({
    visible: false,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isSuccess = true; // Логика отправки формы

    if (isSuccess) {
      setPopup({
        visible: true,
        message:
          lang === 'ru'
            ? 'Форма успешно отправлена!'
            : 'Form submitted successfully!',
      });
    } else {
      setPopup({
        visible: true,
        message:
          lang === 'ru'
            ? 'Ошибка при отправке формы.'
            : 'Error while submitting the form.',
      });
    }

    // Очистка полей
    setName('');
    setEmail('');
    setMessage('');
  };

  const closePopup = () => {
    setPopup({ ...popup, visible: false });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formHeader}>
        {lang === 'ru' ? 'Есть вопросы?' : 'Got some questions?'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">
            {lang === 'ru' ? 'Ваше имя' : 'Your name'}
          </label>
          <input
            placeholder={lang === 'ru' ? 'введите ваше имя' : 'enter your name'}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">
            {lang === 'ru' ? 'Ваш email' : 'Your email'}
          </label>
          <input
            placeholder="example@gmail.com"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">
            {lang === 'ru' ? 'Сообщение' : 'Message'}
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        {popup.visible && (
          <div className={styles.popup}>
            <p>{popup.message}</p>
            <button onClick={closePopup}>✘</button>
          </div>
        )}
        <div className={styles.submitBtn}>
          <Button lang={lang} labelRu="Отправить" labelEn="Submit" />
        </div>
      </form>
    </div>
  );
};
