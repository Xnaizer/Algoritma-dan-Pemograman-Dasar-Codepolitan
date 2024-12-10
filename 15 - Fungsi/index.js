// Fungsi adalah program kecil yang berada didalam program yang mengembalikan nilai

// function
// deklarasi
// algoritma
// return 

// // Deklarasi fungsi untuk menghitung rata-rata
// function hitungRataRata(angka1, angka2, angka3) {
//     // Algoritma: menjumlahkan ketiga angka dan membaginya dengan 3
//     let total = angka1 + angka2 + angka3;
//     let rataRata = total / 3;

//     // Mengembalikan nilai rata-rata
//     return rataRata;
// }

// // Input tiga angka
// let a = 7;
// let b = 8;
// let c = 10;

// // Memanggil fungsi dan menyimpan hasilnya
// let hasilRataRata = hitungRataRata(a, b, c);

// // Menampilkan hasil
// console.log("Rata-rata dari", a, b, "dan", c, "adalah", hasilRataRata);


// Ruang lingkup dalam pemrograman menentukan sejauh mana variabel dapat diakses atau digunakan di dalam suatu program. Pada JavaScript, terdapat dua jenis utama variabel berdasarkan ruang lingkupnya:

// 1. Variabel Lokal
// Definisi: Variabel yang dideklarasikan di dalam fungsi, blok, atau pernyataan tertentu. Variabel ini hanya dapat diakses dari dalam fungsi atau blok tempat variabel tersebut dideklarasikan.
// Ciri-ciri:
// Tidak dapat diakses di luar fungsi atau blok tempatnya dideklarasikan.
// Biasanya menggunakan kata kunci let atau const.
// Dibuat untuk mencegah konflik nama variabel di tingkat yang lebih besar.
// Contoh:
// javascript
// Copy code
// function hitung() {
//     let hasil = 10; // Variabel lokal
//     console.log("Hasil di dalam fungsi:", hasil);
// }

// hitung();
// console.log("Hasil di luar fungsi:", hasil); // Error: hasil is not defined
// Penjelasan: Variabel hasil hanya dapat diakses di dalam fungsi hitung. Jika mencoba mengaksesnya di luar fungsi, program akan menghasilkan error.
// 2. Variabel Global
// Definisi: Variabel yang dideklarasikan di luar fungsi atau blok tertentu. Variabel ini dapat diakses dari mana saja dalam program, baik di dalam fungsi maupun di luar fungsi.
// Ciri-ciri:
// Tidak terbatas pada satu fungsi atau blok.
// Berisiko menyebabkan konflik nama variabel jika tidak dikelola dengan baik.
// Biasanya menggunakan kata kunci var atau mendeklarasikan tanpa kata kunci (meskipun ini bukan praktik yang disarankan).
// Contoh:
// javascript
// Copy code
// var hasil = 20; // Variabel global

// function tampilkanHasil() {
//     console.log("Hasil di dalam fungsi:", hasil); // Bisa diakses
// }

// tampilkanHasil();
// console.log("Hasil di luar fungsi:", hasil); // Bisa diakses
// Penjelasan: Variabel hasil dapat diakses baik dari dalam fungsi tampilkanHasil maupun di luar fungsi tersebut, karena dideklarasikan secara global.

// Beberapa keuntungan memakai fungsi atau prosedur, di antaranya adalah sebagai berikut:

// Mengurai tugas pemrograman rumit menjadi langkah-langkah yang lebih sederhana dan kecil.
// Mengurangi duplikasi kode (kode sama yang ditulis berulang-ulang) dalam program.
// Dapat menggunakan kode yang ditulis dalam berbagai program yang berbeda.
// Memecah program besar menjadi kecil sehingga dapat dikerjakan oleh beberapa programmer.
// Menyembunyikan informasi user sehingga menghindari perubahan logika atau perhitungan dalam suatu program.
// Meningkatkan pelacakan error pada saat menjalankan program.