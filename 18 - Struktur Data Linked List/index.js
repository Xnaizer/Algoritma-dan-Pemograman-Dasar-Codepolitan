// Linked List atau senarai adalah salah satu bentuk struktur data yang berisi kumpulan data yang tersusun secara sekuensial, saling terhubung, dinamis dan terbatas 

// suatu simpul node yang dikaitakn dengan simpul yang lain dalam suatu urutan tertentu

// Linked List (atau Senarai Berantai) adalah salah satu bentuk struktur data yang terdiri dari kumpulan simpul (node) yang saling terhubung secara sekuensial. Berbeda dengan array, elemen-elemen dalam linked list tidak disimpan dalam blok memori yang berurutan, tetapi terhubung melalui pointer atau referensi.

// Karakteristik Linked List
// Dinamisme:

// Linked List bersifat dinamis, artinya ukurannya dapat bertambah atau berkurang sesuai kebutuhan tanpa harus mengalokasikan ulang memori.
// Struktur Node:

// Setiap simpul (node) biasanya terdiri dari dua bagian:
// Data: Berisi nilai atau informasi yang disimpan di simpul tersebut.
// Pointer (Referensi): Menunjuk ke simpul berikutnya dalam linked list.
// Tidak Berbatas:

// Elemen-elemen dapat ditambahkan tanpa batasan, selama memori masih tersedia.
// Tidak Berurutan dalam Memori:

// Data dalam linked list disimpan secara acak di memori, tetapi terhubung melalui pointer yang memastikan urutan tertentu.
// Jenis-jenis Linked List
// Singly Linked List:

// Setiap node hanya memiliki satu pointer yang menunjuk ke node berikutnya.
// Contoh: A → B → C → null
// Doubly Linked List:

// Setiap node memiliki dua pointer:
// Satu menunjuk ke node sebelumnya.
// Satu lagi menunjuk ke node berikutnya.
// Contoh: null ← A ↔ B ↔ C → null
// Circular Linked List:

// Node terakhir menunjuk kembali ke node pertama, membentuk lingkaran.
// Berlaku untuk singly atau doubly linked list.
// Operasi Dasar Linked List
// Insert (Menambah Node):
// Menambahkan node baru di awal, tengah, atau akhir linked list.
// Delete (Menghapus Node):
// Menghapus node tertentu berdasarkan posisi atau nilai.
// Traversal (Menelusuri Node):
// Mengakses dan membaca semua node dalam linked list.
// Search (Mencari Node):
// Mencari node dengan nilai tertentu.
// Kelebihan Linked List
// Ukurannya fleksibel karena dapat bertambah atau berkurang secara dinamis.
// Operasi insert dan delete lebih efisien dibandingkan array, terutama jika melibatkan banyak elemen.
// Kekurangan Linked List
// Penggunaan memori lebih besar karena memerlukan pointer tambahan untuk setiap node.
// Traversal lebih lambat dibandingkan array karena akses data tidak langsung (perlu menelusuri node satu per satu).
// Tidak efisien untuk pencarian data (searching) karena tidak mendukung akses langsung ke elemen tertentu.
// Contoh Singly Linked List dalam JavaScript
// javascript
// Copy code
// class Node {
//     constructor(data) {
//         this.data = data;      // Data yang disimpan
//         this.next = null;      // Pointer ke node berikutnya
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;      // Node pertama dalam linked list
//     }

//     // Menambahkan node baru di akhir linked list
//     append(data) {
//         const newNode = new Node(data);
//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next !== null) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     // Menampilkan semua data di linked list
//     display() {
//         let current = this.head;
//         while (current !== null) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// // Contoh penggunaan
// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);

// list.display(); // Output: 10, 20, 30
// Linked List sangat berguna dalam kasus di mana jumlah data sering berubah atau ketika struktur data memerlukan elemen-elemen yang terhubung secara fleksibel.

