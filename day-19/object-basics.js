// ============================================
// Day 19: Object Basics
// Object literal, properties, dot & bracket notation
// ============================================

const { use } = require("react");

// Baca materi di object-basics.md terlebih dahulu!

// ============================================
// BAGIAN 1: Membuat Object
// ============================================

// Soal 1.1: Buat Object Sederhana
// Buat object 'mobil' dengan properti: merk, model, tahun

// TODO: Buat object mobil dengan properti merk, model, tahun
let mobil = {
    merek: 'Toyota',
    model: 'Avanza',
    tahun: 2020
};

console.log("1.1 Object Mobil:", mobil);
// Expected: { merk: "Toyota", model: "Avanza", tahun: 2020 }


// Soal 1.2: Buat Object dengan Berbagai Tipe Data
// Buat object 'siswa' dengan:
// - nama (string)
// - umur (number)
// - aktif (boolean)
// - hobi (array dengan 3 item)

// TODO: Buat object siswa dengan nama, umur, aktif, hobi
let siswa = {
    nama: 'Budi',
    umur: 17,
    aktif: true,
    hobi: ['Membaca', 'Coding', 'Gaming']
};

console.log("1.2 Object Siswa:", siswa);
// Expected: { nama: "Budi", umur: 17, aktif: true, hobi: ["Membaca", "Coding", "Gaming"] }


// Soal 1.3: Buat Object Kosong lalu Tambah Properti
// Buat object kosong 'buku', lalu tambahkan: judul, penulis, halaman

// TODO: Buat object kosong
let buku = {};

// TODO: Tambahkan properti judul, penulis, halaman menggunakan dot notation

buku.judul = 'Javascript Dasar'
buku.penulis = 'Jhon Doe'
buku.halaman = 350

console.log("1.3 Object Buku:", buku);
// Expected: { judul: "JavaScript Dasar", penulis: "John Doe", halaman: 350 }


// ============================================
// BAGIAN 2: Mengakses Properties (Dot Notation)
// ============================================

let smartphone = {
    merk: "Samsung",
    model: "Galaxy S21",
    harga: 12000000,
    spesifikasi: {
        ram: "8GB",
        storage: "128GB",
        layar: "6.2 inch"
    }
};

// Soal 2.1: Akses Property dengan Dot Notation
// TODO: Ambil nilai merk dari smartphone menggunakan dot notation
let merkHP = smartphone.merk; // ganti undefined dengan smartphone.merk
console.log("2.1 Merk HP:", merkHP);
// Expected: "Samsung"


// Soal 2.2: Akses Property Number
// TODO: Ambil nilai harga dari smartphone
let hargaHP = smartphone.harga; // ganti undefined dengan smartphone.harga

console.log("2.2 Harga HP:", hargaHP);
// Expected: 12000000


// Soal 2.3: Akses Nested Object
// TODO: Ambil nilai ram dari spesifikasi smartphone
let ramHP = smartphone.spesifikasi.ram; // ganti undefined dengan smartphone.spesifikasi.ram

console.log("2.3 RAM HP:", ramHP);
// Expected: "8GB"


// Soal 2.4: Akses Nested Object (Deep)
// TODO: Ambil nilai storage dari spesifikasi smartphone
let storageHP = smartphone.spesifikasi.storage; // ganti undefined dengan smartphone.spesifikasi.storage

console.log("2.4 Storage HP:", storageHP);
// Expected: "128GB"


// ============================================
// BAGIAN 3: Mengakses Properties (Bracket Notation)
// ============================================

let produk = {
    "nama produk": "Laptop Gaming",
    "harga jual": 15000000,
    "stok tersedia": 25,
    kategori: "Elektronik"
};

// Soal 3.1: Akses Property dengan Spasi
// TODO: Ambil nilai "nama produk" menggunakan bracket notation
let namaProduk = produk['nama produk']; // ganti dengan produk["nama produk"]

console.log("3.1 Nama Produk:", namaProduk);
// Expected: "Laptop Gaming"


// Soal 3.2: Akses Property dengan Variabel
let keyHarga = produk["harga jual"];

// TODO: Ambil nilai harga menggunakan variabel keyHarga
let hargaProduk = keyHarga; // ganti dengan produk[keyHarga]

