const persona = {
    nombre: 'Jorge',
    apellidos: 'Vela García',
    edad: '30',
    direccion: {
        ciudad: 'Valladolid',
        cp: 47005,
        lat: 56.4545,
        lon: 34.3432
    }
};



const persona2 = { ...persona };

console.log(persona);
console.log(persona2);