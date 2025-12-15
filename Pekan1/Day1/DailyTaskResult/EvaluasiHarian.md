## Evaluasi Harian

Berikut adalah tugas yang harus dikerjakan oleh santri pada hari pertama:

1. **Membuat Proyek React Baru**
   - Buatlah sebuah proyek React baru menggunakan Create React App atau Vite.
   - Pastikan proyek dapat dijalankan di komputer masing-masing.

2. **Memahami Perbedaan JSX dengan HTML**
   - Tuliskan penjelasan singkat mengenai perbedaan antara JSX dan HTML.
   jawaban:

   Perbedaan JSX vs HTML
   JSX adalah ekstensi JavaScript, HTML adalah markup murni
   JSX digunakan di React dan memungkinkan kita menulis struktur UI di dalam JavaScript.
   HTML adalah bahasa markup biasa yang digunakan untuk membuat struktur halaman web tanpa logika JavaScript di dalamnya.
   
   JSX harus ditranspilasi, HTML tidak
   JSX tidak dapat langsung dibaca browser — harus di-compile (misalnya oleh Babel/Vite) menjadi JavaScript.
   HTML bisa langsung dijalankan oleh browser.

   - Sertakan contoh kode sederhana yang menunjukkan perbedaan tersebut.
   jawaban:
   HTML (browser langsung paham):

<div class="container">
  <h1>Hello, World!</h1>
</div>


JSX (ditulis di dalam file React, misalnya App.jsx):

function App() {
  return (
    <div className="container">
      <h1>Hello, World!</h1>
    </div>
  );
}


Perbedaan: class → className di JSX.

3. **Menjelaskan Konsep Virtual DOM**
   - Buatlah ringkasan singkat tentang apa itu Virtual DOM dan bagaimana cara kerjanya di React.
   jawaban:
   Virtual DOM adalah representasi virtual (tiruan ringan) dari DOM asli yang disimpan di memori.
   React menggunakan Virtual DOM untuk mempercepat proses update UI dengan menghindari manipulasi DOM asli yang berat.
   Bagaimana Cara Kerjanya di React?
   React membuat Virtual DOM
   Saat komponen dirender, React membuat versi virtual dari struktur UI dalam bentuk objek JavaScript.
  
   Saat state berubah, React membuat Virtual DOM baru
   React tidak langsung mengubah DOM asli — React membuat Virtual DOM versi terbaru berdasarkan perubahan state.
   
   React membandingkan dua Virtual DOM (diffing)
   React membandingkan Virtual DOM lama dan baru untuk menemukan bagian mana yang berubah.
   React hanya meng-update DOM asli pada bagian yang berbeda
   Setelah menemukan perubahan, React menerapkan update secara efisien ke DOM nyata, bukan merender ulang semuanya.

4. **Menjelaskan Perbedaan SPA vs MPA**
   - Tuliskan penjelasan mengenai perbedaan antara Single Page Application (SPA) dan Multi Page Application (MPA).
   jawaban:
   SPA: Satu halaman, cepat, dinamis, lebih cocok untuk aplikasi modern (React, Vue, Angular).
   MPA: Banyak halaman, lebih tradisional, lebih bagus untuk website besar yang fokus SEO.

   - Berikan minimal 2 kelebihan dan 2 kekurangan dari masing-masing arsitektur.
   Single Page Application (SPA)
   Kelebihan:
   Navigasi sangat cepat
   Tidak perlu reload halaman → pengalaman pengguna lebih lancar.
   
   User experience lebih interaktif
   Cocok untuk aplikasi modern seperti dashboard, chat, dan aplikasi berbasis data.

   (Bonus) Beban server lebih ringan
   Server hanya perlu menyiapkan API, bukan merender halaman penuh.
   
   Kekurangan:
   Kurang SEO-friendly
   Konten dinamis membuat mesin pencari sulit mengindeks tanpa konfigurasi tambahan.
   
   Load awal lebih berat/lama
   Harus memuat seluruh bundle JavaScript di awal.
   
   (Bonus) Lebih kompleks di sisi front-end
   Membutuhkan manajemen routing, state, dan data yang lebih rumit.
   
   Multi Page Application (MPA)
   Kelebihan:
   
   SEO sangat baik
   Setiap halaman punya konten statis yang mudah diindeks.
   
   Keamanan lebih baik
   Banyak proses berjalan di server sehingga serangan pada sisi client lebih terbatas.
   
   (Bonus) Cocok untuk website besar
   Struktur multi-halaman memudahkan pengorganisasian konten.
   
   Kekurangan:
   
   Navigasi lebih lambat
   Perpindahan halaman selalu memuat ulang seluruh halaman dari server.
   
   Pengembangan lebih kompleks di sisi backend
   Server harus menangani template, routing, dan generate halaman secara penuh.
   
   (Bonus) Konsumsi bandwidth lebih besar
   Setiap halaman harus mengunduh ulang resource tertentu (HTML, CSS, JS).

> **Catatan:**
> - Tugas dikerjakan secara individu dan dikumpulkan dalam bentuk file markdown atau dokumen digital.
> - Sertakan hasil proyek React (screenshot atau link repository) pada tugas pertama.