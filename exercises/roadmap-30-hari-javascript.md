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
- [ ] Aritmatika: `+ - * / % **`
- [ ] Assignment: `= += -= *= /=`
- [ ] Comparison: `== === != !== > < >= <=`

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
```

---

### Day 5: Logical Operators
**Materi:**
- [ ] AND (`&&`), OR (`||`), NOT (`!`)
- [ ] Truthy dan Falsy values
- [ ] Nullish coalescing (`??`)

**🔨 Praktik:**
```javascript
// 1. Cek kondisi dengan AND/OR
let umur = 20;
let punyaKTP = true;

console.log("Boleh vote:", umur >= 17 && punyaKTP);
console.log("Boleh masuk:", umur >= 18 || punyaKTP);

// 2. Default value dengan OR
let username = "" || "Guest";
console.log("Hello,", username);

// 3. Buat sistem cek kelayakan kredit
// - Umur minimal 21
// - Punya pekerjaan
// - Gaji minimal 5 juta
let umurUser = 25;
let punyaKerja = true;
let gaji = 7000000;
let bisaKredit = umurUser >= 21 && punyaKerja && gaji >= 5000000;
console.log("Bisa kredit:", bisaKredit);
```

---

### Day 6: String Methods
**Materi:**
- [ ] `length`, `toUpperCase()`, `toLowerCase()`
- [ ] `includes()`, `indexOf()`, `slice()`
- [ ] `split()`, `trim()`, `replace()`

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
// Capitalize kata pertama tiap word
```

---

### Day 7: 🏆 Mini Project - Biodata Generator
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

---

## 📅 Minggu 2: Control Flow & Functions

### Day 8: If/Else Statement
**Materi:**
- [ ] `if`, `else if`, `else`
- [ ] Nested conditions
- [ ] Ternary operator (`? :`)

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

// 3. Buat sistem diskon belanja
// >= 500rb = 20% diskon
// >= 200rb = 10% diskon
// < 200rb = tidak ada diskon
let totalBelanja = 350000;
// Hitung diskon dan total bayar
```

---

### Day 9: Switch Case
**Materi:**
- [ ] Syntax switch case
- [ ] `break` statement
- [ ] `default` case

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

---

### Day 10: For Loop
**Materi:**
- [ ] Basic `for` loop
- [ ] `for...of` (untuk array)
- [ ] `for...in` (untuk object)

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

---

### Day 11: While Loop
**Materi:**
- [ ] `while` loop
- [ ] `do...while` loop
- [ ] `break` dan `continue`

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

---

### Day 12: Functions Dasar
**Materi:**
- [ ] Function declaration
- [ ] Function expression
- [ ] Arrow function (`=>`)

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

---

### Day 13: Function Parameters & Return
**Materi:**
- [ ] Parameters dan arguments
- [ ] `return` statement
- [ ] Default parameters

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

---

## 📅 Minggu 3: Arrays & Objects

### Day 15: Array Basics
**Materi:**
- [ ] Membuat array
- [ ] Akses element (index)
- [ ] `length` property

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

---

### Day 16: Array Methods I
**Materi:**
- [ ] `push()`, `pop()`
- [ ] `shift()`, `unshift()`
- [ ] `splice()`, `slice()`

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
- [ ] `forEach()` - loop array
- [ ] `map()` - transformasi array

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
| 1 | Fundamentals | ⬜ |
| 2 | Control Flow & Functions | ⬜ |
| 3 | Arrays & Objects | ⬜ |
| 4 | DOM & Async | ⬜ |

---

*Selamat belajar! 🎉 Konsisten adalah kunci!*
