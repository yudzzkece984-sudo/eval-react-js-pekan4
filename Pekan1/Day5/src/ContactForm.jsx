import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Data disubmit: ${formData.firstName} ${formData.lastName}, ${formData.email}`);
  };

  return (
    <div>
      <h3>Formulir Kontak (State Objek)</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="Nama Depan" value={formData.firstName} onChange={handleChange} style={{ display: 'block', margin: '5px 0' }} />
        <input type="text" name="lastName" placeholder="Nama Belakang" value={formData.lastName} onChange={handleChange} style={{ display: 'block', margin: '5px 0' }} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={{ display: 'block', margin: '5px 0' }} />
        <button type="submit">Submit</button>
      </form>

      <h4>Data Input Real-time:</h4>
      <p>Nama: {formData.firstName} {formData.lastName}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default ContactForm;