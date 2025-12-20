// Day 13: Function Parameters & Return
// Student: Imam Bahrudin
// Status: [x] Selesai

console.log("===== DAY 13: FUNCTION PARAMETERS & RETURN =====\n");

// ============================================
// TODO 1: Function dengan Parameter
// Buat function "sapaNama" dengan parameter "nama"
// yang menampilkan "Halo, [nama]!"
// ============================================

console.log("=== TODO 1: FUNCTION DENGAN PARAMETER ===");
function sapaNama(nama) {
    console.log(`Halo, ${nama}!`)
}
sapaNama('Imam');

// ============================================
// TODO 2: Function dengan Return
// Buat function "tambah" dengan parameter "a" dan "b"
// yang mengembalikan hasil penjumlahan
// ============================================

console.log("\n=== TODO 2: FUNCTION DENGAN RETURN ===");
function tambah(a, b) {
    return a + b
}
let hasilTambah = tambah(5, 3)
console.log('tambah(5, 3) =', hasilTambah)

// ============================================
// TODO 3: Function Luas Persegi
// Buat function "luasPersegi(sisi)" yang menghitung luas persegi
// Rumus: sisi * sisi
// ============================================

console.log("\n=== TODO 3: LUAS PERSEGI ===");
const luasPersegi = (sisi) => {
    return sisi * sisi
}
console.log('luasPersegi(4) =', luasPersegi(4))

// ============================================
// TODO 4: Function Luas Persegi Panjang
// Buat function "luasPersegiPanjang(panjang, lebar)"
// Rumus: panjang * lebar
// ============================================

console.log("\n=== TODO 4: LUAS PERSEGI PANJANG ===");
const luasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar
}
console.log("luasPersegiPanjang(5, 3) =", luasPersegiPanjang(5, 3));

// ============================================
// TODO 5: Function Keliling Lingkaran
// Buat function "kelilingLingkaran(r)"
// Rumus: 2 * Math.PI * r
// ============================================

console.log("\n=== TODO 5: KELILING LINGKARAN ===");
const kelilingLingkaran = (r) => {
    return 2 * Math.PI * r
}
console.log("kelilingLingkaran(7) =", kelilingLingkaran(7).toFixed(2));

// ============================================
// TODO 6: Function Konversi Suhu
// Buat function "celsiusToFahrenheit(celsius)"
// Rumus: (celsius * 9/5) + 32
// ============================================

console.log("\n=== TODO 6: KONVERSI SUHU ===");
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32
}
console.log("celsiusToFahrenheit(30) =", celsiusToFahrenheit(30));

// ============================================
// TODO 7: Function isGenap
// Buat function "isGenap(num)" yang return true jika genap
// ============================================

console.log("\n=== TODO 7: CEK GENAP/GANJIL ===");
const isGenap = (num) => num % 2 == 0
console.log("isGenap(4) =", isGenap(4));
console.log("isGenap(7) =", isGenap(7));

// ============================================
// TODO 8: Function getMax
// Buat function "getMax(a, b)" yang return angka lebih besar
// ============================================

console.log("\n=== TODO 8: GET MAX ===");
function getMax(a, b) {
    return a > b ? a : b
}
console.log("getMax(10, 5) =", getMax(10, 5));
console.log("getMax(3, 9) =", getMax(3, 9));

// ============================================
// TESTING SECTION
// ============================================
console.log("\n\n===== TESTING RESULTS =====");

console.log("\n1. sapaNama('Imam'):");
sapaNama('Imam');

console.log("\n2. tambah(5, 3) =", tambah(5, 3));

console.log("\n3. luasPersegi(4) =", luasPersegi(4));

console.log("\n4. luasPersegiPanjang(5, 3) =", luasPersegiPanjang(5, 3));

console.log("\n5. kelilingLingkaran(7) =", kelilingLingkaran(7).toFixed(2));

console.log("\n6. celsiusToFahrenheit(30) =", celsiusToFahrenheit(30));

console.log("\n7. isGenap(4) =", isGenap(4), "| isGenap(7) =", isGenap(7));

console.log("\n8. getMax(10, 5) =", getMax(10, 5), "| getMax(3, 9) =", getMax(3, 9));

console.log("\n===== COMPLETE! =====");
