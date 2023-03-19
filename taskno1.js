const {tambah} = require("./fileModule")

// 1 hasil tambah inputan user (done)
console.log(">>>>>>>no 1<<<<<")
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('masukkan angka? ', (angka1) => {
    rl.question('tambah angka? ', (angka2) => {
        const hasil = tambah(parseInt(angka1), parseInt(angka2));
        console.log(hasil)
        console.log(`Hasil penjumlahan ${angka1} dan ${angka2} adalah ${hasil}`);

        rl.close();
    })
});