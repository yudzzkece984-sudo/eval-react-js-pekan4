## Evaluasi Harian

Berikut adalah tugas yang harus dikerjakan oleh santri pada hari kelima:

1. **Membuat Counter Sederhana dengan useState**
   - Buatlah komponen React bernama `Counter` yang menampilkan angka dan dua tombol: "Tambah" dan "Kurang".
   - Gunakan `useState` untuk mengelola nilai angka dan perbarui nilainya saat tombol diklik.

2. **Mengelola Beberapa State dalam Satu Komponen**
   - Buatlah komponen `UserProfile` yang memiliki state untuk nama, usia, dan status edit (editing/not editing).
   - Tampilkan data profil dan sediakan tombol untuk mengubah ke mode edit, lalu simpan perubahan ke state.

3. **Mengelola State Berupa Objek**
   - Buatlah komponen formulir kontak (`ContactForm`) yang menggunakan satu state objek untuk menyimpan beberapa field (nama depan, nama belakang, email).
   - Tampilkan data yang sedang diinput secara real-time di bawah formulir.

4. **Mengelola State Berupa Array**
   - Buatlah komponen `TodoList` yang menggunakan state array untuk menyimpan daftar tugas.
   - Sediakan fitur untuk menambah, menandai selesai, dan menghapus tugas dari daftar.

5. **Menggunakan Functional Update pada State**
   - Pada salah satu komponen di atas (misal: `Counter`), gunakan *functional update* pada setter state untuk memastikan pembaruan state yang aman jika terjadi update berturut-turut.