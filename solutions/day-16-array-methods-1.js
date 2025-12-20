// Day 16: Array Methods I - SOLUSI
// Status: Selesai

// ============================================
// TODO 1: Shopping Cart - push() dan pop()
// ============================================

let cart = ["Buku", "Pensil"];

// 1a. Tambahkan "Penghapus" ke cart
cart.push("Penghapus");

// 1b. Tambahkan "Pulpen" dan "Penggaris" sekaligus
cart.push("Pulpen", "Penggaris");

// 1c. Hapus item terakhir
let lastItem = cart.pop();

console.log("TODO 1 - Cart:", cart); // ["Buku", "Pensil", "Penghapus", "Pulpen"]
console.log("TODO 1 - Last Item:", lastItem); // "Penggaris"

// ============================================
// TODO 2: Antrian - shift() dan unshift()
// ============================================

let antrian = ["Pelanggan A", "Pelanggan B"];

// 2a. Tambahkan "Pelanggan C" ke akhir antrian
antrian.push("Pelanggan C");

// 2b. Layani pelanggan pertama
let dilayani = antrian.shift();

// 2c. Tambahkan "Pelanggan VIP" ke depan antrian
antrian.unshift("Pelanggan VIP");

console.log("TODO 2 - Antrian:", antrian); // ["Pelanggan VIP", "Pelanggan B", "Pelanggan C"]
console.log("TODO 2 - Dilayani:", dilayani); // "Pelanggan A"

// ============================================
// TODO 3: splice() - Menghapus Item Tertentu
// ============================================

let buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"];

// 3a. Hapus "Mangga" dari array
let indexMangga = buah.indexOf("Mangga");
buah.splice(indexMangga, 1);

// 3b. Hapus 2 elemen mulai dari index 1
let dihapusBuah = buah.splice(1, 2);

console.log("TODO 3 - Buah:", buah); // ["Apel", "Anggur"]
console.log("TODO 3 - Dihapus:", dihapusBuah); // ["Jeruk", "Pisang"]

// ============================================
// TODO 4: splice() - Menambah dan Mengganti
// ============================================

let angka = [1, 2, 5, 6, 7];

// 4a. Sisipkan angka 3 dan 4 di antara 2 dan 5
angka.splice(2, 0, 3, 4);

console.log("TODO 4a - Angka setelah insert:", angka); // [1, 2, 3, 4, 5, 6, 7]

let warna = ["Merah", "Hijau", "Biru", "Kuning"];

// 4b. Ganti "Hijau" dengan "Ungu"
let indexHijau = warna.indexOf("Hijau");
warna.splice(indexHijau, 1, "Ungu");

console.log("TODO 4b - Warna setelah replace:", warna); // ["Merah", "Ungu", "Biru", "Kuning"]

// ============================================
// TODO 5: slice() - Mengambil Sebagian Array
// ============================================

let hewan = ["Kucing", "Anjing", "Kelinci", "Hamster", "Burung"];

// 5a. Ambil elemen index 1 sampai 3
let sebagianHewan = hewan.slice(1, 4);

// 5b. Ambil 2 elemen terakhir
let duaTerakhir = hewan.slice(-2);

// 5c. Buat copy seluruh array
let copyHewan = hewan.slice();

console.log("TODO 5a - Sebagian Hewan:", sebagianHewan); // ["Anjing", "Kelinci", "Hamster"]
console.log("TODO 5b - Dua Terakhir:", duaTerakhir); // ["Hamster", "Burung"]
console.log("TODO 5c - Copy Hewan:", copyHewan); // ["Kucing", "Anjing", "Kelinci", "Hamster", "Burung"]
console.log("TODO 5 - Array asli tetap:", hewan); // ["Kucing", "Anjing", "Kelinci", "Hamster", "Burung"]

// ============================================
// TODO 6: Function removeItem
// ============================================

function removeItem(arr, item) {
    let index = arr.indexOf(item);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}

// Test removeItem
let testArr = ["A", "B", "C", "D"];
console.log("TODO 6 - Remove B:", removeItem([...testArr], "B")); // ["A", "C", "D"]
console.log("TODO 6 - Remove Z:", removeItem([...testArr], "Z")); // ["A", "B", "C", "D"]

// ============================================
// TODO 7: Function insertAt
// ============================================

function insertAt(arr, index, item) {
    arr.splice(index, 0, item);
    return arr;
}

// Test insertAt
console.log("TODO 7 - Insert X at index 2:", insertAt(["A", "B", "C"], 2, "X")); // ["A", "B", "X", "C"]

// ============================================
// TODO 8: Playlist Manager
// ============================================

let playlist = ["Lagu A", "Lagu B", "Lagu C"];

// 8a. Tambahkan "Lagu D" ke akhir playlist
playlist.push("Lagu D");

// 8b. Tambahkan "Intro" ke awal playlist
playlist.unshift("Intro");

// 8c. Hapus lagu di posisi index 2
playlist.splice(2, 1);

// 8d. Ambil 3 lagu pertama
let topThree = playlist.slice(0, 3);

console.log("TODO 8 - Playlist:", playlist); // ["Intro", "Lagu A", "Lagu C", "Lagu D"]
console.log("TODO 8 - Top Three:", topThree); // ["Intro", "Lagu A", "Lagu C"]

// ============================================
// TODO 9: Stack Implementation
// ============================================

let stack = [];

// 9a. Push "Item 1", "Item 2", "Item 3"
stack.push("Item 1");
stack.push("Item 2");
stack.push("Item 3");

// 9b. Pop item teratas
let poppedItem = stack.pop();

// 9c. Peek item teratas
let peekItem = stack[stack.length - 1];
// Alternatif: let peekItem = stack.slice(-1)[0];

console.log("TODO 9 - Stack:", stack); // ["Item 1", "Item 2"]
console.log("TODO 9 - Popped:", poppedItem); // "Item 3"
console.log("TODO 9 - Peek:", peekItem); // "Item 2"

// ============================================
// TODO 10: Array Rotation
// ============================================

function rotateLeft(arr, n) {
    // Handle case when n is larger than array length
    n = n % arr.length;
    // Ambil elemen dari index n sampai akhir, lalu gabungkan dengan elemen awal sampai n
    return arr.slice(n).concat(arr.slice(0, n));
    // Alternatif dengan spread: return [...arr.slice(n), ...arr.slice(0, n)];
}

// Test rotateLeft
console.log("TODO 10 - Rotate [1,2,3,4,5] left by 2:", rotateLeft([1,2,3,4,5], 2)); // [3,4,5,1,2]
console.log("TODO 10 - Rotate [A,B,C,D] left by 1:", rotateLeft(["A","B","C","D"], 1)); // ["B","C","D","A"]

// ============================================
// PENJELASAN TAMBAHAN
// ============================================

/*
RINGKASAN METHOD:

1. push(item) - Menambah di akhir, return: panjang baru
2. pop() - Menghapus dari akhir, return: elemen yang dihapus
3. unshift(item) - Menambah di awal, return: panjang baru
4. shift() - Menghapus dari awal, return: elemen yang dihapus
5. splice(start, deleteCount, ...items) - Hapus/tambah di posisi tertentu, return: array elemen yang dihapus
6. slice(start, end) - Copy sebagian array, return: array baru (TIDAK mengubah array asli)

TIPS:
- push/pop = Stack (LIFO - Last In First Out)
- push/shift = Queue (FIFO - First In First Out)
- splice = untuk modifikasi di tengah array
- slice = untuk mengambil copy tanpa mengubah asli
*/
