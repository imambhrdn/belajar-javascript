// Day 16: Array Methods I
// Student: Imam Baharudin
// Status: [ ] Belum dimulai [ ] Sedang dikerjakan [ ] Selesai

// ============================================
// TODO 1: Shopping Cart - push() dan pop()
// Buat shopping cart dengan operasi tambah dan hapus
// ============================================

let cart = ["Buku", "Pensil"];

// 1a. Tambahkan "Penghapus" ke cart menggunakan push()
// Tulis kode di bawah ini:
cart.push('Penghapus')

// 1b. Tambahkan "Pulpen" dan "Penggaris" sekaligus menggunakan push()
// Tulis kode di bawah ini:
cart.push('Pulpen', 'Penggaris')

// 1c. Hapus item terakhir dari cart menggunakan pop() dan simpan ke variabel lastItem
// Tulis kode di bawah ini:
cart.pop()
let lastItem = cart.pop

console.log("TODO 1 - Cart:", cart);
console.log("TODO 1 - Last Item:", typeof lastItem !== 'undefined' ? lastItem : "belum diisi");

// ============================================
// TODO 2: Antrian - shift() dan unshift()
// Simulasikan sistem antrian pelanggan
// ============================================

let antrian = ["Pelanggan A", "Pelanggan B"];

// 2a. Tambahkan "Pelanggan C" ke akhir antrian
// Tulis kode di bawah ini:
antrian.push('Pelanggan C')

// 2b. Layani pelanggan pertama (hapus dari depan) dan simpan ke variabel dilayani
// Tulis kode di bawah ini:
antrian.shift()
let dilayani = antrian.shift()

// 2c. Tambahkan "Pelanggan VIP" ke depan antrian menggunakan unshift()
// Tulis kode di bawah ini:
antrian.unshift('Pelanggan VIP')

console.log("TODO 2 - Antrian:", antrian);
console.log("TODO 2 - Dilayani:", typeof dilayani !== 'undefined' ? dilayani : "belum diisi");

// ============================================
// TODO 3: splice() - Menghapus Item Tertentu
// Hapus elemen dari posisi tertentu
// ============================================

let buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"];

// 3a. Hapus "Mangga" dari array menggunakan splice()
// Hint: Cari index "Mangga" dulu dengan indexOf(), lalu gunakan splice()
// Tulis kode di bawah ini:
buah.splice(buah.indexOf('Mangga'), 1)

// 3b. Hapus 2 elemen mulai dari index 1 dan simpan ke variabel dihapusBuah
// Tulis kode di bawah ini:
let dihapusBuah = buah.splice(1, 2)

console.log("TODO 3 - Buah:", buah);
console.log("TODO 3 - Dihapus:", typeof dihapusBuah !== 'undefined' ? dihapusBuah : "belum diisi");

// ============================================
// TODO 4: splice() - Menambah dan Mengganti
// Gunakan splice untuk insert dan replace
// ============================================

let angka = [1, 2, 5, 6, 7];

// 4a. Sisipkan angka 3 dan 4 di antara 2 dan 5 menggunakan splice()
// Hint: splice(index, 0, item1, item2) untuk insert tanpa hapus
// Tulis kode di bawah ini:
angka.splice(2, 0, 3, 4)

console.log("TODO 4a - Angka setelah insert:", angka);

let warna = ["Merah", "Hijau", "Biru", "Kuning"];

// 4b. Ganti "Hijau" dengan "Ungu" menggunakan splice()
// Tulis kode di bawah ini:
warna.splice(1, 1, 'Ungu')

console.log("TODO 4b - Warna setelah replace:", warna);

// ============================================
// TODO 5: slice() - Mengambil Sebagian Array
// Gunakan slice untuk copy sebagian array
// ============================================

let hewan = ["Kucing", "Anjing", "Kelinci", "Hamster", "Burung"];

// 5a. Ambil elemen index 1 sampai 3 (tidak termasuk 4) ke variabel sebagianHewan
// Tulis kode di bawah ini:
sebagianHewan = hewan.slice(0, 3)

console.log(sebagianHewan)

// 5b. Ambil 2 elemen terakhir ke variabel duaTerakhir (gunakan index negatif)
// Tulis kode di bawah ini:
duaTerakhir = hewan.slice(-2)

// 5c. Buat copy seluruh array hewan ke variabel copyHewan
// Tulis kode di bawah ini:
copyHewan = hewan.slice()

console.log("TODO 5a - Sebagian Hewan:", typeof sebagianHewan !== 'undefined' ? sebagianHewan : "belum diisi");
console.log("TODO 5b - Dua Terakhir:", typeof duaTerakhir !== 'undefined' ? duaTerakhir : "belum diisi");
console.log("TODO 5c - Copy Hewan:", typeof copyHewan !== 'undefined' ? copyHewan : "belum diisi");
console.log("TODO 5 - Array asli tetap:", hewan);

// ============================================
// TODO 6: Function removeItem
// Buat function untuk menghapus item dari array
// ============================================

// Buat function removeItem(arr, item) yang:
// - Menerima array dan item yang akan dihapus
// - Menghapus item tersebut dari array
// - Mengembalikan array yang sudah dimodifikasi
// - Jika item tidak ditemukan, kembalikan array tanpa perubahan

// Tulis kode di bawah ini:
const removeItem = (arr, item) => {
    let index = arr.indexOf(item);
    if (index !== 0) {
        arr.splice(index, 1)
    }
    return arr
}

