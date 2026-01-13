// Day 20: Object Methods
// Student: Imam Bahrudin
// Status: [ ] Belum dimulai [ ] Sedang dikerjakan [ ] Selesai

// ============================================
// MATERI HARI INI:
// 1. Method dalam object (function di dalam object)
// 2. Keyword 'this' (merujuk ke object saat ini)
// 3. Nested objects (object di dalam object)
// ============================================

// ============================================
// BAGIAN 1: Method dalam Object
// Method adalah function yang ada di dalam object
// ============================================

// TODO 1.1: Buat object 'orang' dengan:
// - property: nama = "Budi", umur = 25
// - method: spikirumur() yang return "Nama saya Budi, umur 25 tahun"
// Gunakan this.nama dan this.umur
let orang = {
    "nama": "Budi",
    "umur": 25,
    perkenalan() {
        return 'Nama Saya ' + this.nama + ', umur ' + this.umur
    }
};
console.log(orang.perkenalan()); // Output: "Nama saya Budi, umur 25 tahun"

// TODO 1.2: Buat object 'kalkulator' dengan:
// - property: angka1 = 10, angka2 = 5
// - method: tambah() return hasil penjumlahan
// - method: kurang() return hasil pengurangan
// - method: kali() return hasil perkalian
// - method: bagi() return hasil pembagian
let kalkulator = {
    'angka1': 10,
    'angka2': 5,
    tambah() {
        return this.angka1 + this.angka2
    },
    kurang() {
        return this.angka1 - this.angka2
    },
    kali() {
        return this.angka1 * this.angka2
    },
    bagi() {
        return this.angka1 / this.angka2
    }
};
console.log(kalkulator.tambah()); // 15
console.log(kalkulator.kurang()); // 5
console.log(kalkulator.kali());   // 50
console.log(kalkulator.bagi());   // 2

// TODO 1.3: Buat object 'counter' dengan:
// - property: nilai = 0
// - method: tambah() untuk menambah nilai 1
// - method: kurang() untuk mengurangi nilai 1
// - method: reset() untuk reset nilai ke 0
// - method: getNilai() return nilai saat ini
let counter = {
    'nilai': 0,
    tambah() {
        return this.nilai += 1
    },
    kurang() {
        return this.nilai -= 1
    },
    reset() {
        return this.nilai = 0
    },
    getNilai() {
        return this.nilai
    },
};
counter.tambah();
counter.tambah();
console.log(counter.getNilai()); // 2
counter.kurang();
console.log(counter.getNilai()); // 1
counter.reset();
console.log(counter.getNilai()); // 0

// ============================================
// BAGIAN 2: Keyword 'this'
// 'this' merujuk ke object yang memiliki method
// ============================================

// TODO 2.1: Buat object 'mahasiswa' dengan:
// - property: nama, nim, jurusan, ipk
// - method: info() return string info lengkap
// - method: status() return "Lulus" jika ipk >= 3.0, else "Belum Lulus"
let mahasiswa = {
    nama: "Ani",
    nim: "123456",
    jurusan: "Informatika",
    ipk: 3.5,
    // Tambahkan method info() dan status()
    info() {
        return this.nama + ' (' + this.nim + ') - ' + this.jurusan + ', ' + 'IPK: ' + this.ipk
    },

    status() {
        return this.ipk >= 3.0 ? "Lulus" : "tidak lulus"
    }

};
console.log(mahasiswa.info()); // "Ani (123456) - Informatika, IPK: 3.5"
console.log(mahasiswa.status()); // "Lulus"

// TODO 2.2: Buat object 'bankAccount' dengan:
// - property: owner = "John", balance = 1000000
// - method: deposit(amount) untuk menambah saldo
// - method: withdraw(amount) untuk mengambil saldo (cek saldo cukup)
// - method: getBalance() return saldo dengan format "Rp X"
// - method: transfer(amount, targetAccount) untuk transfer ke akun lain
let bankAccount = {
    // Tulis kode di sini
    owner: 'John',
    balance: 1000000,
    deposit(amount) {
        this.balance += amount
    },
    withdraw(amount) {
        this.balance >= amount ? this.balance -= amount : 'Saldo Tidak Cukup'
    },
    getBalance() {
        return 'Rp ' + this.balance;
    },
    transfer(amount, targetAccount) {
        this.balance >= amount ? (this.balance -= amount, targetAccount.balance += amount) : console.log('Saldo Tidak Cukup untuk transfer')
    }
};
console.log(bankAccount.getBalance()); // "Rp 1000000"
bankAccount.deposit(500000);
console.log(bankAccount.getBalance()); // "Rp 1500000"
bankAccount.withdraw(200000);
console.log(bankAccount.getBalance()); // "Rp 1300000"

