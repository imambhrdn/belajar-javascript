# 🧠 Langkah-Langkah Logis Penyelesaian

## 📋 Soal: Update and Move Data
**Mengubah data orang berdasarkan ID dan memindahkannya ke posisi pertama array**

---

## 🔍 Langkah 1: Pahami Requirement
- **Input**: Array of objects (people), targetId (number), newData (object)
- **Output**: Array yang sudah dimodifikasi
- **Syarat**:
  1. Update data sesuai ID
  2. Data yang diupdate pindah ke index 0
  3. Data yang tidak diupdate harus tetap

---

## 🎯 Langkah 2: Break Down Problem

### Sub-problem 1: Mencari Data
**🎯 Analogi**: Seperti mencari nomor rumah di jalan!

```javascript
// Array awal ( seperti deretan rumah ):
// Index: [0]      [1]      [2]      [3]
// ID:     1        2        3        4  ← Kita cari ID 3

// Cara 1: Loop manual (cara manual)
let targetIndex = -1;  // Mulai dari -1 (belum ketemu)
for (let i = 0; i < peopleArray.length; i++) {
    if (peopleArray[i].id === targetId) {
        targetIndex = i;  // Ketemu! ID 3 ada di index 2
        break;           // Stop searching
    }
}

// Cara 2: Menggunakan findIndex() (cara modern)
const targetIndex = peopleArray.findIndex(person => person.id === targetId);
// Akan return 2 (index dimana ID 3 berada)
// Jika tidak ketemu, return -1

// 🔍 Contoh visual:
peopleArray = [
    {id: 1, name: "Andi"},    // Index 0
    {id: 2, name: "Rina"},    // Index 1
    {id: 3, name: "Budi"},    // Index 2 ← Target ketemu!
    {id: 4, name: "Sari"}     // Index 3
]
// targetIndex = 2
```

### Sub-problem 2: Update Data
**🎯 Analogi**: Seperti update profil, tapi data yang tidak diubah tetap ada!

```javascript
// Data lama di index 2:
{
    id: 3,
    name: "Budi Hartono",       // ← Akan diubah
    age: 40,                    // ← Akan diubah
    gender: "Male",             // ← Tetap
    email: "budi@example.com",  // ← Tetap
    phone: "083456789012",      // ← Tetap
    address: "Jl. Diponegoro"   // ← Tetap
}

// newData yang mau diupdate:
{
    name: "Bagas Julianto",     // ← Update ini
    age: 40                     // ← Update ini
}

// Cara yang SALAH (data lama hilang!):
peopleArray[targetIndex] = newData;
// Hasilnya: {name: "Bagas Julianto", age: 40}
// ❌ Data id, gender, email, phone, address HILANG!

// Cara yang BENAR (merge dengan spread):
peopleArray[targetIndex] = {
    ...peopleArray[targetIndex],  // Data lama
    ...newData                    // Data baru (overwrite yang sama)
};

// 🔍 Visual Spread Operator:
// Step 1: Ambil semua property dari data lama
{ id: 3, name: "Budi", age: 40, gender: "Male", ... }
//      ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

// Step 2: Tambah/overwrite dengan data baru
{ ...lengkap, name: "Bagas", age: 40 }
//            ↑↑↑↑↑↑↑↑↑  name lama ditimpa "Bagas"

// Hasil akhir:
{
    id: 3,                      // Tetap
    name: "Bagas Julianto",     // ← Diubah
    age: 40,                    // ← Diubah
    gender: "Male",             // ← Tetap
    email: "budi@example.com",  // ← Tetap
    phone: "083456789012",      // ← Tetap
    address: "Jl. Diponegoro"   // ← Tetap
}
```

### Sub-problem 3: Pindahkan ke Depan
**🎯 Analogi**: Seperti memindahkan siswa dari bangku belakang ke depan!

