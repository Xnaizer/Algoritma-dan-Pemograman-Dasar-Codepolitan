// Struktur Data Algortima

// Urutan Sequential, Pemilihan ( selection ), Perulangan ( loop )

// 1. Urutan Sequential
// Penjelasan:
// Merupakan struktur paling dasar di mana instruksi dijalankan secara berurutan, satu per satu dari atas ke bawah sesuai urutan penulisan.

// Ciri:
// Tidak ada kondisi atau perulangan.
// Setiap instruksi dikerjakan tepat satu kali dalam urutan tertentu.
// Contoh Penggunaan:
// Menghitung luas lingkaran (input jari-jari, hitung luas, tampilkan hasil).
// Contoh Kode (Python):

// python
// Copy code
// # Urutan Sequential
// print("Program menghitung luas lingkaran")
// r = float(input("Masukkan jari-jari lingkaran: "))  # Langkah 1
// luas = 3.14 * r * r                                 # Langkah 2
// print(f"Luas lingkaran adalah {luas}")              # Langkah 3
// Penjelasan:
// Setiap baris kode dijalankan satu per satu, tanpa pengulangan atau percabangan.

// 2. Pemilihan (Selection)
// Penjelasan:
// Digunakan untuk membuat keputusan berdasarkan kondisi tertentu. Struktur ini memungkinkan program memilih cabang eksekusi yang berbeda tergantung pada hasil kondisi (benar/salah).

// Ciri:
// Melibatkan pernyataan kondisi (misalnya if, if-else, atau switch).
// Cabang eksekusi hanya dipilih jika kondisi terpenuhi.
// Contoh Penggunaan:
// Menentukan apakah suatu angka ganjil atau genap.
// Contoh Kode (Python):

// python
// Copy code
// # Pemilihan (Selection)
// angka = int(input("Masukkan angka: "))
// if angka % 2 == 0:  # Mengecek apakah angka genap
//     print("Angka tersebut adalah genap")
// else:
//     print("Angka tersebut adalah ganjil")
// Penjelasan:
// Program memutuskan cabang mana yang akan dijalankan berdasarkan kondisi angka % 2 == 0.

// 3. Perulangan (Loop)
// Penjelasan:
// Digunakan untuk mengulangi blok kode tertentu selama kondisi tertentu terpenuhi. Struktur ini memungkinkan program menjalankan tugas yang sama berkali-kali tanpa menulis ulang kode.

// Ciri:
// Menggunakan struktur seperti for, while, atau do-while.
// Bisa berupa perulangan dengan batas tertentu atau berdasarkan kondisi.
// Contoh Penggunaan:
// Menghitung jumlah angka dari 1 hingga 10.
// Contoh Kode (Python):

// python
// Copy code
// # Perulangan (Loop)
// total = 0
// for i in range(1, 11):  # Perulangan dari 1 hingga 10
//     total += i
// print(f"Jumlah angka dari 1 hingga 10 adalah {total}")
// Penjelasan:
// Loop for akan mengulangi blok kode (menambah i ke total) sebanyak 10 kali.

// Hubungan Antara Ketiganya:
// Ketiga struktur ini sering digunakan bersama untuk membuat algoritma yang kompleks:
// Urutan Sequential: Digunakan untuk langkah-langkah tanpa kondisi atau pengulangan.
// Pemilihan (Selection): Digunakan untuk menentukan jalur yang akan dijalankan berdasarkan kondisi.
// Perulangan (Loop): Digunakan untuk menyelesaikan tugas yang berulang.
