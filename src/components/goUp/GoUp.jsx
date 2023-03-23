import { useState } from 'react';
import styles from './GoUp.module.css';

function GoUp() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1000) {
      setVisible(true);
    } else if (scrolled <= 1000) {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);

  if (visible) {
    return (
      <button
        className={styles.mouseScroll}
        onClick={() => window.scroll(0, 0)}
      >
        <div className={styles.str}>
          <span className={styles.downArrow1}></span>
          <span className={styles.downArrow2}></span>
          <span className={styles.downArrow3}></span>
        </div>
      </button>
    );
  }
}

export default GoUp;
