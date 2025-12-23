# Day 18: Array Methods II (filter, find, reduce, some, every)

## Tujuan Pembelajaran
Memahami method array lanjutan untuk menyaring, mencari, menggabungkan, dan mengecek kondisi pada array.

---

## Apa yang akan dipelajari?

1. `filter()` - Menyaring elemen berdasarkan kondisi
2. `find()` - Mencari satu elemen yang memenuhi kondisi
3. `reduce()` - Menggabungkan/mereduksi semua elemen menjadi satu nilai
4. `some()` - Mengecek apakah ADA elemen yang memenuhi kondisi
5. `every()` - Mengecek apakah SEMUA elemen memenuhi kondisi

---

## 1. filter() - Menyaring Array

### Apa itu filter()?

`filter()` membuat array BARU yang berisi elemen-elemen yang lolos dari kondisi tertentu.

**Analogi:** Bayangkan kamu punya sekantong buah campuran dan ingin mengambil HANYA buah apel saja.

```
Kantong buah: ["Apel", "Jeruk", "Apel", "Mangga", "Apel"]

filter(buah => buah === "Apel") akan:
1. Cek "Apel" - LOLOS ✅
2. Cek "Jeruk" - TIDAK LOLOS ❌
3. Cek "Apel" - LOLOS ✅
4. Cek "Mangga" - TIDAK LOLOS ❌
5. Cek "Apel" - LOLOS ✅

Hasil: ["Apel", "Apel", "Apel"]
```

### Syntax Dasar

```javascript
let hasilFilter = array.filter(function(elemen) {
    return kondisi; // return true = masuk, false = tidak masuk
});
```

### Contoh 1: Filter Angka Genap

```javascript
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let genap = angka.filter(function(num) {
    return num % 2 === 0; // true jika genap
});

console.log(genap); // [2, 4, 6, 8, 10]
```

**Step by step:**
```
num = 1  -> 1 % 2 === 0 ? false -> SKIP
num = 2  -> 2 % 2 === 0 ? true  -> MASUK
num = 3  -> 3 % 2 === 0 ? false -> SKIP
num = 4  -> 4 % 2 === 0 ? true  -> MASUK
... dan seterusnya
```

### Contoh 2: Filter dengan Arrow Function

```javascript
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Arrow function (lebih singkat)
let genap = angka.filter(num => num % 2 === 0);
console.log(genap); // [2, 4, 6, 8, 10]

// Filter angka lebih dari 5
let lebihDari5 = angka.filter(num => num > 5);
console.log(lebihDari5); // [6, 7, 8, 9, 10]
```

### Contoh 3: Filter Array of Objects

```javascript
let products = [
    { name: "Laptop", price: 15000000 },
    { name: "Mouse", price: 150000 },
    { name: "Keyboard", price: 500000 },
    { name: "Monitor", price: 3000000 }
];

// Filter produk dengan harga > 1 juta
let expensive = products.filter(product => product.price > 1000000);
console.log(expensive);
// [{ name: "Laptop", price: 15000000 }, { name: "Monitor", price: 3000000 }]
```

### Perbedaan filter() vs forEach()

```javascript
let angka = [1, 2, 3, 4, 5];

// forEach - tidak return apa-apa (undefined)
let hasil1 = angka.forEach(n => n * 2);
console.log(hasil1); // undefined

// filter - return array BARU
let hasil2 = angka.filter(n => n > 2);
console.log(hasil2); // [3, 4, 5]
```

---

## 2. find() - Mencari Satu Elemen

### Apa itu find()?

`find()` mencari dan mengembalikan elemen PERTAMA yang memenuhi kondisi. Jika tidak ada, return `undefined`.

**Analogi:** Bayangkan kamu mencari teman bernama "Ani" di kerumunan. Begitu ketemu, langsung berhenti mencari.

```
Kerumunan: ["Budi", "Citra", "Ani", "Dodi", "Ani"]

find(nama => nama === "Ani") akan:
1. Cek "Budi" - bukan
2. Cek "Citra" - bukan
3. Cek "Ani" - KETEMU! STOP!

Hasil: "Ani" (yang pertama ditemukan)
```

### Syntax Dasar

```javascript
let hasil = array.find(function(elemen) {
    return kondisi; // return true = ditemukan
});
```

### Contoh 1: Cari Angka Tertentu

```javascript
let angka = [5, 12, 8, 130, 44];

// Cari angka pertama yang > 10
let ditemukan = angka.find(num => num > 10);
console.log(ditemukan); // 12 (yang pertama > 10)

// Cari angka yang > 200
let tidakAda = angka.find(num => num > 200);
console.log(tidakAda); // undefined (tidak ada)
```

### Contoh 2: Cari Object dalam Array

