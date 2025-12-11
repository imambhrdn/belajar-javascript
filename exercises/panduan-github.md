# 📤 Panduan Upload Progress ke GitHub

## 🔧 Setup Awal (Sekali Saja)

### 1. Install Git
Download dan install dari: https://git-scm.com/download/win

### 2. Konfigurasi Git
Buka terminal/command prompt:
```bash
git config --global user.name "Nama Kamu"
git config --global user.email "email@kamu.com"
```

### 3. Buat Repository di GitHub
1. Buka https://github.com dan login
2. Klik tombol **"+" → "New repository"**
3. Isi nama: `belajar-javascript`
4. Pilih **Public** atau **Private**
5. Klik **"Create repository"**

### 4. Hubungkan Folder Lokal ke GitHub
```bash
cd d:\belajarJS
git init
git remote add origin https://github.com/USERNAME/belajar-javascript.git
```

---

## 📅 Upload Progress Harian

### Setiap Selesai Belajar 1 Hari:

```bash
# 1. Cek file yang berubah
git status

# 2. Tambahkan semua perubahan
git add .

# 3. Commit dengan pesan
git commit -m "Day X: Topik yang dipelajari"

# 4. Push ke GitHub
git push origin main
```

---

## 📝 Contoh Commit Message per Hari

```bash
# Week 1
git commit -m "Day 1: Pengenalan JavaScript & console.log"
git commit -m "Day 2: Variables - let, const, var"
git commit -m "Day 3: Data Types"
git commit -m "Day 4: Operators"
git commit -m "Day 5: Logical Operators"
git commit -m "Day 6: String Methods"
git commit -m "Day 7: Mini Project - Biodata Generator"

# Week 2
git commit -m "Day 8: If/Else Statement"
git commit -m "Day 9: Switch Case"
git commit -m "Day 10: For Loop"
git commit -m "Day 11: While Loop"
git commit -m "Day 12: Functions Dasar"
git commit -m "Day 13: Function Parameters & Return"
git commit -m "Day 14: Mini Project - FizzBuzz"

# Week 3
git commit -m "Day 15: Array Basics"
git commit -m "Day 16: Array Methods I"
git commit -m "Day 17: Array Iteration - forEach, map"
git commit -m "Day 18: Array Methods II - filter, reduce"
git commit -m "Day 19: Object Basics"
git commit -m "Day 20: Object Methods & this"
git commit -m "Day 21: Mini Project - Todo List Console"

# Week 4
git commit -m "Day 22: DOM Selection"
git commit -m "Day 23: DOM Manipulation"
git commit -m "Day 24: Event Handling"
git commit -m "Day 25: Form Handling"
git commit -m "Day 26: Local Storage"
git commit -m "Day 27: Fetch API"
git commit -m "Day 28: Async/Await"
git commit -m "Day 29: Error Handling"
git commit -m "Day 30: Final Project - Todo List UI"
```

---

## 📁 Struktur Folder yang Disarankan

```
belajar-javascript/
├── README.md                 # Penjelasan repository
├── roadmap.md               # Roadmap 30 hari
├── week-1/
│   ├── day-01-intro/
│   │   └── script.js
│   ├── day-02-variables/
│   │   └── script.js
│   └── ...
├── week-2/
├── week-3/
└── week-4/
```

---

## 🚀 Quick Commands Cheat Sheet

| Perintah | Fungsi |
|----------|--------|
| `git status` | Cek perubahan |
| `git add .` | Tambah semua file |
| `git commit -m "pesan"` | Simpan perubahan |
| `git push origin main` | Upload ke GitHub |
| `git pull` | Download perubahan terbaru |
| `git log --oneline` | Lihat history commit |

---

## 💡 Tips

1. **Commit setiap hari** setelah selesai belajar
2. **Tulis pesan commit yang jelas** (apa yang dipelajari)
3. **Buat README.md** yang menjelaskan progress kamu
4. **Jangan lupa push** setelah commit!

---

*Happy coding! 🎉*
