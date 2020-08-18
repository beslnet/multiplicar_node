const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let argv = require('./config/yargs').argv;


let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(datos => console.log(`Tablas de multiplicar: ${datos}`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


let argv2 = process.argv;