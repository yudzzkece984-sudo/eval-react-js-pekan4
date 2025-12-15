import { useEffect, useState } from "react";

export default function UserInfo({ userId }) {
  const [user, setUser] = useState(null);

useEffect(() => {
  const loadUser = () => {
    setUser({
      id: userId,
      name: userId === 1 ? "Budi" : "Siti",
      email: userId === 1 ? "budi@mail.com" : "siti@mail.com"
    });
  };

  loadUser();
}, [userId]);


  return (
    <div>
      <h2>User Info</h2>
      {user ? (
        <>
          <p>Nama: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
