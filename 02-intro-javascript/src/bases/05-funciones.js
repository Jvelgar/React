//Funciones en JS

const saludar = function saludar(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

console.log(saludar);
console.log(saludar2);
console.log(saludar3);
console.log(saludar4);


const getUser = () => ({
        uid: 'ABD',
        username: 'Jvelgar'
    });

console.log(getUser());

// Tarea
// 1. Transforma a una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABD',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Jorge');
console.log(usuarioActivo);

// Solución
const getUsuarioActivoSolucion = (nombre)  => ({
        uid: 'ABD',
        username: nombre
    });

const usuarioActivoSolucion = getUsuarioActivoSolucion('Jorge');
console.log(usuarioActivoSolucion);