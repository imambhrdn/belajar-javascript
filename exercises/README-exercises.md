# 📚 JavaScript Learning Exercises

Selamat datang di latihan JavaScript interaktif! Folder ini berisi latihan harian untuk meningkatkan pemahaman JavaScript Anda.

## 📋 Cara Penggunaan

### 1. Pilih Latihan
Setiap hari memiliki file latihan tersendiri di folder `exercises/`:
- `exercises/day2-variables.js` - Variabel
- `exercises/day3-datatypes.js` - Tipe Data
- `exercises/day4-operators.js` - Operator

### 2. Kerjakan Latihan
Buka file latihan yang ingin dikerjakan:
```bash
# Contoh untuk Day 2
code exercises/day2-variables.js
```

Ikuti petunjuk dan jawab setiap soal di bagian yang sudah disediakan.

### 3. Cek Jawaban
Setelah selesai, jalankan checker untuk melihat hasil:
```bash
# Format: node checker.js <file-path> <day-number>
node checker.js exercises/day2-variables.js 2
```

## 📊 Format Output Checker

Checker akan menampilkan:
- ✅ **PASSED**: Task yang sudah benar
- ❌ **FAILED**: Task yang perlu diperbaiki
- 📊 **SCORE**: Persentase kelengkapan

Contoh output:
```
📝 Checking exercises/day2-variables.js - Day 2
==================================================

✅ PASSED:
  ✓ Membuat variabel nama
  ✓ Menggunakan let untuk umur (bisa diubah)
  ✓ Mengubah nilai umur

❌ FAILED:
  ✗ Belum membuat variabel nama lengkap
  ✗ Belum membuat variabel tahun lahir

==================================================
📊 Score: 3/5 (60.0%)
💪 Keep going! Complete the failed tasks.
```

## 🗂️ Struktur Folder

```
belajarJS/
├── exercises/           # Folder berisi file latihan
│   ├── day2-variables.js
│   ├── day3-datatypes.js
│   └── day4-operators.js
├── checker.js          # Program untuk mengecek jawaban
├── roadmap-30-hari-javascript.md  # Panduan belajar
└── README.md           # File ini
```

## 💡 Tips

1. **Baca Soal Teliti** - Pastikan Anda mengerti apa yang diminta
2. **Test Kode** - Jalankan kode Anda dengan `node <file-name>` untuk melihat output
3. **Lihat Petunjuk** - Setiap latihan memiliki contoh dan penjelasan
4. **Iteratif** - Kerjakan satu per satu, cek, lalu perbaiki jika ada yang salah

## 🎯 Target Pembelajaran

- **Day 1**: Konsep dasar JavaScript
- **Day 2**: Variabel (var, let, const)
- **Day 3**: Tipe data primitif
- **Day 4**: Operator aritmatika dan perbandingan

## ❓ Bantuan

Jika ada kesulitan:
1. Lihat kembali `roadmap-30-hari-javascript.md`
2. Cek dokumentasi online: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
3. Tanyakan pada mentor atau komunitas

---

**Selamat belajar! 🎉**