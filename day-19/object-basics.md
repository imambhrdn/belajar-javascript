# Day 19: Object Basics

## Apa itu Object?

Object adalah struktur data yang menyimpan data dalam bentuk **key-value pairs** (pasangan kunci-nilai). Object digunakan untuk merepresentasikan entitas dengan berbagai properti.

```javascript
// Contoh object sederhana
let mobil = {
    merk: "Toyota",      // key: merk, value: "Toyota"
    model: "Avanza",     // key: model, value: "Avanza"
    tahun: 2020          // key: tahun, value: 2020
};
```

---

## 1. Membuat Object

### Object Literal (Cara Paling Umum)
```javascript
// Object kosong
let obj = {};

// Object dengan properti
let person = {
    nama: "Budi",
    umur: 25,
    kota: "Jakarta"
};
```

### Object Constructor
```javascript
let person = new Object();
person.nama = "Budi";
person.umur = 25;
```

### Object.create()
```javascript
let person = Object.create(null);
person.nama = "Budi";
```

**Best Practice:** Gunakan Object Literal `{}` karena lebih simpel dan readable.

---

## 2. Properties dan Values

### Tipe Data sebagai Value
Object bisa menyimpan berbagai tipe data:

```javascript
let user = {
    // String
    nama: "Budi Santoso",
    
    // Number
    umur: 25,
    tinggi: 175.5,
    
    // Boolean
    isActive: true,
    sudahMenikah: false,
    
    // Array
    hobi: ["Coding", "Gaming", "Membaca"],
    
    // Object (nested)
    alamat: {
        jalan: "Jl. Sudirman No. 123",
        kota: "Jakarta",
        kodePos: "12345"
    },
    
    // Null
    pekerjaan: null,
    
    // Function (method)
    spiking: function() {
        return "Halo, nama saya " + this.nama;
    }
};
```

### Aturan Penamaan Key
```javascript
let obj = {
    // Tanpa quotes - valid jika mengikuti aturan variabel
    nama: "Budi",
    umur: 25,
    isActive: true,
    
    // Dengan quotes - untuk key yang mengandung spasi atau karakter khusus
    "nama lengkap": "Budi Santoso",
    "umur-user": 25,
    "123abc": "value",
    
    // Key bisa berupa angka (akan dikonversi ke string)
    1: "satu",
    2: "dua"
};
```

---

## 3. Mengakses Properties

### Dot Notation (.)
```javascript
let mobil = {
    merk: "Toyota",
    model: "Avanza",
    tahun: 2020
};

console.log(mobil.merk);    // "Toyota"
console.log(mobil.model);   // "Avanza"
console.log(mobil.tahun);   // 2020
```

**Kelebihan:** Lebih singkat dan readable.
**Kekurangan:** Tidak bisa digunakan untuk key dengan spasi atau karakter khusus.

### Bracket Notation ([])
```javascript
let mobil = {
    merk: "Toyota",
    "tahun produksi": 2020
};

console.log(mobil["merk"]);           // "Toyota"
console.log(mobil["tahun produksi"]); // 2020

// Dengan variabel
let key = "merk";
console.log(mobil[key]);              // "Toyota"
```

**Kelebihan:** Bisa mengakses key dengan spasi, karakter khusus, atau menggunakan variabel.
**Kekurangan:** Lebih panjang.

### Kapan Menggunakan Masing-masing?

| Situasi | Gunakan |
|---------|---------|
| Key normal tanpa spasi | Dot notation `obj.key` |
| Key dengan spasi/karakter khusus | Bracket notation `obj["key"]` |
| Key dari variabel | Bracket notation `obj[variable]` |
| Key dinamis (computed) | Bracket notation `obj[expression]` |

```javascript
let user = {
    nama: "Budi",
    "tanggal lahir": "1999-01-15"
};

// Dot notation
console.log(user.nama);              // "Budi"

// Bracket notation (key dengan spasi)
console.log(user["tanggal lahir"]); // "1999-01-15"

// Bracket notation dengan variabel
let prop = "nama";
console.log(user[prop]);            // "Budi"

// Dynamic key
let index = 1;
let keys = ["nama", "tanggal lahir"];
console.log(user[keys[index]]);     // "1999-01-15"
```

---

## 4. Menambah dan Mengubah Properties

### Menambah Property Baru
```javascript
let mobil = {
    merk: "Toyota"
};

// Dot notation
mobil.model = "Avanza";

// Bracket notation
mobil["tahun"] = 2020;

console.log(mobil);
// { merk: "Toyota", model: "Avanza", tahun: 2020 }
```

### Mengubah Property yang Ada
```javascript
let mobil = {
    merk: "Toyota",
    tahun: 2020
};

mobil.tahun = 2021;        // Ubah tahun
mobil["merk"] = "Honda";   // Ubah merk

console.log(mobil);
// { merk: "Honda", tahun: 2021 }
```

---

## 5. Menghapus Properties

### Operator delete
```javascript
let user = {
    nama: "Budi",
    umur: 25,
    kota: "Jakarta"
};

delete user.kota;

console.log(user);
// { nama: "Budi", umur: 25 }

console.log(user.kota);  // undefined
```

---

## 6. Mengecek Keberadaan Property

### Operator in
```javascript
let user = {
    nama: "Budi",
    umur: 25
};

console.log("nama" in user);     // true
console.log("kota" in user);     // false
console.log("toString" in user); // true (inherited dari Object)
```

