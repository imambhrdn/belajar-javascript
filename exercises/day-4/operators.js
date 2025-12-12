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
let penjumlahan = a + b;
console.log(penjumlahan);
let pengurangan = a - b;
console.log(pengurangan);
let pengakalian = a * b;
console.log(pengakalian);
let pembagian = a / b;
console.log(pembagian);
let modulus = a % b;
console.log(modulus);
let pangkat = a ** b
console.log(pangkat);


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
x += 5
x *= 3
x -= 2
x /= 4

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
console.log(10 == "10")
console.log(10 === "10")
console.log(10 != "10")
console.log(10 !== "10")
console.log(5 > 3)
console.log(5 < 10)
console.log(5 <= 4)
console.log(5 >= 5)

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
let numpnum = num1 + num2;
let numMnum = num1 - num2;
let numKnum = num1 * num2;
let numBnum = num1 / num2;
let numModnum = num1 % num2;
let numRnum = (num1+num2)/2
console.log(numpnum)
console.log(numMnum)
console.log(numKnum)
console.log(numBnum)
console.log(numModnum)
console.log(numRnum)

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
let celsiusToFarenheit = (celsius*(9/5)) + 32
let fahrenheitToCelcius = (fahrenheit - 32) * (5/9)
console.log(celsiusToFarenheit);
console.log(fahrenheitToCelcius);


// ========================================
// SOAL 6: Umur dalam Hari
// ========================================
// Hitung berapa hari umur Anda:
// Misal: 23 tahun = 23 × 365 hari (abaikan tahun kabisat)

let umurTahun = 23;  // Ganti dengan umur Anda
let umurHari;        // Hitung umur dalam hari

// Write your calculation:
umurHari = umurTahun * 365

// ========================================
// SOAL 7: Body Mass Index (BMI)
// ========================================
// Rumus BMI = berat / (tinggi * tinggi)
// berat dalam kg, tinggi dalam meter

let berat = 70;      // kg
let tinggi = 1.70;   // meter

let bmi;             // Hitung BMI-nya

// Write your calculation:
bmi = berat / (tinggi * tinggi);

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