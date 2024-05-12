// Desestructuiracion o Asignación Desestructurante
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Jorge',
    edad: 30,
    clave: 'JVelgar',
    rango: 'Programador'
};

const {nombre, edad, clave} = persona;


console.log(nombre);
console.log(edad);
console.log(clave);

const getDatos = ({nombre, edad, rango = 'camarero', clave}) => {
    //console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlong: {
            lat: 14.23334,
            long: -12.2323
        }
    }
} 

//returnPersona(persona);


const {nombreClave, anios, latlong:{lat, long}} = getDatos(persona);

console.log(nombreClave, anios);
console.log(lat, long);