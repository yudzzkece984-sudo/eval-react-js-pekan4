import { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => setUser(res.data));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Axios User</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Telepon: {user.phone}</p>
    </div>
  );
}
