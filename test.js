function celsiusToFahrenheit(celsius) {
    // Formula: (C × 9/5) + 32
    // Write your code here
    let cToF = (celsius * (9/5)) + 32
    return cToF;
}

const konversi = celsiusToFahrenheit(24);
console.log(konversi);