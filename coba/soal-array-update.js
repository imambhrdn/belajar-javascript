// 🚀 JAVASCRIPT LIVE CODING TEST - Update and Move Data
// 📋 Deskripsi Soal
// Diberikan sebuah array `people` yang berisi daftar data orang.
// Tugas Anda adalah membuat fungsi yang dapat mengubah data berdasarkan ID
// dan memindahkannya ke posisi pertama dalam array.

// 💾 Data Awal
const people = [
    {
        id: 1,
        name: 'Andi Saputra',
        age: 28,
        gender: 'Male',
        email: 'andi.saputra@example.com',
        phone: '081234567890',
        address: 'Jl. Merdeka No. 10, Jakarta',
    },
    {
        id: 2,
        name: 'Rina Kartika',
        age: 32,
        gender: 'Female',
        email: 'rina.kartika@example.com',
        phone: '082345678901',
        address: 'Jl. Sudirman No. 22, Bandung',
    },
    {
        id: 3,
        name: 'Budi Hartono',
        age: 40,
        gender: 'Male',
        email: 'budi.hartono@example.com',
        phone: '083456789012',
        address: 'Jl. Diponegoro No. 5, Surabaya',
    },
    {
        id: 4,
        name: 'Sari Wulandari',
        age: 25,
        gender: 'Female',
        email: 'sari.wulandari@example.com',
        phone: '084567890123',
        address: 'Jl. Gajah Mada No. 17, Yogyakarta',
    },
];


const targetIndex = peopleArray.findIndex(person => person.id === targetId)

console.log(targetIndex);


// 🎯 Tulis fungsi Anda di bawah ini
// Nama fungsi: updateAndMoveToFront
// Parameter:
//   - peopleArray: array of objects
//   - targetId: id yang akan diupdate (number)
//   - newData: object berisi data yang akan diupdate

function updateAndMoveToFront(peopleArray, targetId, newData) {
    // TODO: Implementasikan fungsi Anda di sini
    // 1. Cari data berdasarkan targetId
    // 2. Update data dengan newData
    // 3. Pindahkan data yang sudah diupdate ke index pertama
    // 4. Kembalikan array yang sudah dimodifikasi

}

// 🧪 Test Case
// Contoh penggunaan:
const newDataUpdate = {
    name: 'Bagas Julianto',
    age: 40
};

console.log('=== DATA AWAL ===');
console.log(people);

// Uncomment baris di bawah untuk menguji fungsi Anda
// const updatedPeople = updateAndMoveToFront(people, 3, newDataUpdate);
// console.log('\n=== SETELAH UPDATE ===');
// console.log(updatedPeople);

// 📍 Expected Output:
// Data dengan ID 3 seharusnya:
// - Nama berubah menjadi 'Bagas Julianto'
// - Age berubah menjadi 40
// - Field lainnya (gender, email, phone, address) TETAP
// - Pindah ke index ke-0 (paling atas)

// ⚠️ Catatan Penting:
// 1. Data yang tidak ada dalam newData harus tetap dipertahankan
// 2. Fungsi harus dapat menerima perubahan untuk field apapun
// 3. Bisa mengubah hanya sebagian field, tidak harus semua
// 4. Data yang diupdate WAJIB dipindah ke index ke-0