## Evaluasi Harian

Berikut adalah tugas yang harus dikerjakan oleh santri pada hari kesembilan:

1. **Membuat Komponen dengan useEffect Sederhana**
   - Buatlah komponen React yang menggunakan `useEffect` untuk menampilkan pesan di konsol setiap kali komponen di-render atau di-update.

2. **Menggunakan useEffect dengan Dependency Array**
   - Buatlah komponen yang menampilkan data pengguna (misal: nama, email) berdasarkan ID.
   - Gunakan `useEffect` dengan dependency array agar data hanya di-*fetch* ulang saat ID berubah.

3. **Menerapkan Cleanup Function**
   - Buatlah komponen yang melacak ukuran jendela browser (window width & height) dan memperbarui state saat ukuran berubah.
   - Pastikan event listener dibersihkan dengan benar menggunakan cleanup function di `useEffect`.

4. **Menggunakan Multiple useEffect dalam Satu Komponen**
   - Buatlah komponen yang memiliki dua state berbeda (misal: count dan name).
   - Gunakan dua atau lebih `useEffect` untuk melakukan efek samping yang berbeda (misal: update document title saat count berubah, log ke konsol saat name berubah).

5. **Simulasi Fetch Data dengan useEffect**
   - Buatlah komponen yang melakukan simulasi fetch data (misal: menggunakan `setTimeout` untuk menunda pengambilan data) saat komponen pertama kali di-mount.
   - Tampilkan loading state saat data sedang diambil, dan tampilkan data setelah selesai.