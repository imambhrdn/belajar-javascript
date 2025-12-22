# 🚀 Roadmap Belajar JavaScript 30 Hari

Panduan lengkap belajar JavaScript dari nol hingga mahir dalam 30 hari dengan praktik langsung.

---

## 📅 Minggu 1: JavaScript Fundamentals

### Day 1: Pengenalan JavaScript
**Materi:**
- [ ] Apa itu JavaScript dan kegunaannya
- [ ] Cara menjalankan JavaScript (browser console, file .js)
- [ ] `console.log()` - menampilkan output
- [ ] Komentar (`//` dan `/* */`)

**🔨 Praktik:**
```javascript
// 1. Buka Console browser (F12) dan ketik:
console.log("Halo, Dunia!");

// 2. Tampilkan nama dan umurmu
console.log("Nama saya adalah [namamu]");
console.log("Umur saya [umur] tahun");

// 3. Tampilkan 5 hal favorit tentang dirimu
```

---

### Day 2: Variables
**Materi:**
- [ ] `var`, `let`, `const` - perbedaannya
- [ ] Aturan penamaan variabel
- [ ] Best practice: gunakan `const` dan `let`

**🔨 Praktik:**
```javascript
// 1. Buat variabel untuk data dirimu
const nama = "Budi";
let umur = 25;
const kota = "Jakarta";

// 2. Ubah nilai umur
umur = 26;
console.log(nama, umur, kota);

// 3. Buat variabel untuk:
// - Nama lengkap
// - Tahun lahir
// - Hobi (string)
// - Sudah menikah (true/false)
```

---

### Day 3: Data Types
**Materi:**
- [ ] String, Number, Boolean
- [ ] Undefined, Null
- [ ] `typeof` operator
- [ ] Type conversion

**🔨 Praktik:**
```javascript
// 1. Buat variabel untuk setiap tipe data
let teks = "Hello";        // String
let angka = 42;            // Number
let benar = true;          // Boolean
let kosong = null;         // Null
let belumAda;              // Undefined

// 2. Cek tipe data masing-masing
console.log(typeof teks);
console.log(typeof angka);

// 3. Konversi tipe data
let strAngka = "123";
let numAngka = Number(strAngka);
console.log(numAngka + 10); // 133
```

---

### Day 4: Operators
**Materi:**
- [x] Aritmatika: `+ - * / % **`
- [x] Assignment: `= += -= *= /=`
- [x] Comparison: `== === != !== > < >= <=`
- [x] Logical: `&& || !`

**🔨 Praktik:**
```javascript
// 1. Kalkulator sederhana
let a = 10, b = 3;
console.log("Tambah:", a + b);
console.log("Kurang:", a - b);
console.log("Kali:", a * b);
console.log("Bagi:", a / b);
console.log("Sisa bagi:", a % b);

// 2. Hitung luas persegi panjang
let panjang = 10;
let lebar = 5;
let luas = panjang * lebar;
console.log("Luas:", luas);

// 3. Konversi suhu Celsius ke Fahrenheit
// Rumus: F = (C × 9/5) + 32
let celsius = 30;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C = " + fahrenheit + "°F");

// 4. Logical operators
let isAdult = true;
let hasLicense = false;
console.log("Boleh driving:", isAdult && hasLicense); // false
console.log("Boleh voting:", isAdult || hasLicense); // true
console.log("Tidak boleh:", !isAdult); // false

// 5. Combination
let score = 85;
let attendance = 90;
console.log("Lulus:", score >= 75 && attendance >= 80);
```

---

### Day 5: Logical Operators
**Materi:**
- [x] AND (`&&`) - semua kondisi harus true
- [x] OR (`||`) - salah satu kondisi true cukup
- [x] NOT (`!`) - membalik nilai boolean
- [x] Truthy dan Falsy values
- [x] Short-circuit evaluation
- [x] Nullish coalescing (`??`)

