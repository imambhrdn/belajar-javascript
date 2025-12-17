// ========================================
// 📚 DAY 9 - SWITCH CASE
// ========================================
// Hari ini kita belajar tentang Switch Case,
// alternatif dari if/else if untuk multiple conditions

// 🔧 CONTOH 1: Nama hari dari angka
// Gunakan switch case untuk menampilkan nama hari berdasarkan angka 1-7
const hari = 7;
let namaHari;

// TODO: Buat switch case untuk menentukan nama hari
// 1 = Senin, 2 = Selasa, ..., 7 = Minggu
// Jika angka di luar 1-7, tampilkan "Hari tidak valid"

// Tulis kode mu di bawah ini:
switch (hari) {
    case 1:
        namaHari = 'Senin'
        break;
    case 2:
        namaHari = 'Selasa'
        break;
    case 3:
        namaHari = 'Rabu'
        break;
    case 4:
        namaHari = 'Kamis'
        break;
    case 5:
        namaHari = 'Jumat'
        break;
    case 6:
        namaHari = 'Sabtu'
        break;
    case 7:
        namaHari = 'Minggu'
        break;
    default:
        namaHari = 'Hari tidak valid'
        break;
}

console.log(`Angka ${hari} adalah hari: ${namaHari}`);


// 🔧 CONTOH 2: Kalkulator sederhana dengan switch
const a = 15;
const b = 3;
const operator = "*";
let hasil;

// TODO: Buat switch case untuk kalkulator
// Gunakan operator: "+", "-", "*", "/", "%"
// Jika operator tidak dikenal, tampilkan "Operator tidak valid"

// Tulis kode mu di bawah ini:
switch (operator) {
    case '+':
        hasil = a + b
        break;
    case '-':
        hasil = a - b
        break;
    case '*':
        hasil = a * b
        break;
    case '/':
        hasil = a / b
        break;
    case '%':
        hasil = a % b
        break;
    default:
        hasil ='Operator tidak valid'
        break;
}

console.log(`${a} ${operator} ${b} = ${hasil}`);


// 🔧 CONTOH 3: Grade nilai dengan switch
const nilai = 89;
let grade;

// TODO: Konversi nilai ke grade dengan switch case
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// < 60: E
// Tips: Gunakan Math.floor(nilai/10) untuk switch

// Tulis kode mu di bawah ini:
switch (Math.floor(nilai/10)) {
    case 9:
        grade = 'A'
        break;
    case 8:
        grade = 'B'
        break;
    case 7:
        grade = 'C'
        break;
    case 6:
        grade = 'D'
        break;
    default:
        grade = 'E'
        break;
}// Ganti dengan switch case mu

console.log(`Nilai ${nilai} mendapat grade: ${grade}`);


// 🔧 CONTOH 4: Menu makanan dengan switch
const menu = 2;
let makanan;
let harga;

// TODO: Buat menu restoran dengan switch case
// 1: Nasi Goreng - Rp25000
// 2: Mie Ayam - Rp20000
// 3: Soto - Rp30000
// 4: Rawon - Rp35000
// Jika menu tidak ada, tampilkan "Menu tidak tersedia"

// Tulis kode mu di bawah ini:
switch (menu) {
    case 1:
        makanan = "Nasi Goreng";
        harga = 25000;
        break;
    case 2:
        makanan = "Mie Ayam";
        harga = 20000;
        break;
    case 3:
        makanan = "Soto";
        harga = 30000;
        break;
    case 4:
        makanan = "Rawon";
        harga = 35000;
        break;

    default:
        makanan = "Menu tidak tersedia";
        break;
}

console.log(`Menu ${menu}: ${makanan} - Rp${harga}`);


// 🔧 CONTOH 5: Cek musim dengan switch
const bulan = 4;
let musim;

// TODO: Cek musim berdasarkan bulan (untuk belahan bumi utara)
// Desember, Januari, Februari: "Musim Dingin"
// Maret, April, Mei: "Musim Semi"
// Juni, Juli, Agustus: "Musim Panas"
// September, Oktober, November: "Musim Gugur"

// Tulis kode mu di bawah ini:
switch (bulan) {
    case 12:
    case 1:
    case 2:
        musim = 'Musim Dingin'
        break;
    case 3:
    case 4:
    case 5:
        musim = 'Musim Semi'
        break;
    case 6:
    case 7:
    case 8:
        musim = 'Musim Panas'
        break;
    case 9:
    case 10:
    case 11:
        musim = 'Musim Gugur'
        break;
    default:
        break;
}
// Ganti dengan switch case mu

