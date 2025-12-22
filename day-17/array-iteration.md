# Day 17: Array Iteration (forEach & map)

## Tujuan Pembelajaran
Memahami cara melakukan perulangan (loop) pada array menggunakan method `forEach()` dan `map()`.

---

## Apa itu Array Iteration?

**Array Iteration** adalah proses mengunjungi setiap elemen dalam array satu per satu untuk melakukan sesuatu.

Bayangkan kamu punya daftar belanjaan:
```
["Apel", "Jeruk", "Mangga"]
```

**Iteration** = kamu membaca satu per satu: Apel... Jeruk... Mangga...

Di JavaScript, ada beberapa cara untuk melakukan iteration. Hari ini kita belajar 2 method yang paling sering dipakai:
1. `forEach()` - untuk melakukan aksi pada setiap elemen
2. `map()` - untuk mengubah/transformasi setiap elemen

---

## 1. forEach() - Melakukan Aksi untuk Setiap Elemen

### Apa itu forEach()?

`forEach()` adalah method yang menjalankan sebuah fungsi untuk **setiap elemen** dalam array.

**Analogi:** Bayangkan kamu punya daftar teman dan ingin menyapa setiap orang satu per satu.

```
Daftar teman: ["Budi", "Ani", "Citra"]

forEach akan:
1. Ambil "Budi" -> Sapa "Halo Budi!"
2. Ambil "Ani" -> Sapa "Halo Ani!"
3. Ambil "Citra" -> Sapa "Halo Citra!"
```

### Syntax Dasar

```javascript
array.forEach(function(elemen) {
    // lakukan sesuatu dengan elemen
});
```

**Penjelasan:**
- `array` = array yang ingin di-loop
- `function(elemen)` = fungsi yang dijalankan untuk setiap elemen
- `elemen` = nilai elemen saat ini (namanya bebas, bisa `item`, `x`, `buah`, dll)

### Contoh 1: Menampilkan Setiap Elemen

```javascript
let buah = ["Apel", "Jeruk", "Mangga"];

// Cara 1: Menggunakan function biasa
buah.forEach(function(item) {
    console.log(item);
});

// Output:
// Apel
// Jeruk
// Mangga
```

**Apa yang terjadi step by step:**
```
Iterasi 1: item = "Apel"   -> console.log("Apel")
Iterasi 2: item = "Jeruk"  -> console.log("Jeruk")
Iterasi 3: item = "Mangga" -> console.log("Mangga")
```

### Contoh 2: Menggunakan Arrow Function

Arrow function adalah cara penulisan fungsi yang lebih singkat.

```javascript
let buah = ["Apel", "Jeruk", "Mangga"];

// Cara 2: Menggunakan arrow function (lebih singkat)
buah.forEach(item => console.log(item));

// Output sama:
// Apel
// Jeruk
// Mangga
```

**Perbandingan penulisan:**
```javascript
// Function biasa
buah.forEach(function(item) {
    console.log(item);
});

// Arrow function (singkat)
buah.forEach(item => console.log(item));

// Keduanya melakukan hal yang SAMA!
```

### Contoh 3: Menggunakan Index (Posisi)

forEach bisa menerima parameter kedua yaitu **index** (posisi elemen, dimulai dari 0).

```javascript
let buah = ["Apel", "Jeruk", "Mangga"];

buah.forEach(function(item, index) {
    console.log(index + ". " + item);
});

// Output:
// 0. Apel
// 1. Jeruk
// 2. Mangga
```

**Agar dimulai dari 1:**
```javascript
buah.forEach(function(item, index) {
    console.log((index + 1) + ". " + item);
});

// Output:
// 1. Apel
// 2. Jeruk
// 3. Mangga
```

**Dengan arrow function:**
```javascript
buah.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});
```

### Contoh 4: Menghitung Total dengan forEach

```javascript
let angka = [10, 20, 30, 40];
let total = 0;

angka.forEach(function(num) {
    total = total + num;  // atau: total += num
});

console.log("Total:", total);  // Total: 100
```

**Step by step:**
```
Awal: total = 0

Iterasi 1: num = 10  -> total = 0 + 10 = 10
Iterasi 2: num = 20  -> total = 10 + 20 = 30
Iterasi 3: num = 30  -> total = 30 + 30 = 60
Iterasi 4: num = 40  -> total = 60 + 40 = 100

Hasil akhir: total = 100
```

