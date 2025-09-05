import styles from './Loader.module.scss'

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <p style={{ color: '#FFF', fontSize: '60px' }}>Loading...</p>
    </div>
  )
}
