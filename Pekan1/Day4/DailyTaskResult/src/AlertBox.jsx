import React from 'react';
import styles from './AlertBox.module.css';

function AlertBox({ type, message }) {
  const alertClassName = `${styles.alert} ${styles[type]}`;

  if (!['success', 'warning', 'error'].includes(type)) {
    return <div className={styles.alert}>Tipe alert tidak valid.</div>;
  }

  return (
    <div className={alertClassName}>
      <p>
        <strong>{type.toUpperCase()}!</strong> {message}
      </p>
    </div>
  );
}

export default AlertBox;