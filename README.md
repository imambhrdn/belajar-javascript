# 📚 Dokumentasi Belajar JavaScript

Folder ini berisi semua dokumentasi dan aturan untuk pembelajaran JavaScript.

## 📋 Daftar Dokumentasi

### 🗺️ **Roadmap & Progress**
- [**Roadmap 30 Hari JavaScript**](./roadmap-30-hari-javascript.md) - Panduan lengkap 30 hari pembelajaran
- [**Progress Tracker**](./roadmap-30-hari-javascript.md#-progress-tracker) - Tracking progress harian

### 📖 **Panduan Belajar**
- [**README Exercises**](./README-exercises.md) - Cara penggunaan exercise
- [**Aturan Pembelajaran**](./aturan-pembelajaran.md) - Aturan main pembelajaran
- [**Aturan Pembelajaran (Exercises)**](./aturan-pembelajaran-exercises.md) - Aturan khusus exercises

### ⚙️ **Git Configuration**
- [**Aturan Git**](./aturan-git.md) - Konfigurasi email, workflow, dan command penting
- [**Template Commit Messages**](./aturan-git.md#-format-commit-yang-disarankan) - Format commit standar
- [**Quick Commands**](./aturan-git.md#-quick-commands-copy-paste) - Commands siap pakai

## 🚀 Quick Start

### 1. Setup Git (jika belum)
```bash
git config user.name "Imam Bahrudin"
git config user.email "haloimamdisini@gmail.com"
```

### 2. Mulai Belajar
```bash
# Buka roadmap dan pilih day yang ingin dikerjakan
cat exercises/docs/roadmap-30-hari-javascript.md
```

### 3. Kerjakan Exercise
```bash
# Contoh untuk Day 11
cd exercises/day-11/
node while-loop.js
```

### 4. Push Progress
```bash
# Copy template dari aturan-git.md
git add .
git commit -m "Complete Day X: [Topik]"
git push origin master
```

## 📂 Struktur Folder

```
exercises/
├── docs/                    # 📚 Semua dokumentasi
│   ├── README.md           # Index ini
│   ├── roadmap-30-hari-javascript.md
│   ├── README-exercises.md
│   ├── aturan-pembelajaran.md
│   ├── aturan-pembelajaran-exercises.md
│   └── aturan-git.md
├── day-1/                   # Exercise hari ke-1
├── day-2/                   # Exercise hari ke-2
├── ...
└── day-30/                  # Exercise hari ke-30
```

## 📝 Cara Update Progress

1. **Selesaikan exercise hari itu**
2. **Update roadmap** di `roadmap-30-hari-javascript.md`:
   - Checklist materi dengan `[x]`
   - Tambah status: `✅ **Selesai pada [Tanggal]** (100% - Score: XX/XX)`
   - Update progress tracker table
3. **Push ke GitHub** dengan template commit dari `aturan-git.md`

## 🔖 Bookmark Penting

- [Link GitHub Repository](https://github.com/imambhrdn/belajar-javascript.git)
- [Link Claude Code](https://claude.com/claude-code)

---
*Documentasi ini dikelola oleh Imam Bahrudin*