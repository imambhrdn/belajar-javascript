// 📚 Day 8: If/Else Statement
// Hari ini kita belajar conditional statements untuk mengontrol alur program

console.log("🎯 LATIHAN IF/ELSE STATEMENT");
console.log("=================================");

// ===== CONTOH DASAR =====
console.log("\n1. Contoh Sistem Grading");
console.log("------------------------");

// TODO 1: Implementasikan sistem grading
// Gunakan if/else if/else untuk menentukan grade:
// - 90-100: Grade A
// - 80-89: Grade B
// - 70-79: Grade C
// - 60-69: Grade D
// - < 60: Grade E
let nilai1 = 85;
let grade1;

// Tulis kode Anda di bawah ini
if (nilai1 >= 90){
    grade1 = 'A'
}else if(nilai1 >=80){
    grade1 = 'B'
}else if(nilai1 >=70){
    grade1 = 'C'
}else if(nilai1 >=60){
    grade1 = 'D'
}else{
    grade1 = 'E'
}

console.log(`Nilai ${nilai1} mendapat Grade: ${grade1}`);

// Test dengan nilai lain
let nilai2 = 92;
let grade2;

// Tulis kode untuk nilai2
if (nilai2 >= 90){
    grade2 = 'A'
}else if(nilai2 >=80){
    grade2 = 'B'
}else if(nilai1 >=70){
    grade2 = 'C'
}else if(nilai2 >=60){
    grade2 = 'D'
}else{
    grade2 = 'E'
}

console.log(`Nilai ${nilai2} mendapat Grade: ${grade2}`);

// Expected Output:
// Nilai 85 mendapat Grade: B
// Nilai 92 mendapat Grade: A

// ===== LATIHAN 2: CEK KELULUSAN =====
console.log("\n2. Sistem Kelulusan");
console.log("-------------------");

// TODO 2: Implementasikan sistem kelulusan
// - Lulus jika nilai >= 70 AND kehadiran >= 80%
// - Remedial jika nilai >= 60 OR kehadiran >= 70%
// - Tidak lulus jika tidak memenuhi keduanya
let nilaiMahasiswa = 75;
let kehadiran = 85;
let statusKelulusan;

// Tulis kode Anda di bawah ini
if(nilaiMahasiswa >= 70 && kehadiran >= 80){
    statusKelulusan ='LULUS'
}else{
    statusKelulusan ='TIDAK LULUS'
}

console.log(`Mahasiswa dengan nilai ${nilaiMahasiswa} dan kehadiran ${kehadiran}%: ${statusKelulusan}`);

// Expected Output:
// Mahasiswa dengan nilai 75 dan kehadiran 85%: LULUS

// ===== LATIHAN 3: TERNARY OPERATOR =====
console.log("\n3. Ternary Operator");
console.log("-------------------");

// TODO 3: Gunakan ternary operator untuk:
// - Cek genap/ganjil
// - Cek umur (dewasa/underage)
// - Cek nilai lulus/tidak lulus

// Cek genap/ganjil
let angka = 7;
let isGenap;
isGenap = (angka %2 == 0) ? 'Genap' : 'Ganjil';

console.log(`${angka} adalah bilangan ${isGenap}`);

// Cek umur
let umur = 17;
let statusUmur;
statusUmur = (umur >= 17 ) ? 'Dewasa' : 'Underage';

console.log(`Umur ${umur}: ${statusUmur}`);

// Cek kelulusan sederhana
let nilaiTest = 68;
let status;
status = (nilaiTest >= 70) ? 'LULUS' : 'TIDAK LULUS';

console.log(`Nilai ${nilaiTest}: ${status}`);

// Expected Output:
// 7 adalah bilangan Ganjil
// Umur 17: Dewasa
// Nilai 68: TIDAK LULUS

// ===== LATIHAN 4: NESTED IF/ELSE =====
console.log("\n4. Nested Conditions");
console.log("-------------------");

// TODO 4: Implementasikan sistem validasi login
// - Username harus diisi
// - Password minimal 8 karakter
// - Jika username kosong: "Username harus diisi"
// - Jika password kurang: "Password minimal 8 karakter"
// - Jika keduanya benar: "Login berhasil"

let username = "admin";
let password = "pass123"; // ubah untuk test

let pesan1;

