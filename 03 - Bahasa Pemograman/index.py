# Bahasa Pemograman adalah instruksi standar untuk memerintahkan komputer agar bisa menjalankan fungsi tertentu

# Fungsi bahasa pemograman adalah untuk memerintah agar komputer bisa mengolah data sesuai yang kita inginkan. contoh program lampu lalu lintas sesuai kehendak kita.

# Generasi Bahasa Pemograman

# Gen 1 -> Machine Learning = Biner ( 1 dan 0 )
# Gen 2 -> Assembly language = kode kode tertentu( mov, rax,rdx)

# Gen 3 -> procedural Language = menggunakan bahasa manusia yang masih mencantumkan symbol2 tertentu
# Gen 4 -> fourth generation language = structured query languange atau SQL yang sekarang digunakan untuk server database
# Gen 6 -> Programming Language Based Object Oriented & web developing

# - tingkatan bahasa pemograman

# 1. Bahasa tingkat rendah = Machine Language
# 2. Bahasa tingkat menengah = assembly
# 3. Bahasa tingkat tinggi =  C++, VB, Delphi, Pascal
# 4. Bahasa Tingkat Object -> very high level/ Oriented dan visual = Java, JSP


# Proses pembuatan program :
# 1. Komplikasi
# 2. interpreter
# 3. Komplikasi sekaligus interpretasi

# 1. Kompilasi
# Penjelasan:
# Dalam metode ini, seluruh kode program diterjemahkan sekaligus menjadi bahasa mesin oleh kompilator sebelum dijalankan. Kompilasi menghasilkan file eksekusi yang dapat dijalankan tanpa memerlukan sumber kode.

# Proses:
# Kode Sumber → Kompilator → File Eksekusi (binary)
# Kelebihan:
# Eksekusi program lebih cepat karena tidak perlu penerjemahan saat runtime.
# Program dapat dijalankan di komputer tanpa memerlukan kompilator.
# Kekurangan:
# Harus dikompilasi ulang jika ada perubahan kode sumber.
# Kompilasi bisa memakan waktu.
# Contoh:
# Bahasa pemrograman seperti C, C++ menggunakan proses ini.

# c
# Copy code
# #include <stdio.h>
# int main() {
#     printf("Hello, World!\n");
#     return 0;
# }
# File ini dikompilasi menjadi file eksekusi (misalnya program.exe), yang dapat dijalankan langsung.

# 2. Interpreter
# Penjelasan:
# Dalam metode ini, program diterjemahkan baris demi baris langsung ke bahasa mesin saat dijalankan. Tidak ada file eksekusi tetap yang dihasilkan.

# Proses:
# Kode Sumber → Interpreter → Eksekusi Langsung
# Kelebihan:
# Tidak perlu kompilasi ulang saat ada perubahan kode.
# Lebih mudah digunakan untuk debugging karena eksekusi baris demi baris.
# Kekurangan:
# Eksekusi lebih lambat dibandingkan program yang dikompilasi.
# Memerlukan interpreter untuk menjalankan program.
# Contoh:
# Bahasa seperti Python, Ruby, PHP menggunakan metode ini.

# python
# Copy code
# print("Hello, World!")
# Program ini akan langsung dijalankan dengan interpreter Python tanpa melalui proses kompilasi.

# 3. Kompilasi sekaligus Interpretasi
# Penjelasan:
# Menggabungkan kedua metode di atas. Dalam proses ini, kode sumber dikompilasi menjadi bytecode (bentuk kode mesin yang lebih sederhana, tapi tidak langsung bisa dijalankan). Bytecode ini kemudian dijalankan oleh interpreter atau mesin virtual.

# Proses:
# Kode Sumber → Kompilator → Bytecode → Interpreter → Eksekusi
# Kelebihan:
# Kecepatan eksekusi lebih baik daripada interpreter murni.
# Portabilitas lebih tinggi karena bytecode dapat dijalankan di platform berbeda selama interpreter tersedia.
# Kekurangan:
# Prosesnya lebih kompleks dibandingkan kedua metode sebelumnya.
# Contoh:
# Bahasa seperti Java menggunakan metode ini.

# java
# Copy code
# public class HelloWorld {
#     public static void main(String[] args) {
#         System.out.println("Hello, World!");
#     }
# }
# Kode ini akan dikompilasi menjadi bytecode (HelloWorld.class) oleh javac. Bytecode kemudian dijalankan oleh Java Virtual Machine (JVM) dengan perintah java HelloWorld.

# Perbedaan Utama:

# Metode	Hasil Akhir	Kecepatan Eksekusi	Portabilitas
# Kompilasi	File eksekusi	Cepat	Terbatas
# Interpreter	Eksekusi langsung	Lambat	Tinggi
# Kompilasi + Interpretasi	Bytecode + Interpreter	Sedang	Sangat Tinggi
