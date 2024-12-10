// Langkah-Langkah Selection Sort
// Misalkan ada array: [5, 3, 8, 1]

// Iterasi pertama:
// Temukan elemen terkecil di seluruh array (1).
// Tukar elemen tersebut dengan elemen pertama → [1, 3, 8, 5].
// Iterasi kedua:
// Temukan elemen terkecil dari sisa array (3).
// Tukar elemen tersebut dengan elemen kedua → [1, 3, 8, 5] (tidak ada perubahan karena elemen sudah benar).
// Iterasi ketiga:
// Temukan elemen terkecil dari sisa array (5).
// Tukar elemen tersebut dengan elemen ketiga → [1, 3, 5, 8].
// Iterasi keempat:
// Tidak perlu dilakukan, karena hanya ada satu elemen tersisa.
// Hasil akhir: [1, 3, 5, 8]

// Pseudocode Selection Sort
// php
// Copy code
// SelectionSort(array):
//     n = panjang array
//     for i from 0 to n-1:  // Iterasi dari elemen pertama hingga terakhir
//         minIndex = i  // Asumsikan elemen ke-i adalah yang terkecil
//         for j from i+1 to n-1:  // Cari elemen terkecil di sisa array
//             if array[j] < array[minIndex]:  // Jika ditemukan elemen lebih kecil
//                 minIndex = j  // Perbarui indeks elemen terkecil
//         Tukar(array[i], array[minIndex])  // Tukar elemen ke-i dengan elemen terkecil