if (username === '' || username === null) {
    pesan1 ='username harus diisi'
} else if (password.length < 8) {
    pesan1 ='Password minimal 8 karakter'
}else{
    pesan1 ='Login berhasil'
}

console.log(pesan1)

// Test dengan username kosong
console.log("\nTest dengan username kosong:");
let username2 = "";
let password2 = "password123";
let pesan2

if (username2=== '' || username2 === null) {
    pesan2 ='Username harus diisi'
} else if (password2.length < 8) {
    pesan2 ='Password minimal 8 karakter'
}else{
    pesan2 ='Login berhasil'
}

console.log(pesan2)

// Expected Output:
// Password minimal 8 karakter
//
// Test dengan username kosong:
// Username harus diisi

// ===== LATIHAN 5: SISTEM DISKON BELANJA =====
console.log("\n5. Sistem Diskon Belanja");
console.log("----------------------");

// TODO 5: Implementasikan sistem diskon
// - Member: diskon 20% jika belanja >= 500rb, 10% jika >= 200rb
// - Non-member: diskon 10% jika belanja >= 500rb, 5% jika >= 200rb
// - < 200rb: tidak ada diskon

function hitungDiskon(isMember, totalBelanja) {
    let diskon = 0;

    // Tulis kode Anda di bawah ini
if (isMember) {
    if (totalBelanja >= 500000) {
        diskon = 0.20
    } else if(totalBelanja >= 200000){
        diskon = 0.10
    }
    
} else {
    if(totalBelanja >= 500000){
        diskon = 0.10
    } else if(totalBelanja >= 200000){
        diskon = 0.05
    }else{
        diskon = 0
    }
}
return diskon;
}

// Test cases
let test1 = { member: true, total: 600000 };
let test2 = { member: true, total: 250000 };
let test3 = { member: false, total: 300000 };
let test4 = { member: false, total: 100000 };

let diskon1 = hitungDiskon(test1.member, test1.total);
let diskon2 = hitungDiskon(test2.member, test2.total);
let diskon3 = hitungDiskon(test3.member, test3.total);
let diskon4 = hitungDiskon(test4.member, test4.total);

console.log(`Member belanja Rp${test1.total}: diskon ${diskon1 * 100}%`);
console.log(`Member belanja Rp${test2.total}: diskon ${diskon2 * 100}%`);
console.log(`Non-member belanja Rp${test3.total}: diskon ${diskon3 * 100}%`);
console.log(`Non-member belanja Rp${test4.total}: diskon ${diskon4 * 100}%`);

// Expected Output:
// Member belanja Rp600000: diskon 20%
// Member belanja Rp250000: diskon 10%
// Non-member belanja Rp300000: diskon 5%
// Non-member belanja Rp100000: diskon 0%

// ===== LATIHAN 6: GAME CHECK =====
console.log("\n6. Game Status Check");
console.log("-------------------");

// TODO 6: Implementasikan pengecekan status game
// - Health > 50: "Healthy"
// - 20-50: "Injured"
// - < 20: "Critical"
// - Jika health <= 0: "Game Over"

function checkGameStatus(health, score) {
    let status;
    let gameOver = false;

    // Tulis kode Anda di bawah ini
    if (health <= 0){
        status = 'Game Over'
        gameOver = true
    }else if(health < 20){
        status ='Critical'
    }else if(health < 50){
        status = 'Injured'
    }else{
        status = 'Healthy'
    }

    return { status, gameOver };
}

let player1 = { health: 75, score: 1200 };
let player2 = { health: 35, score: 800 };
let player3 = { health: 15, score: 500 };
let player4 = { health: 0, score: 0 };

let status1 = checkGameStatus(player1.health, player1.score);
let status2 = checkGameStatus(player2.health, player2.score);
let status3 = checkGameStatus(player3.health, player3.score);
let status4 = checkGameStatus(player4.health, player4.score);

console.log(`Player 1: Health=${player1.health}, Status=${status1.status}`);
console.log(`Player 2: Health=${player2.health}, Status=${status2.status}`);
console.log(`Player 3: Health=${player3.health}, Status=${status3.status}`);
console.log(`Player 4: Health=${player4.health}, Status=${status4.status}`);

// Expected Output:
// Player 1: Health=75, Status=Healthy
// Player 2: Health=35, Status=Injured
// Player 3: Health=15, Status=Critical
// Player 4: Health=0, Status=Game Over

