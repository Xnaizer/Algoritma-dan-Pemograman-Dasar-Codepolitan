// pohon atau tree adalah struktur data yang memiliki pola percabangan

// tak sama seperti array linked list stack dan queue yang linier polanya

// binary tree adalah struktur data bentuk percabangan yang maksimal memiliki 2 chilren pada setiap parentnya

//                a           --> root
//          b           c     --> parents
//     x     c      d      e  --> children


// Alasan menggunakan struktur data tree

// Kita akan menyimpan informasi yang mempunyai struktur data berbentuk pohon atau tree, seperti contoh file system komputer.

// Struktur data tree (dengan beberapa algoritma pengurutan) berada pada level menengah untuk pemrosesan akses atau search (lebih cepat dari linked list dan lebih lambat dari array).

// Struktur data tree berada pada level menengah untuk proses insert dan hapus elemen (lebih cepat dari array dan lebih lambat dari linked list tidak berurut).

// Sama seperti linked list dan tidak seperti array, struktur data pohon tidak perlu mengalokasikan ukuran maksimal elemen karena setiap node dihubungkan menggunakan pointer.




// graph adalah representasi gambar dari set objek yang saling terhubung. 

// node ataua vertex adalah simpul atau titik
// line atau edge adalah garis


// Graph adalah struktur data yang terdiri dari simpul (node atau vertex) dan sisi (edge) yang menghubungkan simpul-simpul tersebut. Graph digunakan untuk merepresentasikan hubungan antara objek-objek. Berikut penjelasan mengenai graph berarah, tak berarah, dan berbobot:

// 1. Graph Berarah (Directed Graph)
// Pada graph ini, setiap sisi memiliki arah.
// Sisi (edge) menghubungkan dua simpul, tetapi hanya dapat dilalui dalam satu arah saja (misalnya dari simpul A ke simpul B, tetapi tidak sebaliknya kecuali ada sisi tambahan).
// Direpresentasikan sebagai pasangan terurut, seperti 
// (
// 𝐴
// ,
// 𝐵
// )
// (A,B), yang berarti ada sisi dari A ke B.
// Contoh:
// Representasi hubungan "follower" di media sosial (jika A mengikuti B, belum tentu B mengikuti A).
// Sistem rute jalan satu arah.
// 2. Graph Tak Berarah (Undirected Graph)
// Pada graph ini, sisi tidak memiliki arah.
// Sisi hanya menunjukkan koneksi antara dua simpul, tanpa memperhatikan arah.
// Direpresentasikan sebagai pasangan tak terurut, seperti 
// {
// 𝐴
// ,
// 𝐵
// }
// {A,B}, yang berarti A dan B saling terhubung.
// Contoh:
// Jaringan pertemanan (jika A berteman dengan B, maka B juga berteman dengan A).
// Jaringan jalan dua arah.
// 3. Graph Berbobot (Weighted Graph)
// Pada graph ini, setiap sisi memiliki nilai atau bobot (weight).
// Bobot dapat merepresentasikan jarak, biaya, durasi waktu, atau nilai lain yang terkait dengan koneksi antara simpul-simpul.
// Graph berbobot bisa berupa graph berarah atau tak berarah.
// Direpresentasikan dengan pasangan seperti 
// (
// 𝐴
// ,
// 𝐵
// ,
// 𝑤
// )
// (A,B,w), di mana 
// 𝑤
// w adalah bobot antara simpul A dan B.
// Contoh:
// Jaringan jalan dengan bobot berupa jarak antar kota.
// Jaringan listrik, di mana bobot merepresentasikan kapasitas atau arus.
