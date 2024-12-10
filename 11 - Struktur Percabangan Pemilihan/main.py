# Struktur Pemilihan (Selection Structure) adalah struktur dalam pemrograman yang memungkinkan program untuk mengambil keputusan berdasarkan hasil evaluasi suatu kondisi atau ekspresi. Dalam struktur ini, program akan menguji kondisi tertentu dan kemudian memilih jalur eksekusi yang berbeda, bergantung pada apakah kondisi tersebut benar (true) atau salah (false). Struktur pemilihan membantu dalam membuat keputusan dalam program dan memungkinkan adanya percabangan dalam alur eksekusi program.

# Jenis-jenis Struktur Pemilihan:
# If Statement (Pernyataan If)
# Struktur dasar pemilihan di mana program mengevaluasi suatu kondisi dan jika kondisi tersebut benar, maka blok kode yang terkait akan dieksekusi.

# Contoh:

# python
# Copy code
# if kondisi:
#     # Proses jika kondisi benar
# Penjelasan:
# Program akan mengevaluasi kondisi. Jika kondisi benar, maka blok kode setelah if akan dieksekusi. Jika kondisi salah, program akan melanjutkan ke baris kode berikutnya.

# If-else Statement
# Jika kondisi tersebut benar, maka satu blok kode akan dijalankan, tetapi jika kondisi salah, blok kode lainnya yang berbeda akan dijalankan.

# Contoh:

# python
# Copy code
# if kondisi:
#     # Proses jika kondisi benar
# else:
#     # Proses jika kondisi salah
# Penjelasan:
# Program akan mengevaluasi kondisi, jika kondisi benar maka blok kode pertama yang ada di dalam if akan dieksekusi. Jika kondisi salah, maka blok kode setelah else yang akan dieksekusi.

# If-elif-else Statement
# Digunakan ketika ada beberapa kondisi yang saling eksklusif, dan program akan mengevaluasi kondisi satu per satu hingga menemukan yang benar.

# Contoh:

# python
# Copy code
# if kondisi1:
#     # Proses jika kondisi1 benar
# elif kondisi2:
#     # Proses jika kondisi2 benar
# else:
#     # Proses jika semua kondisi di atas salah
# Penjelasan:
# Program pertama-tama mengevaluasi kondisi1. Jika benar, maka blok kode pertama dijalankan. Jika tidak, program mengevaluasi kondisi2. Jika benar, blok kode kedua dijalankan. Jika tidak ada kondisi yang benar, maka blok kode setelah else akan dijalankan.

# Switch-case Statement (Umumnya di bahasa seperti C, Java)
# Struktur pemilihan yang memungkinkan program untuk memilih salah satu di antara beberapa pilihan berdasarkan nilai tertentu.

# Contoh (di C):

# c
# Copy code
# switch (variabel) {
#     case 1:
#         // Proses jika variabel == 1
#         break;
#     case 2:
#         // Proses jika variabel == 2
#         break;
#     default:
#         // Proses jika tidak ada yang cocok
# }
# Penjelasan:
# Program memeriksa nilai variabel. Berdasarkan nilai tersebut, salah satu blok kode akan dijalankan. Jika tidak ada yang cocok, maka default akan dieksekusi.

# Contoh Struktur Pemilihan dalam Python:
# Misalkan kita ingin menentukan apakah seseorang dapat mengakses situs web berdasarkan umur:

# python
# Copy code
# usia = int(input("Masukkan usia Anda: "))

# if usia >= 18:
#     print("Akses Diberikan")
# else:
#     print("Akses Ditolak")
# Penjelasan:

# Program meminta input usia dari pengguna.
# Kemudian program mengevaluasi apakah usia lebih dari atau sama dengan 18 (kondisi).
# Jika benar, maka program akan mencetak "Akses Diberikan".
# Jika tidak, program akan mencetak "Akses Ditolak".
# Keuntungan Struktur Pemilihan:
# Mengatur Alur Program: Memungkinkan program untuk membuat keputusan dan mengubah jalur eksekusi berdasarkan kondisi tertentu.
# Fleksibel: Dapat menangani banyak kondisi dengan berbagai cara, seperti dengan if-else atau switch-case.
# Penting dalam Pengambilan Keputusan: Sangat berguna dalam aplikasi yang membutuhkan keputusan dinamis, seperti dalam game, aplikasi bisnis, dan sistem berbasis input pengguna.
# Kesimpulan:
# Struktur pemilihan adalah inti dari banyak aplikasi dan algoritma karena memungkinkan program untuk bertindak secara kondisional, membuat keputusan yang berbeda berdasarkan data atau input yang diberikan. Dengan menggunakan struktur ini, program dapat mengadaptasi alur eksekusinya untuk berbagai skenario.