// Test removeItem
let testArr = ["A", "B", "C", "D"];
if (typeof removeItem === 'function') {
    console.log("TODO 6 - Remove B:", removeItem([...testArr], "B"));
    console.log("TODO 6 - Remove Z:", removeItem([...testArr], "Z"));
} else {
    console.log("TODO 6 - Function removeItem belum dibuat");
}

// ============================================
// TODO 7: Function insertAt
// Buat function untuk menyisipkan item di posisi tertentu
// ============================================

// Buat function insertAt(arr, index, item) yang:
// - Menerima array, index posisi, dan item yang akan disisipkan
// - Menyisipkan item di posisi index tersebut
// - Mengembalikan array yang sudah dimodifikasi

// Tulis kode di bawah ini:
function insertAt(arr, index, item) {
    arr.splice(index, 0, item)
    return arr
}

// Test insertAt
if (typeof insertAt === 'function') {
    console.log("TODO 7 - Insert X at index 2:", insertAt(["A", "B", "C"], 2, "X"));
} else {
    console.log("TODO 7 - Function insertAt belum dibuat");
}

// ============================================
// TODO 8: Playlist Manager
// Buat sistem playlist musik sederhana
// ============================================

let playlist = ["Lagu A", "Lagu B", "Lagu C"];

// 8a. Tambahkan "Lagu D" ke akhir playlist
// Tulis kode di bawah ini:
playlist.push('Lagu D')

// 8b. Tambahkan "Intro" ke awal playlist
// Tulis kode di bawah ini:
playlist.unshift('Intro')

// 8c. Hapus lagu di posisi index 2
// Tulis kode di bawah ini:
playlist.splice(2, 1)

// 8d. Ambil 3 lagu pertama ke variabel topThree menggunakan slice()
// Tulis kode di bawah ini:
topThree = playlist.slice(0, 2)

console.log("TODO 8 - Playlist:", playlist);
console.log("TODO 8 - Top Three:", typeof topThree !== 'undefined' ? topThree : "belum diisi");

// ============================================
// TODO 9: Stack Implementation
// Implementasikan operasi stack (LIFO)
// ============================================

let stack = [];

// 9a. Push "Item 1", "Item 2", "Item 3" ke stack (satu per satu)
// Tulis kode di bawah ini:
stack.push('Item 1')
stack.push('Item 2')
stack.push('Item 3')

// 9b. Pop item teratas dan simpan ke variabel poppedItem
// Tulis kode di bawah ini:
let poppedItem = stack.pop()

// 9c. Lihat item teratas tanpa menghapus (peek) dan simpan ke variabel peekItem
// Hint: Gunakan slice(-1)[0] atau akses index terakhir
// Tulis kode di bawah ini:
let peekItem = stack[stack.length - 1]

console.log("TODO 9 - Stack:", stack);
console.log("TODO 9 - Popped:", typeof poppedItem !== 'undefined' ? poppedItem : "belum diisi");
console.log("TODO 9 - Peek:", typeof peekItem !== 'undefined' ? peekItem : "belum diisi");

// ============================================
// TODO 10: Array Rotation
// Rotasi elemen array
// ============================================

// Buat function rotateLeft(arr, n) yang:
// - Merotasi array ke kiri sebanyak n posisi
// - Contoh: rotateLeft([1,2,3,4,5], 2) => [3,4,5,1,2]
// Hint: Gunakan kombinasi slice() dan spread operator atau concat()

// Tulis kode di bawah ini:
function rotateLeft(arr, n) {
    n = n % arr.length
    return arr.slice(n).concat((arr.slice(0, n)))

}

// Test rotateLeft
if (typeof rotateLeft === 'function') {
    console.log("TODO 10 - Rotate [1,2,3,4,5] left by 2:", rotateLeft([1, 2, 3, 4, 5], 2));
    console.log("TODO 10 - Rotate [A,B,C,D] left by 1:", rotateLeft(["A", "B", "C", "D"], 1));
} else {
    console.log("TODO 10 - Function rotateLeft belum dibuat");
}

// ============================================
// TESTING SECTION (Jangan diubah!)
// ============================================

console.log("\n========== TESTING ==========\n");

let testResults = {
    todo1: cart.length === 4 && typeof lastItem !== 'undefined',
    todo2: antrian.includes("Pelanggan VIP") && typeof dilayani !== 'undefined',
    todo3: !buah.includes("Mangga") || typeof dihapusBuah !== 'undefined',
    todo4: angka.includes(3) && angka.includes(4) && warna.includes("Ungu"),
    todo5: typeof sebagianHewan !== 'undefined' && typeof duaTerakhir !== 'undefined' && typeof copyHewan !== 'undefined',
    todo6: typeof removeItem === 'function',
    todo7: typeof insertAt === 'function',
    todo8: playlist.includes("Intro") && typeof topThree !== 'undefined',
    todo9: typeof poppedItem !== 'undefined' && typeof peekItem !== 'undefined',
    todo10: typeof rotateLeft === 'function'
};

let passed = 0;
let total = Object.keys(testResults).length;

for (let [todo, result] of Object.entries(testResults)) {
    let status = result ? "PASSED" : "FAILED";
    let emoji = result ? "[v]" : "[x]";
    console.log(`${emoji} ${todo.toUpperCase()}: ${status}`);
    if (result) passed++;
}

console.log(`\n========== SCORE: ${passed}/${total} ==========`);

if (passed === total) {
    console.log("Selamat! Semua TODO berhasil diselesaikan!");
    console.log("Jalankan: node checker.js exercises/day-16/array-methods-1.js 16");
} else {
    console.log("Masih ada TODO yang belum selesai. Semangat!");
}
