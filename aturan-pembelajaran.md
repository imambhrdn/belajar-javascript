# 📋 Aturan Sistem Pembelajaran JavaScript 30 Hari

## 🤖 Role AI Assistant (Claude)

### 1. Melacak Progress
- **Cek terbaru**: Setiap kali diminta membuat soal, cek progress terakhir di `roadmap-30-hari-javascript.md`
- **Identifikasi hari**: Lihat hari mana yang sudah selesai (ditandai dengan ✅)
- **Buat soal hari berikutnya**: Buat soal untuk hari yang belum selesai

### 2. Format Soal yang Harus Dibuat

Untuk setiap hari, buat:
- **File latihan**: `exercises/day-[nomor]/[topik].js`
  - Berisi template soal dengan komentar TODO
  - Berisi test case yang bisa dijalankan
- **File jawaban**: `solutions/day-[nomor]-[topik].js`
  - Berisi solusi lengkap dengan penjelasan

### 3. Template Soal

```javascript
// Day X: [Nama Topik]
// Student: [Nama Student]
// Status: [ ] Belum dimulai [ ] Sedang dikerjakan [ ] Selesai

// ============================================
// TODO 1: [Deskripsi tugas]
// ============================================
// Tulis kode kamu di bawah ini:

// ============================================
// TODO 2: [Deskripsi tugas]
// ============================================
// Tulis kode kamu di bawah ini:

// ============================================
// TESTING SECTION (Jangan diubah!)
// ============================================
// Test cases akan dijalankan oleh checker
```

### 4. Update Progress di Roadmap

Setiap kali student selesai:
- ✅ Checklist hari yang sudah selesai
- 📝 Update "Completed Days" list
- 🔄 Update "Week Status" progress
- 📈 Update percentage jika ada

## 👨‍🎓 Role Student

### 1. Mengerjakan Soal
- Buka file latihan di `exercises/day-[nomor]/[topik].js`
- Kerjakan semua TODO yang ada
- Test manual dengan `node file-name.js`

### 2. Validasi Jawaban
- Jalankan checker: `node checker.js exercises/day-[nomor]/[topik].js [nomor-hari]`
- Lihat hasil: ✅ PASSED atau ❌ FAILED
- Perbaiki jika ada yang FAILED

### 3. Konfirmasi Selesai
- Setelah semua PASSED, beritahu AI: "Saya sudah selesai Day X"
- AI akan update progress dan buatkan soal hari berikutnya

## 🔄 Alur Kerja

```
1. Student: "Buatkan soal untuk hari selanjutnya"
   ↓
2. AI: Cek progress terakhir
   ↓
3. AI: Buat file latihan + jawaban untuk hari berikutnya
   ↓
4. Student: Kerjakan soal
   ↓
5. Student: Jalankan checker
   ↓
6. Student: "Saya sudah selesai" (jika semua PASSED)
   ↓
7. AI: Update progress di roadmap
   ↓
8. Kembali ke langkah 1
```

## 📝 Contoh Implementasi

### AI membuat soal:
```
> "OK, saya lihat kamu sudah selesai Day 5.
> Saya akan buatkan soal untuk Day 6: String Methods"
```

Maka AI akan:
1. Membuat `exercises/day-6/string-methods.js`
2. Membuat `solutions/day-6-string-methods.js`
3. Tidak update roadmap (belum ada tanda ✅)

### Student selesai:
```
> "Saya sudah selesai Day 6, checker menunjukkan semua PASSED"
```

Maka AI akan:
1. Update `roadmap-30-hari-javascript.md`
2. Tandai Day 6 dengan ✅
3. Update progress percentage
4. Siap membuat Day 7 jika diminta

## ⚠️ Penting!

### AI harus ingat:
- Jangan update progress SEBELUM student konfirmasi selesai
- Selalu cek progress terakhir sebelum membuat soal baru
- Buat soal yang sesuai dengan kurikulum di roadmap
- Berikan test case yang jelas dan bisa di-check

### Student harus ingat:
- Jalankan checker untuk validasi
- Beri tahu AI jika sudah selesai dengan jelas
- Jangan lanjut ke hari berikutnya sebelum yang sekarang PASSED semua

## 📊 Tracking Format

Di roadmap akan ada format seperti ini:
```markdown
### Day X: [Topik]
**Materi:**
- [x] Sub-materi 1
- [x] Sub-materi 2
- [x] Sub-materi 3

**🔨 Praktik:**
// Code examples dan latihan

**📝 Status:** ✅ Selesai pada [tanggal]
```

---

**Dengan aturan ini, pembelajaran akan terstruktur dan progress bisa dilacak dengan baik! 🎯**