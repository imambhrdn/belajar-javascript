// 🏆 Mini Project: Biodata Generator
// Hari ini kita akan membuat program yang menghasilkan biodata dari data input

// Data input yang tersedia:
const namaDepan = "john";
const namaBelakang = "doe";
const tahunLahir = 1999;
const email = "  JOHN@EMAIL.COM  ";
const pekerjaan = "web developer";
const hobi = ["coding", "reading", "gaming"];
const skills = {
    programming: ["JavaScript", "Python", "Java"],
    database: ["MySQL", "MongoDB"],
    tools: ["Git", "VS Code", "Docker"]
};

console.log("🎯 MINI PROJECT: BIODATA GENERATOR");
console.log("=====================================");

// TODO 1: Proses nama lengkap
// - Gabungkan namaDepan dan namaBelakang
// - Capitalize huruf pertama setiap kata
// Expected output: "John Doe"
const namaLengkap = (namaDepan + ' ' + namaBelakang)
    .toLocaleLowerCase()
    .split(' ')
    .map( word => word.charAt(0).toUpperCase(0) + word.slice(1))
    .join()
console.log("Nama Lengkap:", namaLengkap);

// TODO 2: Hitung umur
// - Gunakan tahun saat ini (2024)
// - Kurangi dengan tahunLahir
// Expected output: 25
const umur = 2024 - 1999; // Ganti dengan kode Anda
console.log("Umur:", umur + " tahun");

// TODO 3: Bersihkan email
// - Hapus spasi di awal dan akhir
// - Ubah menjadi huruf kecil
// Expected output: "john@email.com"
const emailBersih = email.trim().toLowerCase(); // Ganti dengan kode Anda
console.log("Email:", emailBersih);

// TODO 4: Format pekerjaan
// - Capitalize huruf pertama setiap kata
// Expected output: "Web Developer"
const pekerjaanFormat = pekerjaan
    .toLowerCase()
    .split(' ')
    .map(word =>{
        if(word.length === 0) return ''
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
    
console.log("Pekerjaan:", pekerjaanFormat);

// TODO 5: Hitung total hobi
// Expected output: 3
const totalHobi = hobi.length; // Ganti dengan kode Anda
console.log("Total Hobi:", totalHobi);

// TODO 6: Tampilkan hobi dalam format kalimat
// Ubah array ["coding", "reading", "gaming"]
// menjadi "Hobi saya adalah coding, reading, dan gaming"
const hobiString = `Hobi saya adalah ${hobi.slice(0, -1).join(', ')}, dan ${hobi[hobi.length - 1]}`; // Ganti dengan kode Anda
console.log(hobiString);

// TODO 7: Hitung total semua skills
// Expected output: 8
let skillProgramming = skills.programming.length
let skillDatabases = skills.database.length
let tools = skills.tools.length
const totalSkills = skillDatabases + skillProgramming + tools; // Ganti dengan kode Anda
console.log("Total Skills:", totalSkills);

// TODO 8: Buat bio singkat
// Gabungkan semua data menjadi satu paragraf:
// "John Doe, 25 tahun, adalah seorang Web Developer.
//  Dia bisa ditemukan di john@email.com."
const bioSingkat = `${namaLengkap}, ${umur} tahun, adalah seorang ${pekerjaanFormat}. Dia bisa ditemukan di ${emailBersih}.`; // Ganti dengan kode Anda
console.log("\nBio Singkat:");
console.log(bioSingkat);

// TODO 9: Buat bio lengkap dengan semua data
const bioLengkap = `${namaLengkap}, ${umur} tahun, adalah seorang ${pekerjaanFormat}. ${hobiString}. Dia mempunyai ${totalSkills} skills.`; // Ganti dengan kode Anda
console.log("\nBio Lengkap:");
console.log(bioLengkap);

// TODO 10 (Challenge): Tampilkan skill dengan kategori
console.log("\nSkill Details:");
// Expected output:
// Programming:
//   - JavaScript
//   - Python
//   - Java
// Database:
//   - MySQL
//   - MongoDB
// Tools:
//   - Git
//   - VS Code
//   - Docker
// Tulis kode Anda di bawah ini
function displaySkill (data){
    for ( const category in data){
        const formatCategory = category.charAt(0).toUpperCase() + category.slice(1)
        console.log(`${formatCategory}`);

        data[category].forEach(skill => {
            console.log(`-${skill}`)
        });
    }
} 
displaySkill(skills)

console.log("\n=====================================");
console.log("✅ Terima kasih telah mengerjakan!");

// 🎉 CHALLENGE TAMBAHAN (Optional):
// 1. Tambahkan validasi untuk email (harus ada @ dan .)
// 2. Format hobi dengan "dan" sebelum item terakhir
// 3. Buat fungsi untuk menghitung umur dari tahun lahir
// 4. Tampilkan skill yang paling banyak (kategori)