**🔨 Praktik:**
```javascript
// 1. Operator AND (&&)
let umur = 20;
let punyaKTP = true;
console.log("Boleh vote:", umur >= 17 && punyaKTP); // true
console.log("Boleh driving:", umur >= 18 && punyaKTP); // false

// 2. Operator OR (||)
console.log("Boleh masuk bioskop:", umur >= 17 || punyaKTP); // true

// 3. Operator NOT (!)
console.log("Tidak punya KTP:", !punyaKTP); // false

// 4. Truthy dan Falsy Values
// Falsy: false, 0, "", null, undefined, NaN
console.log(Boolean(false));    // false
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));      // false

// Truthy: semua nilai selain falsy
console.log(Boolean("hello"));  // true
console.log(Boolean(42));       // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true

// 5. Short-circuit Evaluation
let x = 5;
// AND - jika pertama false, tidak cek kedua
console.log(false && x++);      // false
console.log(x);                 // 5 (tidak bertambah)

// OR - jika pertama true, tidak cek kedua
console.log(true || x++);       // true
console.log(x);                 // 5 (tidak bertambah)

// 6. Default value dengan OR
let username = "" || "Guest";
let umurUser = 0 || 25;
console.log("Username:", username); // "Guest"
console.log("Umur:", umurUser);     // 25

// 7. Nullish Coalescing (??) - hanya null/undefined
let nama = null ?? "Anonymous";    // "Anonymous"
let pesan = "" ?? "No message";    // "" (karena bukan null/undefined)
let angka = 0 ?? 100;             // 0 (karena bukan null/undefined)

// 8. Praktik: Sistem validasi
let email = "user@email.com";
let password = "123456";
let isActive = true;

// Validasi login
let isValidLogin = email.includes("@") && password.length >= 6 && isActive;
console.log("Login valid:", isValidLogin);

// 9. Praktik: Cek diskon
let totalBelanja = 250000;
let isMember = true;
let punyaKupon = false;

// Diskon 20% jika member + belanja > 200k
// Diskon 10% jika punya kupon
let dapatDiskon = (isMember && totalBelanja > 200000) || punyaKupon;
console.log("Dapat diskon:", dapatDiskon);

// 10. Praktik: Game conditions
let playerHealth = 50;
let hasKey = false;
let doorLocked = true;

// Buka pintu jika punya kunci atau pintu tidak terkunci
let canOpenDoor = hasKey || !doorLocked;
console.log("Buka pintu:", canOpenDoor);

// Game over jika health <= 0
let gameOver = playerHealth <= 0;
console.log("Game Over:", gameOver);
```

**📝 Latihan Mandiri:**

**Latihan 1: Validasi Data Pendaftaran**
Buat sistem validasi untuk formulir pendaftaran dengan ketentuan:
- Umur minimal 17 tahun
- Email harus mengandung "@"
- Password minimal 8 karakter
- Username tidak boleh kosong

```javascript
// Test cases:
let form1 = {
    umur: 18,
    email: "user@email.com",
    password: "password123",
    username: "user123"
};
// Expected: true

let form2 = {
    umur: 16,
    email: "useremail.com",
    password: "pass",
    username: ""
};
// Expected: false

// Buat function validateForm(data) yang returns true/false
```

**Latihan 2: Sistem Keamanan Gedung**
Buat logika keamanan gedung dengan aturan:
- Tamu bisa masuk jika punya appointment atau ada karyawan yang mendamping
- Karyawan bisa masuk jika punya ID card dan jam kerja (8-17)
- Security selalu bisa masuk

```javascript
// Test cases:
let visitor = { role: "tamu", hasAppointment: true, hasEscort: false };
let employee = { role: "karyawan", hasID: true, hour: 10 };
let security = { role: "security", hasID: false, hour: 23 };
let nightVisitor = { role: "tamu", hasAppointment: false, hasEscort: false };

// Buat function canEnter(person) yang returns true/false
```

