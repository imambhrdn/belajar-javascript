# Day 16: Array Methods I

## Tujuan Pembelajaran
Memahami dan menggunakan method array untuk menambah dan menghapus elemen.

---

## 1. push() - Menambah di Akhir

Method `push()` menambahkan satu atau lebih elemen ke **akhir** array dan mengembalikan panjang array baru.

```javascript
let buah = ["Apel", "Jeruk"];
let panjangBaru = buah.push("Mangga");

console.log(buah);        // ["Apel", "Jeruk", "Mangga"]
console.log(panjangBaru); // 3

// Menambah multiple item
buah.push("Pisang", "Anggur");
console.log(buah); // ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"]
```

---

## 2. pop() - Menghapus dari Akhir

Method `pop()` menghapus elemen **terakhir** dari array dan mengembalikan elemen yang dihapus.

```javascript
let buah = ["Apel", "Jeruk", "Mangga"];
let dihapus = buah.pop();

console.log(dihapus); // "Mangga"
console.log(buah);    // ["Apel", "Jeruk"]
```

---

## 3. unshift() - Menambah di Awal

Method `unshift()` menambahkan satu atau lebih elemen ke **awal** array dan mengembalikan panjang array baru.

```javascript
let buah = ["Jeruk", "Mangga"];
let panjangBaru = buah.unshift("Apel");

console.log(buah);        // ["Apel", "Jeruk", "Mangga"]
console.log(panjangBaru); // 3

// Menambah multiple item
buah.unshift("Pisang", "Anggur");
console.log(buah); // ["Pisang", "Anggur", "Apel", "Jeruk", "Mangga"]
```

---

## 4. shift() - Menghapus dari Awal

Method `shift()` menghapus elemen **pertama** dari array dan mengembalikan elemen yang dihapus.

```javascript
let buah = ["Apel", "Jeruk", "Mangga"];
let dihapus = buah.shift();

console.log(dihapus); // "Apel"
console.log(buah);    // ["Jeruk", "Mangga"]
```

---

## 5. splice() - Menghapus/Menambah di Posisi Tertentu

Method `splice()` mengubah isi array dengan menghapus atau mengganti elemen yang ada dan/atau menambahkan elemen baru.

**Syntax:** `array.splice(start, deleteCount, item1, item2, ...)`

```javascript
// Menghapus elemen
let buah = ["Apel", "Jeruk", "Mangga", "Pisang"];
let dihapus = buah.splice(1, 2); // Mulai index 1, hapus 2 elemen

console.log(dihapus); // ["Jeruk", "Mangga"]
console.log(buah);    // ["Apel", "Pisang"]

// Menambah elemen tanpa menghapus
let angka = [1, 2, 5, 6];
angka.splice(2, 0, 3, 4); // Index 2, hapus 0, tambah 3 dan 4

console.log(angka); // [1, 2, 3, 4, 5, 6]

// Mengganti elemen
let warna = ["Merah", "Hijau", "Biru"];
warna.splice(1, 1, "Kuning"); // Index 1, hapus 1, tambah "Kuning"

console.log(warna); // ["Merah", "Kuning", "Biru"]
```

---

## 6. slice() - Mengambil Sebagian Array (Tanpa Mengubah Asli)

Method `slice()` mengembalikan **salinan** sebagian array ke array baru. Array asli **tidak berubah**.

**Syntax:** `array.slice(start, end)` - end tidak termasuk

```javascript
let buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"];

// Mengambil index 1 sampai 3 (tidak termasuk 4)
let sebagian = buah.slice(1, 4);
console.log(sebagian); // ["Jeruk", "Mangga", "Pisang"]
console.log(buah);     // ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"] (tidak berubah)

// Tanpa parameter end - sampai akhir
let dariIndex2 = buah.slice(2);
console.log(dariIndex2); // ["Mangga", "Pisang", "Anggur"]

// Index negatif - dari belakang
let duaTerakhir = buah.slice(-2);
console.log(duaTerakhir); // ["Pisang", "Anggur"]

// Copy seluruh array
let copyBuah = buah.slice();
console.log(copyBuah); // ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"]
```

---

## Perbandingan splice() vs slice()

| Aspek | splice() | slice() |
|-------|----------|---------|
| Mengubah array asli | Ya | Tidak |
| Return value | Elemen yang dihapus | Array baru (salinan) |
| Bisa menambah elemen | Ya | Tidak |
| Bisa menghapus elemen | Ya | Tidak (hanya copy) |

---

## Contoh Penggunaan Praktis

### Shopping Cart
```javascript
let cart = [];

// Tambah item
cart.push("Buku");
cart.push("Pensil");
cart.push("Penghapus");
console.log(cart); // ["Buku", "Pensil", "Penghapus"]

// Hapus item terakhir
cart.pop();
console.log(cart); // ["Buku", "Pensil"]

// Hapus item tertentu
let indexPensil = cart.indexOf("Pensil");
cart.splice(indexPensil, 1);
console.log(cart); // ["Buku"]
```

### Antrian (Queue)
```javascript
let antrian = [];

// Masuk antrian (dari belakang)
antrian.push("Pelanggan A");
antrian.push("Pelanggan B");
antrian.push("Pelanggan C");

// Keluar antrian (dari depan)
let dilayani = antrian.shift();
console.log(dilayani); // "Pelanggan A"
console.log(antrian);  // ["Pelanggan B", "Pelanggan C"]
```

### Stack (Tumpukan)
```javascript
let tumpukan = [];

// Push ke stack
tumpukan.push("Buku 1");
tumpukan.push("Buku 2");
tumpukan.push("Buku 3");

// Pop dari stack (LIFO - Last In First Out)
let teratas = tumpukan.pop();
console.log(teratas);   // "Buku 3"
console.log(tumpukan);  // ["Buku 1", "Buku 2"]
```

---

## Tips Mengingat

- **push/pop** = operasi di **akhir** array
- **shift/unshift** = operasi di **awal** array
- **splice** = operasi di **posisi tertentu** (mengubah array asli)
- **slice** = mengambil **salinan** sebagian array (tidak mengubah array asli)

---

*Selamat belajar! Praktikkan dengan mengerjakan soal di file `array-methods-1.js`*
