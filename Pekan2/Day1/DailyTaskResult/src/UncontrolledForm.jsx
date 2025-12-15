import React, { useRef, useState } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);
  const [pesanSubmit, setPesanSubmit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const nilaiInput = inputRef.current.value; 
    
    setPesanSubmit(`Data berhasil disubmit! Nilai input (dari ref): ${nilaiInput}`);
    console.log(`Nilai Uncontrolled Component: ${nilaiInput}`);

    inputRef.current.value = '';
  };

  return (
    <div>
      <h3>4. Uncontrolled Component</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="inputUncontrolled">
          Nama Anda (Uncontrolled):
        </label>
        <input
          id="inputUncontrolled"
          type="text"
          ref={inputRef}
          defaultValue="Default Value"
          placeholder="Masukkan nama Anda"
        />
        <button type="submit">Submit (Ambil Nilai)</button>
      </form>
      {pesanSubmit && <p style={{ color: 'orange', fontWeight: 'bold' }}>{pesanSubmit}</p>}
    </div>
  );
}

export default UncontrolledForm;