```javascript
let users = [
    { id: 1, name: "Budi", age: 25 },
    { id: 2, name: "Ani", age: 30 },
    { id: 3, name: "Citra", age: 28 }
];

// Cari user dengan id = 2
let user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Ani", age: 30 }

// Cari user dengan nama "Citra"
let citra = users.find(u => u.name === "Citra");
console.log(citra); // { id: 3, name: "Citra", age: 28 }
```

### Perbedaan find() vs filter()

```javascript
let angka = [5, 12, 8, 130, 44];

// find() - return SATU elemen (atau undefined)
let satu = angka.find(n => n > 10);
console.log(satu); // 12

// filter() - return ARRAY (semua yang lolos)
let semua = angka.filter(n => n > 10);
console.log(semua); // [12, 130, 44]
```

---

## 3. reduce() - Menggabungkan Menjadi Satu Nilai

### Apa itu reduce()?

`reduce()` mengubah semua elemen array menjadi SATU nilai dengan cara "mengakumulasi" dari kiri ke kanan.

**Analogi:** Bayangkan kamu punya tumpukan uang kertas dan ingin menghitung TOTAL.

```
Tumpukan: [10000, 20000, 5000, 15000]

reduce akan:
1. Mulai dengan total = 0
2. total = 0 + 10000 = 10000
3. total = 10000 + 20000 = 30000
4. total = 30000 + 5000 = 35000
5. total = 35000 + 15000 = 50000

Hasil: 50000
```

### Syntax Dasar

```javascript
let hasil = array.reduce(function(akumulator, elemenSekarang) {
    return akumulatorBaru;
}, nilaiAwal);
```

**Parameter:**
- `akumulator` = nilai yang terus diakumulasi
- `elemenSekarang` = elemen yang sedang diproses
- `nilaiAwal` = nilai awal akumulator (biasanya 0 untuk penjumlahan)

### Contoh 1: Menghitung Total

```javascript
let angka = [1, 2, 3, 4, 5];

let total = angka.reduce(function(acc, num) {
    return acc + num;
}, 0);

console.log(total); // 15
```

**Step by step:**
```
Awal: acc = 0
Step 1: acc = 0 + 1 = 1
Step 2: acc = 1 + 2 = 3
Step 3: acc = 3 + 3 = 6
Step 4: acc = 6 + 4 = 10
Step 5: acc = 10 + 5 = 15
Hasil: 15
```

### Contoh 2: Dengan Arrow Function

```javascript
let angka = [1, 2, 3, 4, 5];

// Cara singkat
let total = angka.reduce((acc, num) => acc + num, 0);
console.log(total); // 15
```

### Contoh 3: Menghitung Total Harga

```javascript
let cart = [
    { name: "Buku", price: 50000, qty: 2 },
    { name: "Pensil", price: 5000, qty: 5 },
    { name: "Penghapus", price: 3000, qty: 3 }
];

let totalHarga = cart.reduce((total, item) => {
    return total + (item.price * item.qty);
}, 0);

console.log(totalHarga); // 50000*2 + 5000*5 + 3000*3 = 134000
```

### Contoh 4: Mencari Nilai Maximum

```javascript
let angka = [23, 45, 12, 67, 34];

let max = angka.reduce((maximum, num) => {
    return num > maximum ? num : maximum;
}, angka[0]);

console.log(max); // 67
```

**Step by step:**
```
Awal: maximum = 23 (angka[0])
Step 1: 23 > 23? false -> maximum = 23
Step 2: 45 > 23? true  -> maximum = 45
Step 3: 12 > 45? false -> maximum = 45
Step 4: 67 > 45? true  -> maximum = 67
Step 5: 34 > 67? false -> maximum = 67
Hasil: 67
```

### Contoh 5: Menghitung Frekuensi

```javascript
let buah = ["apel", "jeruk", "apel", "mangga", "jeruk", "apel"];

let frekuensi = buah.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
}, {});

console.log(frekuensi); // { apel: 3, jeruk: 2, mangga: 1 }
```

---

## 4. some() - Apakah ADA yang Memenuhi?

### Apa itu some()?

`some()` mengecek apakah **setidaknya satu** elemen memenuhi kondisi. Return `true` atau `false`.

**Analogi:** "Apakah ADA siswa yang lulus?" - cukup 1 orang lulus, jawabannya sudah TRUE.

```
Nilai: [45, 60, 30, 75, 40]
Lulus jika >= 60

some(nilai => nilai >= 60) akan:
1. Cek 45 >= 60? false
2. Cek 60 >= 60? true -> STOP! Return true

Hasil: true (ada yang lulus)
```

### Syntax Dasar

```javascript
let adaYangLolos = array.some(function(elemen) {
    return kondisi;
});
```

### Contoh 1: Cek Apakah Ada Nilai Genap

