import { useEffect, useState } from "react";

function SimpleEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Komponen dirender atau di-update!");
  });

  return (
    <div>
      <h2>Simple useEffect</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default SimpleEffect;
