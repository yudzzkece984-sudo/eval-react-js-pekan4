import React from 'react';

function LoginStatus({ isUserLoggedIn }) {
  let message;

  if (isUserLoggedIn) {
    message = <h2 style={{ color: 'green' }}>✅ Anda sudah login.</h2>;
  } else {
    message = <h2 style={{ color: 'red' }}>❌ Silakan login.</h2>;
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
      <h3>1. Conditional Rendering dengan if/else</h3>
      {message}
    </div>
  );
}

export default LoginStatus;