console.log("3.2 Harga Produk:", hargaProduk);
// Expected: 15000000


// Soal 3.3: Akses Dinamis dengan Loop
let user = {
    nama: "Ani",
    email: "ani@email.com",
    kota: "Bandung"
};

// TODO: Loop dan tampilkan semua key-value dari object user
// Gunakan for...in loop

console.log("3.3 Data User:");
// for (let key in user) {
//     console.log(key + ": " + user[key]);
// }

for (let key in user) {
    console.log(key + ': ' + user[key])
}

// Expected Output:
// nama: Ani
// email: ani@email.com
// kota: Bandung


// ============================================
// BAGIAN 4: Menambah dan Mengubah Properties
// ============================================

let karyawan = {
    nama: "Dodi",
    posisi: "Developer"
};

// Soal 4.1: Tambah Property Baru (Dot Notation)
// TODO: Tambahkan property 'gaji' dengan nilai 8000000
// karyawan.gaji = 8000000;
karyawan.gaji = 8000000

console.log("4.1 Karyawan + Gaji:", karyawan);
// Expected: { nama: "Dodi", posisi: "Developer", gaji: 8000000 }


// Soal 4.2: Tambah Property Baru (Bracket Notation)
// TODO: Tambahkan property 'tahun bergabung' dengan nilai 2022
// karyawan["tahun bergabung"] = 2022;
karyawan["tahun bergabung"] = 2022;

console.log("4.2 Karyawan + Tahun:", karyawan);
// Expected: { ..., "tahun bergabung": 2022 }


// Soal 4.3: Ubah Property yang Ada
// TODO: Ubah posisi menjadi "Senior Developer" dan gaji menjadi 12000000
// karyawan.posisi = "Senior Developer";
// karyawan.gaji = 12000000;
karyawan.posisi = 'Senior Developer'
console.log("4.3 Karyawan Updated:", karyawan);
// Expected: { nama: "Dodi", posisi: "Senior Developer", gaji: 12000000, "tahun bergabung": 2022 }


// ============================================
// BAGIAN 5: Menghapus Properties
// ============================================

let dataUser = {
    id: 1,
    username: "budi123",
    password: "rahasia",
    email: "budi@email.com",
    role: "admin"
};

// Soal 5.1: Hapus Property password
// TODO: Hapus property password dari dataUser
// delete dataUser.password;

delete dataUser.password

console.log("5.1 User tanpa password:", dataUser);
// Expected: { id: 1, username: "budi123", email: "budi@email.com", role: "admin" }


// Soal 5.2: Hapus Multiple Properties
// TODO: Hapus property id dan role
// delete dataUser.id;
// delete dataUser.role;

delete dataUser.id;
delete dataUser.role;

console.log("5.2 User minimal:", dataUser);
// Expected: { username: "budi123", email: "budi@email.com" }


// ============================================
// BAGIAN 6: Mengecek Keberadaan Property
// ============================================

let config = {
    theme: "dark",
    language: "id",
    notifications: true
};

// Soal 6.1: Cek dengan Operator 'in'
// TODO: Cek apakah 'theme' ada di config
let adaTheme = 'theme' in config; // ganti dengan "theme" in config

// TODO: Cek apakah 'fontSize' ada di config
let adaFontSize = 'fontSize' in config; // ganti dengan "fontSize" in config

console.log("6.1 Ada theme?", adaTheme);      // Expected: true
console.log("6.1 Ada fontSize?", adaFontSize); // Expected: false


// Soal 6.2: Cek dengan hasOwnProperty
// TODO: Cek apakah 'language' adalah own property dari config
let punyaLanguage = config.hasOwnProperty('language'); // ganti dengan config.hasOwnProperty("language")

// TODO: Cek apakah 'toString' adalah own property dari config
let punyaToString = config.hasOwnProperty('toString'); // ganti dengan config.hasOwnProperty("toString")

console.log("6.2 Punya language?", punyaLanguage);  // Expected: true
console.log("6.2 Punya toString?", punyaToString);  // Expected: false


// ============================================
// BAGIAN 7: Object Methods (Built-in)
// ============================================

let mahasiswa = {
    nama: "Rina",
    nim: "2021001",
    jurusan: "Informatika",
    ipk: 3.75
};

