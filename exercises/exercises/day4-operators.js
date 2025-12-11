/* =================================================================
   DAY 4: OPERATORS - PRACTICE EXERCISES
   ================================================================= */

/* INSTRUCTIONS:
   1. Baca setiap soal dengan teliti
   2. Tulis jawaban di bawah setiap soal
   3. Jalankan checker untuk melihat hasil:
      node checker.js exercises/day4-operators.js 4
*/

// ========================================
// SOAL 1: Operator Aritmatika
// ========================================
// Diberikan variabel:
let a = 15;
let b = 4;

// Hitung dan tampilkan hasil:
// - a + b = ?
// - a - b = ?
// - a * b = ?
// - a / b = ?
// - a % b = ? (sisa bagi)
// - a ** b = ? (pangkat)

// Write your answers here:


// ========================================
// SOAL 2: Operator Assignment
// ========================================
// Gunakan operator assignment untuk menyederhanakan:
let x = 10;
// x = x + 5;  // Ubah menjadi x += 5
// x = x * 3;  // Ubah menjadi x *= 3
// x = x - 2;  // Ubah menjadi x -= 2
// x = x / 4;  // Ubah menjadi x /= 4

// Tulis bentuk sederhananya:


// ========================================
// SOAL 3: Operator Perbandingan
// ========================================
// Tentukan hasil dari setiap perbandingan (true/false):
// 10 == "10"    // ?
// 10 === "10"   // ?
// 10 != "10"    // ?
// 10 !== "10"   // ?
// 5 > 3         // ?
// 5 >= 5        // ?
// 5 < 10        // ?
// 5 <= 4        // ?

// Tulis hasilnya di sini:


// ========================================
// SOAL 4: Aplikasi Kalkulator
// ========================================
// Buat kalkulator sederhana dengan 2 angka:
let num1 = 20;
let num2 = 8;

// Hitung:
// - Penjumlahan
// - Pengurangan (num1 - num2)
// - Perkalian
// - Pembagian
// - Sisa bagi
// - Rata-rata

// Write your calculations:


// ========================================
// SOAL 5: Konversi Suhu
// ========================================
// Buat program konversi suhu:
// - Dari Celsius ke Fahrenheit: F = (C × 9/5) + 32
// - Dari Fahrenheit ke Celsius: C = (F - 32) × 5/9

let celsius = 30;
let fahrenheit = 86;

// Hitung konversinya:
// 30°C = ?°F
// 86°F = ?°C

// Write your calculations:


// ========================================
// SOAL 6: Umur dalam Hari
// ========================================
// Hitung berapa hari umur Anda:
// Misal: 23 tahun = 23 × 365 hari (abaikan tahun kabisat)

let umurTahun = 23;  // Ganti dengan umur Anda
let umurHari;        // Hitung umur dalam hari

// Write your calculation:


// ========================================
// SOAL 7: Body Mass Index (BMI)
// ========================================
// Rumus BMI = berat / (tinggi * tinggi)
// berat dalam kg, tinggi dalam meter

let berat = 70;      // kg
let tinggi = 1.70;   // meter

let bmi;             // Hitung BMI-nya

// Write your calculation:


// ========================================
// SOAL 8: Increment & Decrement
// ========================================
// Prediksi hasil dari setiap operasi:
let counter = 5;
console.log(counter++);  // Hasil?
console.log(counter);    // Hasil?
console.log(++counter);  // Hasil?
console.log(counter--);  // Hasil?
console.log(counter);    // Hasil?
console.log(--counter);  // Hasil?


/* ========================================
   TESTING AREA - JANGAN DIUBAH
   ======================================== */
if (typeof module !== 'undefined') {
    module.exports = {
        a,
        b,
        x,
        num1,
        num2,
        celsius,
        fahrenheit,
        umurTahun,
        umurHari,
        berat,
        tinggi,
        bmi
    };
}