**Latihan 3: Kalkulator Diskon Kompleks**
Buat sistem diskon dengan rules:
- Member: diskon 20% jika belanja > 200k, diskon 10% jika > 100k
- Non-member: diskon 15% jika belanja > 300k, diskon 5% jika > 150k
- Extra diskon 5% jika hari weekend DAN belanja > 250k
- Tidak bisa dapat diskon lebih dari 25%

```javascript
// Test cases:
// Member, belanja 250k, weekday = 20%
// Member, belanja 250k, weekend = 25%
// Non-member, belanja 350k, weekend = 20%
// Non-member, belanja 100k, weekday = 0%

// Buat function hitungDiskon(isMember, totalBelanja, isWeekend)
```

**Latihan 4: Game Battle System**
Buat sistem battle untuk game:
- Attack berhasil jika: (accuracy > 50% AND enemy tidak dodge) OR critical hit
- Critical hit jika: luck > 80%
- Dodge jika: agility > 70%
- Damage: baseDamage * 2 jika critical, * 0.5 jika miss

```javascript
// Test data:
let player = {
    accuracy: 75,
    luck: 60,
    baseDamage: 100
};
let enemy = {
    agility: 65,
    isDodging: true
};

// Buat function calculateAttack(player, enemy)
```

**Latihan 5: Smart Home System**
Buat sistem kontrol smart home:
- AC nyala jika: suhu > 25 OR (sedang berada di rumah AND jam di antara 18-6)
- Lampu nyala jika: jam di luar 6-18 OR (gerakan terdeteksi AND tidak ada cahaya)
- Alarm aktif jika: tidak ada orang di rumah AND (jam 22-6 OR detect motion)

```javascript
// Test scenarios:
let siang = { hour: 14, atHome: true, temp: 28, motion: false, light: true };
let malam = { hour: 23, atHome: true, temp: 24, motion: true, light: false };
let kosong = { hour: 2, atHome: false, temp: 22, motion: true, light: false };

// Buat function checkHomeControls(state)
// Return object { ac: true/false, lamp: true/false, alarm: true/false }
```

**Latihan 6: Short-circuit Challenge**
Manfaatkan short-circuit evaluation untuk menulis kode yang lebih efisien:

```javascript
// 1. Panggil method hanya jika object ada
let user = { name: "Budi", greet: () => console.log("Hello!") };
// Tampilkan "Hello!" hanya jika user ada dan ada method greet

// 2. Assign default value yang kompleks
// Jika nama kosong, gunakan "User" + random number 1-100

// 3. Validasi array sebelum operasi
let numbers = [1, 2, 3, 4, 5];
// Hitung rata-rata hanya jika array tidak kosong

// 4. Chain operation yang aman
let data = null;
// Ambil data.user.profile.name jika semua ada, else "Guest"
```

**Challenge Tambahan: Expression Builder**
Buat function yang bisa menggabungkan multiple kondisi dengan AND/OR:

```javascript
function buatKondisi() {
    let kondisi = [];
    return {
        AND: function(value) { kondisi.push({type: 'AND', value}); return this; },
        OR: function(value) { kondisi.push({type: 'OR', value}); return this; },
        evaluasi: function() {
            // Implement logic untuk mengevaluasi semua kondisi
            // Contoh: AND(true).OR(false).AND(true).evaluasi() -> true
        }
    };
}

// Contoh penggunaan:
buatKondisi()
    .AND(umur >= 17)
    .OR(punyaKTP)
    .AND(isActive)
    .evaluasi();
```

**📝 Status:** ✅ **Selesai pada 12 Desember 2024** (100% - Score: 10/10)

---

### Day 6: String Methods
**Materi:**
- [x] `length`, `toUpperCase()`, `toLowerCase()`
- [x] `includes()`, `indexOf()`, `slice()`
- [x] `split()`, `trim()`, `replace()`
- [x] `substring()`, `repeat()`, `charAt()`
- [x] Method chaining untuk complex operations

