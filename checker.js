// Automatic JavaScript Practice Checker
// Untuk mengecek jawaban praktik JavaScript

const fs = require('fs');

// Function to check Day 1: Introduction exercises
function checkDay1(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: Hello World
    results.total++;
    if (code.includes('console.log') && (code.includes('Halo') || code.includes('Hello') || code.includes('halo') || code.includes('hello'))) {
        results.passed.push('✓ Menampilkan Hello World');
    } else {
        results.failed.push('✗ Belum menampilkan Hello World');
    }

    // Check 2: Nama dan umur
    results.total++;
    if (code.includes('console.log') && (code.includes('nama') || code.includes('Nama'))) {
        results.passed.push('✓ Menampilkan nama');
    } else {
        results.failed.push('✗ Belum menampilkan nama');
    }

    // Check 3: Umur
    results.total++;
    if (code.includes('console.log') && (code.includes('umur') || code.includes('Umur') || code.includes('tahun'))) {
        results.passed.push('✓ Menampilkan umur');
    } else {
        results.failed.push('✗ Belum menampilkan umur');
    }

    // Check 4: 5 hal favorit
    results.total++;
    const consoleLogCount = (code.match(/console\.log/g) || []).length;
    if (consoleLogCount >= 5) {
        results.passed.push('✓ Menampilkan 5 hal favorit');
    } else {
        results.failed.push('✗ Belum menampilkan 5 hal favorit');
    }

    // Check 5: Comments
    results.total++;
    if (code.includes('//') || code.includes('/*')) {
        results.passed.push('✓ Menggunakan comments');
    } else {
        results.failed.push('✗ Belum menggunakan comments');
    }

    return results;
}

// Function to check Day 2: Variables exercises
function checkDay2(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: Variabel data diri
    results.total++;
    if (code.includes('const nama') || code.includes('let nama')) {
        results.passed.push('✓ Membuat variabel nama');
    } else {
        results.failed.push('✗ Belum membuat variabel nama');
    }

    // Check 2: Variabel umur yang bisa diubah
    results.total++;
    if (code.includes('let umur')) {
        results.passed.push('✓ Menggunakan let untuk umur (bisa diubah)');
    } else if (code.includes('const umur')) {
        results.failed.push('✗ Menggunakan const untuk umur (tidak bisa diubah)');
    } else {
        results.failed.push('✗ Belum membuat variabel umur');
    }

    // Check 3: Mengubah nilai umur
    results.total++;
    if (code.includes('umur =')) {
        results.passed.push('✓ Mengubah nilai umur');
    } else {
        results.failed.push('✗ Belum mengubah nilai umur');
    }

    // Check 4: Variabel nama lengkap
    results.total++;
    if (code.includes('namaLengkap') || code.includes('nama_lengkap')) {
        results.passed.push('✓ Membuat variabel nama lengkap');
    } else {
        results.failed.push('✗ Belum membuat variabel nama lengkap');
    }

    // Check 5: Variabel tahun lahir
    results.total++;
    if (code.includes('tahunLahir') || code.includes('tahun_lahir')) {
        results.passed.push('✓ Membuat variabel tahun lahir');
    } else {
        results.failed.push('✗ Belum membuat variabel tahun lahir');
    }

    // Check 6: Variabel hobi (string)
    results.total++;
    if (code.includes('hobi') && code.includes('"')) {
        results.passed.push('✓ Membuat variabel hobi (string)');
    } else {
        results.failed.push('✗ Belum membuat variabel hobi dengan string');
    }

    // Check 7: Variabel status menikah (boolean)
    results.total++;
    if (code.includes('menikah') && (code.includes('true') || code.includes('false'))) {
        results.passed.push('✓ Membuat variabel status menikah (boolean)');
    } else {
        results.failed.push('✗ Belum membuat variabel status menikah dengan boolean');
    }

    return results;
}

// Function to check Day 3: Data Types exercises
function checkDay3(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check string declaration
    results.total++;
    if (code.includes('let teks') || code.includes('const teks') || code.includes('var teks')) {
        results.passed.push('✓ Mendeklarasikan variabel teks');
    } else {
        results.failed.push('✗ Belum mendeklarasikan variabel teks');
    }

    // Check number declaration
    results.total++;
    if (code.includes('let angka') || code.includes('const angka') || code.includes('var angka')) {
        results.passed.push('✓ Mendeklarasikan variabel angka');
    } else {
        results.failed.push('✗ Belum mendeklarasikan variabel angka');
    }

    // Check boolean declaration
    results.total++;
    if (code.includes('let isAktif') || code.includes('const isAktif')) {
        results.passed.push('✓ Mendeklarasikan variabel boolean (isAktif)');
    } else {
        results.failed.push('✗ Belum mendeklarasikan variabel boolean (isAktif)');
    }

    // Check null
    results.total++;
    if (code.includes('dataKosong') && code.includes('null')) {
        results.passed.push('✓ Mendeklarasikan variabel null');
    } else {
        results.failed.push('✗ Belum mendeklarasikan variabel null');
    }

    // Check undefined
    results.total++;
    if (code.includes('belumDiisi') && !code.includes('belumDiisi =')) {
        results.passed.push('✓ Mendeklarasikan variabel undefined');
    } else {
        results.failed.push('✗ Belum mendeklarasikan variabel undefined (tanpa nilai)');
    }

    // Check typeof usage
    results.total++;
    if (code.includes('typeof')) {
        results.passed.push('✓ Menggunakan typeof operator');
    } else {
        results.failed.push('✗ Belum menggunakan typeof operator');
    }

    // Check type conversion
    results.total++;
    if (code.includes('Number(')) {
        results.passed.push('✓ Melakukan konversi tipe data dengan Number()');
    } else {
        results.failed.push('✗ Belum melakukan konversi dengan Number()');
    }

    // Check boolean function
    results.total++;
    if (code.includes('celsiusToFahrenheit') || code.includes('kmToMiles')) {
        results.passed.push('✓ Membuat fungsi konversi');
    } else {
        results.failed.push('✗ Belum membuat fungsi konversi');
    }

    return results;
}

// Function to check Day 4: Operators exercises
function checkDay4(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check arithmetic operations
    results.total++;
    if (code.includes('a + b')) {
        results.passed.push('✓ Melakukan operasi penjumlahan');
    } else {
        results.failed.push('✗ Belum melakukan operasi penjumlahan');
    }

    // Check all arithmetic operations
    results.total++;
    const arithOps = ['+', '-', '*', '/', '%', '**'];
    const foundOps = arithOps.filter(op => code.includes(`${a} ${op} ${b}`));
    if (foundOps.length >= 4) {
        results.passed.push('✓ Melakukan multiple operasi aritmatika');
    } else {
        results.failed.push('✗ Belum melakukan cukup operasi aritmatika');
    }

    // Check assignment operators
    results.total++;
    if (code.includes('+=')) {
        results.passed.push('✓ Menggunakan operator assignment (+=)');
    } else {
        results.failed.push('✗ Belum menggunakan operator assignment (+=)');
    }

    // Check comparison operators
    results.total++;
    if (code.includes('==') && code.includes('===')) {
        results.passed.push('✓ Membandingkan == dan ===');
    } else {
        results.failed.push('✗ Belum membandingkan == dan ===');
    }

    // Check calculator application
    results.total++;
    if (code.includes('num1') && code.includes('num2')) {
        results.passed.push('✓ Membuat aplikasi kalkulator');
    } else {
        results.failed.push('✗ Belum membuat aplikasi kalkulator');
    }

    // Check temperature conversion
    results.total++;
    if (code.includes('celsius') && code.includes('fahrenheit')) {
        results.passed.push('✓ Melakukan konversi suhu');
    } else {
        results.failed.push('✗ Belum melakukan konversi suhu');
    }

    // Check BMI calculation
    results.total++;
    if (code.includes('bmi') && code.includes('berat') && code.includes('tinggi')) {
        results.passed.push('✓ Menghitung BMI');
    } else {
        results.failed.push('✗ Belum menghitung BMI');
    }

    return results;
}

