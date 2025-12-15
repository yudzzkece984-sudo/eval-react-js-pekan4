import React from 'react';

function WelcomeMessage({ isUserLoggedIn }) {
  return (
    <div>
      {isUserLoggedIn ? (
        <p>👋 Halo SiD, Selamat datang kembali!</p>
      ) : (
        <p>Silakan masuk atau daftar.</p>
      )}
    </div>
  );
}

export default WelcomeMessage;