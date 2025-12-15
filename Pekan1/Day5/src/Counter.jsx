import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Functional Update (Tugas 5): Penting untuk update yang bergantung pada nilai state sebelumnya.
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Functional Update (Tugas 5)
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div style={{ padding: '10px', border: '1px solid #007bff22' }}>
      <h4>Counter (Functional Update)</h4>
      <p>Nilai Saat Ini: **{count}**</p>
      <button onClick={handleIncrement}>Tambah</button>
      <button onClick={handleDecrement} style={{ marginLeft: '10px' }}>Kurang</button>
    </div>
  );
}

export default Counter;