// TODO 2.3: Buat object 'game' dengan:
// - property: playerName, health = 100, score = 0, level = 1
// - method: takeDamage(amount) kurangi health
// - method: heal(amount) tambah health (max 100)
// - method: addScore(points) tambah score
// - method: levelUp() naikkan level jika score >= level * 100
// - method: getStatus() return object {health, score, level}
let game = {
    playerName: "Player1",
    health: 100,
    score: 0,
    level: 1,
    // Tambahkan methods
    takeDamage(amount) {
        this.health -= amount
    },
    heal(amount) {
        this.health = Math.min(this.health + amount, 100)
    },
    addScore(points) {
        this.score += points
    },
    levelUp() {
        if (this.score >= 100 * 100) {
            this.level += 1
        }
    },
    getStatus() {
        return this.level + this
    }
};

// ============================================
// BAGIAN 3: Nested Objects
// Object yang berisi object lain
// ============================================

// TODO 3.1: Buat object 'perusahaan' dengan struktur:
// - nama: "Tech Corp"
// - alamat: { jalan, kota, kodePos }
// - kontak: { telepon, email, website }
// - method: getAlamatLengkap() return alamat lengkap
// - method: getKontak() return semua info kontak
let perusahaan = {
    // Tulis kode di sini
    nama: 'Tech Corp',
    alamat: { jalan: 'Jl. Sudirman No. 1', kota: 'Jakarta', kodePos: '12345' },
    kontak: { telepon: '021-12345678', email: 'info@techcorp.com', website: 'www.techcorp.com' },
    getAlamatLengkap() {
        return `${this.alamat.jalan}, ${this.alamat.kota}, ${this.alamat.kodePos}`;
    },
    getKontak() {
        return `${this.kontak.telepon}, ${this.kontak.email}, ${this.kontak.website}`;
    }
};
console.log(perusahaan.getAlamatLengkap());
console.log(perusahaan.getKontak());

// TODO 3.2: Buat object 'user' dengan struktur:
// - profile: { nama, email, umur }
// - settings: { darkMode, notifications, language }
// - method: updateProfile(key, value) update property di profile
// - method: toggleDarkMode() toggle darkMode true/false
// - method: setLanguage(lang) ubah language
let user = {
    // Tulis kode di sini
    profile: { nama: 'Imam', email: 'imam@email.com', umur: 23 },
    settings: { darkmode: true, notification: true, language: '' },
    updateProfile(key, value) {
        this.profile[key] = value;
    },
    toggleDarkMode() {
        this.settings.darkMode = !this.settings.darkMode;
    },
    setLanguage(lang) {
        this.settings.language = lang;
    }

};
user.updateProfile("nama", "John Doe");
user.toggleDarkMode();
user.setLanguage("id");

// TODO 3.3: Buat object 'toko' dengan:
// - nama: "Toko Elektronik"
// - produk: array of object [{id, nama, harga, stok}]
// - method: getProduk(id) cari produk by id
// - method: tambahStok(id, jumlah) tambah stok produk
// - method: kurangiStok(id, jumlah) kurangi stok (cek ketersediaan)
// - method: getTotalNilai() hitung total nilai inventory (harga * stok)
let toko = {
    nama: "Toko Elektronik",
    produk: [
        { id: 1, nama: "Laptop", harga: 10000000, stok: 5 },
        { id: 2, nama: "Mouse", harga: 150000, stok: 20 },
        { id: 3, nama: "Keyboard", harga: 300000, stok: 15 }
    ],
    // Tambahkan methods
    getProduk(id) {
        return this.produk.find(p => p.id === id)
    },
    tambahStok(id, jumlah) {
        const produk = this.getProduk(id)
        if (produk) {
            produk.stok += jumlah;
        }
    },

    kurangiStok(id, jumlah) {
        const produk = this.getProduk(id)
        if (produk && produk.stok >= jumlah) {
            produk.stok -= jumlah;
            return true;
        }
        return false
    },

    getTotalNilai() {
        return this.produk.reduce((total, p) => total + (p.harga * p.stok), 0);
    }
};
console.log(toko.getProduk(1)); // { id: 1, nama: "Laptop", ... }
toko.tambahStok(1, 3);
console.log(toko.getProduk(1).stok); // 8
console.log(toko.getTotalNilai());

// ============================================
// BAGIAN 4: Method Chaining
// Method yang return 'this' bisa di-chain
// ============================================

// TODO 4.1: Buat object 'stringBuilder' dengan:
// - property: result = ""
// - method: append(str) tambah string, return this
// - method: space() tambah spasi, return this
// - method: newLine() tambah newline, return this
// - method: clear() reset result, return this
// - method: build() return hasil akhir
let stringBuilder = {
    result: '',

    append(str) {
        this.result += str;
        return this;
    },

    space() {
        this.result += ' ';
        return this;
    },

    newLine() {
        this.result += '\n';
        return this;
    },

    clear() {
        this.result = '';
        return this;
    },
    build() {
        return this.result;
    }
};
let hasil = stringBuilder
    .append("Hello")
    .space()
    .append("World")
    .newLine()
    .append("How are you?")
    .build();
console.log(hasil);

// TODO 4.2: Buat object 'queryBuilder' dengan:
// - property: table = "", conditions = [], fields = "*"
// - method: select(fields) set fields, return this
// - method: from(table) set table, return this
// - method: where(condition) tambah condition, return this
// - method: build() return query string "SELECT fields FROM table WHERE conditions"
let queryBuilder = {
    // Tulis kode di sini
};
// let query = queryBuilder
//     .select("nama, email")
//     .from("users")
//     .where("umur > 18")
//     .where("status = 'active'")
//     .build();
// console.log(query); // "SELECT nama, email FROM users WHERE umur > 18 AND status = 'active'"

// ============================================
// BAGIAN 5: Challenge - Mini Project
// ============================================

// TODO 5.1: Buat object 'todoApp' dengan:
// - property: todos = [] (array of {id, text, done, createdAt})
// - property: nextId = 1
// - method: add(text) tambah todo baru
// - method: complete(id) tandai todo selesai
// - method: remove(id) hapus todo
// - method: edit(id, newText) edit text todo
// - method: getAll() return semua todos
// - method: getActive() return todos yang belum done
// - method: getCompleted() return todos yang sudah done
// - method: clearCompleted() hapus semua yang sudah done
// - method: stats() return {total, active, completed}
let todoApp = {
    todos: [],
    nextId: 1,
    // Tambahkan semua methods
};

// Test todoApp:
// todoApp.add("Belajar JavaScript");
// todoApp.add("Buat portfolio");
// todoApp.add("Apply kerja");
// console.log(todoApp.getAll());
// todoApp.complete(1);
// console.log(todoApp.getActive());
// console.log(todoApp.getCompleted());
// console.log(todoApp.stats());

// TODO 5.2: Buat object 'inventory' dengan:
// - property: items = [] (array of {id, name, category, price, quantity})
// - method: addItem(name, category, price, quantity)
// - method: removeItem(id)
// - method: updateQuantity(id, quantity)
// - method: getByCategory(category)
// - method: getLowStock(threshold) return items dengan quantity < threshold
// - method: getTotalValue() return total nilai inventory
// - method: getReport() return ringkasan per kategori
let inventory = {
    items: [],
    nextId: 1,
    // Tambahkan methods
};

// ============================================
// TESTING SECTION (Uncomment untuk test)
// ============================================

// Test Bagian 1
// console.log("=== Test Bagian 1: Method dalam Object ===");
// console.log(orang.perkenalan());
// console.log(kalkulator.tambah(), kalkulator.kurang(), kalkulator.kali(), kalkulator.bagi());
// counter.tambah(); counter.tambah();
// console.log(counter.getNilai());

// Test Bagian 2
// console.log("\n=== Test Bagian 2: Keyword this ===");
// console.log(mahasiswa.info());
// console.log(mahasiswa.status());
// console.log(bankAccount.getBalance());

// Test Bagian 3
// console.log("\n=== Test Bagian 3: Nested Objects ===");
// console.log(perusahaan.getAlamatLengkap());
// console.log(toko.getTotalNilai());

// Test Bagian 4
// console.log("\n=== Test Bagian 4: Method Chaining ===");
// console.log(stringBuilder.append("Test").space().append("Chaining").build());

// Test Bagian 5
// console.log("\n=== Test Bagian 5: Challenge ===");
// todoApp.add("Task 1");
// console.log(todoApp.stats());
