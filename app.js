const argv = require('./config/yargs').argv;
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo. green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');

}

//let base = '5';

//console.log(process.argv);
//let argv2 = process.argv;
//console.log(argv.base);
//console.log('limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1]

//crearArchivo(base)
//  .then(archivo => console.log(`Archivo creado: ${ archivo}`))
//.catch(e => console.log(e));