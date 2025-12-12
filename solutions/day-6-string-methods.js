// Day 6: String Methods - Solutions

console.log("=== Day 6: String Methods ===\n");

// ============================================
// LATIHAN 1: Property length
// ============================================
let kalimat = "Belajar JavaScript itu menyenangkan";
let panjangKalimat = kalimat.length;

console.log("1. Panjang kalimat:", panjangKalimat); // 32

// ============================================
// LATIHAN 2: Mengubah huruf besar/kecil
// ============================================
let nama = "john doe";
let namaBesar = nama.toUpperCase();
let namaKecil = nama.toLowerCase();

console.log("\n2. Manipulasi nama:");
console.log("Original:", nama); // "john doe"
console.log("Uppercase:", namaBesar); // "JOHN DOE"
console.log("Lowercase:", namaKecil); // "john doe"

// ============================================
// LATIHAN 3: Menghapus spasi dengan trim()
// ============================================
let inputUser = "   admin@email.com   ";
let emailBersih = inputUser.trim();

console.log("\n3. Trim spasi:");
console.log("Original:", `"${inputUser}"`); // "   admin@email.com   "
console.log("Trimmed:", `"${emailBersih}"`); // "admin@email.com"

// ============================================
// LATIHAN 4: Mencari posisi dengan indexOf()
// ============================================
let sentence = "The quick brown fox jumps over the lazy dog";
let posisiFox = sentence.indexOf("fox");
let posisiCat = sentence.indexOf("cat");

console.log("\n4. Pencarian dengan indexOf:");
console.log('Posisi "fox":', posisiFox); // 16
console.log('Posisi "cat":', posisiCat); // -1

// ============================================
// LATIHAN 5: Mengecek keberadaan dengan includes()
// ============================================
let email = "user@example.com";
let hasAt = email.includes("@");
let hasDotCom = email.includes(".com");

console.log("\n5. Cek dengan includes:");
console.log('Email mengandung "@":', hasAt); // true
console.log('Email mengandung ".com":', hasDotCom); // true

// ============================================
// LATIHAN 6: Mengambil bagian string dengan slice()
// ============================================
let fullName = "Budi Santoso";
let firstName = fullName.slice(0, 4);
let lastName = fullName.slice(5);

console.log("\n6. Slice string:");
console.log("Full name:", fullName); // "Budi Santoso"
console.log("First name:", firstName); // "Budi"
console.log("Last name:", lastName); // "Santoso"

// ============================================
// LATIHAN 7: Memotong string dengan substring()
// ============================================
let text = "JavaScript Programming";
let word1 = text.substring(0, 10);
let word2 = text.substring(11);

console.log("\n7. Substring:");
console.log("Original:", text); // "JavaScript Programming"
console.log("Word 1:", word1); // "JavaScript"
console.log("Word 2:", word2); // "Programming"

// ============================================
// LATIHAN 8: Mengganti bagian string dengan replace()
// ============================================
let message = "Hello World, Hello Universe";
let newMessage = message.replace("World", "JavaScript");

console.log("\n8. Replace:");
console.log("Original:", message); // "Hello World, Hello Universe"
console.log("Modified:", newMessage); // "Hello JavaScript, Hello Universe"

// ============================================
// LATIHAN 9: Memecah string dengan split()
// ============================================
let csvData = "apple,banana,orange,grape";
let fruits = csvData.split(",");

console.log("\n9. Split string:");
console.log("Original:", csvData); // "apple,banana,orange,grape"
console.log("Array result:", fruits); // ["apple", "banana", "orange", "grape"]
console.log("Jumlah buah:", fruits.length); // 4

// ============================================
// LATIHAN 10: Mengulang string dengan repeat()
// ============================================
let kata = "Ha";
let laugh = kata.repeat(3);

console.log("\n10. Repeat string:");
console.log('Kata "Ha" diulang 3 kali:', laugh); // "HaHaHa"

// ============================================
// LATIHAN 11: Capitalize setiap kata
// ============================================
let nameToCapitalize = "john smith";
let words = nameToCapitalize.split(" ");
let capitalizedWords = words.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
);
let capitalized = capitalizedWords.join(" ");

console.log("\n11. Capitalize:");
console.log("Original:", nameToCapitalize); // "john smith"
console.log("Capitalized:", capitalized); // "John Smith"

// ============================================
// LATIHAN 12: Format nomor telepon
// ============================================
let phoneNumber = "08123456789";
let formatted = phoneNumber.slice(0, 4) + "-" +
               phoneNumber.slice(4, 8) + "-" +
               phoneNumber.slice(8);

console.log("\n12. Format phone:");
console.log("Original:", phoneNumber); // "08123456789"
console.log("Formatted:", formatted); // "0812-3456-789"

// ============================================
// LATIHAN 13: Cek palindrome
// ============================================
let word = "level";
let reversed = word.split("").reverse().join("");
let isPalindrome = word.toLowerCase() === reversed.toLowerCase();

console.log("\n13. Palindrome check:");
console.log("Kata:", word); // "level"
console.log("Dibalik:", reversed); // "level"
console.log("Palindrome?", isPalindrome); // true

// ============================================
// LATIHAN 14: Hidden message
// ============================================
let sentenceHidden = "Capture Every Letter's True Essence";
let wordsHidden = sentenceHidden.split(" ");
let hidden = wordsHidden.map(word => word[1]).join("");

console.log("\n14. Hidden message:");
console.log("Sentence:", sentenceHidden);
console.log("Hidden message:", hidden); // "aptureet"

// ============================================
// LATIHAN 15: Password strength checker
// ============================================
function checkPasswordStrength(password) {
    let hasMinLength = password.length >= 8;
    let hasUpperCase = password !== password.toLowerCase();
    let hasLowerCase = password !== password.toUpperCase();
    let hasNumber = /\d/.test(password);

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
console.log("Is strong?", strength.isStrong); // true

// ============================================
// Tambahan: Berbagai contoh string methods
// ============================================

console.log("\n=== Tambahan: String Methods Examples ===");

// charAt() - mengambil karakter pada index tertentu
let text2 = "Hello";
console.log("\ncharAt(0):", text2.charAt(0)); // "H"
console.log("charCodeAt(0):", text2.charCodeAt(0)); // 72 (ASCII code)

// startsWith() dan endsWith()
let fileName = "document.pdf";
console.log("\nstartsWith('doc'):", fileName.startsWith("doc")); // true
console.log("endsWith('.pdf'):", fileName.endsWith(".pdf")); // true

// padStart() dan padEnd()
let number = "5";
console.log("\npadStart(3, '0'):", number.padStart(3, "0")); // "005"
console.log("padEnd(5, '.'):", number.padEnd(5, ".")); // "5...."

// concat()
let firstName = "John";
let lastName = "Doe";
console.log("\nconcat:", firstName.concat(" ", lastName)); // "John Doe"

// lastIndexOf()
let sentence2 = "Hello hello hello";
console.log("\nlastIndexOf('hello'):", sentence2.lastIndexOf("hello")); // 12

// match()
let text3 = "The price is $100. Another price is $200.";
let prices = text3.match(/\$\d+/g);
console.log("\nMatch prices:", prices); // ["$100", "$200"]

// Template literals
let product = "Laptop";
let price = 1000;
console.log(`\nTemplate literal: ${product} costs $${price}`);

// Multiline string
let multiline = `Line 1
Line 2
Line 3`;
console.log("\nMultiline string:", multiline);

console.log("\n=== Selesai ===");