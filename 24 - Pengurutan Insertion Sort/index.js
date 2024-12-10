// Insertion Sort adalah algoritma pengurutan sederhana yang bekerja dengan cara membangun array yang sudah terurut satu elemen pada satu waktu. Ide utamanya adalah memindahkan setiap elemen ke posisi yang benar dalam array yang sudah terurut.

// Langkah-Langkah Insertion Sort
// Misalkan ada array: [5, 3, 8, 1]

// Iterasi pertama:

// Elemen pertama (
// 5
// 5) dianggap sudah terurut.
// Bandingkan elemen kedua (
// 3
// 3) dengan elemen pertama:
// Karena 
// 3
// <
// 5
// 3<5, pindahkan 
// 3
// 3 ke depan → [3, 5, 8, 1].
// Iterasi kedua:

// Bandingkan elemen ketiga (
// 8
// 8) dengan elemen sebelumnya:
// Karena 
// 8
// >
// 5
// 8>5, biarkan di tempatnya → [3, 5, 8, 1].
// Iterasi ketiga:

// Bandingkan elemen keempat (
// 1
// 1) dengan semua elemen sebelumnya:
// Pindahkan 
// 1
// 1 ke posisi yang benar → [1, 3, 5, 8].
// Hasil akhir: [1, 3, 5, 8]

// Pseudocode Insertion Sort
// php
// Copy code
// InsertionSort(array):
//     n = panjang array
//     for i from 1 to n-1:  // Mulai dari elemen kedua
//         key = array[i]  // Simpan elemen saat ini sebagai kunci
//         j = i - 1  // Indeks elemen sebelum elemen kunci

//         // Geser elemen yang lebih besar dari kunci ke kanan
//         while j >= 0 and array[j] > key:
//             array[j+1] = array[j]
//             j = j - 1

//         // Masukkan kunci ke posisi yang benar
//         array[j+1] = key
// Penjelasan Pseudocode
// Outer loop (i):

// Memulai iterasi dari elemen kedua hingga elemen terakhir.
// Elemen saat ini disebut sebagai key, yang akan dimasukkan ke posisi yang tepat di bagian array yang sudah terurut.
// Inner loop (j):

// Membandingkan elemen key dengan elemen sebelumnya.
// Jika elemen sebelumnya lebih besar dari key, geser elemen tersebut ke kanan.
// Pemasangan elemen (array[j+1] = key):

// Setelah selesai menggeser elemen yang lebih besar, masukkan key ke posisi yang benar.
// Contoh Eksekusi
// Misalkan array: [7, 2, 4, 6]

// Iterasi 1 (
// 𝑖
// =
// 1
// i=1, key = 2):

// Bandingkan 
// 2
// 2 dengan 
// 7
// 7:
// Geser 
// 7
// 7 ke kanan → [7, 7, 4, 6].
// Masukkan 
// 2
// 2 ke posisi yang benar → [2, 7, 4, 6].
// Iterasi 2 (
// 𝑖
// =
// 2
// i=2, key = 4):

// Bandingkan 
// 4
// 4 dengan 
// 7
// 7:
// Geser 
// 7
// 7 ke kanan → [2, 7, 7, 6].
// Masukkan 
// 4
// 4 ke posisi yang benar → [2, 4, 7, 6].
// Iterasi 3 (
// 𝑖
// =
// 3
// i=3, key = 6):

// Bandingkan 
// 6
// 6 dengan 
// 7
// 7:
// Geser 
// 7
// 7 ke kanan → [2, 4, 7, 7].
// Masukkan 
// 6
// 6 ke posisi yang benar → [2, 4, 6, 7].
// Hasil akhir: [2, 4, 6, 7]