```javascript
// Array sebelum dipindah:
// Index:   [0]      [1]      [2]      [3]
// Data:   Andi     Rina    Budi↑    Sari
//          ↓        ↓      (←target)  ↓
//          ↓        ↓      targetIndex = 2
//          ↓        ↓
//          ↓        ↓

// Step 1: Simpan dulu data yang sudah diupdate
const updatedData = peopleArray[targetIndex];
// updatedData = {id: 3, name: "Bagas", ...}

// Step 2: Hapus dari posisi lama
peopleArray.splice(targetIndex, 1);
// splice(2, 1) artinya: mulai index 2, hapus 1 element
// Array sekarang: [Andi, Rina, Sari]
// Index:        [0]    [1]    [2]

// 🔍 Visual Splice:
// Sebelum: [Andi, Rina, Budi, Sari]
//          [0]    [1]    [2]    [3]
// splice(2, 1)
//                  ↑     ↑
//                  |     └─ hapus 1 element
//                  └─ mulai dari sini

// Setelah splice: [Andi, Rina, Sari]
// Index:         [0]    [1]    [2]
// Budi sudah dihapus!

// Step 3: Tambahkan di posisi pertama
peopleArray.unshift(updatedData);
// unshift() menambah di awal array

// 🔍 Visual Unshift:
// Sebelum unshift: [Andi, Rina, Sari]
// unshift(Budi)
//                ↓
//            tambah Budi di depan

// Setelah unshift: [Budi, Andi, Rina, Sari]
// Index:          [0]    [1]    [2]    [3]
// ✅ Budi sekarang di index 0!

// 🎉 Hasil akhir:
// Budi (yang sudah diupdate jadi Bagas) pindah dari index 2 ke index 0
// Array yang lain bergeser ke kanan
```

---

## 📝 Langkah 3: Implementasi

### Step-by-step Code:
```javascript
function updateAndMoveToFront(peopleArray, targetId, newData) {
    // 💾 Step 1: Copy array agar tidak mengubah original
    // Ini penting! Jangan langsung modify array asli
    const result = [...peopleArray];  // Shallow copy dengan spread

    // 🔍 Step 2: Cari index data yang mau diupdate
    // findIndex() akan return index pertama yang cocok
    const targetIndex = result.findIndex(person => person.id === targetId);

    // 🚨 Step 3: Handle jika ID tidak ditemukan
    // findIndex() return -1 jika tidak ketemu
    if (targetIndex === -1) {
        console.log("ID tidak ditemukan!");
        return result;  // Return array asli
    }

    // ✏️ Step 4: Update data dengan merge
    // Spread operator untuk combine object
    result[targetIndex] = {
        ...result[targetIndex],  // Data lama
        ...newData               // Data baru (overwrite)
    };

    // ↕️ Step 5: Pindahkan ke depan
    const updated = result[targetIndex];  // Simpan data yang sudah diupdate
    result.splice(targetIndex, 1);        // Hapus dari posisi lama
    result.unshift(updated);               // Tambah di index 0

    // ✅ Step 6: Return hasil
    return result;
}

// 🎯 Contoh real execution:
// Input:
// peopleArray = [{id:1, name:"Andi"}, {id:2, name:"Rina"}, {id:3, name:"Budi"}]
// targetId = 3
// newData = {name: "Bagas"}

// Step 1: result = [{id:1, name:"Andi"}, {id:2, name:"Rina"}, {id:3, name:"Budi"}]
// Step 2: targetIndex = 2 (karena id 3 ada di index 2)
// Step 3: targetIndex !== -1, lanjut
// Step 4: result[2] = {id:3, name:"Bagas"} (merge dengan spread)
// Step 5:
//   - updated = {id:3, name:"Bagas"}
//   - result.splice(2,1) → [{id:1, name:"Andi"}, {id:2, name:"Rina"}]
//   - result.unshift(updated) → [{id:3, name:"Bagas"}, {id:1, name:"Andi"}, {id:2, name:"Rina"}]
// Step 6: Return [{id:3, name:"Bagas"}, {id:1, name:"Andi"}, {id:2, name:"Rina"}]
```

---

## 🤔 Langkah 4: Test Logic

### Test Case 1: Update nama dan age
```javascript
Input:
- targetId: 3
- newData: { name: 'Bagas Julianto', age: 40 }

Expected:
- Data ID 3 berubah nama & age
- Data ID 3 pindah ke index 0
- Field lain tetap
```

### Test Case 2: Update email saja
```javascript
Input:
- targetId: 2
- newData: { email: 'baru@email.com' }

Expected:
- Hanya email yang berubah
- Nama, age, dll tetap
- Data ID 2 pindah ke index 0
```

