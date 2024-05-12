const nombre = 'Jorge';
const apellidos = 'Vela Garcia';

const nombreCompleto = `${nombre} ${apellidos} ${1 + 1}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);