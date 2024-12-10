// Pengurutan data (sorting) adalah proses menyusun data dalam urutan tertentu berdasarkan kriteria tertentu, seperti ascending (menaik) atau descending (menurun). Pengurutan data digunakan untuk memudahkan pencarian, analisis, dan pengelolaan data dalam berbagai aplikasi, seperti basis data, algoritma, atau pemrosesan data lainnya.

// Tujuan Pengurutan Data
// Meningkatkan efisiensi pencarian: Data yang terurut memungkinkan penggunaan algoritma pencarian cepat, seperti binary search.
// Mempermudah analisis: Data yang terurut lebih mudah dianalisis, terutama untuk menemukan pola atau tren.
// Optimalisasi proses pengolahan data: Banyak algoritma memerlukan data dalam keadaan terurut untuk bekerja secara optimal.
// Jenis Pengurutan
// Pengurutan Berdasarkan Urutan:

// Ascending (menaik): Data disusun dari nilai terkecil ke nilai terbesar (contoh: 1, 2, 3, ..., 10).
// Descending (menurun): Data disusun dari nilai terbesar ke nilai terkecil (contoh: 10, 9, 8, ..., 1).
// Pengurutan Berdasarkan Kunci:

// Numerik: Data berupa angka diurutkan berdasarkan nilai numeriknya.
// Alfabetis: Data berupa huruf diurutkan berdasarkan urutan alfabet (contoh: A, B, C, ...).
// Kustom: Pengurutan dilakukan berdasarkan kriteria tertentu (misalnya, berdasarkan tanggal atau prioritas).
// Algoritma Pengurutan
// Beberapa algoritma pengurutan umum meliputi:

// Pengurutan Sederhana:

// Bubble Sort: Membandingkan elemen berdekatan dan menukar posisinya jika salah urut.
// Selection Sort: Memilih elemen terkecil (atau terbesar) di setiap iterasi dan memindahkannya ke posisi yang benar.
// Insertion Sort: Memasukkan elemen ke posisi yang tepat dengan membandingkan elemen sebelumnya.
// Pengurutan Kompleks:

// Merge Sort: Membagi data menjadi dua bagian, mengurutkan secara rekursif, lalu menggabungkannya kembali.
// Quick Sort: Memilih elemen pivot, memindahkan elemen lebih kecil ke kiri dan lebih besar ke kanan, lalu mengurutkan bagian tersebut.
// Heap Sort: Menggunakan struktur heap untuk mengurutkan data.
// Radix Sort: Mengurutkan data berdasarkan digitnya (cocok untuk data numerik).
// Pengurutan Bawaan di Bahasa Pemrograman:

// Dalam JavaScript: menggunakan metode .sort().
// Dalam Python: menggunakan fungsi sorted() atau metode .sort().
// Contoh Sederhana
// Misalkan kita memiliki daftar angka: [5, 2, 8, 1, 3].

// Ascending (menaik): [1, 2, 3, 5, 8]
// Descending (menurun): [8, 5, 3, 2, 1]
// Jika data tersebut berupa nama: ["Zara", "Anna", "John"], maka:

// Ascending: ["Anna", "John", "Zara"]
// Descending: ["Zara", "John", "Anna"]
// Jika kamu ingin mencoba algoritma pengurutan tertentu menggunakan JavaScript, saya bisa membantu memberikan contohnya! 


// bubble sort 

// BubbleSort(array):
//     n = panjang array
//     for i from 0 to n-1:  // Iterasi dari elemen pertama hingga terakhir
//         for j from 0 to n-i-2:  // Iterasi elemen berdekatan yang belum terurut
//             if array[j] > array[j+1]:  // Jika elemen saat ini lebih besar dari elemen berikutnya
//                 Tukar(array[j], array[j+1])  // Tukar posisi elemen
