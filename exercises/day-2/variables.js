/* =================================================================
   DAY 2: VARIABLES - PRACTICE EXERCISES
   ================================================================= */

/* INSTRUCTIONS:
   1. Baca setiap soal dengan teliti
   2. Tulis jawaban di bawah setiap soal
   3. Jalankan checker untuk melihat hasil:
      node checker.js exercises/day2-variables.js 2
*/

// ========================================
// SOAL 1: Dasar Variabel
// ========================================
// Buat 3 variabel dengan aturan berikut:
// - nama: gunakan const, isi dengan nama depan Anda
// - umur: gunakan let, isi dengan umur Anda saat ini
// - kota: gunakan const, isi dengan kota tempat tinggal Anda

// Write your answer here:
const nama = 'Imam'
let umur = 23
const kota = 'kendal'

// ========================================
// SOAL 2: Mengubah Variabel
// ========================================
// Ubah nilai variabel umur menjadi umur Anda + 1 tahun
// Example: jika umur = 23, maka ubah menjadi 24

// Write your answer here:
umur = 23+1

// ========================================
// SOAL 3: Variabel Tambahan
// ========================================
// Buat 4 variabel baru dengan ketentuan:
// - namaLengkap: string, nama lengkap Anda
// - tahunLahir: number, tahun lahir Anda
// - hobi: string, hobi favorit Anda
// - statusMenikah: boolean, true jika sudah menikah, false jika belum

// Write your answer here:
const namaLengkap = 'Imam Baharudin'
const tahunLahir = 2003
const hobi = 'baca'
let statusMenikah = false


// ========================================
// SOAL 4: Best Practice
// ========================================
// Mana yang lebih baik? Tulis jawaban dengan comment
// let alamat = "Jakarta";  // atau
// const alamat = "Jakarta";

// Jawaban:
const alamat = 'jakarta'

// ========================================
// SOAL 5: Testing
// ========================================
// Tampilkan semua variabel yang Anda buat menggunakan console.log()
// Format: "Nama: [variabel nama]"

// Write your answer here:
console.log('Nama: ' + namaLengkap);

/* ========================================
   TESTING AREA - JANGAN DIUBAH
   ======================================== */
// Untuk keperluan testing, kita export variabel-variabel penting
if (typeof module !== 'undefined') {
    module.exports = {
        nama,
        umur,
        kota,
        namaLengkap,
        tahunLahir,
        hobi,
        statusMenikah
    };
}