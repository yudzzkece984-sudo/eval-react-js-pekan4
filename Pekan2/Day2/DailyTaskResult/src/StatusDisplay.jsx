import React from 'react';

function StatusDisplay({ status }) {
  let content;
  let style = { padding: '10px', borderRadius: '5px', fontWeight: 'bold' };

  switch (status) {
    case 'loading':
      content = '⏳ Data sedang dimuat...';
      style.backgroundColor = '#e0f7fa';
      style.color = 'blue';
      break;
    case 'success':
      content = '✅ Data berhasil diambil!';
      style.backgroundColor = '#e8f5e9';
      style.color = 'green';
      break;
    case 'error':
      content = '❌ Terjadi kesalahan saat memuat data.';
      style.backgroundColor = '#ffebee';
      style.color = 'red';
      break;
    default:
      content = '❓ Status tidak terdeteksi.';
      style.backgroundColor = '#f5f5f5';
      style.color = 'gray';
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
      <h3>3. Conditional Rendering dengan Switch Statement</h3>
      <div style={style}>
        {content}
      </div>
    </div>
  );
}

export default StatusDisplay;