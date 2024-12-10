// Penjelasan Algoritma Rekursif
// Algoritma Rekursif adalah algoritma yang memecahkan masalah dengan cara memanggil dirinya sendiri (rekursi). Rekursi sangat berguna untuk menyelesaikan masalah yang dapat dipecah menjadi sub-masalah yang lebih kecil dengan pola yang sama.

// Ciri-Ciri Algoritma Rekursif
// Base Case (Kasus Dasar):

// Kondisi di mana fungsi berhenti memanggil dirinya sendiri.
// Biasanya merupakan masalah terkecil yang dapat langsung diselesaikan.
// Recursive Case:

// Bagian algoritma yang memanggil dirinya sendiri untuk menyelesaikan sub-masalah.
// Pengecilan Masalah:

// Setiap pemanggilan rekursif mengurangi ukuran masalah sehingga mendekati base case.
// Langkah-Langkah Algoritma Rekursif
// Tentukan kasus dasar (base case) untuk menghentikan rekursi.
// Bagi masalah menjadi sub-masalah yang lebih kecil.
// Terapkan rekursi untuk menyelesaikan sub-masalah.
// Contoh 1: Faktorial
// Faktorial dari 
// 𝑛
// n (dilambangkan dengan 
// 𝑛
// !
// n!) adalah hasil perkalian semua bilangan dari 
// 𝑛
// n hingga 1:

// Formula: 
// 𝑛
// !
// =
// 𝑛
// ×
// (
// 𝑛
// −
// 1
// )
// !
// n!=n×(n−1)!
// Base Case: 
// 1
// !
// =
// 1
// 1!=1
// Pseudocode Faktorial Rekursif:

// kotlin
// Copy code
// factorial(n):
//     if n == 1:  // Base case
//         return 1
//     else:  // Recursive case
//         return n * factorial(n-1)
// Eksekusi Faktorial(4):

// factorial(4) → 
// 4
// ×
// 𝑓
// 𝑎
// 𝑐
// 𝑡
// 𝑜
// 𝑟
// 𝑖
// 𝑎
// 𝑙
// (
// 3
// )
// 4×factorial(3)
// factorial(3) → 
// 3
// ×
// 𝑓
// 𝑎
// 𝑐
// 𝑡
// 𝑜
// 𝑟
// 𝑖
// 𝑎
// 𝑙
// (
// 2
// )
// 3×factorial(2)
// factorial(2) → 
// 2
// ×
// 𝑓
// 𝑎
// 𝑐
// 𝑡
// 𝑜
// 𝑟
// 𝑖
// 𝑎
// 𝑙
// (
// 1
// )
// 2×factorial(1)
// factorial(1) → 
// 1
// 1 (base case)
// Hasil: 
// 4
// ×
// 3
// ×
// 2
// ×
// 1
// =
// 24
// 4×3×2×1=24
// Contoh 2: Deret Fibonacci
// Deret Fibonacci adalah serangkaian bilangan di mana setiap bilangan adalah hasil penjumlahan dua bilangan sebelumnya:

// Formula: 
// 𝐹
// (
// 𝑛
// )
// =
// 𝐹
// (
// 𝑛
// −
// 1
// )
// +
// 𝐹
// (
// 𝑛
// −
// 2
// )
// F(n)=F(n−1)+F(n−2)
// Base Case: 
// 𝐹
// (
// 0
// )
// =
// 0
// F(0)=0, 
// 𝐹
// (
// 1
// )
// =
// 1
// F(1)=1
// Pseudocode Fibonacci Rekursif:

// kotlin
// Copy code
// fibonacci(n):
//     if n == 0:  // Base case
//         return 0
//     if n == 1:  // Base case
//         return 1
//     else:  // Recursive case
//         return fibonacci(n-1) + fibonacci(n-2)
// Eksekusi Fibonacci(5):

// fibonacci(5) → fibonacci(4) + fibonacci(3)
// fibonacci(4) → fibonacci(3) + fibonacci(2)
// fibonacci(3) → fibonacci(2) + fibonacci(1)
// ...
// Hasil: 
// 5
// 5
// Keuntungan dan Kekurangan Rekursi
// Keuntungan:

// Sederhana dan elegan: Mudah diimplementasikan untuk masalah yang dapat dipecah menjadi sub-masalah serupa (misalnya, pencarian pohon, Fibonacci).
// Mudah dimengerti: Kode seringkali lebih ringkas dan mudah dibaca.
// Kekurangan:

// Efisiensi: Rekursi dapat menyebabkan overhead karena banyaknya pemanggilan fungsi, terutama jika sub-masalah dihitung berulang kali (contoh: Fibonacci).
// Resiko Stack Overflow: Jika rekursi terlalu dalam atau tidak ada base case, program dapat crash karena kehabisan memori.
// Optimasi Rekursi: Memoization
// Untuk menghindari perhitungan ulang, gunakan teknik memoization, yaitu menyimpan hasil sub-masalah yang telah dihitung.

