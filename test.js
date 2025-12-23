let users = [
    { name: "Budi", age: 25 },
    { name: "Ani", age: 30 },
    { name: "Citra", age: 28 }
];


let nama = []

console.log(nama)

let namaUser = users.map(user => user.name)

namaUser.forEach(user => {
    nama.push(user)
});

console.log(nama)