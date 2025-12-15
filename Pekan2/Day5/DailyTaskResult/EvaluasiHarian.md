## Evaluasi Harian

Berikut adalah tugas yang harus dikerjakan oleh santri pada hari kesebelas:

1. **Menerapkan Lifting State Up**
   - Buatlah dua komponen input (misal: dua input angka atau dua input suhu) yang saling terhubung nilainya melalui lifting state up ke komponen induk.
   - Pastikan perubahan pada salah satu input langsung mempengaruhi input lainnya.

2. **Mendemonstrasikan Prop Drilling**
   - Buatlah struktur komponen bertingkat (minimal 3 level) di mana data harus diteruskan dari komponen paling atas ke komponen paling bawah melalui props (prop drilling).
   - Tampilkan data tersebut di komponen paling bawah.

3. **Berbagi State antar Komponen**
   - Buatlah dua komponen saudara (sibling) yang berbagi state melalui komponen induk.
   - Satu komponen dapat mengubah state, dan perubahan tersebut langsung terlihat di komponen saudara lainnya.

4. **Menggunakan useReducer untuk State Kompleks**
   - Buatlah komponen counter yang menggunakan `useReducer` untuk mengelola state (misal: tambah, kurang, reset).
   - Tampilkan nilai counter dan tombol untuk setiap aksi.

5. **Menerapkan Context API Sederhana**
   - Buatlah Context untuk tema (light/dark) dan gunakan Provider untuk membungkus beberapa komponen.
   - Tampilkan tombol untuk mengganti tema dan pastikan tema diterapkan pada beberapa komponen yang berbeda.