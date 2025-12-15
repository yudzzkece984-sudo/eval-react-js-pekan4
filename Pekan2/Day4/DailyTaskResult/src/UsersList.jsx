import { useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.slice(0, 5).map((u) => ({
          name: u.name,
          email: u.email,
        }));
        setUsers(filtered);
      });
  }, []);

  return (
    <div>
      <h2>Filtered Users (5 pertama)</h2>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}
