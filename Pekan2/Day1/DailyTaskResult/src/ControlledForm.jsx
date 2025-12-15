import React, { useState } from 'react';

function ControlledForm() {
  const [nama, setNama] = useState('');
  const [pesanSubmit, setPesanSubmit] = useState('');

  const handleChange = (event) => {
    setNama(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPesanSubmit(`Data berhasil disubmit! Nama: ${nama}`);
    console.log(`Data disubmit: ${nama}`);
    setNama('');
  };

  return (
    <div>
      <h3>3. Controlled Component</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="namaInput">
          Nama Anda:
        </label>
        <input
          id="namaInput"
          type="text"
          value={nama}
          onChange={handleChange}
          placeholder="Masukkan nama Anda"
        />
        <p>Input Real-time: {nama}</p>
        <button type="submit">Submit</button>
      </form>
      {pesanSubmit && <p style={{ color: 'green', fontWeight: 'bold' }}>{pesanSubmit}</p>}
    </div>
  );
}

export default ControlledForm;