import React from 'react';
import styles from './Button.module.css'; 

function Button() {
  return (
    <div>
      <button className={styles.default}>Default Button</button>
      
      <button className={`${styles.default} ${styles.primary}`}>Primary Button</button>

      <button className={styles.secondary}>Secondary Button</button>
    </div>
  );
}

export default Button;