// ============================================
// Day 18: Array Methods II
// filter(), find(), reduce(), some(), every()
// ============================================

// Baca materi di array-methods-ii.md terlebih dahulu!

// ============================================
// BAGIAN 1: filter() - Menyaring Array
// ============================================

// Soal 1.1: Filter Nilai Lulus
// Filter nilai yang >= 60 (lulus)
let nilaiSiswa = [45, 78, 55, 90, 62, 38, 85, 70];

// TODO: Buat variabel 'nilaiLulus' yang berisi nilai >= 60
let nilaiLulus = nilaiSiswa.filter(function (nilai) {
    return nilai >= 60;
});

console.log("1.1 Nilai Lulus:", nilaiLulus);
// Expected: [78, 90, 62, 85, 70]


// Soal 1.2: Filter Angka Ganjil
// Filter hanya angka ganjil
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// TODO: Buat variabel 'ganjil' yang berisi angka ganjil saja
let ganjil = angka.filter((num) => {
    return num % 2 !== 0;
});

console.log("1.2 Angka Ganjil:", ganjil);
// Expected: [1, 3, 5, 7, 9]


// Soal 1.3: Filter Produk Murah
// Filter produk dengan harga <= 100000
let produk = [
    { nama: "Buku", harga: 50000 },
    { nama: "Laptop", harga: 8000000 },
    { nama: "Pensil", harga: 5000 },
    { nama: "Tas", harga: 250000 },
    { nama: "Penghapus", harga: 3000 }
];

// TODO: Buat variabel 'produkMurah' yang berisi produk dengan harga <= 100000
let produkMurah = produk.filter((prod) => {
    return prod.harga <= 100000
});

console.log("1.3 Produk Murah:", produkMurah);
// Expected: [{ nama: "Buku", harga: 50000 }, { nama: "Pensil", harga: 5000 }, { nama: "Penghapus", harga: 3000 }]


// Soal 1.4: Filter User Aktif
// Filter user yang statusnya "active"
let users = [
    { name: "Budi", status: "active" },
    { name: "Ani", status: "inactive" },
    { name: "Citra", status: "active" },
    { name: "Dodi", status: "inactive" },
    { name: "Eva", status: "active" }
];

// TODO: Buat variabel 'activeUsers' yang berisi user dengan status "active"
let activeUsers = users.filter((user) => {
    return user.status == 'active'
});

console.log("1.4 User Aktif:", activeUsers);
// Expected: [{ name: "Budi", status: "active" }, { name: "Citra", status: "active" }, { name: "Eva", status: "active" }]


// ============================================
// BAGIAN 2: find() - Mencari Satu Elemen
// ============================================

// Soal 2.1: Cari Angka Pertama > 50
let angka2 = [12, 34, 56, 78, 90];

// TODO: Cari angka pertama yang > 50
let pertamaLebihDari50 = angka2.find(num => num > 50);
console.log("2.1 Pertama > 50:", pertamaLebihDari50);
// Expected: 56


// Soal 2.2: Cari User Berdasarkan ID
let userList = [
    { id: 1, name: "Budi", email: "budi@email.com" },
    { id: 2, name: "Ani", email: "ani@email.com" },
    { id: 3, name: "Citra", email: "citra@email.com" },
    { id: 4, name: "Dodi", email: "dodi@email.com" }
];

// TODO: Cari user dengan id = 3
let userDenganId3 = userList.find(user => {
    return user.id === 3
});

console.log("2.2 User ID 3:", userDenganId3);
// Expected: { id: 3, name: "Citra", email: "citra@email.com" }


// Soal 2.3: Cari Produk Berdasarkan Nama
let inventory = [
    { nama: "Apel", stok: 50, kategori: "buah" },
    { nama: "Wortel", stok: 30, kategori: "sayur" },
    { nama: "Jeruk", stok: 25, kategori: "buah" },
    { nama: "Bayam", stok: 15, kategori: "sayur" }
];

// TODO: Cari produk dengan nama "Wortel"
let wortel = inventory.find(sayur => {
    return sayur.nama == 'Wortel'
});

console.log("2.3 Produk Wortel:", wortel);
// Expected: { nama: "Wortel", stok: 30, kategori: "sayur" }


// Soal 2.4: Cari yang Tidak Ada
// Cari user dengan id = 99 (tidak ada)