**🔨 Praktik:**
```javascript
// 1. Manipulasi string
let nama = "  john doe  ";
console.log(nama.trim());           // Hapus spasi
console.log(nama.trim().toUpperCase()); // JOHN DOE

// 2. Cek email valid (harus ada @)
let email = "user@email.com";
console.log("Email valid:", email.includes("@"));

// 3. Format nomor HP
// Ubah "08123456789" jadi "0812-3456-789"
let hp = "08123456789";
let formatted = hp.slice(0,4) + "-" + hp.slice(4,8) + "-" + hp.slice(8);
console.log(formatted);

// 4. Capitalize nama
let namaLengkap = "budi santoso";
let words = namaLengkap.split(" ");
let capitalized = words.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
).join(" ");

// 5. Password strength checker
function checkPassword(password) {
    return {
        hasMinLength: password.length >= 8,
        hasUpper: password !== password.toLowerCase(),
        hasLower: password !== password.toUpperCase(),
        hasNumber: /\d/.test(password)
    };
}
```

**📝 Status:** ✅ **Selesai pada 12 Desember 2024** (100% - Score: 15/15)

---

### Day 7: 🏆 Mini Project - Biodata Generator
**Materi:**
- [x] Review semua materi hari 1-6
- [x] Kombinasi variabel, tipe data, operator
- [x] String methods untuk formatting
- [x] Object dan array manipulation
- [x] Logika pemrograman terapan

**🔨 Praktik:**
```javascript
// Buat program yang menghasilkan biodata dari data input

// 1. Data input
const namaDepan = "john";
const namaBelakang = "doe";
const tahunLahir = 1999;
const email = "  JOHN@EMAIL.COM  ";
const pekerjaan = "web developer";

// 2. Proses data
// - Gabungkan nama (capitalize)
// - Hitung umur
// - Bersihkan email
// - Format pekerjaan

// 3. Tampilkan output rapi
console.log("=== BIODATA ===");
console.log("Nama:", /* hasil */);
console.log("Umur:", /* hasil */);
console.log("Email:", /* hasil */);
console.log("Pekerjaan:", /* hasil */);
```

**📝 Status:** ✅ **Selesai pada 15 Desember 2024** (100% - All TODOs completed)

---

## 📅 Minggu 2: Control Flow & Functions

### Day 8: If/Else Statement
**Materi:**
- [x] `if`, `else if`, `else`
- [x] Nested conditions
- [x] Ternary operator (`? :`)
- [x] Logical operators dalam conditional
- [x] Multiple conditions dengan AND/OR
- [x] Error handling dengan if/else

**🔨 Praktik:**
```javascript
// 1. Sistem grading
let nilai = 85;
if (nilai >= 90) {
    console.log("Grade: A");
} else if (nilai >= 80) {
    console.log("Grade: B");
} else if (nilai >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

// 2. Cek genap/ganjil dengan ternary
let angka = 7;
let hasil = angka % 2 === 0 ? "Genap" : "Ganjil";
console.log(angka, "adalah", hasil);

// 3. Sistem diskon belanja dengan nested if
// - Member: diskon 20% jika belanja >= 500rb, 10% jika >= 200rb
// - Non-member: diskon 10% jika belanja >= 500rb, 5% jika >= 200rb
// - < 200rb: tidak ada diskon

// 4. Validasi form dengan nested conditions
// 5. Game status checker dengan multiple ranges
// 6. BMI calculator dengan kategori
// 7. FizzBuzz challenge
// 8. Simple calculator dengan error handling
```

**📝 Status:** ✅ **Selesai pada 15 Desember 2024** (100% - All exercises completed)

---

### Day 9: Switch Case
**Materi:**
- [x] Syntax switch case
- [x] `break` statement
- [x] `default` case

