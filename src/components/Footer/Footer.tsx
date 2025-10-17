import styles from './Footer.module.scss';
export const Footer = () => {
  return (
    <div className={styles['footer-container']}>
      <div className={styles['footer-wrapper']}>
        <div>Semenoff.dev</div>
        <div>2024</div>
      </div>
    </div>
  );
};
