const {bagi} = require("./fileModule")
// 4 hasil bagi inputan user
const {kali} = require("./fileModule")
console.log(">>>>>>>no 3<<<<<")
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('masukkan angka? ', (ang) => {
    rl.question('bagi angka? ', (ang2) => {
        const hasil2 = bagi(parseInt(ang), parseInt(ang2));
        console.log(hasil2)
        console.log(`Hasil pembagian ${ang} dan ${ang2} adalah ${hasil2}`);

        rl.close();
    })
});