// ===== LATIHAN 7: BMI CALCULATOR =====
console.log("\n7. BMI Calculator");
console.log("----------------");

// TODO 7: Implementasikan kalkulator BMI
// - < 18.5: "Underweight"
// - 18.5-24.9: "Normal"
// - 25-29.9: "Overweight"
// - >= 30: "Obese"

function calculateBMI(berat, tinggi) {
    // BMI = berat (kg) / (tinggi (m))^2
    let tinggiMeter = tinggi / 100;
    let bmi = berat / (tinggiMeter * tinggiMeter);
    let kategori;

    // Tentukan kategori BMI
    if (bmi >= 30) {
        kategori = 'Obese'
    } else if (bmi >= 25){
        kategori = 'Overweight'
    }else if(bmi >= 18.5){
        kategori = 'Normal'
    }else{
        kategori = 'Underweight'
    }

    return { bmi: bmi.toFixed(1), kategori };
}

let bmi1 = calculateBMI(60, 170);
let bmi2 = calculateBMI(75, 170);
let bmi3 = calculateBMI(90, 170);


console.log(`Berat 60kg, Tinggi 170cm: BMI=${bmi1.bmi} (${bmi1.kategori})`);
console.log(`Berat 75kg, Tinggi 170cm: BMI=${bmi2.bmi} (${bmi2.kategori})`);
console.log(`Berat 90kg, Tinggi 170cm: BMI=${bmi3.bmi} (${bmi3.kategori})`);

// Expected Output:
// Berat 60kg, Tinggi 170cm: BMI=20.8 (Normal)
// Berat 75kg, Tinggi 170cm: BMI=26.0 (Overweight)
// Berat 90kg, Tinggi 170cm: BMI=31.1 (Obese)

// ===== CHALLENGE: FIZZBUZZ =====
console.log("\n8. Challenge: FizzBuzz");
console.log("--------------------");

// TODO 8 (Challenge): Implementasikan FizzBuzz
// - Untuk angka 1-20
// - Kelipatan 3: "Fizz"
// - Kelipatan 5: "Buzz"
// - Kelipatan 3 dan 5: "FizzBuzz"
// - Bukan kelipatan: tampilkan angka

console.log("FizzBuzz untuk angka 1-20:");
for (let i = 1; i <= 20; i++) {
    let output;

    // Tulis logika FizzBuzz
    if (i %15 == 0 ) {
        output = 'FizzBuzz'
    }else if( i %5 ==0){
        output = 'Buzz'
    }else if(i %3 == 0){
        output = 'Fizz'
    }
     else {
        output = i        
    }

    console.log(output);
}

// Expected Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz

// ===== CHALLENGE 2: KALKULATOR SEDERHANA =====
console.log("\n9. Challenge 2: Calculator");
console.log("-------------------------");

// TODO 9 (Challenge): Buat kalkulator sederhana
function calculator(a, b, operator) {
    let result;

    // Gunakan if/else if/else untuk berbagai operator
    if (operator === '+') {
        result = a + b
    } else if (operator === '-') {
        result = a - b
    } else if (operator === '*'){
        result = a * b
    } else if(operator === '/'){
        if (b === 0) {
            result = 'Error: Division by zero'
        } else {
            result = a / b
        }
    }else if(operator === '%'){
       result = a % b 
    }else if(operator === '**'){
        result = a**b
    }else{
        result = 'Error: Invalid operator'
    }
    
    return result;
}

// Test kalkulator
console.log("10 + 5 =", calculator(10, 5, "+"));
console.log("10 - 5 =", calculator(10, 5, "-"));
console.log("10 * 5 =", calculator(10, 5, "*"));
console.log("10 / 5 =", calculator(10, 5, "/"));
console.log("10 % 3 =", calculator(10, 3, "%"));
console.log("2 ** 3 =", calculator(2, 3, "**"));
console.log("10 / 0 =", calculator(10, 0, "/"));
console.log("10 ? 5 =", calculator(10, 5, "?"));

// Expected Output:
// 10 + 5 = 15
// 10 - 5 = 5
// 10 * 5 = 50
// 10 / 5 = 2
// 10 % 3 = 1
// 2 ** 3 = 8
// 10 / 0 = Error: Division by zero
// 10 ? 5 = Error: Invalid operator

console.log("\n=================================");
console.log("✅ Terima kasih telah mengerjakan!");
console.log("=================================");