import React, { useState } from 'react';

function SimpleEventHandler() {
  const [pesan, setPesan] = useState("Arahkan mouse atau klik tombol!");
  const [isHovering, setIsHovering] = useState(false);

  const handleKlik = () => {
    setPesan("Tombol diklik! ");
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    setPesan("Mouse masuk area tombol.");
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setPesan("Mouse keluar dari area tombol.");
  };

  const gayaTombol = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: isHovering ? '#4CAF50' : '#008CBA',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  };

  return (
    <div>
      <h3>1. Event Handler Sederhana</h3>
      <button
        style={gayaTombol}
        onClick={handleKlik}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Klik Saya
      </button>
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
        Status: {pesan}
      </p>
    </div>
  );
}

export default SimpleEventHandler;