### hasOwnProperty()
```javascript
let user = {
    nama: "Budi",
    umur: 25
};

console.log(user.hasOwnProperty("nama"));     // true
console.log(user.hasOwnProperty("kota"));     // false
console.log(user.hasOwnProperty("toString")); // false (bukan own property)
```

### Cek undefined
```javascript
let user = {
    nama: "Budi",
    kota: undefined  // Property ada tapi nilainya undefined
};

// Cara ini TIDAK reliable
console.log(user.kota === undefined);     // true
console.log(user.alamat === undefined);   // true (property tidak ada)

// Gunakan "in" atau hasOwnProperty untuk lebih akurat
console.log("kota" in user);    // true
console.log("alamat" in user);  // false
```

---

## 7. Looping Object

### for...in Loop
```javascript
let user = {
    nama: "Budi",
    umur: 25,
    kota: "Jakarta"
};

for (let key in user) {
    console.log(key + ": " + user[key]);
}
// Output:
// nama: Budi
// umur: 25
// kota: Jakarta
```

### Object.keys()
```javascript
let user = {
    nama: "Budi",
    umur: 25,
    kota: "Jakarta"
};

let keys = Object.keys(user);
console.log(keys);  // ["nama", "umur", "kota"]

keys.forEach(key => {
    console.log(key + ": " + user[key]);
});
```

### Object.values()
```javascript
let user = {
    nama: "Budi",
    umur: 25,
    kota: "Jakarta"
};

let values = Object.values(user);
console.log(values);  // ["Budi", 25, "Jakarta"]
```

### Object.entries()
```javascript
let user = {
    nama: "Budi",
    umur: 25,
    kota: "Jakarta"
};

let entries = Object.entries(user);
console.log(entries);
// [["nama", "Budi"], ["umur", 25], ["kota", "Jakarta"]]

// Destructuring dalam loop
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}
```

---

## 8. Nested Objects

### Mengakses Nested Object
```javascript
let user = {
    nama: "Budi",
    alamat: {
        jalan: "Jl. Sudirman",
        kota: "Jakarta",
        negara: {
            nama: "Indonesia",
            kode: "ID"
        }
    }
};

// Akses bertingkat
console.log(user.alamat.kota);           // "Jakarta"
console.log(user.alamat.negara.nama);    // "Indonesia"
console.log(user["alamat"]["kota"]);     // "Jakarta"
```

### Optional Chaining (?.)
```javascript
let user = {
    nama: "Budi"
    // alamat tidak ada
};

// Tanpa optional chaining - ERROR!
// console.log(user.alamat.kota);  // TypeError

// Dengan optional chaining - SAFE
console.log(user.alamat?.kota);      // undefined
console.log(user.alamat?.negara?.nama);  // undefined
```

---

## 9. Object Comparison

```javascript
// Object dibandingkan berdasarkan REFERENCE, bukan VALUE
let obj1 = { nama: "Budi" };
let obj2 = { nama: "Budi" };
let obj3 = obj1;

console.log(obj1 === obj2);  // false (reference berbeda)
console.log(obj1 === obj3);  // true (reference sama)

// Untuk membandingkan value, gunakan JSON.stringify
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));  // true
```

---

## 10. Object Methods (Built-in)

```javascript
let user = {
    nama: "Budi",
    umur: 25
};

// Object.keys() - array of keys
console.log(Object.keys(user));    // ["nama", "umur"]

// Object.values() - array of values
console.log(Object.values(user));  // ["Budi", 25]

// Object.entries() - array of [key, value] pairs
console.log(Object.entries(user)); // [["nama", "Budi"], ["umur", 25]]

// Object.assign() - copy/merge objects
let userCopy = Object.assign({}, user);
let merged = Object.assign({}, user, { kota: "Jakarta" });

// Spread operator (ES6) - lebih modern
let userCopy2 = { ...user };
let merged2 = { ...user, kota: "Jakarta" };

// Object.freeze() - membuat object tidak bisa diubah
Object.freeze(user);
user.nama = "Ani";  // Tidak akan berubah
console.log(user.nama);  // "Budi"

// Object.isFrozen()
console.log(Object.isFrozen(user));  // true
```

---

## Ringkasan

| Konsep | Contoh |
|--------|--------|
| Membuat object | `let obj = { key: value }` |
| Dot notation | `obj.key` |
| Bracket notation | `obj["key"]` atau `obj[variable]` |
| Tambah property | `obj.newKey = value` |
| Hapus property | `delete obj.key` |
| Cek property | `"key" in obj` atau `obj.hasOwnProperty("key")` |
| Loop keys | `for (let key in obj)` atau `Object.keys(obj)` |
| Get values | `Object.values(obj)` |
| Get entries | `Object.entries(obj)` |
| Copy object | `{ ...obj }` atau `Object.assign({}, obj)` |

---

## Tips

1. **Gunakan const untuk object** - Reference tidak berubah, tapi properties bisa diubah
2. **Gunakan dot notation** jika memungkinkan (lebih readable)
3. **Gunakan bracket notation** untuk key dinamis atau dengan karakter khusus
4. **Gunakan optional chaining (?.)** untuk nested object yang mungkin undefined
5. **Jangan compare object dengan ===** - Gunakan JSON.stringify atau deep comparison
