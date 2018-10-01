//requireds , siempre al principio.

const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('====================='.blue);
    console.log(`==Tabla de ${base} ==`.green);
    console.log('====================='.blue);

    for (let inc = 1; inc <= limite; inc = inc + 1) {
        let res = base * inc;
        console.log(`${ base } X ${ inc } = ${ res }`)

    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = ''
        for (let inc = 1; inc <= limite; inc = inc + 1) {
            let res = base * inc;
            data += `${ base } X ${ inc } = ${ res } \n`;

        }

        //const data = new Uint8Array(Buffer.from('Hello Node.js'));

        fs.writeFile(`tablas/tabla del ${base}-al${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla del ${base}-al-${limite}.txt`)
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}