// Soal 7.1: Object.keys()
// TODO: Ambil semua keys dari object mahasiswa
let keysMahasiswa = Object.keys(mahasiswa); // ganti dengan Object.keys(mahasiswa)

console.log("7.1 Keys:", keysMahasiswa);
// Expected: ["nama", "nim", "jurusan", "ipk"]


// Soal 7.2: Object.values()
// TODO: Ambil semua values dari object mahasiswa
let valuesMahasiswa = Object.values(mahasiswa); // ganti dengan Object.values(mahasiswa)

console.log("7.2 Values:", valuesMahasiswa);
// Expected: ["Rina", "2021001", "Informatika", 3.75]


// Soal 7.3: Object.entries()
// TODO: Ambil semua entries (key-value pairs) dari object mahasiswa
let entriesMahasiswa = Object.entries(mahasiswa); // ganti dengan Object.entries(mahasiswa)

console.log("7.3 Entries:", entriesMahasiswa);
// Expected: [["nama", "Rina"], ["nim", "2021001"], ["jurusan", "Informatika"], ["ipk", 3.75]]


// Soal 7.4: Hitung Jumlah Properties
// TODO: Hitung berapa banyak property yang ada di object mahasiswa
let jumlahProperty = Object.keys(mahasiswa).length; // ganti dengan Object.keys(mahasiswa).length

console.log("7.4 Jumlah Property:", jumlahProperty);
// Expected: 4


// ============================================
// BAGIAN 8: Copy dan Merge Object
// ============================================

let original = {
    nama: "Produk A",
    harga: 50000
};

// Soal 8.1: Copy Object dengan Spread Operator
// TODO: Buat copy dari object original menggunakan spread operator
let copySpread = {
    ...original
}; // ganti dengan { ...original }

console.log("8.1 Copy Spread:", copySpread);
// Expected: { nama: "Produk A", harga: 50000 }


// Soal 8.2: Copy Object dengan Object.assign
// TODO: Buat copy dari object original menggunakan Object.assign
let copyAssign = Object.assign({}, original); // ganti dengan Object.assign({}, original)

console.log("8.2 Copy Assign:", copyAssign);
// Expected: { nama: "Produk A", harga: 50000 }


// Soal 8.3: Merge Objects
let defaults = {
    theme: "light",
    language: "en",
    fontSize: 14
};

let userSettings = {
    theme: "dark",
    fontSize: 16
};

// TODO: Merge defaults dan userSettings (userSettings menimpa defaults)
let mergedSettings = {
    ...defaults, ...userSettings
}; // ganti dengan { ...defaults, ...userSettings }

console.log("8.3 Merged Settings:", mergedSettings);
// Expected: { theme: "dark", language: "en", fontSize: 16 }


// ============================================
// BAGIAN 9: Nested Objects
// ============================================

let perusahaan = {
    nama: "Tech Corp",
    alamat: {
        jalan: "Jl. Sudirman No. 123",
        kota: "Jakarta",
        negara: "Indonesia"
    },
    karyawan: {
        total: 500,
        departemen: {
            engineering: 200,
            marketing: 100,
            hr: 50
        }
    }
};

// Soal 9.1: Akses Nested Property
// TODO: Ambil nama kota dari alamat perusahaan
let kotaPerusahaan = perusahaan.alamat.kota; // ganti dengan perusahaan.alamat.kota

console.log("9.1 Kota:", kotaPerusahaan);
// Expected: "Jakarta"


// Soal 9.2: Akses Deep Nested Property
// TODO: Ambil jumlah karyawan engineering
let jumlahEngineering = perusahaan.karyawan.departemen.engineering; // ganti dengan perusahaan.karyawan.departemen.engineering

console.log("9.2 Jumlah Engineering:", jumlahEngineering);
// Expected: 200


// Soal 9.3: Ubah Nested Property
// TODO: Ubah jumlah karyawan engineering menjadi 250
// perusahaan.karyawan.departemen.engineering = 250;
perusahaan.karyawan.departemen.engineering = 250
console.log("9.3 Engineering Updated:", perusahaan.karyawan.departemen.engineering);
// Expected: 250


