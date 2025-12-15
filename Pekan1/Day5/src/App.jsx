// File: App.jsx
import React from 'react';
import Counter from './Counter';      // Import komponen tugas 1 & 5
import UserProfile from './UserProfile';  // Import komponen tugas 2
import ContactForm from './ContactForm';  // Import komponen tugas 3
import TodoList from './TodoList';    // Import komponen tugas 4

function App() {
  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif'
  };

  const componentStyle = {
    border: '1px solid #ddd',
    padding: '15px',
    marginBottom: '20px',
    borderRadius: '8px'
  };

  return (
    <div style={containerStyle}>
      <h1>Evaluasi Harian React State (useState)</h1>
      
      <div style={componentStyle}>
        <h2>1. Counter Sederhana & Functional Update</h2>
        <Counter />
      </div>

      <div style={componentStyle}>
        <h2>2. Profil Pengguna (Multiple State)</h2>
        <UserProfile />
      </div>

      <div style={componentStyle}>
        <h2>3. Formulir Kontak (State Objek)</h2>
        <ContactForm />
      </div>

      <div style={componentStyle}>
        <h2>4. Todo List (State Array)</h2>
        <TodoList />
      </div>
    </div>
  );
}

export default App;