### Contoh 5: Menghitung Jumlah yang Memenuhi Kondisi

```javascript
let nilai = [85, 60, 92, 45, 78, 55];
let jumlahLulus = 0;

nilai.forEach(function(n) {
    if (n >= 60) {
        jumlahLulus = jumlahLulus + 1;
    }
});

console.log("Jumlah yang lulus:", jumlahLulus);  // 4
```

**Step by step:**
```
Nilai: [85, 60, 92, 45, 78, 55]
Batas lulus: 60

85 >= 60? Ya  -> jumlahLulus = 1
60 >= 60? Ya  -> jumlahLulus = 2
92 >= 60? Ya  -> jumlahLulus = 3
45 >= 60? Tidak
78 >= 60? Ya  -> jumlahLulus = 4
55 >= 60? Tidak

Hasil: 4 orang lulus
```

### Penting: forEach TIDAK Mengembalikan Nilai

```javascript
let angka = [1, 2, 3];

let hasil = angka.forEach(function(n) {
    return n * 2;  // return di sini tidak berguna
});

console.log(hasil);  // undefined (kosong!)
```

**forEach hanya untuk melakukan aksi, bukan untuk membuat array baru!**

---

## 2. map() - Mengubah/Transformasi Array

### Apa itu map()?

`map()` adalah method yang membuat **array BARU** dengan mengubah setiap elemen dari array asli.

**Analogi:** Bayangkan kamu punya kotak berisi apel, dan kamu ingin mengupas semua apel tersebut.

```
Kotak awal:    [Apel utuh, Apel utuh, Apel utuh]
                    |           |          |
                 kupas       kupas      kupas
                    v           v          v
Kotak baru:    [Apel kupas, Apel kupas, Apel kupas]
```

- Kotak awal TETAP berisi apel utuh
- Kamu mendapat kotak BARU berisi apel yang sudah dikupas

### Syntax Dasar

```javascript
let arrayBaru = array.map(function(elemen) {
    return elemenYangSudahDiubah;
});
```

**PENTING:** Di dalam map, kita HARUS menggunakan `return` untuk mengembalikan nilai baru!

### Contoh 1: Mengalikan Setiap Angka dengan 2

```javascript
let angka = [1, 2, 3, 4, 5];

let doubled = angka.map(function(num) {
    return num * 2;
});

console.log(doubled);  // [2, 4, 6, 8, 10]
console.log(angka);    // [1, 2, 3, 4, 5] (TIDAK BERUBAH!)
```

**Step by step:**
```
Array asli: [1, 2, 3, 4, 5]

map akan:
1. Ambil 1 -> return 1 * 2 = 2
2. Ambil 2 -> return 2 * 2 = 4
3. Ambil 3 -> return 3 * 2 = 6
4. Ambil 4 -> return 4 * 2 = 8
5. Ambil 5 -> return 5 * 2 = 10

Array baru: [2, 4, 6, 8, 10]
```

**Dengan arrow function:**
```javascript
let doubled = angka.map(num => num * 2);
```

### Contoh 2: Mengkuadratkan Angka

```javascript
let angka = [1, 2, 3, 4, 5];

let squared = angka.map(function(num) {
    return num * num;  // atau: num ** 2
});

console.log(squared);  // [1, 4, 9, 16, 25]
```

**Visualisasi:**
```
[1, 2, 3, 4, 5]
 |  |  |  |  |
 v  v  v  v  v
[1, 4, 9, 16, 25]

1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25
```

### Contoh 3: Mengubah String ke UPPERCASE

```javascript
let nama = ["john", "jane", "bob"];

let namaUpper = nama.map(function(n) {
    return n.toUpperCase();
});

console.log(namaUpper);  // ["JOHN", "JANE", "BOB"]
console.log(nama);       // ["john", "jane", "bob"] (tidak berubah)
```

**Dengan arrow function:**
```javascript
let namaUpper = nama.map(n => n.toUpperCase());
```

### Contoh 4: Capitalize (Huruf Pertama Kapital)