**🔨 Praktik:**
```javascript
// 1. Nama hari dari angka
let hari = 3;
switch (hari) {
    case 1: console.log("Senin"); break;
    case 2: console.log("Selasa"); break;
    case 3: console.log("Rabu"); break;
    // ... lengkapi sampai Minggu
    default: console.log("Hari tidak valid");
}

// 2. Kalkulator dengan switch
let a = 10, b = 5, operator = "*";
let result;
switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = a / b; break;
}
console.log(result);
```

**📝 Status:** ✅ **Selesai pada 17 Desember 2024** (100% - Score: 10/10)

---

### Day 10: For Loop
**Materi:**
- [x] Basic `for` loop
- [x] `for...of` (untuk array)
- [x] `for...in` (untuk object)

**🔨 Praktik:**
```javascript
// 1. Tampilkan angka 1-10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Tabel perkalian
let angka = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${angka} x ${i} = ${angka * i}`);
}

// 3. Hitung total 1-100
let total = 0;
for (let i = 1; i <= 100; i++) {
    total += i;
}
console.log("Total 1-100:", total);

// 4. Segitiga bintang
// *
// **
// ***
// ****
// *****
```

**📝 Status:** ✅ **Selesai pada 17 Desember 2024** (100% - Score: 12/12)

---

### Day 11: While Loop
**Materi:**
- [x] `while` loop
- [x] `do...while` loop
- [x] `break` dan `continue`

**🔨 Praktik:**
```javascript
// 1. Countdown
let count = 5;
while (count > 0) {
    console.log(count);
    count--;
}
console.log("Blast off!");

// 2. Hitung faktorial dengan while
// 5! = 5 × 4 × 3 × 2 × 1 = 120
let n = 5;
let faktorial = 1;
while (n > 0) {
    faktorial *= n;
    n--;
}
console.log("5! =", faktorial);

// 3. Skip kelipatan 3 (pakai continue)
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}
```

**📝 Status:** ✅ **Selesai pada 18 Desember 2024** (100% - Score: 10/10)

---

### Day 12: Functions Dasar
**Materi:**
- [x] Function declaration
- [x] Function expression
- [x] Arrow function (`=>`)

**🔨 Praktik:**
```javascript
// 1. Function declaration
function sayHello() {
    console.log("Hello!");
}
sayHello();

// 2. Function expression
const sayHi = function() {
    console.log("Hi!");
};

// 3. Arrow function
const sayHey = () => console.log("Hey!");

// 4. Buat 3 function berbeda untuk:
// - Menampilkan garis "=========="
// - Menampilkan waktu sekarang
// - Menampilkan random number 1-100
```

**📝 Status:** ✅ **Selesai pada 19 Desember 2024** (100% - Score: 12/12)

---

### Day 13: Function Parameters & Return
**Materi:**
- [x] Parameters dan arguments
- [x] `return` statement
- [x] Default parameters

**🔨 Praktik:**
```javascript
// 1. Function dengan parameter
function sapa(nama) {
    console.log("Halo, " + nama + "!");
}
sapa("Budi");

// 2. Function dengan return
function tambah(a, b) {
    return a + b;
}
let hasil = tambah(5, 3);
console.log(hasil);

// 3. Buat function-function berikut:
// - luasPersegi(sisi)
// - luasPersegiPanjang(p, l)
// - kelilingLingkaran(r)
// - celsiusToFahrenheit(c)
// - isEven(num) -> return true/false
// - getMax(a, b) -> return yang lebih besar
```

**📝 Status:** ✅ **Selesai pada 19 Desember 2024** (100% - Score: 8/8)

---

### Day 14: 🏆 Mini Project - FizzBuzz
**🔨 Praktik:**
```javascript
// FizzBuzz Challenge
// Print 1-100, tapi:
// - Kelipatan 3: print "Fizz"
// - Kelipatan 5: print "Buzz"
// - Kelipatan 3 dan 5: print "FizzBuzz"

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(30);
```

**📝 Status:** ✅ **Selesai pada 19 Desember 2024** (100% - Score: 10/10)

---

## 📅 Minggu 3: Arrays & Objects

### Day 15: Array Basics
**Materi:**
- [x] Membuat array
- [x] Akses element (index)
- [x] `length` property

**🔨 Praktik:**
```javascript
// 1. Buat array
let buah = ["Apel", "Jeruk", "Mangga"];
console.log(buah[0]); // Apel
console.log(buah.length); // 3

