# 1. Stack
# Definisi:
# Stack adalah struktur data yang mengikuti prinsip LIFO (Last In, First Out). Artinya, elemen yang dimasukkan terakhir akan dikeluarkan pertama.

# Sifat-Sifat Stack:
# Struktur Data Dinamis:
# Ukuran stack dapat berubah sesuai kebutuhan, yaitu bertambah saat elemen dimasukkan (push) dan berkurang saat elemen dihapus (pop).
# Tidak Memiliki Ukuran Tetap:
# Tidak seperti array, ukuran stack bisa berubah-ubah.
# Memori yang Efisien:
# Hanya menggunakan memori untuk elemen yang ada di dalam stack.
# Operasi Terkait Ukuran:
# Operasi push menambah elemen ke stack, sedangkan pop menghapus elemen dari stack.
# Operasi Utama pada Stack:
# Push: Menambahkan elemen baru di bagian atas stack.
# Pop: Menghapus elemen paling atas dari stack.
# Peek: Mengambil elemen paling atas tanpa menghapusnya.
# IsEmpty: Mengecek apakah stack kosong.
# Size: Mengembalikan jumlah elemen dalam stack.
# Implementasi Stack dalam JavaScript:
# javascript
# Copy code
# class Stack {
#     constructor() {
#         this.items = []; // Array untuk menyimpan elemen
#     }

#     // Menambahkan elemen ke stack
#     push(element) {
#         this.items.push(element);
#     }

#     // Menghapus elemen dari stack
#     pop() {
#         if (this.isEmpty()) {
#             return "Stack is empty";
#         }
#         return this.items.pop();
#     }

#     // Mengambil elemen teratas tanpa menghapusnya
#     peek() {
#         if (this.isEmpty()) {
#             return "Stack is empty";
#         }
#         return this.items[this.items.length - 1];
#     }

#     // Mengecek apakah stack kosong
#     isEmpty() {
#         return this.items.length === 0;
#     }

#     // Mengembalikan ukuran stack
#     size() {
#         return this.items.length;
#     }
# }

# // Contoh penggunaan
# const stack = new Stack();
# stack.push(10);
# stack.push(20);
# console.log(stack.peek()); // Output: 20
# stack.pop();
# console.log(stack.peek()); // Output: 10
# 2. Queue
# Definisi:
# Queue adalah struktur data yang mengikuti prinsip FIFO (First In, First Out). Artinya, elemen yang dimasukkan pertama akan dikeluarkan pertama.

# Fungsi-Fungsi yang Didukung:
# Enqueue: Menambahkan elemen baru ke bagian belakang queue.
# Dequeue: Menghapus elemen dari bagian depan queue.
# Peek/Front: Mengambil elemen depan tanpa menghapusnya.
# IsEmpty: Mengecek apakah queue kosong.
# Size: Mengembalikan jumlah elemen dalam queue.
# Operasi Queue:
# Enqueue (Menambahkan):
# Elemen ditambahkan di belakang queue.
# Dequeue (Menghapus):
# Elemen dihapus dari depan queue.
# Implementasi Queue dalam JavaScript:
# javascript
# Copy code
# class Queue {
#     constructor() {
#         this.items = []; // Array untuk menyimpan elemen
#     }

#     // Menambahkan elemen ke queue
#     enqueue(element) {
#         this.items.push(element);
#     }

#     // Menghapus elemen dari queue
#     dequeue() {
#         if (this.isEmpty()) {
#             return "Queue is empty";
#         }
#         return this.items.shift();
#     }

#     // Mengambil elemen depan tanpa menghapusnya
#     front() {
#         if (this.isEmpty()) {
#             return "Queue is empty";
#         }
#         return this.items[0];
#     }

#     // Mengecek apakah queue kosong
#     isEmpty() {
#         return this.items.length === 0;
#     }

#     // Mengembalikan ukuran queue
#     size() {
#         return this.items.length;
#     }
# }

# // Contoh penggunaan
# const queue = new Queue();
# queue.enqueue(10);
# queue.enqueue(20);
# console.log(queue.front()); // Output: 10
# queue.dequeue();
# console.log(queue.front()); // Output: 20
# Perbedaan Antara Stack dan Queue
# Aspek	Stack	Queue
# Prinsip	Last In, First Out (LIFO)	First In, First Out (FIFO)
# Operasi Utama	Push, Pop	Enqueue, Dequeue
# Penggunaan	Undo-redo, rekursi, backtracking	Antrian layanan, penjadwalan proses
# Kegunaan dalam Kehidupan Nyata
# Stack:

# Browser history (melakukan undo/redo).
# Memproses rekursi.
# Menyimpan operasi matematika dalam kalkulator.
# Queue:

# Sistem antrian (misalnya, antrian bank atau tiket).
# Penjadwalan tugas pada sistem operasi.
# Buffer data, seperti dalam streaming media.