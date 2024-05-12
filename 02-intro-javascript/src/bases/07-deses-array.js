const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [,,p2] = personajes;
console.log(p2);

const returnArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = returnArreglo();
console.log(letras, numeros);

const returnData = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = returnData('Goku');
console.log(nombre);
setNombre();