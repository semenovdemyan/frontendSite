import styles from './Loader.module.scss';

export const Loader: React.FC = () => {
  console.log(styles);
  
  return (
    <div className={styles.loader}>
      <div className={styles.overlay}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
      <div className={styles.counter}>
        {[
          ['0', '0'],
          ['2', '7'],
          ['6', '5'],
          ['9', '8'],
          ['9', '9'],
        ].map((pair, idx) => (
          <div className={styles.count} key={idx}>
            {pair.map((digit, i) => (
              <div className={styles.digit} key={i}>
                <span className={styles.digitSpan}>{digit}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
