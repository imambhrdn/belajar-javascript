// Day 5: Logical Operators
// Kerjakan semua soal dengan mengganti // ? dengan jawaban yang benar
// Student: _________________________
// Date: _____________________________

console.log("=== Day 5: Logical Operators ===\n");

// ============================================
// LATIHAN 1: Operator AND (&&)
// ============================================
// AND returns true hanya jika SEMUA kondisi true

let isAdult = true;    // Sudah dewasa
let hasLicense = true; // Punya SIM

// Ganti ? dengan kondisi yang benar
// Boleh driving jika: dewasa AND punya SIM
let canDrive = isAdult && hasLicense;

console.log("1. Boleh driving:", canDrive); // Expected: true

// ============================================
// LATIHAN 2: Operator OR (||)
// ============================================
// OR returns true jika SALAH SATU kondisi true

let isWeekend = false;
let isHoliday = true;

// Ganti ? dengan kondisi yang benar
// Libur jika: weekend OR holiday
let isDayOff = isWeekend || isHoliday;

console.log("2. Hari libur:", isDayOff); // Expected: true

// ============================================
// LATIHAN 3: Operator NOT (!)
// ============================================
// NOT membalik nilai boolean (true jadi false, false jadi true)

let isRaining = false;

// Ganti ? dengan kondisi yang benar
// Bisa main jika TIDAK hujan
let canPlay = !isRaining;

console.log("3. Bisa main:", canPlay); // Expected: true

// ============================================
// LATIHAN 4: Kombinasi Operator
// ============================================

let age = 20;
let hasTicket = true;
let isVIP = false;

// Ganti ? dengan kondisi yang benar
// Bisa masuk jika: (umur >= 18 AND punya tiket) OR isVIP
let canEnter = (age >= 18 && hasTicket) || isVIP;

console.log("4. Bisa masuk konser:", canEnter); // Expected: true

// ============================================
// LATIHAN 5: Default value dengan OR
// ============================================
// Gunakan || untuk memberikan nilai default

let userName = ""; // String kosong = falsy

// Ganti ? dengan "Guest" sebagai default
let displayName = userName || "Guest";

console.log("5. Display name:", displayName); // Expected: "Guest"

// ============================================
// LATIHAN 6: Cek kelulusan
// ============================================
// Siswa lulus jika: nilai >= 70 AND kehadiran >= 80

let studentScore = 85;
let attendance = 90;

// Ganti ? dengan kondisi kelulusan
let isPassed = studentScore >= 70 && attendance >= 80;

console.log("6. Siswa lulus:", isPassed); // Expected: true

// ============================================
// LATIHAN 7: Validasi form (AND + OR)
// ============================================
// Form valid jika: email ada @ AND (password > 8 OR sudah login)

let email = "test@email.com";
let password = "rahasia123";
let isLoggedIn = false;

// Ganti ? dengan kondisi validasi
let isFormValid = email.includes("@") && (password.length > 8 || isLoggedIn);

console.log("7. Form valid:", isFormValid); // Expected: true

// ============================================
// LATIHAN 8: Shopping cart (Complex logic)
// ============================================
// Bisa checkout jika: ada item AND (sudah login OR bayar tamu)

let cartItems = ["buku", "pulpen"];
let isLoggedIn2 = false;
let guestCheckoutEnabled = true;

// Ganti ? dengan kondisi checkout
let canCheckout = cartItems.length > 0 && (isLoggedIn2 || guestCheckoutEnabled);

console.log("8. Bisa checkout:", canCheckout); // Expected: true

// ============================================
// LATIHAN 9: Truthy dan Falsy
// ============================================
// Tentukan apakah nilai berikut truthy atau falsy

// Ganti ? dengan true atau false
let isEmptyStringFalsy = Boolean(""); // ?
let isZeroFalsy = Boolean(0); // ?
let isNullFalsy = Boolean(null); // ?
let isEmptyArrayFalsy = Boolean([]); // ?

console.log("\n9. Truthy/Falsy Test:");
console.log("String kosong falsy?", isEmptyStringFalsy); // Expected: false
console.log("Angka 0 falsy?", isZeroFalsy); // Expected: false
console.log("Null falsy?", isNullFalsy); // Expected: false
console.log("Array kosong falsy?", isEmptyArrayFalsy); // Expected: true

// ============================================
// LATIHAN 10: Multiple conditions
// ============================================
// Game character can attack if: alive AND (hasWeapon OR hasMagic)

let isAlive = true;
let hasWeapon = false;
let hasMagic = true;

// Ganti ? dengan kondisi attack
let canAttack = isAlive && (hasWeapon || hasMagic);

console.log("\n10. Character can attack:", canAttack); // Expected: true

console.log("\n=== Selesai ===");
console.log("Jalankan checker untuk validasi:");
console.log("node exercises/checker.js exercises/day-5/logical-operators.js 5");