import React, { useState } from 'react';

function SyntheticEventDemo() {
  const [inputValue, setInputValue] = useState('');

  const handleLinkClick = (e) => {
    e.preventDefault();
    console.log("Link diklik! Perilaku default (pindah halaman) dicegah.");
    alert("Cek konsol! (Perilaku default dicegah)");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(`Nilai SyntheticEvent: ${e.target.value}`);
  };

  return (
    <div>
      <h3>2. Menggunakan SyntheticEvent</h3>
      
      <a 
        href="https://reactjs.org" 
        onClick={handleLinkClick}
        style={{ marginRight: '20px' }}
      >
        Klik untuk dicegah
      </a>
      
      <label htmlFor="textInput">Input Teks:</label>
      <input
        id="textInput"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ketik sesuatu..."
      />
      <p>Nilai Input Real-time: **{inputValue}**</p>
    </div>
  );
}

export default SyntheticEventDemo;