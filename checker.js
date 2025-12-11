// Automatic JavaScript Practice Checker
// Untuk mengecek jawaban praktik JavaScript

const fs = require('fs');

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

// Main checker function
function checkExercise(filePath, day) {
    try {
        const code = fs.readFileSync(filePath, 'utf8');

        console.log(`\n📝 Checking ${filePath} - Day ${day}\n`);
        console.log('=' .repeat(50));

        let results;
        switch(day) {
            case 2:
                results = checkDay2(code);
                break;
            case 3:
                results = checkDay3(code);
                break;
            case 4:
                results = checkDay4(code);
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
    console.log('Example: node checker.js variable.js 2');
    process.exit(1);
}

const filePath = process.argv[2];
const day = process.argv[3] || 2; // Default to day 2

checkExercise(filePath, parseInt(day));