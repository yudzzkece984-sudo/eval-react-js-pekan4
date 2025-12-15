import React from 'react';
import './ProfileBox.css';

function ProfileBoxWithCSS() {
  return (
    <div className="card-container"> 
      
      <h3 className="card-title">🚀 Styling dengan CSS Classes</h3> 
      
      <p className="card-body">
        Ini adalah konten kartu yang menggunakan properti className.
      </p>
      
      <button className="card-button card-button-primary">Detail</button>
    </div>
  );
}

export default ProfileBoxWithCSS;