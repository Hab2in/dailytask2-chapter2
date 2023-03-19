// 2 hasil kurang inputan user
const {kurang} = require("./fileModule")
console.log(">>>>>>>no 2<<<<<")
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('masukkan angka? ', (ang) => {
    rl.question('kurang angka? ', (ang2) => {
        const hasil2 = kurang(parseInt(ang), parseInt(ang2));
        console.log(hasil2)
        console.log(`Hasil pengurangan ${ang} dan ${ang2} adalah ${hasil2}`);

        rl.close();
    })
});