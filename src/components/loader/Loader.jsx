import styles from './Loader.module.css';

function Loader() {
  return (
    <div className={styles.load}>
      <div className={styles.loader}>
        <div className={styles.big_sfera}>
          <div className={styles.s1 + ' ' + styles.sfera}></div>
          <div className={styles.s2 + ' ' + styles.sfera}></div>
          <div className={styles.s3 + ' ' + styles.sfera}></div>
        </div>
        <div className={styles.stenka}></div>
      </div>
    </div>
  );
}

export default Loader;
