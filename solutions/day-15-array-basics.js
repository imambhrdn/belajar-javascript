// Day 15: Array Basics - SOLUTION
// Student: Imam Bahrudin

console.log("===== DAY 15: ARRAY BASICS - SOLUTION =====\n");

// ============================================
// TODO 1: Membuat Array
// ============================================
console.log("=== TODO 1: MEMBUAT ARRAY ===");

const buah = ["Apel", "Jeruk", "Mangga", "Pisang", "Anggur"];
console.log("Array buah:", buah);

// ============================================
// TODO 2: Akses Element Array
// ============================================
console.log("\n=== TODO 2: AKSES ELEMENT ===");

console.log("Buah pertama (index 0):", buah[0]);
console.log("Buah ketiga (index 2):", buah[2]);
console.log("Buah terakhir:", buah[buah.length - 1]);

// ============================================
// TODO 3: Property Length
// ============================================
console.log("\n=== TODO 3: PROPERTY LENGTH ===");

console.log("Jumlah buah:", buah.length);

// ============================================
// TODO 4: Membuat Array Angka
// ============================================
console.log("\n=== TODO 4: ARRAY ANGKA ===");

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array angka:");
for (let i = 0; i < angka.length; i++) {
    console.log(angka[i]);
}

// ============================================
// TODO 5: Mengubah Element Array
// ============================================
console.log("\n=== TODO 5: MENGUBAH ELEMENT ===");

console.log("Sebelum diubah:", buah);
buah[1] = "Durian";
console.log("Setelah diubah:", buah);

// ============================================
// TODO 6: Loop Array dengan for...of
// ============================================
console.log("\n=== TODO 6: FOR...OF LOOP ===");

for (const item of buah) {
    console.log("Buah:", item);
}

// ============================================
// TODO 7: Loop Array dengan forEach
// ============================================
console.log("\n=== TODO 7: FOREACH LOOP ===");

buah.forEach((item, index) => {
    console.log(`${index}. ${item}`);
});

// ============================================
// TODO 8: Array Campuran
// ============================================
console.log("\n=== TODO 8: ARRAY CAMPURAN ===");

const dataSiswa = ["Budi", 17, true, 85.5];
console.log("Data Siswa:", dataSiswa);
dataSiswa.forEach((item, index) => {
    console.log(`Index ${index}: ${item} (${typeof item})`);
});

// ============================================
// TODO 9: Mencari Index Element
// ============================================
console.log("\n=== TODO 9: INDEXOF ===");

const indexMangga = buah.indexOf("Mangga");
console.log("Index Mangga:", indexMangga);

const indexSemangka = buah.indexOf("Semangka");
console.log("Index Semangka:", indexSemangka, "(tidak ditemukan = -1)");

// ============================================
// TODO 10: Cek Element Ada di Array
// ============================================
console.log("\n=== TODO 10: INCLUDES ===");

console.log("Apakah Apel ada?", buah.includes("Apel"));
console.log("Apakah Rambutan ada?", buah.includes("Rambutan"));

// ============================================
// TODO 11: Hitung Total Array Angka
// ============================================
console.log("\n=== TODO 11: HITUNG TOTAL ===");

let total = 0;
for (let i = 0; i < angka.length; i++) {
    total += angka[i];
}
console.log("Total angka 1-10:", total);

// ============================================
// TODO 12: Cari Nilai Maksimum
// ============================================
console.log("\n=== TODO 12: NILAI MAKSIMUM ===");

let max = angka[0];
for (let i = 1; i < angka.length; i++) {
    if (angka[i] > max) {
        max = angka[i];
    }
}
console.log("Nilai maksimum:", max);

console.log("\n===== SOLUTION COMPLETE! =====");
