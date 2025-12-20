// Day 11: While Loop
// Student: [Nama Student]
// Status: [ ] Belum dimulai [ ] Sedang dikerjakan [ ] Selesai

console.log("===== DAY 11: WHILE LOOP EXERCISES =====\n");

// ============================================
// TODO 1: Basic While Loop - Countdown
// Buat countdown dari 10 sampai 1 menggunakan while loop
// ============================================
// Tulis kode kamu di bawah ini:
console.log("=== COUNTDOWN 10 TO 1 ===");
let i = 10
while (i >= 1) {
    console.log(i)
    i--;
}
// ============================================
// TODO 2: Simulasi antrian
// Ada 5 orang dalam antrian. Proses setiap orang dengan while loop
// Tampilkan "Memproses orang ke-X" untuk setiap orang
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== SIMULASI ANTRIAN ===");
let totalOrang = 5;
let antrian = 1;

while (antrian <= totalOrang) {
    console.log(`Memproses orang ke - ${antrian}`)
    antrian ++;
}
console.log('Semua Orang Diproses')


// ============================================
// TODO 3: Validasi input
// Simulasi proses login maksimal 3 percobaan
// Password yang benar adalah "secret123"
// Gunakan while loop untuk mencoba hingga benar atau maksimal percobaan
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== SIMULASI LOGIN ===");
const passwordBenar = 'secret123'
let percobaan = 0
let maxPercobaan = 3
let loginBerhasil = false

while(percobaan < maxPercobaan && !loginBerhasil){
    percobaan ++
    console.log(`Percobaan ke- ${percobaan}`)
    let inputPassword = percobaan < 3  ? 'Wrong' : passwordBenar
    if (inputPassword === passwordBenar) {
        console.log('✅ Login berhasil!')
        loginBerhasil = true
    } else {
        console.log('❌ Password salah!')
        if (percobaan < maxPercobaan) {
            console.log('Silahkan Coba lagi')
        } else {
            console.log('🚫 Maksimal percobaan tercapai. Akun dikunci!')
        }
    }
}
// ============================================
// TODO 4: Menghitung faktorial
// Hitung faktorial dari angka 7 menggunakan while loop
// 7! = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== HITUNG FAKTORIAL ===");
let n = 7
let faktorial = 1
let j = n;
console.log(`Menghitung ${n}! =`);
while(j > 0){
    faktorial *=j
    if (j > 1) {
        process.stdout.write(`${j} x `)
    } else {
        process.stdout.write(`${j} = `)
    }
    j--
}
console.log(faktorial)

// ============================================
// TODO 5: Game tebak angka
// Angka random 1-10, beri kesempatan 5 kali
// Gunakan while loop dengan kondisi percobaan < 5 dan belum benar
// (Anggap saja player selalu salah untuk simulasi)
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== GAME TEBAK ANGKA ===");
let angka = 7
let kesempatan = 5
let tebakanKe = 0
let benar = false

console.log(`Tebak angka 1-10. Anda punya ${kesempatan} kesempatan.`)

while (tebakanKe < kesempatan && !benar) {
    tebakanKe++
    let tebakanPlayer = 5
    console.log(`Tebakan ke- ${tebakanKe} : ${tebakanPlayer}`)
    if (tebakanPlayer === angka) {
        console.log('🎉 Benar! Anda menang!')
        benar = true
    } else {
        if (tebakanPlayer < angka) {
            console.log('Terlalu rendah!')
        } else {
            console.log('Terlalu tinggi!')
        }
        if (tebakanKe < kesempatan) {
            console.log(`Sisa kesempatan ${kesempatan - tebakanKe} lagi`)
        } else {
            console.log(`😔 Game Over! Jawabannya adalah ${angka}`)
        }
    }

    
}

// ============================================
// TODO 6: Do While - Input validation
// Simulasi input umur yang harus valid (18-60)
// Gunakan do-while loop (anggap user input salah 2 kali sebelum benar)
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== VALIDASI UMUR (DO-WHILE) ===");
let umur;
let valid = false
let attempt = 0

do {
    attempt++
    umur = attempt < 3 ? 10 : 25;
    console.log(`input ke- ${attempt} : ${umur}`)

    if (umur >= 18 && umur <= 60 ) {
        console.log('✅ Umur valid!')
        valid = true
    } else {
        console.log("❌ Umur tidak valid! Harus 18-60 tahun.");
        if (attempt < 3) {
            console.log('Silakan input lagi.')
        }
    }
} while (!valid && attempt < 3);

if (!valid) {
    console.log("🚫 Maksimal percobaan tercapai!");
}


// ============================================
// TODO 7: Break statement
// Tampilkan angka 1-100, tapi stop saat mencapai kelipatan 17
// Gunakan while loop dengan break
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== STOP DI KELIPATAN 17 ===");
let num = 1
let stopAt = 100
while (num <= stopAt) {
    if (num %17 == 0) {
        console.log(`${num} <- angka kelipatan 17 BERHENTI!`)
        break
    }
    console.log(num)
    num++
}
// ============================================
// TODO 8: Continue statement
// Tampilkan angka 1-20, tapi lewati angka kelipatan 3
// Gunakan while loop dengan continue
// ============================================
// Tulis kode kamu di bawah ini:
console.log("\n=== LEWATI KELIPATAN 3 ===");
let num1 = 1
let max = 20

while (num1 <= max) {
    num1++
    if ((num1 - 1) %3 == 0) {
        continue
    }
    console.log(num1 -1 )
}

// ============================================
// TODO 9: Nested while loops
// Buat pola segitiga menggunakan nested while loops
// *
// **
// ***
// ****
// *****
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== POLA SEGITIGA ===");
let baris = 1
let maxBaris = 5
while (baris <= maxBaris) {
    let kolom = 1
    let bintang =''

    while (kolom <= baris ) {
        kolom ++
        bintang += '*'
    }
    console.log(bintang)
    baris++
}

// ============================================
// TODO 10: While vs For comparison
// Hitung jumlah angka ganjil dari 1-50 dengan while loop
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== JUMLAH ANGKA GANJIL 1-50 ===");

let angka1 = 1
let sumGanjil = 0
let ganjilList = []

while (angka1 <= 50) {
    if (angka1 %2 !== 0) {
        sumGanjil += angka1
        ganjilList.push(angka1)
    }
    angka1++
}

console.log(`Angka ganjil = ${ganjilList.join(', ')}`)
console.log(`Jumlah semua angka ganjil: ${sumGanjil}`);

// ============================================
// TESTING SECTION (Jangan diubah!)
// ============================================
console.log("\n\n===== TESTING RESULTS =====");

// Test Countdown
console.log("\n1. Testing Countdown:");
// Expected: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// Test Antrian
console.log("\n2. Testing Antrian:");
// Expected: 5 proses messages

// Test Login
console.log("\n3. Testing Login:");
// Expected: Maximum 3 attempts

// Test Faktorial
console.log("\n4. Testing Faktorial:");
// Expected: 5040

// Test Game
console.log("\n5. Testing Game:");
// Expected: Maximum 5 attempts

// Test Validasi Umur
console.log("\n6. Testing Validasi Umur:");
// Expected: Loop sampai valid

// Test Break
console.log("\n7. Testing Break:");
// Expected: Stop at 17

// Test Continue
console.log("\n8. Testing Continue:");
// Expected: Skip multiples of 3

// Test Pola
console.log("\n9. Testing Pola:");
// Expected: Triangle pattern

// Test Sum
console.log("\n10. Testing Sum:");
// Expected: 625 (sum of odd numbers 1-50)

console.log("\n===== COMPLETE! =====");