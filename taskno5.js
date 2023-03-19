const {kurang, kali} = require("./fileModule")
// 5 hasil total harga kali quantitas barang
console.log(">>>>>>>no 3<<<<<")
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('masukkan harga buku?  ', (ang) => {
    rl.question('banyak buku? ', (ang2) => {
        const hasil2 = kali(parseInt(ang), parseInt(ang2));
        console.log(hasil2)
        console.log(`Total yang harus dibayar adalah ${hasil2}`);

        rl.close();
    })
});