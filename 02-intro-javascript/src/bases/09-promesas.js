import {getHeroeByID} from './bases/08-imp-ext';
/*const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeByID(2);
        resolve(heroe);
        reject('No se pueden encontrar el héroe');
    }, 2000);
});

promesa.then((heroe) => {
    console.log('heroe', heroe);
}).catch(err => console.warn(err));*/

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeByID(id);
            if(heroe){
                resolve(heroe);
            }else{
                reject('No se pueden encontrar el héroe');
            }
        }, 2000);
    });

}

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn);