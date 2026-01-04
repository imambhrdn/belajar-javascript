# Day 20: Object Methods

## Materi Hari Ini
1. Method dalam Object
2. Keyword `this`
3. Nested Objects
4. Method Chaining

---

## 1. Method dalam Object

Method adalah **function yang didefinisikan di dalam object**. Method memungkinkan object untuk memiliki perilaku (behavior), bukan hanya data.

### Cara Membuat Method

```javascript
// Cara 1: Function biasa
let orang = {
    nama: "Budi",
    umur: 25,
    spikirumur: function() {
        return "Halo, nama saya " + this.nama;
    }
};

// Cara 2: Shorthand (ES6) - LEBIH DIREKOMENDASIKAN
let orang2 = {
    nama: "Ani",
    umur: 22,
    perkenalan() {
        return "Halo, nama saya " + this.nama;
    }
};

// Memanggil method
console.log(orang.perkenalan());  // "Halo, nama saya Budi"
console.log(orang2.perkenalan()); // "Halo, nama saya Ani"
```

### Contoh Object dengan Multiple Methods

```javascript
let kalkulator = {
    hasil: 0,
    
    tambah(angka) {
        this.hasil += angka;
    },
    
    kurang(angka) {
        this.hasil -= angka;
    },
    
    reset() {
        this.hasil = 0;
    },
    
    getHasil() {
        return this.hasil;
    }
};

kalkulator.tambah(10);
kalkulator.tambah(5);
kalkulator.kurang(3);
console.log(kalkulator.getHasil()); // 12
```

---

## 2. Keyword `this`

`this` adalah keyword khusus yang **merujuk ke object yang memiliki method tersebut**.

### Mengapa Perlu `this`?

```javascript
let mahasiswa = {
    nama: "Andi",
    nilai: 85,
    
    // SALAH - tidak bisa akses langsung
    cetakNilaiSalah() {
        return nama + " dapat nilai " + nilai; // Error!
    },
    
    // BENAR - gunakan this
    cetakNilaiBenar() {
        return this.nama + " dapat nilai " + this.nilai;
    }
};

console.log(mahasiswa.cetakNilaiBenar()); // "Andi dapat nilai 85"
```

### Contoh Penggunaan `this`

```javascript
let bankAccount = {
    pemilik: "John",
    saldo: 1000000,
    
    deposit(jumlah) {
        this.saldo += jumlah;
        return `Deposit berhasil. Saldo: Rp ${this.saldo}`;
    },
    
    withdraw(jumlah) {
        if (jumlah > this.saldo) {
            return "Saldo tidak cukup!";
        }
        this.saldo -= jumlah;
        return `Withdraw berhasil. Saldo: Rp ${this.saldo}`;
    },
    
    cekSaldo() {
        return `Saldo ${this.pemilik}: Rp ${this.saldo}`;
    }
};

console.log(bankAccount.cekSaldo());     // "Saldo John: Rp 1000000"
console.log(bankAccount.deposit(500000)); // "Deposit berhasil. Saldo: Rp 1500000"
console.log(bankAccount.withdraw(200000)); // "Withdraw berhasil. Saldo: Rp 1300000"
```

### Tips: `this` dalam Arrow Function

**PERHATIAN:** Arrow function TIDAK memiliki `this` sendiri!

```javascript
let obj = {
    nama: "Test",
    
    // BENAR - function biasa
    methodBenar() {
        return this.nama; // "Test"
    },
    
    // SALAH - arrow function
    methodSalah: () => {
        return this.nama; // undefined!
    }
};
```

---

## 3. Nested Objects

Nested object adalah **object di dalam object**. Berguna untuk mengelompokkan data yang berkaitan.

### Membuat Nested Object

```javascript
let perusahaan = {
    nama: "Tech Corp",
    
    // Nested object untuk alamat
    alamat: {
        jalan: "Jl. Sudirman No. 123",
        kota: "Jakarta",
        kodePos: "12345"
    },
    
    // Nested object untuk kontak
    kontak: {
        telepon: "021-1234567",
        email: "info@techcorp.com",
        website: "www.techcorp.com"
    }
};

// Mengakses nested property
console.log(perusahaan.alamat.kota);      // "Jakarta"
console.log(perusahaan.kontak.email);     // "info@techcorp.com"
```

### Method dengan Nested Object

```javascript
let user = {
    profile: {
        nama: "John",
        email: "john@email.com",
        umur: 25
    },
    settings: {
        darkMode: false,
        language: "id"
    },
    
    // Method untuk akses nested
    getNama() {
        return this.profile.nama;
    },
    
    // Method untuk update nested
    updateProfile(key, value) {
        this.profile[key] = value;
    },
    
    toggleDarkMode() {
        this.settings.darkMode = !this.settings.darkMode;
    }
};

user.updateProfile("nama", "John Doe");
console.log(user.profile.nama); // "John Doe"

user.toggleDarkMode();
console.log(user.settings.darkMode); // true
```

### Array of Objects dalam Object

```javascript
let toko = {
    nama: "Toko Elektronik",
    produk: [
        { id: 1, nama: "Laptop", harga: 10000000, stok: 5 },
        { id: 2, nama: "Mouse", harga: 150000, stok: 20 },
        { id: 3, nama: "Keyboard", harga: 300000, stok: 15 }
    ],
    
    // Cari produk by ID
    getProduk(id) {
        return this.produk.find(p => p.id === id);
    },
    
    // Hitung total nilai inventory
    getTotalNilai() {
        return this.produk.reduce((total, p) => {
            return total + (p.harga * p.stok);
        }, 0);
    }
};

console.log(toko.getProduk(1));      // { id: 1, nama: "Laptop", ... }
console.log(toko.getTotalNilai());   // 57500000
```

---

## 4. Method Chaining

Method chaining adalah teknik di mana **method mengembalikan `this`** sehingga bisa dipanggil secara berantai.

### Tanpa Method Chaining

```javascript
let builder = {
    text: "",
    append(str) { this.text += str; },
    addSpace() { this.text += " "; },
    getResult() { return this.text; }
};

// Harus panggil satu per satu
builder.append("Hello");
builder.addSpace();
builder.append("World");
console.log(builder.getResult()); // "Hello World"
```

### Dengan Method Chaining

```javascript
let builder = {
    text: "",
    
    append(str) {
        this.text += str;
        return this;  // Return this untuk chaining!
    },
    
    addSpace() {
        this.text += " ";
        return this;
    },
    
    getResult() {
        return this.text;
    }
};

// Bisa dipanggil berantai!
let hasil = builder
    .append("Hello")
    .addSpace()
    .append("World")
    .getResult();

console.log(hasil); // "Hello World"
```

### Contoh Real: Query Builder

```javascript
let queryBuilder = {
    _table: "",
    _fields: "*",
    _conditions: [],
    
    select(fields) {
        this._fields = fields;
        return this;
    },
    
    from(table) {
        this._table = table;
        return this;
    },
    
    where(condition) {
        this._conditions.push(condition);
        return this;
    },
    
    build() {
        let query = `SELECT ${this._fields} FROM ${this._table}`;
        if (this._conditions.length > 0) {
            query += ` WHERE ${this._conditions.join(" AND ")}`;
        }
        return query;
    }
};

let sql = queryBuilder
    .select("nama, email")
    .from("users")
    .where("umur > 18")
    .where("status = 'active'")
    .build();

console.log(sql);
// "SELECT nama, email FROM users WHERE umur > 18 AND status = 'active'"
```

---

## Ringkasan

| Konsep | Penjelasan |
|--------|------------|
| **Method** | Function di dalam object |
| **this** | Merujuk ke object yang memiliki method |
| **Nested Object** | Object di dalam object |
| **Method Chaining** | Return `this` untuk chain methods |

### Best Practices

1. **Gunakan shorthand method** - `method() {}` bukan `method: function() {}`
2. **Jangan pakai arrow function untuk method** - Arrow function tidak punya `this`
3. **Return `this` untuk chaining** - Jika ingin method bisa di-chain
4. **Kelompokkan data terkait** - Gunakan nested object untuk organisasi

---

## Latihan

Buka file `object-methods.js` dan kerjakan semua TODO!

```bash
# Cek jawaban
node checker.js exercises/day-20/object-methods.js 20
```

**Target:** Score 15/15 (100%)
