// 1. Pencarian Sekuensial (Sequential Search)
// Definisi: Pencarian sekuensial adalah metode pencarian dengan cara memeriksa setiap elemen dalam kumpulan data satu per satu hingga elemen yang dicari ditemukan, atau hingga seluruh elemen telah diperiksa.

// Ciri-Ciri:

// Cocok untuk data yang tidak terurut.
// Memiliki waktu pencarian linear, dengan kompleksitas O(n).
// Sederhana, tetapi tidak efisien untuk kumpulan data yang besar.
// Cara Kerja:

// Mulai dari elemen pertama dalam kumpulan data.
// Bandingkan elemen tersebut dengan elemen yang dicari.
// Jika ditemukan, hentikan pencarian.
// Jika tidak ditemukan, lanjutkan ke elemen berikutnya.
// Ulangi hingga elemen ditemukan atau semua elemen diperiksa.
// Contoh Kasus: Mencari angka 5 dalam array [3, 8, 5, 2, 7]:

// Bandingkan 3 dengan 5 (tidak cocok).
// Bandingkan 8 dengan 5 (tidak cocok).
// Bandingkan 5 dengan 5 (cocok, pencarian selesai).
// 2. Pencarian Interval (Interval Search)
// Definisi: Pencarian interval adalah metode pencarian yang digunakan pada kumpulan data yang sudah terurut. Teknik ini membagi kumpulan data menjadi interval tertentu untuk mempercepat proses pencarian. Contoh paling umum adalah Binary Search.

// Ciri-Ciri:

// Memerlukan data yang terurut.
// Memiliki waktu pencarian logaritmik, dengan kompleksitas O(log n).
// Sangat efisien untuk kumpulan data yang besar.
// Contoh Pencarian Interval: Binary Search
// Cara Kerja:

// Tentukan elemen tengah dari kumpulan data.
// Bandingkan elemen tengah dengan elemen yang dicari.
// Jika cocok, pencarian selesai.
// Jika elemen yang dicari lebih kecil, ulangi pencarian di bagian kiri.
// Jika elemen yang dicari lebih besar, ulangi pencarian di bagian kanan.
// Ulangi langkah ini hingga elemen ditemukan atau interval pencarian habis.
// Contoh Kasus: Mencari angka 7 dalam array [1, 3, 5, 7, 9, 11]:

// Elemen tengah adalah 5 (indeks ke-2).
// Bandingkan 5 dengan 7 → tidak cocok, cari di bagian kanan.
// Elemen tengah bagian kanan adalah 9.
// Bandingkan 9 dengan 7 → tidak cocok, cari di bagian kiri.
// Elemen berikutnya adalah 7, pencarian selesai.
