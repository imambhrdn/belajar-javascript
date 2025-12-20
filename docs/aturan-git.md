# 📋 Aturan Git Configuration

## 🔧 Konfigurasi Email Git

### Cek Konfigurasi Saat Ini
```bash
git config user.name
git config user.email
```

### Ubah Konfigurasi (Hanya untuk Repository Ini)
```bash
git config user.name "Imam Bahrudin"
git config user.email "haloimamdisini@gmail.com"
```

### Ubah Konfigurasi (Global untuk Semua Repository)
```bash
git config --global user.name "Imam Bahrudin"
git config --global user.email "haloimamdisini@gmail.com"
```

## 🚀 Aturan Push ke GitHub

### Workflow Standard
```bash
# 1. Cek status
git status

# 2. Add file yang mau di-commit
git add nama-file.md
# atau add semua file
git add .

# 3. Commit dengan format standar
git commit -m "$(cat <<'EOF'
Judul Commit (singkat dan jelas)

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# 4. Push ke GitHub
git push origin master
```

### Template Commit Messages
```bash
# Complete Day
git commit -m "Complete Day X: [Topik] - All exercises completed (100%)"

# Add New Day
git commit -m "Add Day X: [Topik] exercises
- Exercise 1: description
- Exercise 2: description
- Exercise 3: description

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Fix Exercise
git commit -m "Fix Day X: [Topik] - [nama exercise] - [deskripsi fix]"

# Update Documentation
git commit -m "Update docs: [nama file] - [deskripsi update]"
```

## 📝 Format Commit yang Disarankan

### Tipe Commit
- `Complete` - Untuk menandai hari selesai
- `Add` - Untuk menambahkan file baru
- `Fix` - Untuk memperbaiki bug/error
- `Update` - Untuk memperbarui file yang ada
- `Delete` - Untuk menghapus file
- `Docs` - Untuk perubahan dokumentasi

### Format yang Harus Digunakan
```bash
git commit -m "$(cat <<'EOF'
[Tipe]: [Deskripsi singkat]

[Detail penjelasan jika perlu]

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

## 🔍 Mengecek History

### Lihat Commit Terakhir
```bash
git log -1 --pretty=format:"%an <%ae> - %s"
```

### Lihat 5 Commit Terakhir
```bash
git log -5 --pretty=format:"%h - %an <%ae> - %s (%ad)" --date=short
```

### Lihat Detail Commit
```bash
git show
```

## 🚨 Handle Merge Conflict

### Jika Terjadi Conflict saat Pull
```bash
# 1. Pull dulu
git pull origin master

# 2. Jika conflict, edit file yang bermasalah
# Cari tanda <<<<<<<, =======, >>>>>>>

# 3. Setelah di-fix, add file
git add nama-file-yang-difix.md

# 4. Commit merge
git commit -m "Resolve merge conflicts"

# 5. Push
git push origin master
```

## 📁 Aturan .gitignore

### Folder yang Di-track
Hanya folder `exercises/` yang akan di-push ke GitHub.

### Folder yang Diabaikan
| Folder | Alasan |
|--------|--------|
| `porto/` | Project portfolio terpisah |
| `solutions/` | File solusi lokal saja |
| `.claude/` | Konfigurasi lokal Claude |
| `day-*/` (root) | Folder lama yang sudah dipindahkan |

### File .gitignore
```gitignore
# Ignore everything at root level
/*

# But not these files/folders
!.gitignore
!exercises/

# Ignore specific folders at root level
/porto/
/solutions/
/.claude/
/day-*/
```

### Cara Kerja
1. **Semua file di root** diabaikan (`/*`)
2. **Kecuali** `.gitignore` dan folder `exercises/`
3. Folder lain seperti `porto/`, `solutions/` **tidak akan ter-push**

### Menambah Folder Baru yang Di-track
Jika ingin menambah folder lain untuk di-track, edit `.gitignore`:
```gitignore
# Tambahkan baris ini
!nama-folder-baru/
```

### Cek File yang Diabaikan
```bash
# Cek apakah file tertentu diabaikan
git check-ignore -v nama-file

# Lihat semua file yang diabaikan
git status --ignored
```

---

## 📊 Progress Tracker Format

### Update di roadmap-30-hari-javascript.md
```markdown
### Day X: [Topik]
**Materi:**
- [x] Materi 1
- [x] Materi 2
- [x] Materi 3

**📝 Status:** ✅ **Selesai pada [Tanggal]** (100% - Score: XX/XX)
```

### Update Progress Table
```markdown
| Week | Topics | Status |
|------|--------|--------|
| 1 | Fundamentals | ✅ (7/7 days) |
| 2 | Control Flow & Functions | 🔄 (X/8 days) |
```

## 🎯 Quick Commands (Copy-Paste)

### Setup Awal
```bash
git config user.name "Imam Bahrudin"
git config user.email "haloimamdisini@gmail.com"
```

### Push Selesai Day
```bash
git add .
git commit -m "$(cat <<'EOF'
Complete Day X: [Topik] - All exercises completed (100%)

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
git push origin master
```

### Cek Author Terakhir
```bash
git log -1 --pretty=format:"%an <%ae> - %s"
```

---

## 📝 Notes
- Selalu cek `git status` sebelum commit
- Commit dengan pesan yang jelas dan deskriptif
- Push setelah setiap milestone penting (selesai Day)
- Simpan file ini sebagai referensi quick access