// Soal 9.4: Tambah Nested Property Baru
// TODO: Tambahkan departemen baru 'finance' dengan nilai 75
// perusahaan.karyawan.departemen.finance = 75;
perusahaan.karyawan.departemen.finance = 75
console.log("9.4 Departemen:", perusahaan.karyawan.departemen);
// Expected: { engineering: 250, marketing: 100, hr: 50, finance: 75 }


// ============================================
// BAGIAN 10: Challenge - Sistem Data Mahasiswa
// ============================================

// Challenge 10.1: Buat Object Mahasiswa Lengkap
// Buat object dengan struktur:
// - nim (string)
// - biodata: { nama, tanggalLahir, alamat }
// - akademik: { jurusan, semester, ipk }
// - mataKuliah: array of objects [{ kode, nama, sks, nilai }]

// TODO: Buat object mahasiswaLengkap
let mahasiswaLengkap = {
    nim: "",
    biodata: {
        nama: "",
        tanggalLahir: "",
        alamat: ""
    },
    akademik: {
        jurusan: "",
        semester: 0,
        ipk: 0
    },
    mataKuliah: []
};

console.log("10.1 Mahasiswa Lengkap:", mahasiswaLengkap);


// Challenge 10.2: Function untuk Menampilkan Biodata
// TODO: Buat function yang menerima object mahasiswa dan return string biodata
function tampilkanBiodata(mhs) {
    // Return format: "Nama: [nama], NIM: [nim], Jurusan: [jurusan]"
    return "Nama: [nama], NIM :[nim], Jurusan: [Jurusan]"; // ganti dengan return statement yang benar
}

console.log("10.2 Biodata:", tampilkanBiodata(mahasiswaLengkap));
// Expected: "Nama: [nama], NIM: [nim], Jurusan: [jurusan]"


// Challenge 10.3: Function untuk Menghitung Total SKS
// TODO: Buat function yang menghitung total SKS dari mataKuliah
function hitungTotalSKS(mhs) {
    // Hitung total sks dari array mataKuliah menggunakan reduce
    return mhs.mataKuliah.reduce((total, item) => total + item, 0); // ganti dengan mhs.mataKuliah.reduce(...)
}

console.log("10.3 Total SKS:", hitungTotalSKS(mahasiswaLengkap));
// Expected: total sks dari semua mata kuliah


// Challenge 10.4: Function untuk Update IPK
// TODO: Buat function yang mengupdate IPK mahasiswa
function updateIPK(mhs, ipkBaru) {
    // Update ipk di akademik
    // mhs.akademik.ipk = ipkBaru;
}

updateIPK(mahasiswaLengkap, 3.85);
console.log("10.4 IPK Updated:", mahasiswaLengkap.akademik.ipk);
// Expected: 3.85


// Challenge 10.5: Function untuk Menambah Mata Kuliah
// TODO: Buat function untuk menambah mata kuliah baru
function tambahMataKuliah(mhs, mk) {
    // Tambah mata kuliah ke array mataKuliah menggunakan push
    // mhs.mataKuliah.push(mk);
}

tambahMataKuliah(mahasiswaLengkap, { kode: "IF999", nama: "AI", sks: 3, nilai: "A" });
console.log("10.5 Mata Kuliah:", mahasiswaLengkap.mataKuliah);


// ============================================
// BONUS: Object Destructuring
// ============================================

let game = {
    title: "The Legend of Zelda",
    platform: "Nintendo Switch",
    year: 2023,
    rating: 9.5
};

// Bonus 1: Basic Destructuring
// TODO: Destructure title dan platform dari game
// Uncomment baris di bawah dan lengkapi
// let { title, platform } = game;

// console.log("Bonus 1 - Title:", title);
// console.log("Bonus 1 - Platform:", platform);


// Bonus 2: Destructuring dengan Rename
// TODO: Destructure year sebagai tahunRilis
// let { year: tahunRilis } = game;

// console.log("Bonus 2 - Tahun Rilis:", tahunRilis);


// Bonus 3: Destructuring dengan Default Value
// TODO: Destructure genre dengan default value "Action"
// let { genre = "Action" } = game;

// console.log("Bonus 3 - Genre:", genre);


// ============================================
console.log("\n=== SELESAI ===");
console.log("Jalankan: node checker.js exercises/day-19/object-basics.js 19");
