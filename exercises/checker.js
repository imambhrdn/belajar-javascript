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
    console.log('Example: node checker.js variables.js 2');
    console.log('Supported days: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10');
    process.exit(1);
}

const filePath = process.argv[2];
const day = process.argv[3] || 1; // Default to day 1

checkExercise(filePath, parseInt(day));