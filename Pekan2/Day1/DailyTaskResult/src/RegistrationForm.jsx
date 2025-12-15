import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
        ...errors,
        [e.target.name]: ''
    });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (formData.username.length < 3) {
      tempErrors.username = 'Username minimal 3 karakter.';
      isValid = false;
    }

    if (!formData.email.includes('@')) {
      tempErrors.email = 'Email harus mengandung karakter "@".';
      isValid = false;
    }

    if (formData.password.length < 6) {
      tempErrors.password = 'Password minimal 6 karakter.';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage('');

    if (validate()) {
      setSubmitMessage('Pendaftaran Berhasil! Data: ' + JSON.stringify(formData));
      console.log('Data yang disubmit:', formData);
    } else {
      setSubmitMessage('Pendaftaran Gagal. Perbaiki kesalahan di atas.');
      console.log('Validasi Gagal');
    }
  };

  return (
    <div>
      <h3>5. Formulir dengan Multiple Inputs dan Validasi Sederhana</h3>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px', maxWidth: '300px' }}>
        
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username" 
            value={formData.username}
            onChange={handleChange}
            style={{ borderColor: errors.username ? 'red' : 'gray' }}
          />
          {errors.username && <p style={{ color: 'red', fontSize: '12px', margin: '0' }}>{errors.username}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ borderColor: errors.email ? 'red' : 'gray' }}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '12px', margin: '0' }}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ borderColor: errors.password ? 'red' : 'gray' }}
          />
          {errors.password && <p style={{ color: 'red', fontSize: '12px', margin: '0' }}>{errors.password}</p>}
        </div>

        <button type="submit" style={{ marginTop: '10px' }}>Daftar</button>
      </form>

      {submitMessage && (
        <p style={{ marginTop: '15px', color: submitMessage.includes('Gagal') ? 'red' : 'blue', fontWeight: 'bold' }}>
          {submitMessage}
        </p>
      )}
    </div>
  );
}

export default RegistrationForm;