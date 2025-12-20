// Day 14: Mini Project - FizzBuzz
// Student: Imam Bahrudin
// Status: [ ] Belum dimulai [ ] Sedang dikerjakan [ ] Selesai

console.log("===== DAY 14: MINI PROJECT - FIZZBUZZ =====\n");

// ============================================
// PENJELASAN FIZZBUZZ:
// Print angka 1 sampai N, tapi:
// - Jika kelipatan 3: print "Fizz"
// - Jika kelipatan 5: print "Buzz"
// - Jika kelipatan 3 DAN 5: print "FizzBuzz"
// - Selain itu: print angkanya
// ============================================

// ============================================
// TODO 1: FizzBuzz Basic (1-30)
// Buat function fizzBuzz(n) yang print FizzBuzz dari 1 sampai n
// ============================================
// Tulis kode kamu di bawah ini:

console.log("=== TODO 1: FIZZBUZZ BASIC (1-30) ===");

const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            console.log('FizzBuzz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(30)
// ============================================
// TODO 2: FizzBuzz dengan Return Array
// Buat function fizzBuzzArray(n) yang RETURN array hasil FizzBuzz
// Contoh: fizzBuzzArray(5) -> [1, 2, "Fizz", 4, "Buzz"]
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 2: FIZZBUZZ ARRAY ===");

const fizzBuzzArray = (n) => {
    let result = []

    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            result.push('FizzBuzz')
        } else if (i % 5 == 0) {
            result.push('Buzz')
        } else if (i % 3 == 0) {
            result.push('Fizz')
        } else {
            result.push(i)
        }
    }
    return result
}
console.log(fizzBuzzArray(15))
// ============================================
// TODO 3: FizzBuzz Custom
// Buat function fizzBuzzCustom(n, fizzNum, buzzNum)
// yang bisa custom angka untuk Fizz dan Buzz
// Contoh: fizzBuzzCustom(20, 2, 7) -> Fizz di kelipatan 2, Buzz di kelipatan 7
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 3: FIZZBUZZ CUSTOM ===");
const fizzBuzzCustom = (n, fizzNum, buzzNum) => {
    for (let i = 1; i <= n; i++) {
        if (n % fizzNum == 0 && n % buzzNum == 0) {
            console.log('FizzBuzz')
        } else if (i % buzzNum == 0) {
            console.log('Buzz')
        } else if (i % fizzNum == 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzzCustom(30, 4, 6)

// ============================================
// TODO 4: FizzBuzz Statistics
// Buat function fizzBuzzStats(n) yang return object:
// { fizz: X, buzz: Y, fizzBuzz: Z, numbers: W }
// Berisi jumlah masing-masing hasil
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 4: FIZZBUZZ STATISTICS ===");
const fizzBuzzStats = (n) => {
    let stats = {
        fizz: 0,
        buzz: 0,
        fizzBuzz: 0,
        nomor: 0,
    }
    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            stats.fizzBuzz++;
        } else if (i % 5 == 0) {
            stats.buzz++
        } else if (i % 3 == 0) {
            stats.fizz++
        } else {
            stats.nomor++
        }
    }
    return stats
}
console.log(fizzBuzzStats(15));


// ============================================
// TODO 5: FizzBuzz Range
// Buat function fizzBuzzRange(start, end)
// yang print FizzBuzz dari start sampai end
// Contoh: fizzBuzzRange(10, 20)
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 5: FIZZBUZZ RANGE ===");
const fizzBuzzRange = (start, end) => {
    for (let i = start; i <= end; i++) {
        if (i % 15 == 0) {
            console.log('FizzBuzz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzzRange(3, 15)

// ============================================
// TODO 6: FizzBuzz Reverse
// Buat function fizzBuzzReverse(n) 
// yang print FizzBuzz dari n ke 1 (mundur)
// ============================================
// Tulis kode kamu di bawah ini:

console.log("\n=== TODO 6: FIZZBUZZ REVERSE ===");
const fizzBuzzReverse = (n) => {
    for (let i = n; i >= 1; i--) {
        if (i % 15 == 0) {
            console.log('FizzBuzz')
        } else if (i % 5 == 0) {
            console.log('Buzz')
        } else if (i % 3 == 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}
fizzBuzzReverse(30)
// ============================================
// TESTING SECTION
// ============================================
console.log("\n\n===== TESTING RESULTS =====");

console.log("\n1. fizzBuzz(15) should print:");
console.log("   1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz");

console.log("\n2. fizzBuzzArray(5) should return:");
console.log("   [1, 2, 'Fizz', 4, 'Buzz']");

console.log("\n3. fizzBuzzCustom(10, 2, 5) should print:");
console.log("   Fizz at multiples of 2, Buzz at multiples of 5");

console.log("\n4. fizzBuzzStats(15) should return:");
console.log("   { fizz: 4, buzz: 2, fizzBuzz: 1, numbers: 8 }");

console.log("\n5. fizzBuzzRange(10, 15) should print:");
console.log("   Buzz, 11, Fizz, 13, 14, FizzBuzz");

console.log("\n6. fizzBuzzReverse(5) should print:");
console.log("   Buzz, 4, Fizz, 2, 1");

console.log("\n===== COMPLETE! =====");
