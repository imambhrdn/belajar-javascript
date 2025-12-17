// Day 10: For Loop
// Student: [Your Name]
// Status: [ ] Belum dimulai [ ] Sedang dikerjakan [✓] Selesai

console.log("===== DAY 10 - FOR LOOP =====\n");

// ============================================
// TODO 1: Angka 1-10
// ============================================
// Tampilkan angka dari 1 hingga 10 menggunakan for loop
console.log("1. Angka 1-10:");
// Tulis kode kamu di bawah ini:
for (let i = 1; i <= 10; i++){
    console.log(i)
}
// ============================================
// TODO 2: Tabel Perkalian 7
// ============================================
// Buat tabel perkalian 7 (7 x 1 hingga 7 x 10)
console.log("\n2. Tabel Perkalian 7:");
// Tulis kode kamu di bawah ini:
for(let i = 1; i <=  10; i++){
    console.log(`7 x ${i} = ${7*i}`)
}

// ============================================
// TODO 3: Total 1-100
// ============================================
// Hitung jumlah semua angka dari 1 hingga 100
console.log("\n3. Total Angka 1-100:");
// Tulis kode kamu di bawah ini:
let total = 0;
for (let i = 1; i <= 100; i++){
    total += i
}
console.log(`Total 1-100: = ${total}`)
// ============================================
// TODO 4: Genap/Ganjil
// ============================================
// Tampilkan "GENAP" untuk angka genap, "GANJIL" untuk angka ganjil (1-20)
console.log("\n4. Genap/Ganjil (1-20):");
// Tulis kode kamu di bawah ini:
for( let i = 1; i <= 20; i ++){
    if (i % 2 == 0) {
        console.log(`${i} = GENAP`)
    } else {
        console.log(`${i} = GANJIL`)
    }
}
// ============================================
// TODO 5: Segitiga Bintang
// ============================================
// Buat segitiga bintang dengan tinggi 5
/*
    *
    **
    ***
    ****
    *****
*/
console.log("\n5. Segitiga Bintang:");
// Tulis kode kamu di bawah ini:
for( let i = 1; i <= 5; i++){
    let baris = ''
    for( let j = 1 ; j <= i; j++){
        baris += '*'
    }
    console.log(baris)
}

// ============================================
// TODO 6: Reverse Angka
// ============================================
// Tampilkan angka dari 10 turun ke 1
console.log("\n6. Reverse Angka (10 ke 1):");
// Tulis kode kamu di bawah ini:
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// ============================================
// TODO 7: Count Down
// ============================================
// Buat countdown dari 5 dengan pesan "Blast off!" di akhir
console.log("\n7. Countdown:");
// Tulis kode kamu di bawah ini:
for( i = 5; i >= 1; i --){
    console.log(i)
}
console.log('Blast off!')
// ============================================
// TODO 8: Kuadrat
// ============================================
// Tampilkan kuadrat dari angka 1-10
// 1² = 1, 2² = 4, dst.
console.log("\n8. Kuadrat 1-10:");
// Tulis kode kamu di bawah ini:
for(let i = 1 ; i <= 10; i++){
    console.log(`${i}² = ${i * i}`)
}
// ============================================
// TODO 9: Deret Fibonacci
// ============================================
// Tampilkan 10 angka pertama deret Fibonacci
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
console.log("\n9. Deret Fibonacci (10 angka pertama):");
// Tulis kode kamu di bawah ini:
let a = 0, b = 1
console.log(a)
console.log(b)
for (let i = 3; i <=10; i++) {
    let c = a + b
    console.log(c)
    a = b
    b = c
}
// ============================================
// TODO 10: Pola Angka
// ============================================
// Buat pola berikut:
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
console.log("\n10. Pola Angka:");
// Tulis kode kamu di bawah ini:
for(i = 1; i <=5; i++){
    let baris = ''
    for(let j = 1; j <= i; j++){
        baris += i + ' '
    }
    console.log(baris.trim())
}
// ============================================
// TODO 11: For...of Array
// ============================================
// Loop array menggunakan for...of
let buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"];
console.log("\n11. Daftar Buah:");
// Tulis kode kamu di bawah ini:
for (let item of buah){
    console.log(`- ${item}`)
}
// ============================================
// TODO 12: For...in Object
// ============================================
// Loop object menggunakan for...in
let mahasiswa = {
    nama: "Budi Santoso",
    umur: 21,
    jurusan: "Teknik Informatika",
    ipk: 3.85
};
console.log("\n12. Data Mahasiswa:");
// Tulis kode kamu di bawah ini:
for( let nama in mahasiswa ){
    console.log(`${nama} : ${mahasiswa[nama]}`)
}
// TESTING SECTION (Jangan diubah!)
// Jalankan dengan: node checker.js day-10/for-loop.js 10