// Day 5: Logical Operators - Solutions
// Ganti // ? dengan jawaban yang benar

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
let isEmptyStringFalsy = Boolean(""); // false
let isZeroFalsy = Boolean(0); // false
let isNullFalsy = Boolean(null); // false
let isEmptyArrayFalsy = Boolean([]); // true

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

// ============================================
// PENJELASAN TAMBAHAN
// ============================================

console.log("\n=== Penjelasan Operator ===");

// Operator AND (&&)
console.log("\nAND (&&) Examples:");
console.log("true && true =", true && true); // true
console.log("true && false =", true && false); // false
console.log("false && true =", false && true); // false
console.log("false && false =", false && false); // false

// Operator OR (||)
console.log("\nOR (||) Examples:");
console.log("true || true =", true || true); // true
console.log("true || false =", true || false); // true
console.log("false || true =", false || true); // true
console.log("false || false =", false || false); // false

// Operator NOT (!)
console.log("\nNOT (!) Examples:");
console.log("!true =", !true); // false
console.log("!false =", !false); // true

// Truthy dan Falsy Values
console.log("\nFalsy Values (dianggap false):");
console.log('Boolean("") =', Boolean("")); // false - empty string
console.log('Boolean(0) =', Boolean(0)); // false - number zero
console.log('Boolean(null) =', Boolean(null)); // false
console.log('Boolean(undefined) =', Boolean(undefined)); // false
console.log('Boolean(NaN) =', Boolean(NaN)); // false
console.log('Boolean(false) =', Boolean(false)); // false

console.log("\nTruthy Values (dianggap true):");
console.log('Boolean("hello") =', Boolean("hello")); // true - non-empty string
console.log('Boolean(42) =', Boolean(42)); // true - non-zero number
console.log('Boolean([]) =', Boolean([])); // true - empty array
console.log('Boolean({}) =', Boolean({})); // true - empty object

console.log("\n=== Selesai ===");