// TODO: Cari user dengan id = 99
let userTidakAda = userList.find(user => user.id == 99);

console.log("2.4 User ID 99:", userTidakAda);
// Expected: undefined


// ============================================
// BAGIAN 3: reduce() - Menggabungkan Nilai
// ============================================

// Soal 3.1: Hitung Total Angka
let angka3 = [10, 20, 30, 40, 50];

// TODO: Hitung total dari semua angka
let totalAngka = angka3.reduce((acc, num) => acc + num);

console.log("3.1 Total Angka:", totalAngka);
// Expected: 150


// Soal 3.2: Hitung Total Harga Belanja
let keranjang = [
    { nama: "Buku", harga: 25000, jumlah: 3 },
    { nama: "Pensil", harga: 5000, jumlah: 10 },
    { nama: "Penggaris", harga: 8000, jumlah: 2 }
];

// TODO: Hitung total harga (harga * jumlah untuk setiap item, lalu dijumlahkan)
let totalBelanja = keranjang.reduce((total, item) => total + (item.harga * item.jumlah), 0);

console.log("3.2 Total Belanja:", totalBelanja);
// Expected: 25000*3 + 5000*10 + 8000*2 = 75000 + 50000 + 16000 = 141000


// Soal 3.3: Cari Nilai Maximum
let nilaiUjian = [67, 89, 45, 92, 78, 55, 83];

// TODO: Cari nilai tertinggi menggunakan reduce
let nilaiMax = nilaiUjian.reduce((max, sekarang) => sekarang > max ? sekarang : max, 0);

console.log("3.3 Nilai Maximum:", nilaiMax);
// Expected: 92


// Soal 3.4: Cari Nilai Minimum
// Gunakan array nilaiUjian yang sama

// TODO: Cari nilai terendah menggunakan reduce
let nilaiMin = nilaiUjian.reduce((min, sekarang) => sekarang < min ? sekarang : min, nilaiUjian[0]);

console.log("3.4 Nilai Minimum:", nilaiMin);
// Expected: 45


// Soal 3.5: Hitung Rata-rata
let nilaiRapor = [80, 75, 90, 85, 70];

// TODO: Hitung rata-rata nilai (total / jumlah data)
let rataRata = nilaiRapor.reduce((total, nilai) => (total + nilai), 0) / nilaiRapor.length;

console.log("3.5 Rata-rata:", rataRata);
// Expected: 80


// Soal 3.6: Hitung Frekuensi Kata
let kata = ["apel", "jeruk", "apel", "mangga", "jeruk", "apel", "mangga", "mangga"];

// TODO: Hitung berapa kali setiap kata muncul
// Hint: Gunakan object sebagai accumulator, mulai dengan {}
let frekuensi = kata.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1
    return count;
}, {});

console.log("3.6 Frekuensi:", frekuensi);
// Expected: { apel: 3, jeruk: 2, mangga: 3 }


// ============================================
// BAGIAN 4: some() - Apakah Ada yang Memenuhi?
// ============================================

// Soal 4.1: Cek Apakah Ada Nilai Lulus
let nilaiKelas = [45, 50, 55, 58, 40];

// TODO: Cek apakah ada nilai >= 60 (lulus)
let adaYangLulus = nilaiKelas.some(nilaiLulus => nilaiLulus >= 60);

console.log("4.1 Ada yang lulus?", adaYangLulus);
// Expected: false


// Soal 4.2: Cek Apakah Ada Stok Habis
let produkToko = [
    { nama: "Laptop", stok: 5 },
    { nama: "Mouse", stok: 0 },
    { nama: "Keyboard", stok: 8 }
];

// TODO: Cek apakah ada produk dengan stok = 0
let adaStokHabis = produkToko.some(habis => habis.stok == 0);

console.log("4.2 Ada stok habis?", adaStokHabis);
// Expected: true


// Soal 4.3: Cek Apakah Ada User Admin
let userSystem = [
    { name: "Budi", role: "user" },
    { name: "Ani", role: "editor" },
    { name: "Citra", role: "user" }
];

// TODO: Cek apakah ada user dengan role "admin"
let adaAdmin = userSystem.some(user => user.role == 'admin');

console.log("4.3 Ada admin?", adaAdmin);
// Expected: false


// Soal 4.4: Cek Apakah Ada Input Kosong
let formInputs = ["John Doe", "john@email.com", "", "password123"];