// Function to check Day 5: Logical Operators exercises
function checkDay5(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: Operator AND
    results.total++;
    if (code.includes('let canDrive = isAdult && hasLicense')) {
        results.passed.push('✓ Menggunakan operator AND (&&)');
    } else {
        results.failed.push('✗ Belum menggunakan operator AND dengan benar');
    }

    // Check 2: Operator OR
    results.total++;
    if (code.includes('let isDayOff = isWeekend || isHoliday')) {
        results.passed.push('✓ Menggunakan operator OR (||)');
    } else {
        results.failed.push('✗ Belum menggunakan operator OR dengan benar');
    }

    // Check 3: Operator NOT
    results.total++;
    if (code.includes('let canPlay = !isRaining')) {
        results.passed.push('✓ Menggunakan operator NOT (!)');
    } else {
        results.failed.push('✗ Belum menggunakan operator NOT dengan benar');
    }

    // Check 4: Kombinasi operator dengan kurung
    results.total++;
    if (code.includes('let canEnter = (age >= 18 && hasTicket) || isVIP')) {
        results.passed.push('✓ Kombinasi operator dengan grouping');
    } else {
        results.failed.push('✗ Belum menggunakan grouping dengan benar');
    }

    // Check 5: Default value dengan OR
    results.total++;
    if (code.includes('let displayName = userName || "Guest"')) {
        results.passed.push('✓ Default value dengan operator OR');
    } else {
        results.failed.push('✗ Belum menggunakan OR untuk default value');
    }

    // Check 6: Kondisi kelulusan
    results.total++;
    if (code.includes('let isPassed = studentScore >= 70 && attendance >= 80')) {
        results.passed.push('✓ Logika kelulusan dengan AND');
    } else {
        results.failed.push('✗ Logika kelulusan salah');
    }

    // Check 7: Validasi form kompleks
    results.total++;
    if (code.includes('let isFormValid = email.includes("@") && (password.length > 8 || isLoggedIn)')) {
        results.passed.push('✓ Validasi form dengan AND + OR');
    } else {
        results.failed.push('✗ Validasi form belum benar');
    }

    // Check 8: Shopping cart logic
    results.total++;
    if (code.includes('let canCheckout = cartItems.length > 0 && (isLoggedIn2 || guestCheckoutEnabled)')) {
        results.passed.push('✓ Logic shopping cart');
    } else {
        results.failed.push('✗ Logic shopping cart belum benar');
    }

    // Check 9: Boolean() function
    results.total++;
    const booleanCount = (code.match(/Boolean\(/g) || []).length;
    if (booleanCount >= 3) {
        results.passed.push('✓ Menggunakan Boolean() function');
    } else {
        results.failed.push('✗ Perlu menggunakan Boolean() function');
    }

    // Check 10: Multiple conditions untuk game
    results.total++;
    if (code.includes('let canAttack = isAlive && (hasWeapon || hasMagic)')) {
        results.passed.push('✓ Multiple conditions untuk game logic');
    } else {
        results.failed.push('✗ Game logic belum benar');
    }

    return results;
}

// Function to check Day 6: String Methods exercises
function checkDay6(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: length property
    results.total++;
    if (code.includes('let panjangKalimat = kalimat.length')) {
        results.passed.push('✓ Menggunakan property length');
    } else {
        results.failed.push('✗ Belum menggunakan property length');
    }

    // Check 2: toUpperCase dan toLowerCase
    results.total++;
    if (code.includes('toUpperCase()') && code.includes('toLowerCase()')) {
        results.passed.push('✓ Menggunakan toUpperCase dan toLowerCase');
    } else {
        results.failed.push('✗ Belum menggunakan toUpperCase/toLowerCase');
    }

    // Check 3: trim method
    results.total++;
    if (code.includes('.trim()')) {
        results.passed.push('✓ Menggunakan method trim()');
    } else {
        results.failed.push('✗ Belum menggunakan method trim()');
    }

    // Check 4: indexOf method
    results.total++;
    if (code.includes('.indexOf(')) {
        results.passed.push('✓ Menggunakan method indexOf()');
    } else {
        results.failed.push('✗ Belum menggunakan method indexOf()');
    }

    // Check 5: includes method
    results.total++;
    if (code.includes('.includes(')) {
        results.passed.push('✓ Menggunakan method includes()');
    } else {
        results.failed.push('✗ Belum menggunakan method includes()');
    }

    // Check 6: slice method
    results.total++;
    if (code.includes('.slice(')) {
        results.passed.push('✓ Menggunakan method slice()');
    } else {
        results.failed.push('✗ Belum menggunakan method slice()');
    }

    // Check 7: substring method
    results.total++;
    if (code.includes('.substring(')) {
        results.passed.push('✓ Menggunakan method substring()');
    } else {
        results.failed.push('✗ Belum menggunakan method substring()');
    }

    // Check 8: replace method
    results.total++;
    if (code.includes('.replace(')) {
        results.passed.push('✓ Menggunakan method replace()');
    } else {
        results.failed.push('✗ Belum menggunakan method replace()');
    }

    // Check 9: split method
    results.total++;
    if (code.includes('.split(')) {
        results.passed.push('✓ Menggunakan method split()');
    } else {
        results.failed.push('✗ Belum menggunakan method split()');
    }

    // Check 10: repeat method
    results.total++;
    if (code.includes('.repeat(')) {
        results.passed.push('✓ Menggunakan method repeat()');
    } else {
        results.failed.push('✗ Belum menggunakan method repeat()');
    }

    // Check 11: Capitalize logic
    results.total++;
    if (code.includes('charCodeAt') || (code.includes('charAt') && code.includes('toUpperCase') && code.includes('slice'))) {
        results.passed.push('✓ Logika capitalize dengan method string');
    } else {
        results.failed.push('✗ Logica capitalize belum benar');
    }

    // Check 12: Phone formatting
    results.total++;
    if (code.includes('phoneNumber.slice') && code.includes('"-"')) {
        results.passed.push('✓ Format nomor telepon dengan slice');
    } else {
        results.failed.push('✗ Format nomor telepon belum benar');
    }

    // Check 13: Palindrome check
    results.total++;
    if (code.includes('split("")') && code.includes('reverse()') && code.includes('join("")')) {
        results.passed.push('✓ Logika palindrome dengan reverse dan join');
    } else {
        results.failed.push('✗ Logika palindrome belum benar');
    }

    // Check 14: Multiple string methods
    results.total++;
    const stringMethods = ['toUpperCase', 'toLowerCase', 'trim', 'slice', 'split', 'join', 'replace'];
    const usedMethods = stringMethods.filter(method => code.includes(method));
    if (usedMethods.length >= 5) {
        results.passed.push('✓ Menggunakan multiple string methods');
    } else {
        results.failed.push('✗ Perlu menggunakan lebih banyak string methods');
    }

    // Check 15: Password strength checker
    results.total++;
    if (code.includes('checkPasswordStrength') && code.includes('test(')) {
        results.passed.push('✓ Password strength checker function');
    } else {
        results.failed.push('✗ Password strength checker belum lengkap');
    }

    return results;
}

// Function to check Day 7: Biodata Generator exercises
function checkDay7(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: Input data diri
    results.total++;
    if (code.includes('const namaDepan') || code.includes('let namaDepan')) {
        results.passed.push('✓ Mendeklarasikan variabel nama depan');
    } else {
        results.failed.push('✗ Belum mendeklarasikan variabel nama depan');
    }

    // Check 2: Nama belakang
    results.total++;
    if (code.includes('namaBelakang') || code.includes('namaBelakang')) {
        results.passed.push('✓ Mendeklarasikan variabel nama belakang');
    } else {
        results.failed.push('✗ Belum mendeklarasikan variabel nama belakang');
    }

    // Check 3: Tahun lahir
    results.total++;
    if (code.includes('tahunLahir') && code.includes('19')) {
        results.passed.push('✓ Mendeklarasikan variabel tahun lahir');
    } else {
        results.failed.push('✗ Belum mendeklarasikan variabel tahun lahir');
    }

    // Check 4: Email
    results.total++;
    if (code.includes('email') && code.includes('@')) {
        results.passed.push('✓ Mendeklarasikan variabel email');
    } else {
        results.failed.push('✗ Belum mendeklarasikan variabel email');
    }

    // Check 5: Pekerjaan
    results.total++;
    if (code.includes('pekerjaan')) {
        results.passed.push('✓ Mendeklarasikan variabel pekerjaan');
    } else {
        results.failed.push('✗ Belum mendeklarasikan variabel pekerjaan');
    }

    // Check 6: Process nama lengkap
    results.total++;
    if ((code.includes('toUpperCase') && code.includes('namaDepan')) || (code.includes('charAt') && code.includes('toUpperCase'))) {
        results.passed.push('✓ Memproses nama lengkap (capitalize)');
    } else {
        results.failed.push('✗ Belum memproses nama lengkap dengan benar');
    }

    // Check 7: Hitung umur
    results.total++;
    if (code.includes('new Date().getFullYear()') || (code.includes('2024') && code.includes('-'))) {
        results.passed.push('✓ Menghitung umur');
    } else {
        results.failed.push('✗ Belum menghitung umur');
    }

    // Check 8: Bersihkan email
    results.total++;
    if (code.includes('trim') && code.includes('toLowerCase')) {
        results.passed.push('✓ Membersihkan email (trim & toLowerCase)');
    } else {
        results.failed.push('✗ Belum membersihkan email');
    }

    // Check 9: Format pekerjaan
    results.total++;
    if (code.includes('pekerjaan') && (code.includes('toUpperCase') || code.includes('charAt'))) {
        results.passed.push('✓ Memformat pekerjaan');
    } else {
        results.failed.push('✗ Belum memformat pekerjaan');
    }

    // Check 10: Tampilkan output
    results.total++;
    const consoleLogCount = (code.match(/console\.log/g) || []).length;
    if (consoleLogCount >= 5) {
        results.passed.push('✓ Menampilkan biodata lengkap');
    } else {
        results.failed.push('✗ Belum menampilkan biodata lengkap');
    }

    return results;
}

// Function to check Day 8: If/Else exercises
function checkDay8(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: Sistem grading
    results.total++;
    if (code.includes('if (nilai >= 90)') && code.includes('else if')) {
        results.passed.push('✓ Membuat sistem grading dengan if/else if');
    } else {
        results.failed.push('✗ Belum membuat sistem grading');
    }

    // Check 2: Multiple grades
    results.total++;
    const gradeCount = (code.match(/Grade:/g) || []).length;
    if (gradeCount >= 4) {
        results.passed.push('✓ Multiple grade categories');
    } else {
        results.failed.push('✗ Grade categories kurang dari 4');
    }

    // Check 3: Ternary operator
    results.total++;
    if (code.includes('?') && code.includes(':')) {
        results.passed.push('✓ Menggunakan ternary operator');
    } else {
        results.failed.push('✗ Belum menggunakan ternary operator');
    }

    // Check 4: Nested if untuk diskon
    results.total++;
    if (code.includes('if (isMember)') && code.includes('if (totalBelanja')) {
        results.passed.push('✓ Nested if untuk sistem diskon');
    } else {
        results.failed.push('✗ Belum membuat nested if diskon');
    }

    // Check 5: BMI calculator
    results.total++;
    if (code.includes('bmi') && code.includes('if') && (code.includes('kurus') || code.includes('normal'))) {
        results.passed.push('✓ BMI calculator dengan kategori');
    } else {
        results.failed.push('✗ Belum membuat BMI calculator');
    }

    // Check 6: Login validation
    results.total++;
    if (code.includes('email.includes("@")') && code.includes('password.length')) {
        results.passed.push('✓ Validasi login dengan multiple conditions');
    } else {
        results.failed.push('✗ Validasi login belum lengkap');
    }

    // Check 7: FizzBuzz
    results.total++;
    if (code.includes('FizzBuzz') && code.includes('i % 15') || (code.includes('i % 3') && code.includes('i % 5'))) {
        results.passed.push('✓ FizzBuzz challenge');
    } else {
        results.failed.push('✗ FizzBuzz belum benar');
    }

    // Check 8: Game status
    results.total++;
    if (code.includes('health') && (code.includes('Game Over') || code.includes('game over'))) {
        results.passed.push('✓ Game status checker');
    } else {
        results.failed.push('✗ Game status belum diimplementasi');
    }

    return results;
}

// Function to check Day 9: Switch Case exercises
function checkDay9(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: Switch untuk hari
    results.total++;
    if (code.includes('switch (hari)') && code.includes('case 1:')) {
        results.passed.push('✓ Switch statement untuk nama hari');
    } else {
        results.failed.push('✗ Belum membuat switch untuk hari');
    }

    // Check 2: Case untuk semua hari
    results.total++;
    const caseCount = (code.match(/case \d+:/g) || []).length;
    if (caseCount >= 7) {
        results.passed.push('✓ Case untuk semua hari (1-7)');
    } else {
        results.failed.push('✗ Case untuk hari kurang dari 7');
    }

    // Check 3: Break statements
    results.total++;
    const breakCount = (code.match(/break;/g) || []).length;
    if (breakCount >= 7) {
        results.passed.push('✓ Menggunakan break statement di setiap case');
    } else {
        results.failed.push('✗ Break statement kurang lengkap');
    }

    // Check 4: Default case
    results.total++;
    if (code.includes('default:')) {
        results.passed.push('✓ Menggunakan default case');
    } else {
        results.failed.push('✗ Belum menggunakan default case');
    }

    // Check 5: Switch untuk kalkulator
    results.total++;
    if (code.includes('switch (operator)') && (code.includes('case "+"') || code.includes('case "*"'))) {
        results.passed.push('✓ Switch untuk kalkulator');
    } else {
        results.failed.push('✗ Belum membuat switch kalkulator');
    }

    // Check 6: Multiple operator cases
    results.total++;
    const operatorCount = (code.match(/case [+\-*/%]:/g) || []).length;
    if (operatorCount >= 4) {
        results.passed.push('✓ Multiple operator cases');
    } else {
        results.failed.push('✗ Operator cases kurang dari 4');
    }

    // Check 7: Switch untuk grade
    results.total++;
    if (code.includes('switch (true)') || code.includes('switch(grade)')) {
        results.passed.push('✓ Switch untuk grade evaluation');
    } else {
        results.failed.push('✗ Belum membuat switch untuk grade');
    }

    // Check 8: Switch dengan range
    results.total++;
    if (code.includes('case 90:') || code.includes('case 80:')) {
        results.passed.push('✓ Switch dengan nilai range');
    } else {
        results.failed.push('✗ Switch range belum benar');
    }

    // Check 9: Switch untuk arah
    results.total++;
    if (code.includes('arah') && code.includes('switch') && (code.includes('Utara') || code.includes('Selatan'))) {
        results.passed.push('✓ Switch untuk arah mata angin');
    } else {
        results.failed.push('✗ Switch arah belum diimplementasi');
    }

    // Check 10: Switch bulan
    results.total++;
    if (code.includes('bulan') && code.includes('switch') && (code.includes('Januari') || code.includes('Februari'))) {
        results.passed.push('✓ Switch untuk nama bulan');
    } else {
        results.failed.push('✗ Switch bulan belum diimplementasi');
    }

    return results;
}

// Function to check Day 10: For Loop exercises
function checkDay10(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: Basic for loop 1-10
    results.total++;
    if (code.includes('for (let i = 1; i <= 10; i++)')) {
        results.passed.push('✓ For loop angka 1-10');
    } else {
        results.failed.push('✗ Belum membuat for loop 1-10');
    }

    // Check 2: Tabel perkalian
    results.total++;
    if (code.includes('for (let i = 1; i <= 10; i++)') && code.includes('*')) {
        results.passed.push('✓ Tabel perkalian dengan for loop');
    } else {
        results.failed.push('✗ Tabel perkalian belum benar');
    }

    // Check 3: Total 1-100
    results.total++;
    if (code.includes('total') && code.includes('for (let i = 1; i <= 100; i++)') && code.includes('+=')) {
        results.passed.push('✓ Menghitung total 1-100');
    } else {
        results.failed.push('✗ Belum menghitung total 1-100');
    }

    // Check 4: Genap/Ganjil
    results.total++;
    if (code.includes('% 2') && code.includes('if')) {
        results.passed.push('✓ Cek genap/ganjil dengan modulo');
    } else {
        results.failed.push('✗ Belum cek genap/ganjil');
    }

    // Check 5: Segitiga bintang
    results.total++;
    if (code.includes('nested') || (code.includes('for') && code.includes('for') && code.includes('*'))) {
        results.passed.push('✓ Segitiga bintang dengan nested loop');
    } else {
        results.failed.push('✗ Segitiga bintang belum benar');
    }

    // Check 6: Reverse loop
    results.total++;
    if (code.includes('i--') || code.includes('i = i - 1')) {
        results.passed.push('✓ Reverse loop (descending)');
    } else {
        results.failed.push('✗ Belum membuat reverse loop');
    }

    // Check 7: Countdown
    results.total++;
    if (code.includes('Blast off') || code.includes('countdown')) {
        results.passed.push('✓ Countdown dengan pesan');
    } else {
        results.failed.push('✗ Countdown belum lengkap');
    }

    // Check 8: Kuadrat
    results.total++;
    if (code.includes('i * i') || code.includes('Math.pow(i, 2)')) {
        results.passed.push('✓ Menghitung kuadrat');
    } else {
        results.failed.push('✗ Belum menghitung kuadrat');
    }

    // Check 9: Fibonacci
    results.total++;
    if ((code.includes('a = b') && code.includes('b = a + b')) ||
        (code.includes('let c = a + b')) ||
        (code.includes('console.log(a)') && code.includes('console.log(b)'))) {
        results.passed.push('✓ Deret Fibonacci');
    } else {
        results.failed.push('✗ Deret Fibonacci belum benar');
    }

    // Check 10: Pola angka
    results.total++;
    if ((code.includes('for (let i = 1; i <= 5; i++)') && code.includes('for (let j = 1; j <= i; j++)')) ||
        (code.includes('let baris =') && code.includes('baris += i'))) {
        results.passed.push('✓ Pola angka dengan nested loop');
    } else {
        results.failed.push('✗ Pola angka belum benar');
    }

    // Check 11: for...of
    results.total++;
    if (code.includes('for (') && code.includes('of ')) {
        results.passed.push('✓ Menggunakan for...of loop');
    } else {
        results.failed.push('✗ Belum menggunakan for...of');
    }

    // Check 12: for...in
    results.total++;
    if (code.includes('for (') && code.includes('in ')) {
        results.passed.push('✓ Menggunakan for...in loop');
    } else {
        results.failed.push('✗ Belum menggunakan for...in');
    }

    return results;
}

// Function to check Day 11: While Loop exercises
function checkDay11(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: Basic while loop countdown
    results.total++;
    if (code.includes('while') && code.includes('i >= 1') || code.includes('i > 0')) {
        results.passed.push('✓ While loop countdown');
    } else {
        results.failed.push('✗ Belum membuat while loop countdown');
    }

    // Check 2: Simulasi antrian
    results.total++;
    if (code.includes('antrian') && code.includes('while')) {
        results.passed.push('✓ Simulasi antrian dengan while');
    } else {
        results.failed.push('✗ Belum membuat simulasi antrian');
    }

    // Check 3: Login validation
    results.total++;
    if (code.includes('percobaan') && code.includes('while') && code.includes('loginBerhasil')) {
        results.passed.push('✓ Validasi login dengan while');
    } else {
        results.failed.push('✗ Belum membuat validasi login');
    }

    // Check 4: Faktorial
    results.total++;
    if (code.includes('faktorial') && code.includes('while') && code.includes('*=')) {
        results.passed.push('✓ Menghitung faktorial dengan while');
    } else {
        results.failed.push('✗ Belum menghitung faktorial');
    }

    // Check 5: Game tebak angka
    results.total++;
    if (code.includes('kesempatan') && code.includes('while') && code.includes('benar')) {
        results.passed.push('✓ Game tebak angka dengan while');
    } else {
        results.failed.push('✗ Belum membuat game tebak angka');
    }

    // Check 6: Do-while
    results.total++;
    if (code.includes('do {') && code.includes('} while')) {
        results.passed.push('✓ Menggunakan do-while loop');
    } else {
        results.failed.push('✗ Belum menggunakan do-while');
    }

    // Check 7: Break statement
    results.total++;
    if (code.includes('break') && code.includes('17')) {
        results.passed.push('✓ Menggunakan break di kelipatan 17');
    } else {
        results.failed.push('✗ Belum menggunakan break dengan benar');
    }

    // Check 8: Continue statement
    results.total++;
    if (code.includes('continue') && code.includes('% 3')) {
        results.passed.push('✓ Menggunakan continue untuk skip kelipatan 3');
    } else {
        results.failed.push('✗ Belum menggunakan continue dengan benar');
    }

    // Check 9: Nested while loops
    results.total++;
    if (code.includes('while') && code.includes('baris') && code.includes('kolom')) {
        results.passed.push('✓ Nested while loops untuk pola');
    } else {
        results.failed.push('✗ Belum membuat nested while loops');
    }

    // Check 10: Sum of odd numbers
    results.total++;
    if (code.includes('ganjil') || (code.includes('% 2 !== 0') && code.includes('while'))) {
        results.passed.push('✓ Menghitung jumlah angka ganjil');
    } else {
        results.failed.push('✗ Belum menghitung angka ganjil');
    }

    return results;
}

// Function to check Day 12: Functions Dasar exercises
function checkDay12(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: Function declaration ucapanSalam
    results.total++;
    if (code.includes('function ucapanSalam()') || code.includes('function ucapanSalam ()')) {
        results.passed.push('✓ Function declaration ucapanSalam');
    } else {
        results.failed.push('✗ Belum membuat function ucapanSalam');
    }

    // Check 2: Function dengan parameter sapaNama
    results.total++;
    if (code.includes('function sapaNama(nama)') || code.includes('function sapaNama (nama)')) {
        results.passed.push('✓ Function sapaNama dengan parameter');
    } else {
        results.failed.push('✗ Belum membuat function sapaNama');
    }

    // Check 3: Function dengan return tambah
    results.total++;
    if (code.includes('function tambah(a, b)') && code.includes('return a + b')) {
        results.passed.push('✓ Function tambah dengan return');
    } else {
        results.failed.push('✗ Belum membuat function tambah dengan return');
    }

    // Check 4: Function expression kali
    results.total++;
    if (code.includes('const kali = function') && code.includes('return a * b')) {
        results.passed.push('✓ Function expression kali');
    } else {
        results.failed.push('✗ Belum membuat function expression kali');
    }

    // Check 5: Arrow function kurang
    results.total++;
    if (code.includes('const kurang =') && code.includes('=>') && code.includes('a - b')) {
        results.passed.push('✓ Arrow function kurang');
    } else {
        results.failed.push('✗ Belum membuat arrow function kurang');
    }

    // Check 6: Arrow function shorthand pangkatDua
    results.total++;
    if (code.includes('const pangkatDua =') && code.includes('=>') && code.includes('n * n')) {
        results.passed.push('✓ Arrow function shorthand pangkatDua');
    } else {
        results.failed.push('✗ Belum membuat arrow function pangkatDua');
    }

    // Check 7: Function luasPersegi
    results.total++;
    if ((code.includes('function luasPersegi') || code.includes('const luasPersegi')) && code.includes('sisi * sisi')) {
        results.passed.push('✓ Function luasPersegi');
    } else {
        results.failed.push('✗ Belum membuat function luasPersegi');
    }

    // Check 8: Function luasPersegiPanjang
    results.total++;
    if ((code.includes('function luasPersegiPanjang') || code.includes('const luasPersegiPanjang')) && code.includes('panjang * lebar')) {
        results.passed.push('✓ Function luasPersegiPanjang');
    } else {
        results.failed.push('✗ Belum membuat function luasPersegiPanjang');
    }

    // Check 9: Function kelilingLingkaran
    results.total++;
    if ((code.includes('function kelilingLingkaran') || code.includes('const kelilingLingkaran')) && (code.includes('Math.PI') || code.includes('3.14'))) {
        results.passed.push('✓ Function kelilingLingkaran');
    } else {
        results.failed.push('✗ Belum membuat function kelilingLingkaran');
    }

    // Check 10: Function celsiusToFahrenheit
    results.total++;
    if ((code.includes('function celsiusToFahrenheit') || code.includes('const celsiusToFahrenheit')) && code.includes('9/5') || code.includes('9 / 5')) {
        results.passed.push('✓ Function celsiusToFahrenheit');
    } else {
        results.failed.push('✗ Belum membuat function celsiusToFahrenheit');
    }

    // Check 11: Function isGenap
    results.total++;
    if (code.includes('isGenap') && code.includes('=>') && code.includes('% 2')) {
        results.passed.push('✓ Arrow function isGenap');
    } else {
        results.failed.push('✗ Belum membuat arrow function isGenap');
    }

    // Check 12: Function getMax
    results.total++;
    if ((code.includes('function getMax') || code.includes('const getMax')) && (code.includes('a > b') || code.includes('b > a') || code.includes('Math.max'))) {
        results.passed.push('✓ Function getMax');
    } else {
        results.failed.push('✗ Belum membuat function getMax');
    }

    return results;
}

// Function to check Day 13: Function Parameters & Return
function checkDay13(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: Function dengan parameter sapaNama
    results.total++;
    if (code.includes('function sapaNama') && code.includes('nama')) {
        results.passed.push('✓ Function sapaNama dengan parameter');
    } else {
        results.failed.push('✗ Belum membuat function sapaNama');
    }

    // Check 2: Function dengan return tambah
    results.total++;
    if (code.includes('function tambah') && code.includes('return')) {
        results.passed.push('✓ Function tambah dengan return');
    } else {
        results.failed.push('✗ Belum membuat function tambah dengan return');
    }

    // Check 3: Function luasPersegi
    results.total++;
    if (code.includes('luasPersegi') && code.includes('sisi * sisi')) {
        results.passed.push('✓ Function luasPersegi');
    } else {
        results.failed.push('✗ Belum membuat function luasPersegi');
    }

    // Check 4: Function luasPersegiPanjang
    results.total++;
    if (code.includes('luasPersegiPanjang') && code.includes('panjang') && code.includes('lebar')) {
        results.passed.push('✓ Function luasPersegiPanjang');
    } else {
        results.failed.push('✗ Belum membuat function luasPersegiPanjang');
    }

    // Check 5: Function kelilingLingkaran
    results.total++;
    if (code.includes('kelilingLingkaran') && (code.includes('Math.PI') || code.includes('3.14'))) {
        results.passed.push('✓ Function kelilingLingkaran');
    } else {
        results.failed.push('✗ Belum membuat function kelilingLingkaran');
    }

    // Check 6: Function celsiusToFahrenheit
    results.total++;
    if (code.includes('celsiusToFahrenheit') && (code.includes('9/5') || code.includes('9 / 5') || code.includes('1.8'))) {
        results.passed.push('✓ Function celsiusToFahrenheit');
    } else {
        results.failed.push('✗ Belum membuat function celsiusToFahrenheit');
    }

    // Check 7: Function isGenap
    results.total++;
    if (code.includes('isGenap') && code.includes('% 2')) {
        results.passed.push('✓ Function isGenap');
    } else {
        results.failed.push('✗ Belum membuat function isGenap');
    }

    // Check 8: Function getMax
    results.total++;
    if (code.includes('getMax') && (code.includes('a > b') || code.includes('Math.max'))) {
        results.passed.push('✓ Function getMax');
    } else {
        results.failed.push('✗ Belum membuat function getMax');
    }

    return results;
}

// Function to check Day 14: FizzBuzz Mini Project
function checkDay14(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: Basic fizzBuzz function
    results.total++;
    if (code.includes('function fizzBuzz') && code.includes('% 15') || (code.includes('% 3') && code.includes('% 5'))) {
        results.passed.push('✓ Function fizzBuzz basic');
    } else {
        results.failed.push('✗ Belum membuat function fizzBuzz');
    }

    // Check 2: FizzBuzz with Fizz output
    results.total++;
    if (code.includes('"Fizz"') || code.includes("'Fizz'") || code.includes('`Fizz`')) {
        results.passed.push('✓ Output "Fizz" untuk kelipatan 3');
    } else {
        results.failed.push('✗ Belum ada output "Fizz"');
    }

    // Check 3: FizzBuzz with Buzz output
    results.total++;
    if (code.includes('"Buzz"') || code.includes("'Buzz'") || code.includes('`Buzz`')) {
        results.passed.push('✓ Output "Buzz" untuk kelipatan 5');
    } else {
        results.failed.push('✗ Belum ada output "Buzz"');
    }

    // Check 4: FizzBuzz with FizzBuzz output
    results.total++;
    if (code.includes('"FizzBuzz"') || code.includes("'FizzBuzz'") || code.includes('`FizzBuzz`')) {
        results.passed.push('✓ Output "FizzBuzz" untuk kelipatan 15');
    } else {
        results.failed.push('✗ Belum ada output "FizzBuzz"');
    }

    // Check 5: fizzBuzzArray function
    results.total++;
    if (code.includes('fizzBuzzArray') && code.includes('return') && code.includes('push')) {
        results.passed.push('✓ Function fizzBuzzArray dengan return array');
    } else {
        results.failed.push('✗ Belum membuat function fizzBuzzArray');
    }

    // Check 6: fizzBuzzCustom function
    results.total++;
    if (code.includes('fizzBuzzCustom') && code.includes('fizzNum') && code.includes('buzzNum')) {
        results.passed.push('✓ Function fizzBuzzCustom dengan parameter custom');
    } else {
        results.failed.push('✗ Belum membuat function fizzBuzzCustom');
    }

    // Check 7: fizzBuzzStats function
    results.total++;
    if (code.includes('fizzBuzzStats') && code.includes('fizz:') && code.includes('buzz:')) {
        results.passed.push('✓ Function fizzBuzzStats dengan statistics');
    } else {
        results.failed.push('✗ Belum membuat function fizzBuzzStats');
    }

    // Check 8: fizzBuzzRange function
    results.total++;
    if (code.includes('fizzBuzzRange') && code.includes('start') && code.includes('end')) {
        results.passed.push('✓ Function fizzBuzzRange');
    } else {
        results.failed.push('✗ Belum membuat function fizzBuzzRange');
    }

    // Check 9: fizzBuzzReverse function
    results.total++;
    if (code.includes('fizzBuzzReverse') && (code.includes('i--') || code.includes('i >= 1') || code.includes('i > 0'))) {
        results.passed.push('✓ Function fizzBuzzReverse');
    } else {
        results.failed.push('✗ Belum membuat function fizzBuzzReverse');
    }

    // Check 10: Using loop
    results.total++;
    if (code.includes('for') || code.includes('while')) {
        results.passed.push('✓ Menggunakan loop (for/while)');
    } else {
        results.failed.push('✗ Belum menggunakan loop');
    }

    return results;
}

// Function to check Day 17: Array Iteration
function checkDay17(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: forEach basic
    results.total++;
    if (code.includes('.forEach(') && code.includes('console.log')) {
        results.passed.push('✓ Menggunakan forEach untuk loop');
    } else {
        results.failed.push('✗ Belum menggunakan forEach');
    }

    // Check 2: forEach dengan index
    results.total++;
    if (code.includes('.forEach((') && code.includes('index')) {
        results.passed.push('✓ forEach dengan index parameter');
    } else {
        results.failed.push('✗ Belum menggunakan forEach dengan index');
    }

    // Check 3: map untuk transformasi
    results.total++;
    if (code.includes('.map(') && code.includes('* 2')) {
        results.passed.push('✓ Menggunakan map untuk double');
    } else {
        results.failed.push('✗ Belum menggunakan map untuk double');
    }

    // Check 4: map untuk kuadrat
    results.total++;
    if (code.includes('.map(') && (code.includes('* n') || code.includes('n * n') || code.includes('** 2'))) {
        results.passed.push('✓ Menggunakan map untuk kuadrat');
    } else {
        results.failed.push('✗ Belum menggunakan map untuk kuadrat');
    }

    // Check 5: map untuk capitalize
    results.total++;
    if (code.includes('.map(') && code.includes('toUpperCase')) {
        results.passed.push('✓ Menggunakan map untuk capitalize');
    } else {
        results.failed.push('✗ Belum menggunakan map untuk capitalize');
    }

    // Check 6: map untuk format harga
    results.total++;
    if (code.includes('.map(') && (code.includes('Rp') || code.includes('toLocaleString'))) {
        results.passed.push('✓ Menggunakan map untuk format harga');
    } else {
        results.failed.push('✗ Belum menggunakan map untuk format harga');
    }

    // Check 7: forEach untuk menghitung total
    results.total++;
    if (code.includes('.forEach(') && code.includes('total +=')) {
        results.passed.push('✓ Menggunakan forEach untuk total');
    } else {
        results.failed.push('✗ Belum menggunakan forEach untuk total');
    }

    // Check 8: map untuk extract property
    results.total++;
    if (code.includes('.map(') && code.includes('.nama')) {
        results.passed.push('✓ Menggunakan map untuk extract property');
    } else {
        results.failed.push('✗ Belum menggunakan map untuk extract property');
    }

    // Check 9: map untuk transform object
    results.total++;
    if (code.includes('.map(') && code.includes('return {')) {
        results.passed.push('✓ Menggunakan map untuk transform object');
    } else {
        results.failed.push('✗ Belum menggunakan map untuk transform object');
    }

    // Check 10: forEach dengan kondisi
    results.total++;
    if (code.includes('.forEach(') && code.includes('if (')) {
        results.passed.push('✓ Menggunakan forEach dengan kondisi');
    } else {
        results.failed.push('✗ Belum menggunakan forEach dengan kondisi');
    }

    // Check 11: map chaining
    results.total++;
    if (code.includes('.map(') && code.includes(').map(')) {
        results.passed.push('✓ Method chaining dengan map');
    } else {
        results.failed.push('✗ Belum menggunakan method chaining');
    }

    // Check 12: Arrow function dalam map/forEach
    results.total++;
    if (code.includes('=>')) {
        results.passed.push('✓ Menggunakan arrow function');
    } else {
        results.failed.push('✗ Belum menggunakan arrow function');
    }

    // Check 13: map dengan template literal
    results.total++;
    if (code.includes('.map(') && code.includes('`')) {
        results.passed.push('✓ Menggunakan template literal dalam map');
    } else {
        results.failed.push('✗ Belum menggunakan template literal dalam map');
    }

    return results;
}

// Function to check Day 18: Array Methods II
function checkDay18(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // === BAGIAN 1: filter() ===
    // Check 1.1: Filter nilai lulus
    results.total++;
    if (code.includes('nilaiLulus') && code.includes('.filter(') && code.includes('>= 60')) {
        results.passed.push('✓ 1.1 Filter nilai lulus (>= 60)');
    } else {
        results.failed.push('✗ 1.1 Belum filter nilai lulus dengan benar');
    }

    // Check 1.2: Filter angka ganjil
    results.total++;
    if (code.includes('ganjil') && code.includes('.filter(') && code.includes('% 2')) {
        results.passed.push('✓ 1.2 Filter angka ganjil');
    } else {
        results.failed.push('✗ 1.2 Belum filter angka ganjil');
    }

    // Check 1.3: Filter produk murah
    results.total++;
    if (code.includes('produkMurah') && code.includes('.filter(') && code.includes('harga') && code.includes('<= 100000')) {
        results.passed.push('✓ 1.3 Filter produk murah');
    } else {
        results.failed.push('✗ 1.3 Belum filter produk murah');
    }

    // Check 1.4: Filter user aktif
    results.total++;
    if (code.includes('activeUsers') && code.includes('.filter(') && code.includes('status') && code.includes('active')) {
        results.passed.push('✓ 1.4 Filter user aktif');
    } else {
        results.failed.push('✗ 1.4 Belum filter user aktif');
    }

    // === BAGIAN 2: find() ===
    // Check 2.1: Find pertama > 50
    results.total++;
    if (code.includes('pertamaLebihDari50') && code.includes('.find(') && code.includes('> 50')) {
        results.passed.push('✓ 2.1 Find angka pertama > 50');
    } else {
        results.failed.push('✗ 2.1 Belum find angka > 50');
    }

    // Check 2.2: Find user by ID
    results.total++;
    if (code.includes('userDenganId3') && code.includes('.find(') && code.includes('id') && code.includes('3')) {
        results.passed.push('✓ 2.2 Find user dengan ID 3');
    } else {
        results.failed.push('✗ 2.2 Belum find user dengan ID');
    }

    // Check 2.3: Find produk by nama
    results.total++;
    if (code.includes('wortel') && code.includes('.find(') && code.includes('Wortel')) {
        results.passed.push('✓ 2.3 Find produk Wortel');
    } else {
        results.failed.push('✗ 2.3 Belum find produk Wortel');
    }

    // Check 2.4: Find yang tidak ada
    results.total++;
    if (code.includes('userTidakAda') && code.includes('.find(') && code.includes('99')) {
        results.passed.push('✓ 2.4 Find user yang tidak ada (ID 99)');
    } else {
        results.failed.push('✗ 2.4 Belum find user ID 99');
    }

    // === BAGIAN 3: reduce() ===
    // Check 3.1: Reduce total angka
    results.total++;
    if (code.includes('totalAngka') && code.includes('.reduce(')) {
        results.passed.push('✓ 3.1 Reduce total angka');
    } else {
        results.failed.push('✗ 3.1 Belum reduce total angka');
    }

    // Check 3.2: Reduce total belanja
    results.total++;
    if (code.includes('totalBelanja') && code.includes('.reduce(') && code.includes('harga') && code.includes('jumlah')) {
        results.passed.push('✓ 3.2 Reduce total belanja');
    } else {
        results.failed.push('✗ 3.2 Belum reduce total belanja');
    }

    // Check 3.3: Reduce nilai max
    results.total++;
    if (code.includes('nilaiMax') && code.includes('.reduce(') && code.includes('>')) {
        results.passed.push('✓ 3.3 Reduce nilai maximum');
    } else {
        results.failed.push('✗ 3.3 Belum reduce nilai max');
    }

    // Check 3.4: Reduce nilai min
    results.total++;
    if (code.includes('nilaiMin') && code.includes('.reduce(') && code.includes('<')) {
        results.passed.push('✓ 3.4 Reduce nilai minimum');
    } else {
        results.failed.push('✗ 3.4 Belum reduce nilai min');
    }

    // Check 3.5: Reduce rata-rata
    results.total++;
    if (code.includes('rataRata') && code.includes('.reduce(') && code.includes('.length')) {
        results.passed.push('✓ 3.5 Reduce rata-rata');
    } else {
        results.failed.push('✗ 3.5 Belum reduce rata-rata');
    }

    // Check 3.6: Reduce frekuensi kata
    results.total++;
    if (code.includes('frekuensi') && code.includes('.reduce(') && code.includes('{}')) {
        results.passed.push('✓ 3.6 Reduce frekuensi kata');
    } else {
        results.failed.push('✗ 3.6 Belum reduce frekuensi kata');
    }

    // === BAGIAN 4: some() ===
    // Check 4.1: Some nilai lulus
    results.total++;
    if (code.includes('adaYangLulus') && code.includes('.some(') && code.includes('>= 60')) {
        results.passed.push('✓ 4.1 Some ada yang lulus');
    } else {
        results.failed.push('✗ 4.1 Belum cek some ada yang lulus');
    }

    // Check 4.2: Some stok habis
    results.total++;
    if (code.includes('adaStokHabis') && code.includes('.some(') && code.includes('stok') && (code.includes('=== 0') || code.includes('== 0'))) {
        results.passed.push('✓ 4.2 Some ada stok habis');
    } else {
        results.failed.push('✗ 4.2 Belum cek some stok habis (gunakan .stok === 0)');
    }

    // Check 4.3: Some ada admin
    results.total++;
    if (code.includes('adaAdmin') && code.includes('.some(') && code.includes('admin')) {
        results.passed.push('✓ 4.3 Some ada admin');
    } else {
        results.failed.push('✗ 4.3 Belum cek some ada admin');
    }

    // Check 4.4: Some input kosong
    results.total++;
    if (code.includes('adaInputKosong') && code.includes('.some(') && code.includes('""') || code.includes("''")) {
        results.passed.push('✓ 4.4 Some ada input kosong');
    } else {
        results.failed.push('✗ 4.4 Belum cek some input kosong');
    }

    // === BAGIAN 5: every() ===
    // Check 5.1: Every semua lulus
    results.total++;
    if (code.includes('semuaLulus') && code.includes('.every(') && code.includes('>= 60')) {
        results.passed.push('✓ 5.1 Every semua lulus');
    } else {
        results.failed.push('✗ 5.1 Belum cek every semua lulus');
    }

    // Check 5.2: Every semua positif
    results.total++;
    if (code.includes('semuaPositif') && code.includes('.every(') && code.includes('> 0')) {
        results.passed.push('✓ 5.2 Every semua positif');
    } else {
        results.failed.push('✗ 5.2 Belum cek every positif (gunakan > 0)');
    }

    // Check 5.3: Every semua tersedia
    results.total++;
    if (code.includes('semuaTersedia') && code.includes('.every(') && code.includes('tersedia')) {
        results.passed.push('✓ 5.3 Every semua tersedia');
    } else {
        results.failed.push('✗ 5.3 Belum cek every tersedia');
    }

    // Check 5.4: Every email valid
    results.total++;
    if (code.includes('semuaEmailValid') && code.includes('.every(') && code.includes('includes') && code.includes('@')) {
        results.passed.push('✓ 5.4 Every email valid');
    } else {
        results.failed.push('✗ 5.4 Belum cek every email valid (gunakan .every dan .includes("@"))');
    }

    // === BAGIAN 6: Method Chaining ===
    // Check 6.1: Filter + reduce
    results.total++;
    if (code.includes('totalElektronik') && code.includes('.filter(') && code.includes('.reduce(') && code.includes('elektronik')) {
        results.passed.push('✓ 6.1 Filter + reduce untuk total elektronik');
    } else {
        results.failed.push('✗ 6.1 Belum chain filter + reduce');
    }

    // Check 6.2: Filter + map + join
    results.total++;
    if (code.includes('namaLulus') && code.includes('.filter(') && code.includes('.map(') && code.includes('.join(')) {
        results.passed.push('✓ 6.2 Filter + map + join untuk nama lulus');
    } else {
        results.failed.push('✗ 6.2 Belum chain filter + map + join');
    }

    // Check 6.3: Every + reduce
    results.total++;
    if (code.includes('semuaPesananValid') && code.includes('.every(') && code.includes('totalPesanan')) {
        results.passed.push('✓ 6.3 Every + conditional reduce');
    } else {
        results.failed.push('✗ 6.3 Belum cek every dan hitung total');
    }

    // === BAGIAN 7: Challenge ===
    // Check 7.1: Find produk ID 5
    results.total++;
    if (code.includes('produkId5') && code.includes('.find(') && code.includes('5')) {
        results.passed.push('✓ 7.1 Find produk ID 5');
    } else {
        results.failed.push('✗ 7.1 Belum find produk ID 5');
    }

    // Check 7.2: Filter produk tersedia
    results.total++;
    if (code.includes('produkTersedia') && code.includes('.filter(') && code.includes('stok') && code.includes('> 0')) {
        results.passed.push('✓ 7.2 Filter produk tersedia');
    } else {
        results.failed.push('✗ 7.2 Belum filter produk tersedia');
    }

    // Check 7.3: Reduce nilai inventory
    results.total++;
    if (code.includes('nilaiInventory') && code.includes('.reduce(') && code.includes('harga') && code.includes('stok')) {
        results.passed.push('✓ 7.3 Reduce nilai inventory');
    } else {
        results.failed.push('✗ 7.3 Belum reduce nilai inventory');
    }

    // Check 7.4: Some rating bagus
    results.total++;
    if (code.includes('adaProdukBagus') && code.includes('.some(') && code.includes('rating') && code.includes('>= 4.5')) {
        results.passed.push('✓ 7.4 Some produk rating >= 4.5');
    } else {
        results.failed.push('✗ 7.4 Belum cek some rating bagus');
    }

    // Check 7.5: Every ada stok
    results.total++;
    if (code.includes('semuaAdaStok') && code.includes('.every(') && code.includes('stok') && code.includes('> 0')) {
        results.passed.push('✓ 7.5 Every semua ada stok');
    } else {
        results.failed.push('✗ 7.5 Belum cek every ada stok');
    }

    // Check 7.6: Filter + sort
    results.total++;
    if (code.includes('elektronikTersedia') && code.includes('.filter(') && code.includes('.sort(')) {
        results.passed.push('✓ 7.6 Filter elektronik + sort by rating');
    } else {
        results.failed.push('✗ 7.6 Belum filter + sort elektronik');
    }

    // Check 7.7: Rata-rata rating
    results.total++;
    if (code.includes('rataRataRating') && code.includes('.reduce(') && code.includes('rating')) {
        results.passed.push('✓ 7.7 Rata-rata rating');
    } else {
        results.failed.push('✗ 7.7 Belum hitung rata-rata rating');
    }

    // Check 7.8: Ringkasan kategori
    results.total++;
    if (code.includes('ringkasanKategori') && code.includes('.reduce(') && code.includes('kategori')) {
        results.passed.push('✓ 7.8 Ringkasan per kategori');
    } else {
        results.failed.push('✗ 7.8 Belum buat ringkasan kategori');
    }

    // === BONUS ===
    // Check Bonus 1: findIndex
    results.total++;
    if (code.includes('indexMangga') && (code.includes('.findIndex(') || code.includes('.indexOf('))) {
        results.passed.push('✓ Bonus 1: findIndex/indexOf untuk Mangga');
    } else {
        results.failed.push('✗ Bonus 1: Belum cari index Mangga');
    }

    // Check Bonus 2: includes
    results.total++;
    if (code.includes('adaJeruk') && code.includes('.includes(') && code.includes('Jeruk')) {
        results.passed.push('✓ Bonus 2: includes untuk cek Jeruk');
    } else {
        results.failed.push('✗ Bonus 2: Belum cek includes Jeruk');
    }

    return results;
}

// Function to check Day 19: Object Basics
function checkDay19(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // === BAGIAN 1: Membuat Object ===
    // Check 1.1: Object mobil
    results.total++;
    if (code.includes('let mobil') && code.includes('merk') && code.includes('model') && code.includes('tahun')) {
        results.passed.push('✓ 1.1 Membuat object mobil dengan merk, model, tahun');
    } else {
        results.failed.push('✗ 1.1 Belum membuat object mobil lengkap');
    }

    // Check 1.2: Object siswa
    results.total++;
    if (code.includes('let siswa') && code.includes('nama') && code.includes('umur') && code.includes('aktif') && code.includes('hobi')) {
        results.passed.push('✓ 1.2 Membuat object siswa dengan berbagai tipe data');
    } else {
        results.failed.push('✗ 1.2 Belum membuat object siswa lengkap');
    }

    // Check 1.3: Object buku dengan tambah property
    results.total++;
    if (code.includes('let buku = {}') && code.includes('buku.judul') && code.includes('buku.penulis')) {
        results.passed.push('✓ 1.3 Membuat object kosong dan menambah property');
    } else {
        results.failed.push('✗ 1.3 Belum membuat object buku dengan benar');
    }

    // === BAGIAN 2: Dot Notation ===
    // Check 2.1-2.4: Akses dengan dot notation
    results.total++;
    if (code.includes('merkHP') && code.includes('smartphone.merk')) {
        results.passed.push('✓ 2.1 Akses property dengan dot notation');
    } else {
        results.failed.push('✗ 2.1 Belum akses merk dengan dot notation');
    }

    results.total++;
    if (code.includes('hargaHP') && code.includes('smartphone.harga')) {
        results.passed.push('✓ 2.2 Akses property number');
    } else {
        results.failed.push('✗ 2.2 Belum akses harga');
    }

    results.total++;
    if (code.includes('ramHP') && code.includes('smartphone.spesifikasi.ram')) {
        results.passed.push('✓ 2.3 Akses nested object (ram)');
    } else {
        results.failed.push('✗ 2.3 Belum akses nested property ram');
    }

    results.total++;
    if (code.includes('storageHP') && code.includes('smartphone.spesifikasi.storage')) {
        results.passed.push('✓ 2.4 Akses nested object (storage)');
    } else {
        results.failed.push('✗ 2.4 Belum akses nested property storage');
    }

    // === BAGIAN 3: Bracket Notation ===
    results.total++;
    if (code.includes('namaProduk') && code.includes('produk["nama produk"]')) {
        results.passed.push('✓ 3.1 Akses property dengan spasi menggunakan bracket');
    } else {
        results.failed.push('✗ 3.1 Belum akses property dengan bracket notation');
    }

    results.total++;
    if (code.includes('hargaProduk') && code.includes('produk[keyHarga]')) {
        results.passed.push('✓ 3.2 Akses property dengan variabel');
    } else {
        results.failed.push('✗ 3.2 Belum akses property dengan variabel');
    }

    results.total++;
    if (code.includes('for') && code.includes('in') && code.includes('user')) {
        results.passed.push('✓ 3.3 Loop object dengan for...in');
    } else {
        results.failed.push('✗ 3.3 Belum loop object dengan for...in');
    }

    // === BAGIAN 4: Menambah dan Mengubah ===
    results.total++;
    if (code.includes('karyawan.gaji') && code.includes('8000000')) {
        results.passed.push('✓ 4.1 Menambah property gaji');
    } else {
        results.failed.push('✗ 4.1 Belum menambah property gaji');
    }

    results.total++;
    if (code.includes('karyawan["tahun bergabung"]') && code.includes('2022')) {
        results.passed.push('✓ 4.2 Menambah property dengan bracket notation');
    } else {
        results.failed.push('✗ 4.2 Belum menambah property tahun bergabung');
    }

    results.total++;
    if (code.includes('karyawan.posisi') && code.includes('Senior Developer') && code.includes('12000000')) {
        results.passed.push('✓ 4.3 Mengubah property yang ada');
    } else {
        results.failed.push('✗ 4.3 Belum mengubah posisi dan gaji');
    }

    // === BAGIAN 5: Menghapus ===
    results.total++;
    if (code.includes('delete dataUser.password')) {
        results.passed.push('✓ 5.1 Menghapus property password');
    } else {
        results.failed.push('✗ 5.1 Belum menghapus password');
    }

    results.total++;
    if (code.includes('delete dataUser.id') && code.includes('delete dataUser.role')) {
        results.passed.push('✓ 5.2 Menghapus multiple properties');
    } else {
        results.failed.push('✗ 5.2 Belum menghapus id dan role');
    }

    // === BAGIAN 6: Mengecek Keberadaan ===
    results.total++;
    if (code.includes('adaTheme') && code.includes('"theme" in config')) {
        results.passed.push('✓ 6.1 Cek property dengan operator in');
    } else {
        results.failed.push('✗ 6.1 Belum cek dengan operator in');
    }

    results.total++;
    if (code.includes('punyaLanguage') && code.includes('hasOwnProperty')) {
        results.passed.push('✓ 6.2 Cek property dengan hasOwnProperty');
    } else {
        results.failed.push('✗ 6.2 Belum cek dengan hasOwnProperty');
    }

    // === BAGIAN 7: Object Methods ===
    results.total++;
    if (code.includes('keysMahasiswa') && code.includes('Object.keys(')) {
        results.passed.push('✓ 7.1 Menggunakan Object.keys()');
    } else {
        results.failed.push('✗ 7.1 Belum menggunakan Object.keys()');
    }

    results.total++;
    if (code.includes('valuesMahasiswa') && code.includes('Object.values(')) {
        results.passed.push('✓ 7.2 Menggunakan Object.values()');
    } else {
        results.failed.push('✗ 7.2 Belum menggunakan Object.values()');
    }

    results.total++;
    if (code.includes('entriesMahasiswa') && code.includes('Object.entries(')) {
        results.passed.push('✓ 7.3 Menggunakan Object.entries()');
    } else {
        results.failed.push('✗ 7.3 Belum menggunakan Object.entries()');
    }

    results.total++;
    if (code.includes('jumlahProperty') && code.includes('.length')) {
        results.passed.push('✓ 7.4 Menghitung jumlah property');
    } else {
        results.failed.push('✗ 7.4 Belum menghitung jumlah property');
    }

    // === BAGIAN 8: Copy dan Merge ===
    results.total++;
    if (code.includes('copySpread') && code.includes('...original')) {
        results.passed.push('✓ 8.1 Copy object dengan spread operator');
    } else {
        results.failed.push('✗ 8.1 Belum copy dengan spread operator');
    }

    results.total++;
    if (code.includes('copyAssign') && code.includes('Object.assign(')) {
        results.passed.push('✓ 8.2 Copy object dengan Object.assign');
    } else {
        results.failed.push('✗ 8.2 Belum copy dengan Object.assign');
    }

    results.total++;
    if (code.includes('mergedSettings') && code.includes('...defaults') && code.includes('...userSettings')) {
        results.passed.push('✓ 8.3 Merge objects dengan spread');
    } else {
        results.failed.push('✗ 8.3 Belum merge objects');
    }

    // === BAGIAN 9: Nested Objects ===
    results.total++;
    if (code.includes('kotaPerusahaan') && code.includes('perusahaan.alamat.kota')) {
        results.passed.push('✓ 9.1 Akses nested property (kota)');
    } else {
        results.failed.push('✗ 9.1 Belum akses kota perusahaan');
    }

    results.total++;
    if (code.includes('jumlahEngineering') && code.includes('perusahaan.karyawan.departemen.engineering')) {
        results.passed.push('✓ 9.2 Akses deep nested property');
    } else {
        results.failed.push('✗ 9.2 Belum akses jumlah engineering');
    }

    results.total++;
    if (code.includes('perusahaan.karyawan.departemen.engineering') && code.includes('250')) {
        results.passed.push('✓ 9.3 Ubah nested property');
    } else {
        results.failed.push('✗ 9.3 Belum ubah jumlah engineering');
    }

    results.total++;
    if (code.includes('perusahaan.karyawan.departemen.finance') && code.includes('75')) {
        results.passed.push('✓ 9.4 Tambah nested property baru');
    } else {
        results.failed.push('✗ 9.4 Belum tambah departemen finance');
    }

    // === BAGIAN 10: Challenge ===
    results.total++;
    if (code.includes('mahasiswaLengkap') && code.includes('nim') && code.includes('biodata') && code.includes('akademik') && code.includes('mataKuliah')) {
        results.passed.push('✓ 10.1 Membuat object mahasiswa lengkap');
    } else {
        results.failed.push('✗ 10.1 Belum membuat object mahasiswa lengkap');
    }

    results.total++;
    if (code.includes('function tampilkanBiodata') && code.includes('return')) {
        results.passed.push('✓ 10.2 Function tampilkanBiodata');
    } else {
        results.failed.push('✗ 10.2 Belum membuat function tampilkanBiodata');
    }

    results.total++;
    if (code.includes('function hitungTotalSKS') && code.includes('reduce')) {
        results.passed.push('✓ 10.3 Function hitungTotalSKS dengan reduce');
    } else {
        results.failed.push('✗ 10.3 Belum membuat function hitungTotalSKS');
    }

    results.total++;
    if (code.includes('function updateIPK') && code.includes('akademik.ipk')) {
        results.passed.push('✓ 10.4 Function updateIPK');
    } else {
        results.failed.push('✗ 10.4 Belum membuat function updateIPK');
    }

    results.total++;
    if (code.includes('function tambahMataKuliah') && code.includes('push')) {
        results.passed.push('✓ 10.5 Function tambahMataKuliah');
    } else {
        results.failed.push('✗ 10.5 Belum membuat function tambahMataKuliah');
    }

    // === BONUS ===
    results.total++;
    if (code.includes('let {') && code.includes('title') && code.includes('platform') && code.includes('} = game')) {
        results.passed.push('✓ Bonus 1: Object destructuring');
    } else {
        results.failed.push('✗ Bonus 1: Belum destructuring object');
    }

    return results;
}

// Function to check Day 16: Array Methods I
function checkDay16(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: push() method
    results.total++;
    if (code.includes('cart.push(') && code.includes('"Penghapus"')) {
        results.passed.push('✓ Menggunakan push() untuk menambah item');
    } else {
        results.failed.push('✗ Belum menggunakan push() dengan benar');
    }

    // Check 2: pop() method
    results.total++;
    if (code.includes('cart.pop()') && code.includes('lastItem')) {
        results.passed.push('✓ Menggunakan pop() dan menyimpan hasilnya');
    } else {
        results.failed.push('✗ Belum menggunakan pop() dengan benar');
    }

    // Check 3: shift() method
    results.total++;
    if (code.includes('antrian.shift()') && code.includes('dilayani')) {
        results.passed.push('✓ Menggunakan shift() untuk antrian');
    } else {
        results.failed.push('✗ Belum menggunakan shift() dengan benar');
    }

    // Check 4: unshift() method
    results.total++;
    if (code.includes('antrian.unshift(') && code.includes('VIP')) {
        results.passed.push('✓ Menggunakan unshift() untuk menambah di awal');
    } else {
        results.failed.push('✗ Belum menggunakan unshift() dengan benar');
    }

    // Check 5: splice() untuk menghapus
    results.total++;
    if (code.includes('buah.splice(') && code.includes('indexOf')) {
        results.passed.push('✓ Menggunakan splice() dengan indexOf untuk menghapus');
    } else {
        results.failed.push('✗ Belum menggunakan splice() untuk menghapus item');
    }

    // Check 6: splice() untuk insert
    results.total++;
    if (code.includes('angka.splice(') && code.includes(', 0,')) {
        results.passed.push('✓ Menggunakan splice() untuk insert');
    } else {
        results.failed.push('✗ Belum menggunakan splice() untuk insert');
    }

    // Check 7: slice() method
    results.total++;
    if (code.includes('hewan.slice(') && code.includes('sebagianHewan')) {
        results.passed.push('✓ Menggunakan slice() untuk mengambil sebagian');
    } else {
        results.failed.push('✗ Belum menggunakan slice() dengan benar');
    }

    // Check 8: slice() dengan index negatif
    results.total++;
    if (code.includes('slice(-2)') && code.includes('duaTerakhir')) {
        results.passed.push('✓ Menggunakan slice() dengan index negatif');
    } else {
        results.failed.push('✗ Belum menggunakan slice() dengan index negatif');
    }

    // Check 9: Function removeItem
    results.total++;
    if (code.includes('function removeItem') && code.includes('indexOf') && code.includes('splice')) {
        results.passed.push('✓ Membuat function removeItem');
    } else {
        results.failed.push('✗ Belum membuat function removeItem');
    }

    // Check 10: Function insertAt
    results.total++;
    if (code.includes('function insertAt') && code.includes('splice')) {
        results.passed.push('✓ Membuat function insertAt');
    } else {
        results.failed.push('✗ Belum membuat function insertAt');
    }

    // Check 11: Playlist manager
    results.total++;
    if (code.includes('playlist.push(') && code.includes('playlist.unshift(')) {
        results.passed.push('✓ Playlist manager dengan push dan unshift');
    } else {
        results.failed.push('✗ Playlist manager belum lengkap');
    }

    // Check 12: Stack implementation
    results.total++;
    if (code.includes('stack.push(') && code.includes('stack.pop()') && code.includes('poppedItem')) {
        results.passed.push('✓ Stack implementation (push/pop)');
    } else {
        results.failed.push('✗ Stack implementation belum lengkap');
    }

    // Check 13: Function rotateLeft
    results.total++;
    if (code.includes('function rotateLeft') && code.includes('slice') && (code.includes('concat') || code.includes('...'))) {
        results.passed.push('✓ Membuat function rotateLeft');
    } else {
        results.failed.push('✗ Belum membuat function rotateLeft');
    }

    return results;
}

// Function to check Day 15: Array Basics
function checkDay15(code) {
    const results = {
        passed: [],
        failed: [],
        total: 0
    };

    // Check 1: Membuat array buah
    results.total++;
    if ((code.includes('const buah') || code.includes('let buah')) && code.includes('[') && code.includes(']')) {
        results.passed.push('✓ Membuat array buah');
    } else {
        results.failed.push('✗ Belum membuat array buah');
    }

    // Check 2: Akses element dengan index
    results.total++;
    if (code.includes('buah[0]') && code.includes('buah[2]')) {
        results.passed.push('✓ Akses element dengan index');
    } else {
        results.failed.push('✗ Belum akses element dengan index');
    }

    // Check 3: Akses element terakhir
    results.total++;
    if (code.includes('buah[buah.length - 1]') || code.includes('buah[4]')) {
        results.passed.push('✓ Akses element terakhir');
    } else {
        results.failed.push('✗ Belum akses element terakhir');
    }

    // Check 4: Property length
    results.total++;
    if (code.includes('.length')) {
        results.passed.push('✓ Menggunakan property length');
    } else {
        results.failed.push('✗ Belum menggunakan property length');
    }

    // Check 5: Array angka
    results.total++;
    if ((code.includes('const angka') || code.includes('let angka')) && code.includes('[1')) {
        results.passed.push('✓ Membuat array angka');
    } else {
        results.failed.push('✗ Belum membuat array angka');
    }

    // Check 6: Mengubah element array
    results.total++;
    if (code.includes('buah[1] =') || code.includes('buah[0] =') || code.includes('buah[2] =')) {
        results.passed.push('✓ Mengubah element array');
    } else {
        results.failed.push('✗ Belum mengubah element array');
    }

    // Check 7: for...of loop
    results.total++;
    if (code.includes('for') && code.includes('of')) {
        results.passed.push('✓ Menggunakan for...of loop');
    } else {
        results.failed.push('✗ Belum menggunakan for...of loop');
    }

    // Check 8: forEach method
    results.total++;
    if (code.includes('.forEach(')) {
        results.passed.push('✓ Menggunakan forEach method');
    } else {
        results.failed.push('✗ Belum menggunakan forEach method');
    }

    // Check 9: Array campuran dengan typeof
    results.total++;
    if (code.includes('dataSiswa') && code.includes('typeof')) {
        results.passed.push('✓ Array campuran dengan typeof');
    } else {
        results.failed.push('✗ Belum membuat array campuran dengan typeof');
    }

    // Check 10: indexOf method
    results.total++;
    if (code.includes('.indexOf(')) {
        results.passed.push('✓ Menggunakan indexOf method');
    } else {
        results.failed.push('✗ Belum menggunakan indexOf method');
    }

    // Check 11: includes method
    results.total++;
    if (code.includes('.includes(')) {
        results.passed.push('✓ Menggunakan includes method');
    } else {
        results.failed.push('✗ Belum menggunakan includes method');
    }

    // Check 12: Hitung total dengan loop
    results.total++;
    if (code.includes('total') && code.includes('+=') && code.includes('for')) {
        results.passed.push('✓ Menghitung total dengan loop');
    } else {
        results.failed.push('✗ Belum menghitung total dengan loop');
    }

    // Check 13: Mencari nilai maksimum
    results.total++;
    if (code.includes('max') && code.includes('if') && code.includes('>')) {
        results.passed.push('✓ Mencari nilai maksimum dengan loop');
    } else {
        results.failed.push('✗ Belum mencari nilai maksimum');
    }

    return results;
}

// Main checker function
function checkExercise(filePath, day) {
    try {
        const code = fs.readFileSync(filePath, 'utf8');

        console.log(`\n📝 Checking ${filePath} - Day ${day}\n`);
        console.log('=' .repeat(50));

        let results;
        switch(day) {
            case 1:
                results = checkDay1(code);
                break;
            case 2:
                results = checkDay2(code);
                break;
            case 3:
                results = checkDay3(code);
                break;
            case 4:
                results = checkDay4(code);
                break;
            case 5:
                results = checkDay5(code);
                break;
            case 6:
                results = checkDay6(code);
                break;
            case 7:
                results = checkDay7(code);
                break;
            case 8:
                results = checkDay8(code);
                break;
            case 9:
                results = checkDay9(code);
                break;
            case 10:
                results = checkDay10(code);
                break;
            case 11:
                results = checkDay11(code);
                break;
            case 12:
                results = checkDay12(code);
                break;
            case 13:
                results = checkDay13(code);
                break;
            case 14:
                results = checkDay14(code);
                break;
            case 15:
                results = checkDay15(code);
                break;
            case 16:
                results = checkDay16(code);
                break;
            case 17:
                results = checkDay17(code);
                break;
            case 18:
                results = checkDay18(code);
                break;
            case 19:
                results = checkDay19(code);
                break;
            default:
                console.log('Day not supported yet');
                return;
        }

        // Display results
        console.log('\n✅ PASSED:');
        results.passed.forEach(item => console.log(`  ${item}`));

        console.log('\n❌ FAILED:');
        results.failed.forEach(item => console.log(`  ${item}`));

        // Summary
        const score = (results.passed.length / results.total * 100).toFixed(1);
        console.log('\n' + '='.repeat(50));
        console.log(`📊 Score: ${results.passed.length}/${results.total} (${score}%)`);

        if (results.failed.length === 0) {
            console.log('🎉 Perfect! All tasks completed!');
        } else {
            console.log('💪 Keep going! Complete the failed tasks.');
        }

    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }
}

// Check if file path is provided
if (process.argv.length < 3) {
    console.log('Usage: node checker.js <file-path> [day-number]');
    console.log('Example: node checker.js exercises/day-16/array-methods-1.js 16');
    console.log('Supported days: 1-16');
    process.exit(1);
}

const filePath = process.argv[2];
const day = process.argv[3] || 1; // Default to day 1

checkExercise(filePath, parseInt(day));