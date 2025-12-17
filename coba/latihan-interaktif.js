// 🎓 LATIHAN INTERAKTIF: Update & Move Array
// Ikuti setiap langkah dan uncomment code secara bertahap!

console.clear();
console.log("🎯 LATIHAN: Update Daftar Tamu VIP");
console.log("=" .repeat(50));

// ===== DATA AWAL =====
const guests = [
    {id: 1, name: "Andi Saputra", age: 28, status: "Regular"},
    {id: 2, name: "Rina Kartika", age: 32, status: "Regular"},
    {id: 3, name: "Budi Hartono", age: 40, status: "Regular"},  // ← Akan jadi VIP
    {id: 4, name: "Sari Wulandari", age: 25, status: "Regular"}
];

const vipUpdate = {
    name: "Bagas Julianto",
    age: 45,
    status: "VIP"
};

console.log("📋 Data Awal:");
guests.forEach((guest, i) => {
    console.log(`   [${i}] ${guest.name} (${guest.age}) - ${guest.status}`);
});

// ===== LANGKAH 1: Cari Index Budi =====
// Uncomment dan jalankan code ini:
console.log("\n🔍 Step 1: Mencari Budi...");


const budiIndex = guests.findIndex(guest => guest.id ===  3)
console.log(`  Budi ada di index ke ${budiIndex}`);

// Pause dan lihat hasilnya. Apakah benar index 2?

// ===== LANGKAH 2: Copy Array =====
// Uncomment code ini:
console.log("\n📝 Step 2: Copy array agar aman...");

const guestListCopy = guests.slice();
console.log("   Array sudah di-copy");
console.log("   Original masih utuh:", guests.map(g => g.name));

// ===== LANGKAH 3: Update Data Budi =====
// Uncomment code ini:
console.log("\n✏️ Step 3: Update data Budi...");

guestListCopy[budiIndex] = {
...guestListCopy[budiIndex],  // Data lama
...vipUpdate                  // Data baru
};
console.log("   Data Budi sekarang:", guestListCopy[budiIndex]);
console.log("   Nama:", guestListCopy[budiIndex].name);
console.log("   Status:", guestListCopy[budiIndex].status);

// ===== LANGKAH 4: Pindahkan Budi ke Depan =====
// Uncomment code ini:
console.log("\n🏃 Step 4: Pindahkan VIP ke depan...");

// // 4a: Simpan data VIP
const vipGuest = guestListCopy[budiIndex]
console.log("   VIP Guest:", vipGuest.name);

// // 4b: Hapus dari posisi lama
guestListCopy.slice(budiIndex, 1)
console.log("   Setelah dihapus:", guestListCopy.map(g => g.name));

// // 4c: Tambah di depan
guestListCopy.unshift(vipGuest)
console.log("   Setelah dipindah:", guestListCopy.map(g => g.name));

// ===== LANGKAH 5: Tampilkan Hasil Akhir =====
// Uncomment code ini:
console.log("\n🎉 Step 5: Hasil Akhir:");
guestListCopy.forEach((guest, i) => {
console.log(`   [${i}] ${guest.name} (${guest.age}) - ${guest.status}`);
});

// ===== CHALLENGE: Buat Function =====
// Cobalah buat fungsi lengkap di bawah ini:
console.log("\n🚀 Challenge: Buat fungsi updateAndMoveToFront()");

function updateAndMoveToFront(guestList, targetId, updateData) {
    // TODO: Implementasikan semua langkah di atas!
    const guestIndex = guests.findIndex(guest => guest.id === 3)
    const daftarTamucopy = guests.slice()
    daftarTamucopy[guestIndex]={
        ...daftarTamucopy[guestIndex],
        ...vipUpdate
    }
    const vipGuest = daftarTamucopy[guestIndex]
    daftarTamucopy.slice(budiIndex, 1)
    guestListCopy.unshift(vipGuest)
}

// Test fungsi Anda:
const result = updateAndMoveToFront(guests, 3, vipUpdate);
console.log("\n✨ Result dari fungsi:");
result.forEach((guest, i) => {
     console.log(`   [${i}] ${guest.name} - ${guest.status}`);
});

// ===== BONUS TESTS =====
console.log("\n🎯 Bonus Tests (jika fungsi sudah jadi):");

// Test 1: Update Rina jadi VIP
const test1 = {
    name: "Rina Kartika S.E.",
    age: 33,
    status: "VIP"
};
// const test1Result = updateAndMoveToFront(guests, 2, test1);
// console.log("\nTest 1 - Rina jadi VIP:");
// test1Result.forEach((g,i) => console.log(`   [${i}] ${g.name} - ${g.status}`));

// Test 2: ID tidak ada
const test2 = { name: "Ghost" };
// const test2Result = updateAndMoveToFront(guests, 99, test2);
// console.log("\nTest 2 - ID tidak ada:");
// console.log("   Array length:", test2Result.length);
// console.log("   Pertama:", test2Result[0].name);

// Test 3: Update hanya age
const test3 = { age: 50 };
// const test3Result = updateAndMoveToFront(guests, 1, test3);
// console.log("\nTest 3 - Update age saja:");
// test3Result.forEach((g,i) => {
//     console.log(`   [${i}] ${g.name} (${g.age})`);
// });

console.log("\n" + "=".repeat(50));
console.log("💡 Tips:");
console.log("   - Uncomment code secara bertahap");
console.log("   - Perhatikan console.log di setiap step");
console.log("   - Pastikan paham konsep sebelum lanjut");
console.log("   - Coba debug dengan console.table()");