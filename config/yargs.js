const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Graba en archivo la tabla de multiplicar que le indiquemos, con el límite que le indiquemos', opts)
    .help()
    .argv;

module.exports = {
    argv
}