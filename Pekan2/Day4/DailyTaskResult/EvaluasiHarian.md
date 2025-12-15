## Evaluasi Harian

Berikut adalah tugas yang harus dikerjakan oleh santri pada hari kesepuluh:

1. **Mengambil Data dari API dengan Fetch API**
   - Buatlah komponen React yang mengambil data dari API publik (misal: https://jsonplaceholder.typicode.com/posts/1) menggunakan Fetch API.
   - Tampilkan data yang diambil di UI.

2. **Mengambil Data dari API dengan Axios**
   - Buatlah komponen yang mengambil data pengguna dari API publik (misal: https://jsonplaceholder.typicode.com/users/1) menggunakan Axios.
   - Tampilkan nama, email, dan nomor telepon pengguna.

3. **Mengelola Loading State dan Error Handling**
   - Tambahkan state untuk loading dan error pada salah satu komponen di atas.
   - Tampilkan pesan loading saat data sedang diambil, dan tampilkan pesan error jika terjadi kesalahan.

4. **Menggunakan AbortController untuk Cleanup**
   - Modifikasi komponen Fetch API agar menggunakan AbortController untuk membatalkan permintaan jika komponen di-unmount sebelum data selesai diambil.

5. **Manipulasi Data JSON**
   - Buatlah komponen yang mengambil daftar data (misal: daftar users atau posts) dari API, lalu tampilkan hanya sebagian data (misal: filter berdasarkan kriteria tertentu, atau hanya tampilkan nama dan email).
   - Gunakan fungsi array seperti `map`, `filter`, atau `slice` untuk memanipulasi data sebelum ditampilkan.