// TODO: Cek apakah ada input yang kosong (string kosong "")
let adaInputKosong = formInputs.some(input => input == '');

console.log("4.4 Ada input kosong?", adaInputKosong);
// Expected: true


// ============================================
// BAGIAN 5: every() - Apakah Semua Memenuhi?
// ============================================

// Soal 5.1: Cek Apakah Semua Lulus
let nilaiSemester = [75, 80, 65, 70, 85];

// TODO: Cek apakah semua nilai >= 60
let semuaLulus = nilaiSemester.every(nilai => nilai >= 60);

console.log("5.1 Semua lulus?", semuaLulus);
// Expected: true


// Soal 5.2: Cek Apakah Semua Angka Positif
let dataAngka = [5, 10, -3, 8, 12];

// TODO: Cek apakah semua angka > 0 (positif)
let semuaPositif = dataAngka.every(positif => positif > 0);

console.log("5.2 Semua positif?", semuaPositif);
// Expected: false (ada -3)


// Soal 5.3: Cek Apakah Semua Produk Tersedia
let stokGudang = [
    { nama: "Buku", tersedia: true },
    { nama: "Pensil", tersedia: true },
    { nama: "Penggaris", tersedia: true }
];

// TODO: Cek apakah semua produk tersedia
let semuaTersedia = stokGudang.every(stok => stok.tersedia);

console.log("5.3 Semua tersedia?", semuaTersedia);
// Expected: true


// Soal 5.4: Cek Apakah Semua Email Valid
let emails = ["budi@email.com", "ani@test.co", "invalid-email", "citra@domain.org"];

// TODO: Cek apakah semua email mengandung "@"
let semuaEmailValid = emails.every(email => email.includes('@'));

console.log("5.4 Semua email valid?", semuaEmailValid);
// Expected: false


// ============================================
// BAGIAN 6: Kombinasi Methods (Method Chaining)
// ============================================

// Soal 6.1: Filter dan Hitung Total
let transaksi = [
    { item: "Laptop", harga: 8000000, kategori: "elektronik" },
    { item: "Baju", harga: 200000, kategori: "fashion" },
    { item: "HP", harga: 5000000, kategori: "elektronik" },
    { item: "Sepatu", harga: 500000, kategori: "fashion" },
    { item: "Headphone", harga: 1000000, kategori: "elektronik" }
];

// TODO: Filter transaksi kategori "elektronik", lalu hitung total harganya
let totalElektronik = transaksi
    .filter(produk => produk.kategori === 'elektronik')
    .reduce((total, produk) => total + produk.harga, 0);

console.log("6.1 Total Elektronik:", totalElektronik);
// Expected: 8000000 + 5000000 + 1000000 = 14000000


// Soal 6.2: Filter, Map, dan Join
let siswaKelas = [
    { nama: "Budi", nilai: 85 },
    { nama: "Ani", nilai: 55 },
    { nama: "Citra", nilai: 90 },
    { nama: "Dodi", nilai: 45 },
    { nama: "Eva", nilai: 78 }
];

// TODO: Filter siswa yang lulus (nilai >= 60), ambil namanya saja, gabungkan dengan koma
// Hint: filter() -> map() -> join(", ")
let namaLulus = siswaKelas
    .filter(nama => nama.nilai >= 60)
    .map(nama => nama.nama)
    .join(', ');

console.log("6.2 Siswa Lulus:", namaLulus);
// Expected: "Budi, Citra, Eva"


// Soal 6.3: Cek dan Hitung
let pesanan = [
    { produk: "Kopi", qty: 2, harga: 15000 },
    { produk: "Roti", qty: 3, harga: 10000 },
    { produk: "Teh", qty: 1, harga: 8000 }
];

// TODO 6.3a: Cek apakah semua pesanan qty > 0
let semuaPesananValid = pesanan.every(jumlah => jumlah.qty > 0);

// TODO 6.3b: Jika valid, hitung total harga (qty * harga), jika tidak valid return 0
let totalPesanan = semuaPesananValid ? pesanan.reduce((total, item) => total + (item.qty * item.harga), 0) : 0;

console.log("6.3 Semua Valid?", semuaPesananValid);
console.log("6.3 Total Pesanan:", totalPesanan);
// Expected: true, 68000 (2*15000 + 3*10000 + 1*8000)


// ============================================
// BAGIAN 7: Challenge - Sistem Manajemen Produk
// ============================================

