// Day 6: String Methods
// Kerjakan semua soal dengan mengganti // ? dengan jawaban yang benar
// Student: _________________________
// Date: _____________________________

console.log("=== Day 6: String Methods ===\n");

// ============================================
// LATIHAN 1: Property length
// ============================================
// length mengembalikan jumlah karakter dalam string

let kalimat = "Belajar JavaScript itu menyenangkan";

// Ganti ? untuk mendapatkan panjang string
let panjangKalimat = kalimat.length;

console.log("1. Panjang kalimat:", panjangKalimat); // Expected: 32

// ============================================
// LATIHAN 2: Mengubah huruf besar/kecil
// ============================================
// toUpperCase() untuk huruf besar, toLowerCase() untuk huruf kecil

let nama = "john doe";

// Ubah ke huruf besar
let namaBesar = nama.toUpperCase;

// Ubah ke huruf kecil
let namaKecil = nama.toLocaleLowerCase;

console.log("\n2. Manipulasi nama:");
console.log("Original:", nama); // Expected: "john doe"
console.log("Uppercase:", namaBesar); // Expected: "JOHN DOE"
console.log("Lowercase:", namaKecil); // Expected: "john doe"

// ============================================
// LATIHAN 3: Menghapus spasi dengan trim()
// ============================================
// trim() menghapus spasi di awal dan akhir string

let inputUser = "   admin@email.com   ";

// Hapus spasi di awal dan akhir
let emailBersih = inputUser.trim();

console.log("\n3. Trim spasi:");
console.log("Original:", `"${inputUser}"`); // Expected: "   admin@email.com   "
console.log("Trimmed:", `"${emailBersih}"`); // Expected: "admin@email.com"

// ============================================
// LATIHAN 4: Mencari posisi dengan indexOf()
// ============================================
// indexOf() mengembalikan posisi pertama kali substring ditemukan

let sentence = "The quick brown fox jumps over the lazy dog";

// Cari posisi kata "fox"
let posisiFox = sentence.indexOf('fox');

// Cari kata yang tidak ada
let posisiCat = sentence.indexOf('cat');

console.log("\n4. Pencarian dengan indexOf:");
console.log('Posisi "fox":', posisiFox); // Expected: 16
console.log('Posisi "cat":', posisiCat); // Expected: -1

// ============================================
// LATIHAN 5: Mengecek keberadaan dengan includes()
// ============================================
// includes() mengembalikan true jika substring ditemukan

let email = "user@example.com";

// Cek apakah email mengandung "@"
let hasAt = email.includes('@');

// Cek apakah email mengandung ".com"
let hasDotCom = email.includes('.com');

console.log("\n5. Cek dengan includes:");
console.log('Email mengandung "@":', hasAt); // Expected: true
console.log('Email mengandung ".com":', hasDotCom); // Expected: true

// ============================================
// LATIHAN 6: Mengambil bagian string dengan slice()
// ============================================
// slice(start, end) mengambil string dari index start sampai sebelum end

let fullName = "Budi Santoso";
let panjangNama = fullName.split('')
// Ambil nama depan (dari index 0 sampai index 4)
let firstName = panjangNama.slice(0,4).join('');

// Ambil nama belakang (dari index 5 sampai akhir)
let lastName = panjangNama.slice(5).join('');

console.log("\n6. Slice string:");
console.log("Full name:", fullName); // Expected: "Budi Santoso"
console.log("First name:", firstName); // Expected: "Budi"
console.log("Last name:", lastName); // Expected: "Santoso"

// ============================================
// LATIHAN 7: Memotong string dengan substring()
// ============================================
// substring(start, end) mirip slice tapi tidak menerima index negatif

let text = "JavaScript Programming";
let panjangText = text.split('')

// Ambil "JavaScript" (0 sampai 10)
let word1 = text.slice(0,10).join('');

// Ambil "Programming" (11 sampai akhir)
let word2 = text.slice(11).join('');

console.log("\n7. Substring:");
console.log("Original:", text); // Expected: "JavaScript Programming"
console.log("Word 1:", word1); // Expected: "JavaScript"
console.log("Word 2:", word2); // Expected: "Programming"

// ============================================
// LATIHAN 8: Mengganti bagian string dengan replace()
// ============================================
// replace(old, new) mengganti substring pertama yang ditemukan

let message = "Hello World, Hello Universe";

// Ganti "World" dengan "JavaScript"
let newMessage = message.replaceAll("World", "JavaScript");