// 2. Loop array
for (let item of buah) {
    console.log(item);
}

// 3. Buat array berisi:
// - 5 nama temanmu
// - 5 angka random
// - 5 boolean
// Loop dan tampilkan masing-masing
```

**📝 Status:** ✅ **Selesai pada 19 Desember 2024** (100% - Score: 13/13)

---

### Day 16: Array Methods I
**Materi:**
- [x] `push()`, `pop()`
- [x] `shift()`, `unshift()`
- [x] `splice()`, `slice()`

**📝 Status:** ✅ **Selesai pada 20 Desember 2024** (100% - Score: 13/13)

**🔨 Praktik:**
```javascript
// 1. Shopping cart
let cart = ["Buku", "Pensil"];
cart.push("Penghapus");  // Tambah di akhir
cart.pop();              // Hapus dari akhir
console.log(cart);

// 2. Antrian (queue)
let antrian = ["A", "B", "C"];
antrian.push("D");    // Masuk antrian
antrian.shift();      // Keluar antrian (yang pertama)
console.log(antrian);

// 3. Buat function removeItem(arr, item)
// yang menghapus item tertentu dari array
```

---

### Day 17: Array Iteration
**Materi:**
- [x] `forEach()` - loop array
- [x] `map()` - transformasi array

**📝 Status:** ✅ **Selesai pada 22 Desember 2024** (100% - Score: 13/13)

**🔨 Praktik:**
```javascript
// 1. forEach
let angka = [1, 2, 3, 4, 5];
angka.forEach((num, index) => {
    console.log(index, num);
});

// 2. map - transformasi
let doubled = angka.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 3. Praktik:
// - Ubah [1,2,3,4,5] jadi [1,4,9,16,25] (kuadrat)
// - Ubah ["john", "jane"] jadi ["John", "Jane"]
// - Ubah [10000, 25000] jadi ["Rp10.000", "Rp25.000"]
```

---

### Day 18: Array Methods II
**Materi:**
- [ ] `filter()`, `find()`
- [ ] `reduce()`
- [ ] `some()`, `every()`

**🔨 Praktik:**
```javascript
// 1. filter
let nilai = [65, 80, 45, 90, 55, 75];
let lulus = nilai.filter(n => n >= 60);
console.log(lulus);

// 2. find
let users = [{id: 1, name: "Budi"}, {id: 2, name: "Ani"}];
let user = users.find(u => u.id === 2);
console.log(user);

// 3. reduce - total
let prices = [10000, 25000, 50000];
let total = prices.reduce((sum, p) => sum + p, 0);
console.log(total);

// 4. Praktik:
// - Dari [23, 45, 12, 67, 34], cari nilai max dengan reduce
// - Filter produk yang harganya > 50000
// - Cek apakah semua nilai > 50 dengan every()
```

---

### Day 19: Object Basics
**Materi:**
- [ ] Object literal `{}`
- [ ] Properties dan values
- [ ] Dot vs bracket notation

**🔨 Praktik:**
```javascript
// 1. Buat object
let mobil = {
    merk: "Toyota",
    model: "Avanza",
    tahun: 2020
};

console.log(mobil.merk);
console.log(mobil["model"]);

// 2. Loop object
for (let key in mobil) {
    console.log(key + ":", mobil[key]);
}

// 3. Buat object untuk:
// - Data dirimu (min 5 property)
// - Smartphone (merk, harga, spek)
// - Buku favorit (judul, penulis, tahun, genre)
```

---

### Day 20: Object Methods
**Materi:**
- [ ] Method dalam object
- [ ] Keyword `this`
- [ ] Nested objects

**🔨 Praktik:**
```javascript
// 1. Object dengan method
let calculator = {
    result: 0,
    add(n) { this.result += n; return this; },
    subtract(n) { this.result -= n; return this; },
    getResult() { return this.result; }
};

