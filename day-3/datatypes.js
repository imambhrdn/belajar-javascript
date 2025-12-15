/* =================================================================
   DAY 3: DATA TYPES - PRACTICE EXERCISES
   ================================================================= */

/* INSTRUCTIONS:
   1. Baca setiap soal dengan teliti
   2. Tulis jawaban di bawah setiap soal
   3. Jalankan checker untuk melihat hasil:
      node checker.js exercises/day3-datatypes.js 3
*/

// ========================================
// SOAL 1: Tipe Data Primitif
// ========================================
// Buat variabel untuk setiap tipe data berikut:
// - teks: string dengan nilai "JavaScript is fun!"
// - angka: number dengan nilai 2024
// - isAktif: boolean dengan nilai true
// - dataKosong: null
// - belumDiisi: undefined (jangan kasih nilai)

// Write your answer here:
const teks = 'JavaScript is fun!'
const angka = 2024
let isAktif = true
let belumDiisi;

// ========================================
// SOAL 2: Cek Tipe Data
// ========================================
// Gunakan operator typeof untuk cek tipe data dari variabel di atas
// Tampilkan hasilnya dengan console.log()
// Format: "tipe data teks: [hasil typeof teks]"

// Write your answer here:
console.log('tipe data teks: ' + typeof teks)
console.log('tipe data teks: ' + typeof angka)
console.log('tipe data teks: ' + typeof isAktif)
console.log('tipe data teks: ' + typeof belumDiisi)

// ========================================
// SOAL 3: Konversi String ke Number
// ========================================
// Konversi string berikut menjadi number:
// let str1 = "100";
// let str2 = "3.14";
// let str3 = "42 adalah jawabannya";

let str1 = "100"
let str2 =  "3.14"
let str3 = "42 adalah jawabannya"

let StrNum1 = Number(str1);
let StrNum2 = Number(str2);
let StrNum3 = Number(str3);

// Write your conversion and display results:
console.log("String '100' ke Number:", Number("100"));
console.log("String '3.14' ke Number:", Number("3.14"));
console.log("String '42 adalah jawabannya' ke Number:", Number("42 adalah jawabannya"));


// ========================================
// SOAL 4: Konversi Number ke String
// ========================================
// Konversi number berikut menjadi string:
// let num1 = 50;
// let num2 = 3.14159;
// let num3 = 0;

// Write your conversion and display results:
let num1 = 50
let num2 =  3.14159
let num3 = 0

let numStr1 = String(num1)
let numStr2 = String(num2)
let numStr3 = String(num3)

// ========================================
// SOAL 5: Truthy dan Falsy
// ========================================
// Cek boolean dari setiap nilai:
// "", 0, null, undefined, "0", [], {}, false
// Mana yang truthy dan mana yang falsy?

console.log("\nTruthy/Falsy Test:");
console.log('Boolean(""):', Boolean(""));
console.log("Boolean(0):", Boolean(0));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(undefined):", Boolean(undefined));
console.log('Boolean("0"):', Boolean("0"));
console.log("Boolean([]):", Boolean([]));
console.log("Boolean({}):", Boolean({}));
console.log("Boolean(false):", Boolean(false));


// ========================================
// SOAL 6: Aplikasi Kalkulator Konversi
// ========================================
// Buat fungsi sederhana untuk mengkonversi:
// - Celcius ke Fahrenheit
// - Kilometer ke Mil
// - Jam ke Menit

// Function Celcius ke Fahrenheit
function celsiusToFahrenheit(celsius) {
    // Formula: (C × 9/5) + 32
    // Write your code here
    let cToF = (celsius * (9/5)) + 32
    return cToF;
}

// Function Kilometer ke Mil
function kmToMiles(km) {
    // Formula: km × 0.621371
    // Write your code here
    let kmToMil = km * 0.621371
    return kmToMil;
}

// Function Jam ke Menit
function hoursToMinutes(hours) {
    // Formula: hours × 60
    // Write your code here
    let hToM = hours * 60
    return hToM;
}

// Test fungsi-fungsi di atas
console.log("\nKonversi:");
console.log("25°C ke Fahrenheit:", celsiusToFahrenheit(25));
console.log("10 km ke Mil:", kmToMiles(10));
console.log("2.5 jam ke Menit:", hoursToMinutes(2.5));


/* ========================================
   TESTING AREA - JANGAN DIUBAH
   ======================================== */
if (typeof module !== 'undefined') {
    module.exports = {
        teks,
        angka,
        isAktif,
        dataKosong,
        belumDiisi,
        celsiusToFahrenheit,
        kmToMiles,
        hoursToMinutes
    };
}