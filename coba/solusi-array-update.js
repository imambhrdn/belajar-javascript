// 🚀 JAVASCRIPT LIVE CODING TEST - Update and Move Data
// 📝 SOLUSI

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

// ✨ SOLUSI
function updateAndMoveToFront(peopleArray, targetId, newData) {
    // 1. Clone array untuk避免修改原数组 (deep clone)
    const result = JSON.parse(JSON.stringify(peopleArray));

    // 2. Cari index data yang akan diupdate
    const targetIndex = result.findIndex(person => person.id === targetId);

    // 3. Jika ID tidak ditemukan, return array asli
    if (targetIndex === -1) {
        console.log(`Error: ID ${targetId} tidak ditemukan!`);
        return result;
    }

    // 4. Update data dengan newData (merge)
    // Object.assign akan menggabungkan newData dengan data yang ada
    result[targetIndex] = { ...result[targetIndex], ...newData };

    // 5. Simpan data yang sudah diupdate
    const updatedData = result[targetIndex];

    // 6. Hapus data dari posisi lama
    result.splice(targetIndex, 1);

    // 7. Tambahkan data yang sudah diupdate ke index pertama
    result.unshift(updatedData);

    // 8. Kembalikan array yang sudah dimodifikasi
    return result;
}

// 🧪 Test Case
const newDataUpdate = {
    name: 'Bagas Julianto',
    age: 40
};

console.log('=== DATA AWAL ===');
console.log(people);

// Test fungsi
const updatedPeople = updateAndMoveToFront(people, 3, newDataUpdate);
console.log('\n=== SETELAH UPDATE ===');
console.log(updatedPeople);

// 🎯 Test tambahan
console.log('\n=== TEST TAMBAHAN ===');

// Test 1: Update dengan field yang berbeda
const testUpdate1 = {
    email: 'bagas.julianto@newemail.com',
    phone: '085555555555'
};
const result1 = updateAndMoveToFront(people, 2, testUpdate1);
console.log('\nTest 1 - Update email dan phone (ID 2):');
console.log('Email:', result1[0].email);
console.log('Phone:', result1[0].phone);
console.log('Name (tetap):', result1[0].name);

// Test 2: ID tidak ada
const testUpdate2 = { name: 'Test User' };
const result2 = updateAndMoveToFront(people, 99, testUpdate2);
console.log('\nTest 2 - ID tidak ada:');
console.log('Array length:', result2.length);

// Test 3: Update semua field
const testUpdate3 = {
    name: 'Julianto Bagas',
    age: 35,
    gender: 'Male',
    email: 'julianto@example.com',
    phone: '086666666666',
    address: 'Jl. Test No. 1, Jakarta'
};
const result3 = updateAndMoveToFront(people, 1, testUpdate3);
console.log('\nTest 3 - Update semua field (ID 1):');
console.log(result3[0]);

/*
📌 PENJELASAN SOLUSI:

1. **Deep Clone Array**:
   - Menggunakan `JSON.parse(JSON.stringify())` untuk membuat salinan array
   - Ini penting agar tidak mengubah array asli

2. **Find Index**:
   - Menggunakan `findIndex()` untuk mencari posisi data berdasarkan ID
   - Lebih efisien daripada loop manual

3. **Update Data**:
   - Menggunakan spread operator `{ ...result[targetIndex], ...newData }`
   - Ini akan menggabungkan data lama dengan data baru
   - Field yang ada di newData akan menimpa field lama
   - Field yang tidak ada di newData akan tetap dipertahankan

4. **Move to Front**:
   - Menggunakan `splice()` untuk menghapus data dari posisi lama
   - Menggunakan `unshift()` untuk menambahkan data ke index 0

5. **Error Handling**:
   - Memeriksa apakah ID ditemukan
   - Memberikan pesan error jika ID tidak ada

6. **Return**:
   - Mengembalikan array yang sudah dimodifikasi
   - Jika ID tidak ada, mengembalikan array asli
*/