let dataProduk = [
    { id: 1, nama: "Laptop", harga: 12000000, stok: 5, kategori: "elektronik", rating: 4.5 },
    { id: 2, nama: "Mouse", harga: 150000, stok: 50, kategori: "elektronik", rating: 4.2 },
    { id: 3, nama: "Buku Tulis", harga: 15000, stok: 200, kategori: "alat tulis", rating: 4.0 },
    { id: 4, nama: "Pensil", harga: 5000, stok: 0, kategori: "alat tulis", rating: 3.8 },
    { id: 5, nama: "Kemeja", harga: 250000, stok: 30, kategori: "fashion", rating: 4.3 },
    { id: 6, nama: "Celana", harga: 300000, stok: 25, kategori: "fashion", rating: 4.1 },
    { id: 7, nama: "Headphone", harga: 500000, stok: 0, kategori: "elektronik", rating: 4.7 },
    { id: 8, nama: "Tas", harga: 400000, stok: 15, kategori: "fashion", rating: 4.4 }
];

// Challenge 7.1: Cari produk dengan id = 5
let produkId5 = dataProduk.find(id => id.id == 5);

console.log("7.1 Produk ID 5:", produkId5);


// Challenge 7.2: Filter produk yang masih ada stoknya (stok > 0)
let produkTersedia = dataProduk.filter(stok => stok.stok > 0);

console.log("7.2 Produk Tersedia:", produkTersedia.length, "produk");


// Challenge 7.3: Hitung total nilai inventory (harga * stok) untuk semua produk
let nilaiInventory = dataProduk.reduce((total, item) => total + (item.stok * item.harga), 0);

console.log("7.3 Nilai Inventory:", nilaiInventory);


// Challenge 7.4: Cek apakah ada produk dengan rating >= 4.5
let adaProdukBagus = dataProduk.some(rating => rating.rating >= 4.5);

console.log("7.4 Ada rating >= 4.5?", adaProdukBagus);


// Challenge 7.5: Cek apakah semua produk punya stok
let semuaAdaStok = dataProduk.every(stok => stok.stok > 0);

console.log("7.5 Semua ada stok?", semuaAdaStok);


// Challenge 7.6: Filter produk elektronik dengan stok > 0, urutkan dari rating tertinggi
// Hint: filter() lalu sort()
let elektronikTersedia = dataProduk
    .filter(elektronik => elektronik.kategori == "elektronik" && elektronik.stok > 0)
    .sort((a, b) => b.rating - a.rating);

console.log("7.6 Elektronik Tersedia (sorted by rating):", elektronikTersedia);


// Challenge 7.7: Hitung rata-rata rating semua produk
let rataRataRating = dataProduk
    .reduce((total, item) => total + item.rating, 0) / dataProduk.length;

console.log("7.7 Rata-rata Rating:", rataRataRating);


// Challenge 7.8: Buat ringkasan per kategori
// Output: { elektronik: { jumlah: X, totalNilai: Y }, ... }
// Hint: Gunakan reduce dengan object sebagai accumulator
let ringkasanKategori = dataProduk.reduce((acc, item) => {
    let kat = item.kategori

    if (!acc[kat]) {
        acc[kat] = { jumlah: 0, totalNilai: 0 }
    }
    acc[kat].jumlah += 1
    acc[kat].totalNilai += (item.harga * item.stok);

    return acc
}, {});

console.log("7.8 Ringkasan Kategori:", ringkasanKategori);


// ============================================
// BONUS: findIndex() dan includes()
// ============================================

// Bonus 1: findIndex() - Cari INDEX elemen
// findIndex() sama seperti find(), tapi return INDEX bukan elemennya
let buah = ["Apel", "Jeruk", "Mangga", "Durian"];

// TODO: Cari index dari "Mangga"
let indexMangga = buah.indexOf('Mangga');

console.log("Bonus 1 - Index Mangga:", indexMangga);
// Expected: 2


// Bonus 2: includes() - Cek apakah elemen ada
// includes() return true/false apakah elemen ada di array

// TODO: Cek apakah "Jeruk" ada di array buah
let adaJeruk = buah.includes('Jeruk');

console.log("Bonus 2 - Ada Jeruk?", adaJeruk);
// Expected: true


// ============================================
console.log("\n=== SELESAI ===");
console.log("Pastikan semua output sesuai dengan Expected!");