### Test Case 3: ID tidak ada
```javascript
Input:
- targetId: 999
- newData: { name: 'Test' }

Expected:
- Array tidak berubah
- Tampil pesan error
```

---

## 💡 Tips & Trik

### 1. Mengapa Pakai Spread Operator?
**🎯 Analogi**: Seperti update KTP, ganti alamat tapi data lain tetap!

```javascript
// Tanpa spread (data lama hilang) ❌
result[targetIndex] = newData;
// Contoh:
// Data lama: {id:3, name:"Budi", age:40, gender:"Male", email:"..."}
// newData:   {name:"Bagas", age:45}
// Hasil:     {name:"Bagas", age:45}  ← id, gender, email HILANG!

// Dengan spread (data lama + baru) ✅
result[targetIndex] = { ...result[targetIndex], ...newData };

// 🔍 Detail Spread:
const dataLama = {id:3, name:"Budi", age:40, gender:"Male"};
const dataBaru = {name:"Bagas", age:45};

const merged = {...dataLama, ...dataBaru};
// Proses:
// 1. Ambil semua dari dataLama: {id:3, name:"Budi", age:40, gender:"Male"}
// 2. Tambahkan semua dari dataBaru: {name:"Bagas", age:45}
// 3. Yang sama akan ditimpa!
// Hasil: {id:3, name:"Bagas", age:45, gender:"Male"}

// 💡 Tips: Order matters!
const merged = {...dataBaru, ...dataLama};
// Hasil: {name:"Budi", age:40, gender:"Male", id:3}
// name "Bagas" ditimpa lagi dengan "Budi"!
```

### 2. Shallow vs Deep Copy
**🎯 Analogi**: Fotokopi vs Fotokopi dengan lampiran!

```javascript
// Shallow Copy (cukup untuk kasus ini) ✅
const result = [...peopleArray];
// Analogi: Fotokopi halaman utama saja
// Kelebihan: Cepat, simple
// Kekurangan: Jika ada nested object, masih refer ke yang sama

// Contoh Shallow Copy:
const original = [
    {id:1, name:"Andi", address: {city:"Jakarta"}}  // ← Nested!
];
const shallow = [...original];
shallow[0].name = "Budi";        // OK, tidak affect original
shallow[0].address.city = "Bandung"; // ❌ Affect original!

// Deep Copy (untuk nested object) 🔒
const result = JSON.parse(JSON.stringify(peopleArray));
// Analogi: Fotokopi semua halaman termasuk lampiran
// Kelebihan: Aman, benar-benar terpisah
// Kekurangan: Lebih lambat, tidak bisa handle functions

// Contoh Deep Copy:
const original = [
    {id:1, name:"Andi", address: {city:"Jakarta"}}
];
const deep = JSON.parse(JSON.stringify(original));
deep[0].name = "Budi";           // OK
deep[0].address.city = "Bandung"; // ✅ Tidak affect original!

// 💡 Untuk kasus ini, shallow copy cukup karena:
// - Data tidak ada nested object yang akan dimodify
// - Kita hanya modify top level properties
```

### 3. Alternative Approach
**🎯 Analogi**: Menuang minum, gunakan gelas berbeda!

