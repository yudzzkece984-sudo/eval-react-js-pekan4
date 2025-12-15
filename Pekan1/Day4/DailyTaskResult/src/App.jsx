import React from 'react';
import ProfileBox from './ProfileBox'; 
import ProfileBoxWithCSS from './ProfileBoxWithCSS'; 
import Button from './Button'; 
import AlertBox from './AlertBox';
import ResponsiveBox from './ResponsiveBox';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📝 Evaluasi Styling Harian React</h1>
      
      <h2>1. Inline Styles</h2>
      <ProfileBox />
      
      <hr style={{ margin: '40px 0' }} />

      <h2>2. CSS Classes dan className</h2>
      <ProfileBoxWithCSS />

      <hr style={{ margin: '40px 0' }} />
      
      <h2>3. CSS Modules</h2>
      <Button />

      <hr style={{ margin: '40px 0' }} />
      
      <h2>4. Dynamic Styling (Conditional Props)</h2>
      <AlertBox type="success" message="Operasi berhasil diselesaikan." />
      <AlertBox type="warning" message="Perlu perhatian: Terdapat data yang belum lengkap." />
      <AlertBox type="error" message="Kesalahan server: Gagal memuat sumber daya." />
      
      <hr style={{ margin: '40px 0' }} />

      <h2>5. Komponen Responsif (Coba ubah ukuran layar browser)</h2>
      <ResponsiveBox />
    </div>
  );
}

export default App;