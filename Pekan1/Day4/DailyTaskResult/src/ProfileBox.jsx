import React from 'react';

function ProfileBox() {
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: '6px',
    maxWidth: '400px',
    margin: '20px'
  };

  const headerStyle = {
    color: 'darkgreen',
    borderBottom: '2px solid darkgreen',
    paddingBottom: '10px',
    marginBottom: '15px'
  };

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>📦 Komponen dengan Inline Styles</h3>
      
      <p style={{ fontSize: '16px', color: '#555' }}>
        Ini adalah paragraf pertama dengan style yang diambil dari objek JavaScript.
      </p>
      
      <p style={{ 
        fontWeight: 'bold', 
        backgroundColor: 'lightyellow', 
        padding: '5px' 
      }}>
        Ini adalah elemen kedua, menggunakan objek style yang ditulis langsung di JSX.
      </p>
    </div>
  );
}

export default ProfileBox;