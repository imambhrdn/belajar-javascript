# Konsep JavaScript Array Manipulation

## 📚 Topik yang Dipelajari

### 1. Array Methods Dasar
- **`findIndex()`** - Mencari index elemen berdasarkan kondisi
- **`splice()`** - Menghapus/menambah elemen di posisi tertentu
- **`unshift()`** - Menambah elemen di awal array
- **`push()`** - Menambah elemen di akhir array

### 2. Object Manipulation
- **Spread Operator `...`** - Menggabungkan object
- **Object.assign()** - Alternative untuk menggabungkan object
- **Object Destructuring** - Mengambil properti dari object

### 3. Deep vs Shallow Copy
- **Shallow Copy**: `const arr2 = [...arr1]`
- **Deep Copy**: `const arr2 = JSON.parse(JSON.stringify(arr1))`

## 💡 Tips & Best Practices

### ✅ Yang Boleh
1. Gunakan spread operator untuk clean code
2. Selalu validasi input
3. Handle edge cases (ID tidak ditemukan)
4. Buat fungsi yang reusable

### ❌ Yang Harus Dihindari
1. Mengubah array asli (mutation)
2. Loop manual jika ada built-in method
3. Hardcode index values
4. Lupa handle error cases

## 🛠️ Alternative Solutions

### Solution 1: Menggunakan Map
```javascript
function updateAndMoveToFront(peopleArray, targetId, newData) {
    const result = [...peopleArray];
    const personIndex = result.findIndex(p => p.id === targetId);

    if (personIndex !== -1) {
        result[personIndex] = { ...result[personIndex], ...newData };
        const [updated] = result.splice(personIndex, 1);
        result.unshift(updated);
    }

    return result;
}
```

### Solution 2: Menggunakan Filter dan Concat
```javascript
function updateAndMoveToFront(peopleArray, targetId, newData) {
    const target = peopleArray.find(p => p.id === targetId);
    if (!target) return peopleArray;

    const updated = { ...target, ...newData };
    const others = peopleArray.filter(p => p.id !== targetId);

    return [updated, ...others];
}
```

## 📖 Referensi Lainnya

- [MDN Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [JavaScript.info - Array methods](https://javascript.info/array-methods)
- [Object spread vs Object.assign](https://alligator.io/js/object-spread-vs-object-assign/)