// Variabel adalah tempat penampungan dan tipe data adalah jenisnya

// variabel adalah sautu pengenal (identifier) yang digunakan untuk mewakili suatu nilai tertentu di dalam proses yang nilainya bisa diubah ubah sesuai kebutuhan

// - penamaan variabel perlu memperhatikan aturan sebagai berikut :
// 1. Nama variable boleh gabungan huruf dan angka tetapi tidak boleh diawali dengan angka
// 2. tidak boleh ada spasi, gunakan _
// 3. tidak boleh ada symbol kecuali _
// 4. jumlah karakter bebas tetapi hanya 32 karakter pertama yang dipakai


// tipe data adalah jenis data atau nilai yang ditampung dan diolah oleh sebuah variable.


// - Tipe data Standard

// 1. Integer (int)
// Penjelasan:
// Tipe data untuk menyimpan bilangan bulat, baik positif maupun negatif, tanpa bagian desimal.
// Ciri:
// Hanya menyimpan angka bulat.
// Tidak ada titik desimal.
// Digunakan untuk penghitungan yang tidak memerlukan presisi desimal.
// Contoh:
// 5, -10, 1234, 0
// Kegunaan:
// Menghitung jumlah item, indeks array, atau angka yang tidak memerlukan desimal.
// Contoh dalam Python:

// python
// Copy code
// x = 10  # Integer
// print(type(x))  # Output: <class 'int'>

// 2. Float
// Penjelasan:
// Tipe data untuk menyimpan angka desimal (bilangan pecahan). Biasanya digunakan dalam perhitungan yang memerlukan presisi.
// Ciri:
// Memiliki bagian desimal.
// Representasi angka pecahan seperti 3.14.
// Digunakan dalam operasi matematika atau penghitungan presisi tinggi.
// Contoh:
// 3.14, -2.718, 0.001, 10.0
// Kegunaan:
// Perhitungan ilmiah, keuangan, atau data yang melibatkan angka pecahan.
// Contoh dalam Python:

// python
// Copy code
// y = 3.14  # Float
// print(type(y))  # Output: <class 'float'>
// 3. Real
// Penjelasan:
// Tipe data real adalah istilah umum untuk bilangan yang bisa berupa integer maupun pecahan (float). Dalam beberapa bahasa pemrograman, tipe ini tidak digunakan secara eksplisit dan digantikan dengan tipe lain seperti float atau double.
// Pada beberapa bahasa lama seperti Pascal, tipe real digunakan untuk bilangan pecahan.
// Ciri:
// Mirip dengan float, tetapi kadang memiliki presisi berbeda tergantung bahasa pemrograman.
// Tidak selalu digunakan dalam bahasa modern.
// Contoh dalam Pascal:

// pascal
// Copy code
// var
//   a: real;
// begin
//   a := 3.14;  // Tipe data real
// end.

// 3. tipe string : 'halo' "iya halo"

// 4. tipe char karakter : a b c d e f g

// 5. tipe boolean : true or false




// - Tipe data terstruktur 

// 1. Tipe Data Array
// Penjelasan:
// Array adalah tipe data terstruktur yang terdiri dari sekumpulan elemen dengan tipe data yang sama. Elemen dalam array diakses menggunakan indeks, yang biasanya dimulai dari 0.
// Ciri:
// Ukuran array tetap (fixed size).
// Semua elemen memiliki tipe data yang sama.
// Indeks digunakan untuk mengakses elemen tertentu.
// Contoh Penggunaan:
// Menyimpan daftar nilai ujian siswa, daftar nama, atau koordinat.
// Contoh Kode (Python):

// python
// Copy code
// # Array di Python (menggunakan list)
// nilai = [85, 90, 78, 92]  # Menyimpan nilai ujian
// print(nilai[2])  # Output: 78
// 2. Tipe Data Record
// Penjelasan:
// Record adalah tipe data terstruktur yang memungkinkan penyimpanan berbagai elemen dengan tipe data berbeda dalam satu unit. Record sering digunakan untuk mewakili objek atau entitas kompleks seperti data karyawan, mahasiswa, dll.
// Ciri:
// Berisi elemen dengan tipe data berbeda.
// Elemen diakses melalui nama atribut (field).
// Contoh Penggunaan:
// Menyimpan data mahasiswa (nama, NIM, usia).
// Contoh Kode (Python):

// python
// Copy code
// # Record di Python (menggunakan dictionary)
// mahasiswa = {
//     "nama": "Adi",
//     "NIM": "202410101012",
//     "usia": 20
// }
// print(mahasiswa["nama"])  # Output: Adi
// 3. Tipe Data File
// Penjelasan:
// File adalah tipe data terstruktur yang digunakan untuk menyimpan data dalam bentuk permanen di media penyimpanan, seperti file teks atau biner. File memungkinkan data untuk dibaca atau ditulis secara berurutan atau acak.
// Ciri:
// Data disimpan di luar memori utama (di disk).
// Dapat berisi data dalam berbagai format (teks, biner).
// Contoh Penggunaan:
// Menyimpan laporan, konfigurasi, atau data besar yang tidak muat di memori.
// Contoh Kode (Python):

// python
// Copy code
// # File di Python
// with open("data.txt", "w") as file:
//     file.write("Hello, World!\n")  # Menulis data ke file

// with open("data.txt", "r") as file:
//     print(file.read())  # Membaca data dari file
// 4. Tipe Data Set
// Penjelasan:
// Set adalah tipe data terstruktur yang menyimpan sekumpulan elemen unik tanpa urutan tertentu. Set sering digunakan untuk operasi himpunan seperti irisan (intersection) atau gabungan (union).
// Ciri:
// Tidak ada elemen yang duplikat.
// Tidak terurut (unordered).
// Mendukung operasi himpunan seperti gabungan, irisan, atau selisih.
// Contoh Penggunaan:
// Menyimpan koleksi elemen unik seperti nama mata pelajaran.
// Contoh Kode (Python):

// python
// Copy code
// # Set di Python
// himpunan = {1, 2, 3, 4}
// himpunan.add(5)  # Menambahkan elemen
// print(himpunan)  # Output: {1, 2, 3, 4, 5}
// 5. Tipe Data Pointer
// Penjelasan:
// Pointer adalah tipe data yang menyimpan alamat memori dari variabel lain. Dengan pointer, kita dapat mengakses atau memanipulasi data melalui referensinya. Pointer banyak digunakan dalam bahasa seperti C atau C++ untuk pengelolaan memori.
// Ciri:
// Menyimpan alamat memori variabel.
// Digunakan untuk mengakses data secara tidak langsung.
// Harus diinisialisasi sebelum digunakan.
// Contoh Penggunaan:
// Mengelola struktur data dinamis seperti linked list atau tree.
// Contoh Kode (C++):

// cpp
// Copy code
// #include <iostream>
// using namespace std;

// int main() {
//     int a = 10;
//     int *p = &a;  // Pointer p menyimpan alamat a
//     cout << "Nilai a: " << *p << endl;  // Mengakses nilai a melalui pointer
//     return 0;
// }