console.log("\n8. Replace:");
console.log("Original:", message); // Expected: "Hello World, Hello Universe"
console.log("Modified:", newMessage); // Expected: "Hello JavaScript, Hello Universe"

// ============================================
// LATIHAN 9: Memecah string dengan split()
// ============================================
// split(separator) memecah string menjadi array

let csvData = "apple,banana,orange,grape";

// Pecah berdasarkan koma
let fruits = csvData.split(',');
''
console.log("\n9. Split string:");
console.log("Original:", csvData); // Expected: "apple,banana,orange,grape"
console.log("Array result:", fruits); // Expected: ["apple", "banana", "orange", "grape"]
console.log("Jumlah buah:", fruits.length); // Expected: 4

// ============================================
// LATIHAN 10: Mengulang string dengan repeat()
// ============================================
// repeat(count) mengulang string sebanyak count kali

let kata = "Ha";
let laugh = kata.repeat(3); // "Ha" diulang 3 kali

console.log("\n10. Repeat string:");
console.log('Kata "Ha" diulang 3 kali:', laugh); // Expected: "HaHaHa"

// ============================================
// LATIHAN 11: Capitalize setiap kata
// ============================================
// Gabungkan beberapa methods untuk capitalize nama

let nameToCapitalize = "john smith";
// Steps:
// 1. Pecah menjadi array dengan split(" ")
// 2. Capitalize huruf pertama tiap kata
// 3. Gabung kembali

let words = nameToCapitalize.split(',');
let capitalizedWords = words.map(word =>
    word.toUpperCase + word.toUpperCase + word.toUpperCase // Kapitalisasi setiap kata
);
let capitalized = capitalizedWords.?;

console.log("\n11. Capitalize:");
console.log("Original:", nameToCapitalize); // Expected: "john smith"
console.log("Capitalized:", capitalized); // Expected: "John Smith"

// ============================================
// LATIHAN 12: Format nomor telepon
// ============================================
// Ubah "08123456789" jadi "0812-3456-789"

let phoneNumber = "08123456789";

let part1 = phoneNumber.slice(0, 4);
let part2 = phoneNumber.slice(4, 8);
let part3 = phoneNumber.slice(8);

// Ambil bagian-bagian dan gabung dengan dash
let formatted = part1 + "-" + part2 + "-" + part3;

console.log("\n12. Format phone:");
console.log("Original:", phoneNumber); // Expected: "08123456789"
console.log("Formatted:", formatted); // Expected: "0812-3456-789"

// ============================================
// LATIHAN 13: Cek palindrome
// ============================================
// Palindrome = kata yang sama jika dibaca dari belakang

let word = "level";

// Balik kata tersebut
let reversed = word.split('').reverse('').join(''); // Pecah, balik, gabung

// Cek apakah palindrome
let isPalindrome = word === reversed;

console.log("\n13. Palindrome check:");
console.log("Kata:", word); // Expected: "level"
console.log("Dibalik:", reversed); // Expected: "level"
console.log("Palindrome?", isPalindrome); // Expected: true

// ============================================
// LATIHAN 14: Hidden message
// ============================================
// Ambil huruf ke-2 dari setiap kata

let sentenceHidden = "Capture Every Letter's True Essence";
let wordsHidden = sentenceHidden.split();
let hidden = wordsHidden.map(word => word[2]).join('');

console.log("\n14. Hidden message:");
console.log("Sentence:", sentenceHidden);
console.log("Hidden message:", hidden); // Expected: "aptureet"

// ============================================
// LATIHAN 15: Password strength checker
// ============================================
// Cek kekuatan password:
// - Minimal 8 karakter
// - Mengandung huruf besar
// - Mengandung huruf kecil
// - Mengandung angka

function checkPasswordStrength(password) {
    let hasMinLength = password.length >= 8;
    let hasUpperCase = password !== password.toUpperCase();
    let hasLowerCase = password !== password.toLocaleLowerCase();
    let hasNumber = /?/.?; // Regex untuk angka

    return {
        minLength: hasMinLength,
        upperCase: hasUpperCase,
        lowerCase: hasLowerCase,
        hasNumber: hasNumber,
        isStrong: hasMinLength && hasUpperCase && hasLowerCase && hasNumber
    };
}

let testPassword = "MyPass123";
let strength = checkPasswordStrength(testPassword);

console.log("\n15. Password strength:");
console.log("Password:", testPassword);
console.log("Strength check:", strength);
console.log("Is strong?", strength.?); // Expected: true

console.log("\n=== Selesai ===");
console.log("Jalankan checker untuk validasi:");
console.log("node exercises/checker.js exercises/day-6/string-methods.js 6");