// 3 hasil kali inputan user
const {kali} = require("./fileModule")
console.log(">>>>>>>no 3<<<<<")
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('masukkan angka? ', (ang) => {
    rl.question('kali angka? ', (ang2) => {
        const hasil2 = kali(parseInt(ang), parseInt(ang2));
        console.log(hasil2)
        console.log(`Hasil perkalian ${ang} dan ${ang2} adalah ${hasil2}`);

        rl.close();
    })
});