```javascript
let nama = ["john", "jane", "bob"];

let namaCapital = nama.map(function(n) {
    // Ambil huruf pertama dan jadikan kapital
    let hurufPertama = n.charAt(0).toUpperCase();
    // Ambil sisa huruf
    let sisaHuruf = n.slice(1);
    // Gabungkan
    return hurufPertama + sisaHuruf;
});

console.log(namaCapital);  // ["John", "Jane", "Bob"]
```

**Penjelasan untuk "john":**
```
n = "john"
n.charAt(0) = "j"
n.charAt(0).toUpperCase() = "J"
n.slice(1) = "ohn"
Hasil: "J" + "ohn" = "John"
```

**Versi singkat dengan arrow function:**
```javascript
let namaCapital = nama.map(n => n.charAt(0).toUpperCase() + n.slice(1));
```

### Contoh 5: Format Harga ke Rupiah

```javascript
let harga = [10000, 25000, 50000];

let hargaFormatted = harga.map(function(h) {
    return "Rp" + h.toLocaleString('id-ID');
});

console.log(hargaFormatted);  
// ["Rp10.000", "Rp25.000", "Rp50.000"]
```

**Penjelasan `toLocaleString('id-ID')`:**
- Method ini memformat angka sesuai format Indonesia
- 10000 menjadi "10.000" (dengan titik sebagai pemisah ribuan)

### Contoh 6: Mengambil Property dari Array of Objects

```javascript
let siswa = [
    { nama: "Budi", nilai: 85 },
    { nama: "Ani", nilai: 92 },
    { nama: "Citra", nilai: 78 }
];

// Ambil nama saja
let namaSiswa = siswa.map(function(s) {
    return s.nama;
});

console.log(namaSiswa);  // ["Budi", "Ani", "Citra"]

// Ambil nilai saja
let nilaiSiswa = siswa.map(function(s) {
    return s.nilai;
});

console.log(nilaiSiswa);  // [85, 92, 78]
```

**Dengan arrow function:**
```javascript
let namaSiswa = siswa.map(s => s.nama);
let nilaiSiswa = siswa.map(s => s.nilai);
```

### Contoh 7: Menambah Property Baru ke Object

```javascript
let siswa = [
    { nama: "Budi", nilai: 85 },
    { nama: "Ani", nilai: 92 },
    { nama: "Citra", nilai: 78 }
];

let siswaWithStatus = siswa.map(function(s) {
    return {
        nama: s.nama,
        nilai: s.nilai,
        lulus: s.nilai >= 80  // tambah property baru
    };
});

console.log(siswaWithStatus);
// [
//   { nama: "Budi", nilai: 85, lulus: true },
//   { nama: "Ani", nilai: 92, lulus: true },
//   { nama: "Citra", nilai: 78, lulus: false }
// ]
```

**Cara lebih singkat dengan spread operator (...):**
```javascript
let siswaWithStatus = siswa.map(s => ({
    ...s,           // copy semua property dari s
    lulus: s.nilai >= 80  // tambah property baru
}));
```

### Contoh 8: Menggunakan Index dalam map

```javascript
let buah = ["Apel", "Jeruk", "Mangga"];

let numbered = buah.map(function(item, index) {
    return (index + 1) + ". " + item;
});

console.log(numbered);
// ["1. Apel", "2. Jeruk", "3. Mangga"]
```

**Membuat object dengan ID:**
```javascript
let itemsWithId = buah.map(function(item, index) {
    return {
        id: index + 1,
        nama: item
    };
});

console.log(itemsWithId);
// [
//   { id: 1, nama: "Apel" },
//   { id: 2, nama: "Jeruk" },
//   { id: 3, nama: "Mangga" }
// ]
```

---

## 3. Perbedaan forEach() vs map()

### Tabel Perbandingan

| Aspek | forEach() | map() |
|-------|-----------|-------|
| **Mengembalikan nilai?** | Tidak (undefined) | Ya (array baru) |
| **Mengubah array asli?** | Tidak | Tidak |
| **Kapan dipakai?** | Untuk melakukan aksi | Untuk transformasi data |
| **Perlu return?** | Tidak | Ya, WAJIB! |

### Contoh Perbedaan

