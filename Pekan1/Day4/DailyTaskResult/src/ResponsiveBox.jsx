import React from 'react';
import styles from './ResponsiveBox.module.css'; 

function ResponsiveBox() {
  return (
    <div className={styles.box}>
      <h3>Komponen Responsif</h3>
      <p>Warna latar belakang dan padding akan berubah saat lebar layar mencapai 768px (breakpoint desktop).</p>
      
      <div className={styles.content}>
        <p>Konten di dalam kotak.</p>
      </div>
    </div>
  );
}

export default ResponsiveBox;