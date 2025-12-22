// Day 17: Array Iteration
// Student: Imam Baharudin
// Status: [ ] Belum dimulai [ ] Sedang dikerjakan [ ] Selesai

// ============================================
// TODO 1: forEach() - Basic Loop
// Gunakan forEach untuk menampilkan setiap elemen
// ============================================


// 1a. Gunakan forEach untuk console.log setiap buah
// Tulis kode di bawah ini:

let buah = ["Apel", "Jeruk", "Mangga", "Pisang"];

buah.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`)
});


// 1b. Gunakan forEach untuk menampilkan dengan format: "1. Apel", "2. Jeruk", dst
// Hint: Gunakan parameter index
// Tulis kode di bawah ini:

console.log("TODO 1 - forEach basic completed");

// ============================================
// TODO 2: forEach() - Menghitung Total
// Gunakan forEach untuk akumulasi nilai
// ============================================

let nilaiUjian = [85, 90, 78, 92, 88];
let totalNilai = 0;

// 2a. Gunakan forEach untuk menjumlahkan semua nilai ke variabel totalNilai
// Tulis kode di bawah ini:

nilaiUjian.forEach(num => {
    totalNilai = totalNilai + num
});

// 2b. Hitung rata-rata dan simpan ke variabel rataRata
// Tulis kode di bawah ini:
let rataRata;

nilaiUjian.forEach(rat => {
    rataRata = totalNilai / nilaiUjian.length
})

console.log("TODO 2 - Total Nilai:", totalNilai);
console.log("TODO 2 - Rata-rata:", typeof rataRata !== 'undefined' ? rataRata : "belum diisi");

// ============================================
// TODO 3: forEach() - Counting
// Hitung jumlah item yang memenuhi kondisi
// ============================================

let angkaRandom = [12, 5, 8, 130, 44, 3, 55, 22, 100, 7];
let jumlahGenap = 0;
let jumlahDiatas50 = 0;

// 3a. Gunakan forEach untuk menghitung berapa angka genap
// Tulis kode di bawah ini:
angkaRandom.forEach(angka => {
    if (angka % 2 == 0) {
        jumlahGenap += 1
    }
    if (angka > 50) {
        jumlahDiatas50 += 1
    }
});

// 3b. Gunakan forEach untuk menghitung berapa angka di atas 50
// Tulis kode di bawah ini:


console.log("TODO 3 - Jumlah Genap:", jumlahGenap);
console.log("TODO 3 - Jumlah > 50:", jumlahDiatas50);

// ============================================
// TODO 4: map() - Transformasi Angka
// Gunakan map untuk mengubah array
// ============================================

let angka = [1, 2, 3, 4, 5];

// 4a. Buat array baru yang berisi setiap angka dikali 2
// Simpan ke variabel doubled
// Tulis kode di bawah ini:
let doubled = angka.map(num => num * 2)

// 4b. Buat array baru yang berisi setiap angka dikuadratkan
// Simpan ke variabel squared
// Tulis kode di bawah ini:
let squared = angka.map(num1 => num1 ** 2);


// 4c. Buat array baru yang berisi setiap angka ditambah 10
// Simpan ke variabel plusTen
// Tulis kode di bawah ini:
let plusTen = angka.map(num2 => num2 + 10);


console.log("TODO 4a - Doubled:", typeof doubled !== 'undefined' ? doubled : "belum diisi");
console.log("TODO 4b - Squared:", typeof squared !== 'undefined' ? squared : "belum diisi");
console.log("TODO 4c - Plus Ten:", typeof plusTen !== 'undefined' ? plusTen : "belum diisi");

// ============================================
// TODO 5: map() - Transformasi String
// Gunakan map untuk mengubah array string
// ============================================

let namaKecil = ["john", "jane", "bob", "alice"];

// 5a. Buat array dengan semua nama menjadi UPPERCASE
// Simpan ke variabel namaUpper
// Tulis kode di bawah ini:
let namaUpper = namaKecil.map(nama => nama.toUpperCase());


// 5b. Buat array dengan huruf pertama kapital (capitalize)
// Contoh: "john" -> "John"
// Simpan ke variabel namaCapitalized
// Tulis kode di bawah ini:
let namaCapitalized = namaKecil.map(nama => nama.charAt(0).toUpperCase() + nama.slice(1));


// 5c. Buat array dengan format "Hello, [nama]!"
// Contoh: "john" -> "Hello, John!"
// Simpan ke variabel namaGreeting
// Tulis kode di bawah ini:
let namaGreeting = namaKecil.map(nama => `Hello, ${nama.charAt(0).toUpperCase() + nama.slice(1)}`);




console.log("TODO 5a - Uppercase:", typeof namaUpper !== 'undefined' ? namaUpper : "belum diisi");
console.log("TODO 5b - Capitalized:", typeof namaCapitalized !== 'undefined' ? namaCapitalized : "belum diisi");
console.log("TODO 5c - Greeting:", typeof namaGreeting !== 'undefined' ? namaGreeting : "belum diisi");

// ============================================
// TODO 6: map() - Format Harga
// Gunakan map untuk memformat angka ke format rupiah
// ============================================

let hargaProduk = [10000, 25000, 50000, 100000, 250000];

// 6a. Buat array dengan format "Rp10.000", "Rp25.000", dst
// Hint: Gunakan toLocaleString('id-ID') untuk format ribuan
// Simpan ke variabel hargaFormatted
// Tulis kode di bawah ini:
let hargaFormatted = hargaProduk.map(harga => `Rp.${harga.toLocaleString('id-ID')}`)

// 6b. Buat array dengan harga setelah diskon 20%
// Simpan ke variabel hargaDiskon
// Tulis kode di bawah ini:
let hargaDiskon = hargaProduk.map(harga => harga * 0.8);

console.log("TODO 6a - Formatted:", typeof hargaFormatted !== 'undefined' ? hargaFormatted : "belum diisi");
console.log("TODO 6b - Diskon 20%:", typeof hargaDiskon !== 'undefined' ? hargaDiskon : "belum diisi");

// ============================================
// TODO 7: map() - Transformasi Object
// Gunakan map untuk mengubah array of objects
// ============================================

let students = [
    { name: "Budi", score: 85 },
    { name: "Ani", score: 92 },
    { name: "Citra", score: 78 },
    { name: "Dedi", score: 95 }
];

// 7a. Buat array yang hanya berisi nama-nama siswa
// Simpan ke variabel studentNames
// Tulis kode di bawah ini:
let studentNames = students.map(nama => nama.name);


// 7b. Buat array yang hanya berisi nilai-nilai siswa
// Simpan ke variabel studentScores
// Tulis kode di bawah ini:
let studentScores = students.map(nilai => nilai.score);


// 7c. Buat array dengan tambahan property "passed" (true jika score >= 80)
// Simpan ke variabel studentsWithStatus
// Hint: Gunakan spread operator {...student, passed: ...}
// Tulis kode di bawah ini:
let studentsWithStatus = students.map(s => ({
    ...s,
    passed: s.score >= 80 ? true : false
}))


console.log("TODO 7a - Names:", typeof studentNames !== 'undefined' ? studentNames : "belum diisi");
console.log("TODO 7b - Scores:", typeof studentScores !== 'undefined' ? studentScores : "belum diisi");
console.log("TODO 7c - With Status:", typeof studentsWithStatus !== 'undefined' ? studentsWithStatus : "belum diisi");

// ============================================
// TODO 8: map() dengan Index
// Gunakan parameter index dalam map
// ============================================

let items = ["Apel", "Jeruk", "Mangga", "Pisang"];

// 8a. Buat array dengan format "1. Apel", "2. Jeruk", dst
// Hint: index dimulai dari 0, jadi perlu +1
// Simpan ke variabel numberedItems
// Tulis kode di bawah ini:
let numberedItems = items.map((item, index) => {
    return `${index + 1}. ${item}`
});


// 8b. Buat array dengan format object {id: 1, name: "Apel"}, dst
// Simpan ke variabel itemsWithId
// Tulis kode di bawah ini:
let itemsWithId = items.map((item, index) => ({
    id: index + 1,
    name: item
}));


console.log("TODO 8a - Numbered:", typeof numberedItems !== 'undefined' ? numberedItems : "belum diisi");
console.log("TODO 8b - With ID:", typeof itemsWithId !== 'undefined' ? itemsWithId : "belum diisi");

// ============================================
// TODO 9: Kombinasi forEach dan map
// Gunakan kedua method untuk tugas yang berbeda
// ============================================

let products = [
    { name: "Buku", price: 15000, qty: 3 },
    { name: "Pensil", price: 5000, qty: 10 },
    { name: "Penghapus", price: 3000, qty: 5 }
];

// 9a. Gunakan map untuk membuat array dengan subtotal (price * qty)
// Simpan ke variabel subtotals
// Tulis kode di bawah ini:
let subtotals = products.map(harga => harga.price * harga.qty);

// 9b. Gunakan forEach untuk menghitung grandTotal dari subtotals
// Simpan ke variabel grandTotal
// Tulis kode di bawah ini:
let grandTotal = 0;

subtotals.forEach(harga => {
    grandTotal = grandTotal + harga
});



console.log("TODO 9a - Subtotals:", typeof subtotals !== 'undefined' ? subtotals : "belum diisi");
console.log("TODO 9b - Grand Total:", grandTotal);

// ============================================
// TODO 10: Function dengan map
// Buat function yang menggunakan map
// ============================================

// 10a. Buat function celsiusToFahrenheit(temps) yang:
// - Menerima array suhu dalam Celsius
// - Mengembalikan array suhu dalam Fahrenheit
// - Rumus: F = (C × 9/5) + 32
// Tulis kode di bawah ini:
function celsiusToFahrenheit(temps) {
    return temps.map(c => (c * 9/5) + 32);
}

// 10b. Buat function addPrefix(arr, prefix) yang:
// - Menerima array string dan prefix
// - Mengembalikan array dengan prefix ditambahkan di depan setiap string
// - Contoh: addPrefix(["Budi", "Ani"], "Mr. ") => ["Mr. Budi", "Mr. Ani"]
// Tulis kode di bawah ini:

let nama = ['budi', 'Ari']
const addPrefix = (arr, prefix) => arr.map(item => prefix + item)

let hasil = addPrefix(nama, 'Mr. ')
console.log(hasil)



// 10c. Buat function extractProperty(arr, prop) yang:
// - Menerima array of objects dan nama property
// - Mengembalikan array berisi nilai property tersebut
// - Contoh: extractProperty([{a: 1}, {a: 2}], "a") => [1, 2]
// Tulis kode di bawah ini:

let properties = [
    { 'a': 1 },
    { 'b': 2 },
    { 'c': 3 },
    { 'd': 4 },
];


const extractProperty = (arr, prop) => arr.map(item => item[prop])

let property = extractProperty(properties, 'a')

console.log(property)




// Test functions
if (typeof celsiusToFahrenheit === 'function') {
    console.log("TODO 10a - Celsius to F:", celsiusToFahrenheit([0, 100, 37]));
} else {
    console.log("TODO 10a - Function celsiusToFahrenheit belum dibuat");
}

if (typeof addPrefix === 'function') {
    console.log("TODO 10b - Add Prefix:", addPrefix(["Budi", "Ani"], "Pak "));
} else {
    console.log("TODO 10b - Function addPrefix belum dibuat");
}

if (typeof extractProperty === 'function') {
    console.log("TODO 10c - Extract:", extractProperty([{ x: 1 }, { x: 2 }, { x: 3 }], "x"));
} else {
    console.log("TODO 10c - Function extractProperty belum dibuat");
}

// ============================================
// TODO 11: HTML List Generator
// Gunakan map untuk generate HTML string
// ============================================

let menuItems = ["Home", "About", "Products", "Contact"];

// 11a. Buat array HTML list items: ["<li>Home</li>", "<li>About</li>", ...]
// Simpan ke variabel listItems
// Tulis kode di bawah ini:
let listItems = menuItems.map(item => {
    return `<li>${item}</li>`
})


// 11b. Buat array HTML links: ['<a href="#home">Home</a>', ...]
// Hint: href adalah nama lowercase dengan # di depan
// Simpan ke variabel linkItems
// Tulis kode di bawah ini:
let linkItems = menuItems.map(item => {
    let link = item.toLowerCase
    return `<a href="#home">${item}</a>`
});


console.log("TODO 11a - List Items:", typeof listItems !== 'undefined' ? listItems : "belum diisi");
console.log("TODO 11b - Link Items:", typeof linkItems !== 'undefined' ? linkItems : "belum diisi");

// ============================================
// TODO 12: Data Pipeline
// Chain multiple map operations
// ============================================

let rawData = ["  john doe  ", "  jane smith  ", "  bob wilson  "];

// 12a. Buat array yang sudah di-trim dan di-capitalize setiap kata
// Pipeline: trim -> split -> capitalize each word -> join
// Hasil: ["John Doe", "Jane Smith", "Bob Wilson"]
// Simpan ke variabel cleanedNames
// Tulis kode di bawah ini:
let cleanedNames = rawData.map(nama => {
    return nama
        .trim()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}
);


console.log("TODO 12 - Cleaned Names:", typeof cleanedNames !== 'undefined' ? cleanedNames : "belum diisi");

// ============================================
// TODO 13: Grade Calculator
// Kombinasi map untuk membuat laporan nilai
// ============================================

let studentGrades = [
    { name: "Budi", math: 85, science: 90, english: 78 },
    { name: "Ani", math: 92, science: 88, english: 95 },
    { name: "Citra", math: 78, science: 82, english: 80 }
];

// 13a. Buat array dengan tambahan property "average" (rata-rata 3 nilai)
// dan "grade" (A >= 90, B >= 80, C >= 70, D < 70)
// Simpan ke variabel studentsReport
// Tulis kode di bawah ini:
let studentsReport = studentGrades.map(student => {
    let average = (student.math + student.science + student.english) / 3

    let gradeLabel;
    if (average >= 90) {
        gradeLabel = 'A'
    } else if (average >= 80) {
        gradeLabel = "B"
    } else if (average >= 70) {
        gradeLabel = 'C'
    } else {
        gradeLabel = 'D'
    }

    return {
        ...student,
        average: average.toFixed(1),
        grade: gradeLabel
    }

});


console.log("TODO 13 - Students Report:", typeof studentsReport !== 'undefined' ? studentsReport : "belum diisi");

// ============================================
// TESTING SECTION (Jangan diubah!)
// ============================================

console.log("\n========== TESTING ==========\n");

let testResults = {
    todo1: true, // Manual check - forEach output
    todo2: totalNilai === 433 && rataRata === 86.6,
    todo3: jumlahGenap === 6 && jumlahDiatas50 === 3,
    todo4: Array.isArray(doubled) && doubled.length === 5 && doubled[0] === 2 &&
        Array.isArray(squared) && squared[2] === 9 &&
        Array.isArray(plusTen) && plusTen[0] === 11,
    todo5: Array.isArray(namaUpper) && namaUpper[0] === "JOHN" &&
        Array.isArray(namaCapitalized) && namaCapitalized[0] === "John" &&
        Array.isArray(namaGreeting) && namaGreeting[0].includes("Hello"),
    todo6: Array.isArray(hargaFormatted) && hargaFormatted[0].includes("Rp") &&
        Array.isArray(hargaDiskon) && hargaDiskon[0] === 8000,
    todo7: Array.isArray(studentNames) && studentNames.length === 4 &&
        Array.isArray(studentScores) && studentScores[0] === 85 &&
        Array.isArray(studentsWithStatus) && typeof studentsWithStatus[0].passed !== 'undefined',
    todo8: Array.isArray(numberedItems) && numberedItems[0] === "1. Apel" &&
        Array.isArray(itemsWithId) && itemsWithId[0].id === 1,
    todo9: Array.isArray(subtotals) && subtotals[0] === 45000 && grandTotal === 110000,
    todo10: typeof celsiusToFahrenheit === 'function' &&
        typeof addPrefix === 'function' &&
        typeof extractProperty === 'function',
    todo11: Array.isArray(listItems) && listItems[0] === "<li>Home</li>" &&
        Array.isArray(linkItems) && linkItems[0].includes("href"),
    todo12: Array.isArray(cleanedNames) && cleanedNames[0] === "John Doe",
    todo13: Array.isArray(studentsReport) &&
        typeof studentsReport[0].average !== 'undefined' &&
        typeof studentsReport[0].grade !== 'undefined'
};

let passed = 0;
let total = Object.keys(testResults).length;

for (let [todo, result] of Object.entries(testResults)) {
    let status = result ? "PASSED" : "FAILED";
    let emoji = result ? "[v]" : "[x]";
    console.log(`${emoji} ${todo.toUpperCase()}: ${status}`);
    if (result) passed++;
}

console.log(`\n========== SCORE: ${passed}/${total} ==========`);

if (passed === total) {
    console.log("Selamat! Semua TODO berhasil diselesaikan!");
    console.log("Jalankan: node checker.js day-17/array-iteration.js 17");
} else {
    console.log("Masih ada TODO yang belum selesai. Semangat!");
}