```javascript
let angka = [1, 2, 3];

// ❌ forEach - TIDAK bisa membuat array baru
let hasil1 = angka.forEach(n => n * 2);
console.log(hasil1);  // undefined

// ✅ map - BISA membuat array baru
let hasil2 = angka.map(n => n * 2);
console.log(hasil2);  // [2, 4, 6]
```

### Kapan Menggunakan forEach?

Gunakan `forEach` ketika kamu ingin:
- Menampilkan data (console.log)
- Menghitung total/jumlah
- Melakukan aksi tanpa perlu array hasil

```javascript
// Contoh: Menampilkan daftar belanja
let belanja = ["Susu", "Roti", "Telur"];
belanja.forEach(item => console.log("- " + item));
```

### Kapan Menggunakan map?

Gunakan `map` ketika kamu ingin:
- Mengubah setiap elemen menjadi bentuk lain
- Membuat array baru dari array yang ada
- Format data untuk ditampilkan

```javascript
// Contoh: Mengubah harga menjadi format rupiah
let harga = [5000, 10000, 15000];
let hargaRupiah = harga.map(h => "Rp" + h);
console.log(hargaRupiah);  // ["Rp5000", "Rp10000", "Rp15000"]
```

---

## 4. Kesalahan Umum Pemula

### Kesalahan 1: Lupa return di map()

```javascript
// ❌ SALAH - lupa return
let doubled = angka.map(n => {
    n * 2;  // tidak ada return!
});
console.log(doubled);  // [undefined, undefined, undefined]

// ✅ BENAR - ada return
let doubled = angka.map(n => {
    return n * 2;
});
console.log(doubled);  // [2, 4, 6]

// ✅ BENAR - arrow function singkat (return otomatis)
let doubled = angka.map(n => n * 2);
console.log(doubled);  // [2, 4, 6]
```

### Kesalahan 2: Menggunakan forEach untuk Transformasi

```javascript
// ❌ SALAH - forEach tidak mengembalikan array
let hasil = angka.forEach(n => n * 2);
// hasil = undefined

// ✅ BENAR - gunakan map
let hasil = angka.map(n => n * 2);
// hasil = [2, 4, 6]
```

### Kesalahan 3: Mengira Array Asli Berubah

```javascript
let angka = [1, 2, 3];
let doubled = angka.map(n => n * 2);

console.log(doubled);  // [2, 4, 6] - array BARU
console.log(angka);    // [1, 2, 3] - array asli TIDAK berubah!
```

---

## 5. Tips Mengingat

### forEach = "Untuk Setiap"
> "UNTUK SETIAP elemen, LAKUKAN sesuatu"

```javascript
// Untuk setiap buah, tampilkan
buah.forEach(b => console.log(b));
```

### map = "Petakan/Ubah"
> "UBAH setiap elemen menjadi bentuk lain"

```javascript
// Ubah setiap angka menjadi 2x lipat
let doubled = angka.map(n => n * 2);
```

---

## 6. Latihan Pemahaman

Sebelum mengerjakan file `array-iteration.js`, coba jawab pertanyaan ini:

1. Apa output dari kode berikut?
```javascript
let angka = [1, 2, 3];
angka.forEach(n => console.log(n + 10));
```

2. Apa output dari kode berikut?
```javascript
let angka = [5, 10, 15];
let hasil = angka.map(n => n - 5);
console.log(hasil);
```

3. Mengapa kode berikut menghasilkan undefined?
```javascript
let hasil = [1, 2, 3].forEach(n => n * 2);
console.log(hasil);
```

4. Bagaimana cara mengubah `["a", "b", "c"]` menjadi `["A", "B", "C"]`?

**Jawaban:**
1. Output: 11, 12, 13 (di baris terpisah)
2. Output: [0, 5, 10]
3. Karena forEach tidak mengembalikan nilai (return undefined)
4. `["a", "b", "c"].map(x => x.toUpperCase())`

---

## Ringkasan

| Method | Fungsi | Return | Contoh |
|--------|--------|--------|--------|
| `forEach()` | Melakukan aksi untuk setiap elemen | undefined | `arr.forEach(x => console.log(x))` |
| `map()` | Transformasi setiap elemen | Array baru | `arr.map(x => x * 2)` |

---

*Selamat belajar! Praktikkan dengan mengerjakan soal di file `array-iteration.js`*