calculator.add(10).subtract(3);
console.log(calculator.getResult()); // 7

// 2. Buat object bankAccount dengan:
// - property: owner, balance
// - method: deposit(amount), withdraw(amount), getBalance()
```

---

### Day 21: 🏆 Mini Project - Todo List (Console)
**🔨 Praktik:**
```javascript
// Todo List dengan Array & Object
const todoApp = {
    todos: [],
    nextId: 1,
    
    add(text) {
        this.todos.push({ id: this.nextId++, text, done: false });
    },
    
    complete(id) {
        let todo = this.todos.find(t => t.id === id);
        if (todo) todo.done = true;
    },
    
    delete(id) {
        this.todos = this.todos.filter(t => t.id !== id);
    },
    
    list() {
        this.todos.forEach(t => {
            let status = t.done ? "✅" : "⬜";
            console.log(`${status} [${t.id}] ${t.text}`);
        });
    }
};

// Test
todoApp.add("Belajar JavaScript");
todoApp.add("Buat portfolio");
todoApp.list();
todoApp.complete(1);
todoApp.list();
```

---

## 📅 Minggu 4: DOM & Async

### Day 22: DOM Selection
**Materi:**
- [ ] `getElementById()`
- [ ] `querySelector()`
- [ ] `querySelectorAll()`

**🔨 Praktik:**
```html
<!-- index.html -->
<h1 id="title">Hello</h1>
<ul>
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
    <li class="item">Item 3</li>
</ul>

<script>
// 1. Select by ID
const title = document.getElementById("title");
console.log(title);

// 2. Select first match
const firstItem = document.querySelector(".item");

// 3. Select all
const allItems = document.querySelectorAll(".item");
allItems.forEach(item => console.log(item.textContent));
</script>
```

---

### Day 23: DOM Manipulation
**Materi:**
- [ ] `textContent`, `innerHTML`
- [ ] `style` property
- [ ] `classList`
- [ ] `createElement()`

**🔨 Praktik:**
```javascript
// 1. Ubah konten
const title = document.getElementById("title");
title.textContent = "Judul Baru";

// 2. Ubah style
title.style.color = "red";
title.style.fontSize = "24px";

// 3. Buat element baru
const newDiv = document.createElement("div");
newDiv.textContent = "Element baru!";
document.body.appendChild(newDiv);

// 4. Buat button yang mengubah warna background random saat diklik
```

---

### Day 24: Event Handling
**Materi:**
- [ ] `addEventListener()`
- [ ] Event types
- [ ] Event object

**🔨 Praktik:**
```html
<button id="myBtn">Click Me</button>
<input id="myInput" type="text">

<script>
// 1. Click event
document.getElementById("myBtn").addEventListener("click", () => {
    alert("Button diklik!");
});

// 2. Input event
document.getElementById("myInput").addEventListener("input", (e) => {
    console.log("Nilai:", e.target.value);
});

// 3. Buat counter app dengan +, -, Reset button
</script>
```

---

### Day 25: Form Handling
**Materi:**
- [ ] Mengambil nilai input
- [ ] Form submission
- [ ] Validasi

**🔨 Praktik:**
```html
<form id="myForm">
    <input id="nama" placeholder="Nama">
    <input id="email" placeholder="Email">
    <button type="submit">Submit</button>
</form>

<script>
document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    
    // Validasi
    if (!nama || !email.includes("@")) {
        alert("Data tidak valid!");
        return;
    }
    
    console.log({ nama, email });
});
</script>
```

---

### Day 26: Local Storage
**Materi:**
- [ ] `setItem()`, `getItem()`
- [ ] `JSON.stringify()`, `JSON.parse()`

**🔨 Praktik:**
```javascript
// 1. Simpan string
localStorage.setItem("nama", "Budi");
console.log(localStorage.getItem("nama"));

