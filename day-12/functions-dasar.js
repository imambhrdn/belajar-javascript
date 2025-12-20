// Day 12: Functions Dasar
// Student: Imam Bahrudin
// Status: [ ] Belum dimulai [ ] Sedang dikerjakan [ ] Selesai

console.log("===== DAY 12: FUNCTIONS DASAR =====\n");

// ============================================
// TODO 1: Function Declaration
// Buat function "spiulanSalam" yang menampilkan "Halo, Selamat Belajar JavaScript!"
// Panggil function tersebut
// ============================================
// Tulis kode kamu di bawah ini:

console.log("=== TODO 1: FUNCTION DECLARATION ===");

function ucapanSalam() {
    console.log('Halo, Selamat Belajar JavaScript!')
}

ucapanSalam()

// ============================================
// TODO 2: Function dengan Parameter
// Buat function "sapaNama(nama)" yang menampilkan "Halo, [nama]!"
// Panggil function dengan namamu sendiri
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 2: FUNCTION DENGAN PARAMETER ===");
function sapaNama(nama) {
    console.log(`yang menampilkan "Halo, ${nama}!`)
}
sapaNama('imam');
// ============================================
// TODO 3: Function dengan Return
// Buat function "tambah(a, b)" yang mengembalikan hasil penjumlahan a + b
// Simpan hasil ke variabel dan tampilkan
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 3: FUNCTION DENGAN RETURN ===");
function tambah(a, b) {
    return a + b
}
let hasilTambah = tambah(5, 3)
console.log('tambah(5, 3) =', hasilTambah)
// ============================================
// TODO 4: Function Expression
// Buat function expression "kali" yang mengalikan 2 angka
// const kali = function(a, b) { ... }
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 4: FUNCTION EXPRESSION ===");
const kali = function(a, b) {
    return a * b
};
console.log('kali(3, 5) =', kali(3, 5))

// ============================================
// TODO 5: Arrow Function Basic
// Buat arrow function "kurang" yang mengurangi 2 angka
// const kurang = (a, b) => { ... }
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 5: ARROW FUNCTION BASIC ===");

const kurang = (a, b) => {
    return a - b
}
console.log('kurang(10, 3) =', kurang(10, 3))
// ============================================
// TODO 6: Arrow Function Shorthand
// Buat arrow function "pangkatDua" yang mengembalikan kuadrat dari angka
// Gunakan shorthand syntax: const pangkatDua = n => n * n;
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 6: ARROW FUNCTION SHORTHAND ===");
const pangkatDua = (n) => n * n
console.log('pangkatDua(5) = ', pangkatDua(5))

// ============================================
// TODO 7: Function Luas Persegi
// Buat function "luasPersegi(sisi)" yang menghitung luas persegi
// Rumus: sisi * sisi
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 7: LUAS PERSEGI ===");
const luasPersegi = (a) => {
    return a * a
}
console.log('luasPersegi(4) =', luasPersegi(4))

// ============================================
// TODO 8: Function Luas Persegi Panjang
// Buat function "luasPersegiPanjang(panjang, lebar)" 
// Rumus: panjang * lebar
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 8: LUAS PERSEGI PANJANG ===");
const luasPersegiPanjang = (a, b) => {
    return a * b
}

console.log("luasPersegiPanjang(5, 3) =", luasPersegiPanjang(5, 3));

// ============================================
// TODO 9: Function Keliling Lingkaran
// Buat function "kelilingLingkaran(r)"
// Rumus: 2 * Math.PI * r (atau 2 * 3.14 * r)
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 9: KELILING LINGKARAN ===");

const kelilingLingkaran = (r) => {
    return 2 * Math.PI * r
}
console.log("kelilingLingkaran(7) =", kelilingLingkaran(7).toFixed(2));
// ============================================
// TODO 10: Function Konversi Suhu
// Buat function "celsiusToFahrenheit(celsius)"
// Rumus: (celsius * 9/5) + 32
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 10: KONVERSI SUHU ===");
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32
}
console.log("celsiusToFahrenheit(30) =", celsiusToFahrenheit(30));

// ============================================
// TODO 11: Function isGenap
// Buat arrow function "isGenap(num)" yang return true jika genap, false jika ganjil
// Hint: gunakan modulus (%)
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 11: CEK GENAP/GANJIL ===");
const isGenap = (num) => num % 2 == 0
console.log("isGenap(4) =", isGenap(4));
console.log("isGenap(7) =", isGenap(7));

// ============================================
// TODO 12: Function getMax
// Buat function "getMax(a, b)" yang mengembalikan angka yang lebih besar
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 12: GET MAX ===");
function getMax(a, b) {
    return a > b ? a : b
}
console.log("getMax(10, 5) =", getMax(10, 5));
console.log("getMax(3, 9) =", getMax(3, 9));

// ============================================
// TESTING SECTION (Jangan diubah!)
// ============================================
console.log("\n\n===== TESTING RESULTS =====");

console.log("\n1. Testing ucapanSalam:");
// Expected: "Halo, Selamat Belajar JavaScript!"

console.log("\n2. Testing sapaNama:");
// Expected: "Halo, [nama]!"

console.log("\n3. Testing tambah:");
// Expected: tambah(5, 3) = 8

console.log("\n4. Testing kali:");
// Expected: kali(4, 5) = 20

console.log("\n5. Testing kurang:");
// Expected: kurang(10, 3) = 7

console.log("\n6. Testing pangkatDua:");
// Expected: pangkatDua(5) = 25

console.log("\n7. Testing luasPersegi:");
// Expected: luasPersegi(4) = 16

console.log("\n8. Testing luasPersegiPanjang:");
// Expected: luasPersegiPanjang(5, 3) = 15

console.log("\n9. Testing kelilingLingkaran:");
// Expected: kelilingLingkaran(7) = ~43.98

console.log("\n10. Testing celsiusToFahrenheit:");
// Expected: celsiusToFahrenheit(30) = 86

console.log("\n11. Testing isGenap:");
// Expected: isGenap(4) = true, isGenap(7) = false

console.log("\n12. Testing getMax:");
// Expected: getMax(10, 5) = 10, getMax(3, 9) = 9

console.log("\n===== COMPLETE! =====");