```javascript
// Approach 1: Imperative (modify array)
function updateAndMoveToFront(peopleArray, targetId, newData) {
    const result = [...peopleArray];
    const index = result.findIndex(p => p.id === targetId);
    if (index === -1) return result;

    result[index] = {...result[index], ...newData};
    const updated = result[index];
    result.splice(index, 1);
    result.unshift(updated);
    return result;
}

// Approach 2: Functional (create new array)
function updateAndMoveToFront(peopleArray, targetId, newData) {
    // Step 1: Cari data target
    const target = peopleArray.find(p => p.id === targetId);
    if (!target) return peopleArray;  // Return asli jika tidak ketemu

    // Step 2: Update data
    const updated = { ...target, ...newData };

    // Step 3: Pisahkan data lain
    const others = peopleArray.filter(p => p.id !== targetId);

    // Step 4: Combine dengan target di depan
    return [updated, ...others];
}

// 🔍 Perbandingan:
// Imperative:
// - Copy array → modify → modify → return
// - Lebih memory efficient untuk array besar
// - Code lebih panjang

// Functional:
// - Find → update → filter → combine
// - Code lebih pendek dan readable
// - Buat banyak array baru (tidak efficient untuk data besar)

// 🎯 Mana yang lebih baik?
// Untuk kasus ini: Functional approach lebih clean!
// Untuk production: Imperative lebih scalable

// 💡 Hybrid approach (best of both):
function updateAndMoveToFront(peopleArray, targetId, newData) {
    const result = [...peopleArray];
    const targetIndex = result.findIndex(p => p.id === targetId);

    if (targetIndex === -1) return result;

    // Functional untuk update
    const updated = {...result[targetIndex], ...newData};

    // Functional untuk filter
    const others = result.filter((_, index) => index !== targetIndex);

    // Combine
    return [updated, ...others];
}
```

---

## 🔍 Debug Process

### Common Errors:
1. **Lupa copy array** → Array original ikut berubah
2. **Salah pakai spread** → Data lama hilang
3. **Lupa handle ID tidak ada** → Error
4. **Index salah** → Data salah kehapus

### Cara Debug:
**🎯 Analogi**: Memeriksa step-by-step seperti memasak!

```javascript
function updateAndMoveToFront(peopleArray, targetId, newData) {
    // 🔍 Debug 1: Input validation
    console.log("=== DEBUG START ===");
    console.log("1. Input array:", peopleArray);
    console.log("2. Target ID:", targetId);
    console.log("3. New data:", newData);

    const result = [...peopleArray];

    // 🔍 Debug 2: Cari index
    const targetIndex = result.findIndex(person => person.id === targetId);
    console.log("4. Target index:", targetIndex);

    if (targetIndex === -1) {
        console.log("❌ ID tidak ditemukan!");
        return result;
    }

    // 🔍 Debug 3: Data sebelum update
    console.log("5. Data sebelum update:", result[targetIndex]);

    // 🔍 Debug 4: Proses update
    const oldData = result[targetIndex];
    const updatedData = { ...oldData, ...newData };
    console.log("6. Data lama:", oldData);
    console.log("7. Data baru:", newData);
    console.log("8. Setelah merge:", updatedData);

    result[targetIndex] = updatedData;

    // 🔍 Debug 5: Proses pindah
    console.log("9. Array sebelum dipindah:", result);

    const updated = result[targetIndex];
    result.splice(targetIndex, 1);
    console.log("10. Setelah splice:", result);

    result.unshift(updated);
    console.log("11. Setelah unshift:", result);

    console.log("=== DEBUG END ===");
    return result;
}

// 🐛 Common Debug Scenarios:

// Scenario 1: Data tidak keupdate
// Problem: Spread operator salah
// Check: Apakah newData sudah benar?

// Scenario 2: Data tidak pindah ke depan
// Problem: splice/unshift salah
// Check: targetIndex sudah benar?

// Scenario 3: Data lama hilang
// Problem: Direct assignment
// Fix: Gunakan spread operator

// Scenario 4: Original array ikut berubah
// Problem: Lupa copy array
// Fix: Tambah const result = [...peopleArray];

// 💡 Quick Debug Tips:
console.table(result);  // Tampil array dalam format table
JSON.stringify(result, null, 2);  // Pretty print
result.length;  // Cek panjang array
result[0];      // Cek element pertama
```

---

## ✅ Checklist Sebelum Submit

- [ ] Fungsi menerima 3 parameter dengan benar
- [ ] Data berhasil diupdate sesuai newData
- [ ] Field yang tidak diupdate tetap ada
- [ ] Data yang diupdate pindah ke index 0
- [ ] Handle error jika ID tidak ditemukan
- [ ] Array original tidak berubah
- [ ] Return value adalah array yang sudah dimodifikasi

---

## 🎉 Key Takeaways

1. **Find & Update**: Cari → Update → Pindahkan
2. **Immutability**: Jangan langsung modify array original
3. **Spread Operator**: Cara elegant untuk merge object
4. **Error Handling**: Selalu antisipasi edge cases
5. **Test**: Uji dengan berbagai skenario