```javascript
let angka = [1, 3, 5, 7, 9];

let adaGenap = angka.some(num => num % 2 === 0);
console.log(adaGenap); // false (semua ganjil)

let angka2 = [1, 3, 4, 7, 9];
let adaGenap2 = angka2.some(num => num % 2 === 0);
console.log(adaGenap2); // true (ada 4)
```

### Contoh 2: Cek Apakah Ada User Admin

```javascript
let users = [
    { name: "Budi", role: "user" },
    { name: "Ani", role: "admin" },
    { name: "Citra", role: "user" }
];

let adaAdmin = users.some(user => user.role === "admin");
console.log(adaAdmin); // true
```

### Contoh 3: Validasi Input

```javascript
let inputs = ["nama@email.com", "password123", ""];

// Cek apakah ada input yang kosong
let adaKosong = inputs.some(input => input === "");
console.log(adaKosong); // true

if (adaKosong) {
    console.log("Harap isi semua field!");
}
```

---

## 5. every() - Apakah SEMUA Memenuhi?

### Apa itu every()?

`every()` mengecek apakah **semua** elemen memenuhi kondisi. Return `true` atau `false`.

**Analogi:** "Apakah SEMUA siswa lulus?" - jika ada 1 saja yang tidak lulus, jawabannya FALSE.

```
Nilai: [75, 80, 65, 90, 85]
Lulus jika >= 60

every(nilai => nilai >= 60) akan:
1. Cek 75 >= 60? true
2. Cek 80 >= 60? true
3. Cek 65 >= 60? true
4. Cek 90 >= 60? true
5. Cek 85 >= 60? true

Hasil: true (semua lulus)
```

### Syntax Dasar

```javascript
let semuaLolos = array.every(function(elemen) {
    return kondisi;
});
```

### Contoh 1: Cek Apakah Semua Nilai Lulus

```javascript
let nilai = [75, 80, 55, 90];

let semuaLulus = nilai.every(n => n >= 60);
console.log(semuaLulus); // false (ada 55)

let nilai2 = [75, 80, 65, 90];
let semuaLulus2 = nilai2.every(n => n >= 60);
console.log(semuaLulus2); // true
```

### Contoh 2: Cek Apakah Semua Produk Tersedia

```javascript
let products = [
    { name: "Laptop", stock: 5 },
    { name: "Mouse", stock: 10 },
    { name: "Keyboard", stock: 0 }
];

let semuaTersedia = products.every(product => product.stock > 0);
console.log(semuaTersedia); // false (Keyboard stock 0)
```

### Contoh 3: Validasi Form

```javascript
let formFields = ["Budi", "budi@email.com", "password123"];

// Cek apakah semua field terisi
let semuaTerisi = formFields.every(field => field.length > 0);
console.log(semuaTerisi); // true

// Cek apakah semua field minimal 5 karakter
let semuaValid = formFields.every(field => field.length >= 5);
console.log(semuaValid); // false ("Budi" hanya 4 karakter)
```

### Perbedaan some() vs every()

```javascript
let angka = [2, 4, 6, 7, 8];

// some() - apakah ADA yang genap?
let adaGenap = angka.some(n => n % 2 === 0);
console.log(adaGenap); // true

// every() - apakah SEMUA genap?
let semuaGenap = angka.every(n => n % 2 === 0);
console.log(semuaGenap); // false (ada 7 yang ganjil)
```

---

## Ringkasan Perbandingan

| Method | Return | Fungsi |
|--------|--------|--------|
| `filter()` | Array baru | Menyaring elemen yang lolos kondisi |
| `find()` | Satu elemen / undefined | Mencari elemen pertama yang cocok |
| `reduce()` | Satu nilai | Mengakumulasi semua elemen |
| `some()` | Boolean | Cek apakah ADA yang memenuhi |
| `every()` | Boolean | Cek apakah SEMUA memenuhi |

---

## Kombinasi Method (Method Chaining)

Method-method ini bisa digabungkan untuk operasi yang lebih kompleks:

```javascript
let products = [
    { name: "Laptop", price: 15000000, category: "electronics" },
    { name: "Shirt", price: 200000, category: "fashion" },
    { name: "Phone", price: 8000000, category: "electronics" },
    { name: "Pants", price: 350000, category: "fashion" }
];

// Filter electronics, lalu hitung total harga
let totalElectronics = products
    .filter(p => p.category === "electronics")
    .reduce((total, p) => total + p.price, 0);

console.log(totalElectronics); // 23000000

// Filter fashion, ambil nama saja
let fashionNames = products
    .filter(p => p.category === "fashion")
    .map(p => p.name);

console.log(fashionNames); // ["Shirt", "Pants"]
```

---

Sekarang kerjakan latihan di file `array-methods-ii.js`!
