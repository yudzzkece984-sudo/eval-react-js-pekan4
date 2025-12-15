import React, { useState } from 'react';

function UserProfile() {
  const [name, setName] = useState('SiD');
  const [age, setAge] = useState(25);
  const [isEditing, setIsEditing] = useState(false);
  
  const [tempName, setTempName] = useState('');
  const [tempAge, setTempAge] = useState('');

  const handleToggleEdit = () => {
    if (isEditing) {
      // Simpan perubahan
      setName(tempName);
      setAge(parseInt(tempAge));
      setIsEditing(false);
    } else {
      // Masuk mode edit
      setTempName(name);
      setTempAge(age);
      setIsEditing(true);
    }
  };

  return (
    <div>
      <h3>Profil Pengguna</h3>
      {isEditing ? (
        <div>
          <label>Nama: <input type="text" value={tempName} onChange={(e) => setTempName(e.target.value)} /></label><br />
          <label>Usia: <input type="number" value={tempAge} onChange={(e) => setTempAge(e.target.value)} /></label>
        </div>
      ) : (
        <div>
          <p>Nama: {name}</p>
          <p>Usia: {age}</p>
        </div>
      )}
      
      <button onClick={handleToggleEdit}>
        {isEditing ? 'Simpan' : 'Edit'}
      </button>
      
      {isEditing && (
        <button onClick={() => setIsEditing(false)} style={{ marginLeft: '10px' }}>Batal</button>
      )}
    </div>
  );
}

export default UserProfile;