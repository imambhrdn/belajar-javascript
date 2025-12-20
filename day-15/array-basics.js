// Day 15: Array Basics
// Student: Imam Bahrudin
// Status: [ ] Belum dimulai [ ] Sedang dikerjakan [ ] Selesai

console.log("===== DAY 15: ARRAY BASICS =====\n");

// ============================================
// PENJELASAN ARRAY:
// Array adalah struktur data yang menyimpan kumpulan nilai
// dalam satu variabel. Setiap nilai memiliki index (dimulai dari 0).
// ============================================

// ============================================
// TODO 1: Membuat Array
// Buat array dengan nama 'buah' yang berisi 5 nama buah
// ============================================
// Tulis kode kamu di bawah ini:

console.log("=== TODO 1: MEMBUAT ARRAY ===");
const buah = ['Apel', 'Jeruk', 'Pisang', 'Alpukat', 'Mangga']
// Contoh: const buah = ["Apel", "Jeruk", ...];


// ============================================
// TODO 2: Akses Element Array
// Dari array buah yang sudah dibuat:
// - Tampilkan buah pertama (index 0)
// - Tampilkan buah ketiga (index 2)
// - Tampilkan buah terakhir
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 2: AKSES ELEMENT ===");
console.log('buah pertama pada index 0 adalah ' + buah[0])
console.log('buah pertama pada index 2 adalah ' + buah[2])
console.log('buah pertama pada index 0 adalah ' + buah[buah.length - 1])


// ============================================
// TODO 3: Property Length
// Tampilkan jumlah element dalam array buah
// menggunakan property .length
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 3: PROPERTY LENGTH ===");
console.log(`jumlah bua adalah:  ${buah.length}`)


// ============================================
// TODO 4: Membuat Array Angka
// Buat array 'angka' berisi angka 1 sampai 10
// Kemudian tampilkan semua angka menggunakan for loop
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 4: ARRAY ANGKA ===");
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < angka.length; i++) {
    console.log(angka[i])
}


// ============================================
// TODO 5: Mengubah Element Array
// Ubah element kedua (index 1) dari array buah
// menjadi buah lain, lalu tampilkan array yang sudah diubah
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 5: MENGUBAH ELEMENT ===");
console.log('sebelum diubah ' + buah)
buah[1] = 'Anggur'
console.log('setelah diubah ' + buah)


// ============================================
// TODO 6: Loop Array dengan for...of
// Gunakan for...of untuk menampilkan semua buah
// dengan format: "Buah: [nama buah]"
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 6: FOR...OF LOOP ===");
for (let item of buah) {
    console.log('Buah : ' + item)
}

// ============================================
// TODO 7: Loop Array dengan forEach
// Gunakan method forEach untuk menampilkan buah
// beserta indexnya dengan format: "[index]. [nama buah]"
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 7: FOREACH LOOP ===");

buah.forEach((item, index) => {
    console.log(`${index}. ${item}`)
});

// ============================================
// TODO 8: Array Campuran
// Buat array 'dataSiswa' yang berisi:
// - Nama (string)
// - Umur (number)
// - Sudah lulus (boolean)
// - Nilai rata-rata (number)
// Kemudian tampilkan semua data dengan typeof masing-masing
// ============================================
// Tulis kode kamu di bawah ini:

const dataSiswa = ['budi', 17, true, 8.5]
console.log('data siswa = ' + dataSiswa);
dataSiswa.forEach((item, index) => {
    console.log(`index ${index}: ${item} ${typeof item}`)
});

console.log("\n=== TODO 8: ARRAY CAMPURAN ===");



// ============================================
// TODO 9: Mencari Index Element
// Dari array buah, cari index dari salah satu buah
// menggunakan method indexOf()
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 9: INDEXOF ===");
indexMangga = buah.indexOf('Pisang')
console.log('Index dari Pisang adalah = ' + indexMangga)


// ============================================
// TODO 10: Cek Element Ada di Array
// Gunakan method includes() untuk mengecek
// apakah suatu buah ada di dalam array
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 10: INCLUDES ===");
console.log('Apakah Apel ada? ' + buah.includes('Apel'))
console.log('Apakah Durian ada? ' + buah.includes('Durian'))


// ============================================
// TODO 11: Hitung Total Array Angka
// Dari array angka yang sudah dibuat di TODO 4,
// hitung total semua angka menggunakan for loop
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 11: HITUNG TOTAL ===");
let total = 0
for (let i = 0; i < angka.length; i++) {
    total += angka[i];
}
console.log("Total angka 1-10: ", total)

// ============================================
// TODO 12: Cari Nilai Maksimum
// Dari array angka, cari nilai maksimum
// menggunakan loop (tanpa Math.max)
// ============================================
// Tulis kode kamu di bawah ini:



console.log("\n=== TODO 12: NILAI MAKSIMUM ===");

let max = angka[0]

for (let i = 1; i < angka.length; i++) {
    if (angka[i] > max) {
        max = angka[i]
    }
}

console.log("Nilai maksimum:", max)

// ============================================
// TESTING SECTION
// ============================================
console.log("\n\n===== TESTING RESULTS =====");

console.log("\n1. Array buah harus berisi 5 element");
console.log("2. Bisa akses element dengan index");
console.log("3. Property length menunjukkan jumlah element");
console.log("4. Array angka berisi 1-10");
console.log("5. Element array bisa diubah");
console.log("6. for...of untuk iterasi array");
console.log("7. forEach dengan callback function");
console.log("8. Array bisa berisi tipe data campuran");
console.log("9. indexOf() mencari posisi element");
console.log("10. includes() mengecek keberadaan element");
console.log("11. Bisa menghitung total dengan loop");
console.log("12. Bisa mencari nilai maksimum dengan loop");

console.log("\n===== SELESAI! =====");
