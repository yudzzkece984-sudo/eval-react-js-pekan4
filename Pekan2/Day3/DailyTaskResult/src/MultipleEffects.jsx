import { useEffect, useState } from "react";

function MultipleEffects() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    console.log(`Name berubah: ${name}`);
  }, [name]);

  return (
    <div>
      <h2>Multiple useEffect</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>

      <br /><br />

      <input
        type="text"
        placeholder="Masukkan nama..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default MultipleEffects;