console.log(`Bulan ${bulan} adalah ${musim}`);


// 🔧 CONTOH 6: Traffic light simulator
const warna = "hijau";
let aksi;

// TODO: Buat simulator traffic light
// "merah": "Berhenti!"
// "kuning": "Siap-siap!"
// "hijau": "Jalan!"
// Default: "Lampu rusak!"

// Tulis kode mu di bawah ini:
switch (warna) {
    case 'hijau':
        aksi = "Jalan!";
        break;
    case 'kuning':
        aksi = "Siap-siap!";
        break;
    case 'merah':
        aksi = "Berhenti!";
        break;
    default:
        break;
}

console.log(`Lampu ${warna}: ${aksi}`);


// 🔧 CHALLENGE: Switch tanpa break (fall-through)
const huruf = "a";
let jenisHuruf;

// TODO: Kelompokkan huruf vokal (a, e, i, o, u) dengan fall-through
// Jika vokal: "Vokal"
// Jika konsonan: "Konsonan"

// Tulis kode mu di bawah ini:
switch (huruf) {
    case 'a':
    case 'i':
    case 'u':
    case 'e':
    case 'o':
        jenisHuruf = 'Vokal'
        break;
    default:
        jenisHuruf = 'Konsonan'
        break;
}

console.log(`Huruf "${huruf}" adalah huruf ${jenisHuruf}`);


// 🏆 MINI CHALLENGE: ATM Simulator
let saldo = 1000000;
let transaksi = "tarik";
let jumlah = 500000;

// TODO: Buat simulasi ATM sederhana
// transaksi bisa: "tarik", "transfer", "cek", "isi"
// - tarik: cek jika jumlah <= saldo, lalu kurangi
// - transfer: cek jika jumlah <= saldo, lalu kurangi
// - cek: tampilkan saldo
// - isi: tambahkan saldo
// Tampilkan pesan untuk setiap transaksi

// Tulis kode mu di bawah ini:
switch (transaksi) {
    case 'tarik':
        if (jumlah > 0 && jumlah <= saldo) {
            saldo -= jumlah; // Kurangi saldo dan simpan perubahannya
            console.log(`✅ Penarikan berhasil!`);
            console.log(`Jumlah ditarik: Rp ${jumlah.toLocaleString('id-ID')}`);
        } else if (jumlah > saldo) {
            console.log(`❌ Gagal menarik. Saldo tidak mencukupi (Rp ${saldo.toLocaleString('id-ID')}).`);
        } else {
            console.log(`❌ Gagal menarik. Jumlah harus lebih dari nol.`);
        }
        break;

    case 'transfer':
        if (jumlah > 0 && jumlah <= saldo) {
            saldo -= jumlah; // Kurangi saldo dan simpan perubahannya
            console.log(`✅ Transfer berhasil!`);
            console.log(`Jumlah ditransfer: Rp ${jumlah.toLocaleString('id-ID')} ke rekening ${tujuanTransfer}`);
        } else if (jumlah > saldo) {
            console.log(`❌ Gagal transfer. Saldo tidak mencukupi (Rp ${saldo.toLocaleString('id-ID')}).`);
        } else {
            console.log(`❌ Gagal transfer. Jumlah harus lebih dari nol.`);
        }
        break;

    case 'isi':
        if (jumlah > 0) {
            saldo += jumlah; // Tambahkan saldo dan simpan perubahannya
            console.log(`✅ Pengisian saldo berhasil!`);
            console.log(`Jumlah ditambahkan: Rp ${jumlah.toLocaleString('id-ID')}`);
        } else {
            console.log(`❌ Gagal isi saldo. Jumlah harus lebih dari nol.`);
        }
        break;

    case 'cek':
        console.log(`ℹ️ Saldo Anda saat ini: Rp ${saldo.toLocaleString('id-ID')}`);
        // Karena ini hanya cek, tidak perlu ada operasi pengurangan/penambahan
        break;

    default:
        console.log(`⚠️ Transaksi "${transaksi}" tidak valid. Transaksi yang tersedia: tarik, transfer, cek, isi.`);
        break;
}

console.log("---");
console.log(`Saldo Akhir: Rp ${saldo.toLocaleString('id-ID')}`);

console.log("=======================================");
console.log("📝 SILAKAN COBA KODE-MU DI ATAS");
console.log("Gunakan console.log() untuk menampilkan hasil");
console.log("=======================================");