// 2. Simpan object
const user = { nama: "Budi", umur: 25 };
localStorage.setItem("user", JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.nama);

// 3. Buat notes app sederhana yang menyimpan catatan ke localStorage
```

---

### Day 27: Fetch API
**Materi:**
- [ ] Apa itu API
- [ ] `fetch()` basic
- [ ] GET request

**🔨 Praktik:**
```javascript
// 1. Fetch data dari API publik
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(user => {
            console.log(user.name);
        });
    });

// 2. Fetch dan tampilkan ke DOM
fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    .then(res => res.json())
    .then(posts => {
        posts.forEach(post => {
            const div = document.createElement("div");
            div.innerHTML = `<h3>${post.title}</h3>`;
            document.body.appendChild(div);
        });
    });
```

---

### Day 28: Async/Await
**Materi:**
- [ ] `async` function
- [ ] `await` keyword
- [ ] Cleaner async code

**🔨 Praktik:**
```javascript
// 1. Async/await basic
async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
}
getUsers();

// 2. Multiple requests
async function getData() {
    const [usersRes, postsRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    ]);
    
    const users = await usersRes.json();
    const posts = await postsRes.json();
    
    console.log(users, posts);
}
```

---

### Day 29: Error Handling
**Materi:**
- [ ] `try...catch`
- [ ] `throw` statement
- [ ] Handling fetch errors

**🔨 Praktik:**
```javascript
// 1. Try catch
async function fetchData() {
    try {
        const res = await fetch("https://invalid-url.com");
        if (!res.ok) throw new Error("HTTP Error: " + res.status);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

// 2. Validasi dengan throw
function divide(a, b) {
    if (b === 0) throw new Error("Tidak bisa bagi dengan 0");
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (e) {
    console.error(e.message);
}
```

---

### Day 30: 🏆 Final Project - Todo List with UI
**🔨 Praktik:**
Buat Todo List lengkap dengan:
- [ ] HTML/CSS UI yang menarik
- [ ] Tambah, edit, hapus todo
- [ ] Toggle complete status
- [ ] Filter (All, Active, Completed)
- [ ] Local Storage persistence
- [ ] Count todos

```html
<!-- Struktur dasar -->
<div class="todo-app">
    <h1>Todo List</h1>
    <form id="todo-form">
        <input id="todo-input" placeholder="Add todo...">
        <button type="submit">Add</button>
    </form>
    <ul id="todo-list"></ul>
</div>

<script>
// Implementasi todo app lengkap di sini
// Gunakan semua yang sudah dipelajari!
</script>
```

---

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [FreeCodeCamp](https://www.freecodecamp.org/)

---

## ✅ Progress Tracker

| Week | Topics | Status |
|------|--------|--------|
| 1 | Fundamentals | ✅ (7/7 days) |
| 2 | Control Flow & Functions | ✅ (7/7 days) |
| 3 | Arrays & Objects | 🔄 (3/7 days) |
| 4 | DOM & Async | ⬜ |

**Completed Days:**
- ✅ Day 1: Pengenalan JavaScript
- ✅ Day 2: Variables
- ✅ Day 3: Data Types
- ✅ Day 4: Operators
- ✅ Day 5: Logical Operators
- ✅ Day 6: String Methods
- ✅ Day 7: Mini Project - Biodata Generator
- ✅ Day 8: If/Else Statement
- ✅ Day 9: Switch Case
- ✅ Day 10: For Loop
- ✅ Day 11: While Loop
- ✅ Day 12: Functions Dasar
- ✅ Day 13: Function Parameters & Return
- ✅ Day 14: Mini Project - FizzBuzz
- ✅ Day 15: Array Basics
- ✅ Day 16: Array Methods I
- ✅ Day 17: Array Iteration

---

*Selamat belajar! 🎉 Konsisten adalah kunci!*
