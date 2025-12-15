import React, { useState, useEffect } from "react";

function RealDataFetchAsync() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1. Definisikan fungsi async di dalam useEffect
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // 2. Tunggu respons dari API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // Mengambil data post ke-1
        
        // 3. Tangani error HTTP
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // 4. Tunggu konversi ke JSON
        const actualData = await response.json();
        
        // 5. Simpan data
        setData(actualData);
      } catch (err) {
        // 6. Tangani error koneksi atau error di atas
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        // 7. Hentikan loading
        setLoading(false);
      }
    };

    // 8. Panggil fungsi fetch
    fetchData();

  }, []); // Dependency array kosong

  return (
    <div>
      <h3>Actual Data Fetch (Async/Await)</h3>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {loading ? (
        <p>Loading post data...</p>
      ) : (
        <div>
          {/* Menampilkan beberapa properti dari data post yang sebenarnya */}
          <h4>Post Data Berhasil Diambil:</h4>
          <p>
            <strong>Title:</strong> {data.title}
          </p>
          <p>
            <strong>Body:</strong> {data.body.substring(0, 100)}...
          </p>
          <details>
            <summary>Raw JSON Data</summary>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </details>
        </div>
      )}
    </div>
  );
}

export default RealDataFetchAsync;