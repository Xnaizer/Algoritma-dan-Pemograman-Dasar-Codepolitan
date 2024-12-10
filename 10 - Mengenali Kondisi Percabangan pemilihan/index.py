# Algoritma PemilihanAlgoritma Pemilihan (Selection Algorithm) adalah salah satu jenis algoritma yang digunakan untuk memilih atau menentukan nilai atau elemen tertentu berdasarkan kondisi atau kriteria tertentu. Algoritma ini mengarahkan alur program untuk memilih salah satu dari beberapa opsi yang ada, bergantung pada kondisi yang diuji.

# Algoritma pemilihan umumnya digunakan dalam situasi seperti percabangan keputusan atau memilih nilai tertentu berdasarkan kriteria yang diberikan. Algoritma ini sering kali melibatkan penggunaan pernyataan kondisi untuk menentukan jalur mana yang akan diambil.

# Jenis-jenis Algoritma Pemilihan:
# If-else (Jika-else)

# Digunakan untuk mengevaluasi suatu kondisi dan mengambil aksi sesuai dengan hasil evaluasi tersebut.
# Misalnya, memilih aksi berdasarkan apakah suatu nilai lebih besar, lebih kecil, atau sama dengan nilai lainnya.
# Switch-case

# Digunakan untuk memilih antara beberapa pilihan yang memiliki nilai tertentu. Biasanya digunakan ketika ada banyak kondisi yang harus dipilih berdasarkan nilai suatu variabel.
# Contoh Pseudocode Algoritma Pemilihan:
# 1. If-else (Pemilihan Berdasarkan Kondisi)
# Contoh algoritma untuk memilih apakah seseorang layak mendapatkan diskon berdasarkan usia:

# arduino
# Copy code
# Jika usia >= 18 maka
#     tampilkan "Dewasa, dapat diskon 20%"
# lainkan
#     tampilkan "Anak-anak, tidak dapat diskon"
# Penjelasan:

# Kondisi: usia >= 18
# Aksi: Jika kondisi benar (usia 18 tahun atau lebih), maka akan diberikan diskon, jika tidak, maka tidak diberikan diskon.
# 2. Switch-case (Pemilihan Berdasarkan Beberapa Pilihan)
# Contoh memilih hari berdasarkan angka yang dimasukkan (1 = Senin, 2 = Selasa, dst.):

# arduino
# Copy code
# switch hari
#     case 1:
#         tampilkan "Senin"
#     case 2:
#         tampilkan "Selasa"
#     case 3:
#         tampilkan "Rabu"
#     case 4:
#         tampilkan "Kamis"
#     case 5:
#         tampilkan "Jumat"
#     default:
#         tampilkan "Hari tidak valid"
# Penjelasan:

# Switch-case digunakan untuk memilih salah satu aksi dari berbagai opsi berdasarkan nilai dari variabel hari.
# Jika nilai dari hari cocok dengan salah satu case, maka akan menjalankan aksi yang sesuai.
# Diagram Alur (Flowchart) untuk Algoritma Pemilihan:
# If-else:

# Dimulai dengan Proses untuk mengevaluasi kondisi.
# Jika True, lanjutkan ke aksi yang sesuai.
# Jika False, jalankan aksi alternatif.
# Switch-case:

# Dimulai dengan mengevaluasi variabel yang akan dibandingkan.
# Pilih case yang cocok, atau jika tidak ada yang cocok, jalankan default.
# Contoh Algoritma Pemilihan dalam Python (If-else):
# python
# Copy code
# usia = int(input("Masukkan usia Anda: "))

# if usia >= 18:
#     print("Dewasa, dapat diskon 20%")
# else:
#     print("Anak-anak, tidak dapat diskon")
# Penjelasan:

# Program meminta input usia.
# Kemudian mengevaluasi apakah usia lebih besar atau sama dengan 18.
# Berdasarkan kondisi tersebut, program mencetak apakah orang tersebut dewasa atau anak-anak.
# Keuntungan Algoritma Pemilihan:
# Sederhana dan efektif untuk mengatur alur keputusan.
# Memungkinkan untuk memilih satu dari beberapa opsi yang tersedia.
# Algoritma pemilihan banyak digunakan dalam berbagai aplikasi, mulai dari pengambilan keputusan bisnis, sistem penilaian, hingga pengolahan data dalam program komputer.