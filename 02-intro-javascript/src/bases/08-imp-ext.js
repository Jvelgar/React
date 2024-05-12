//import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';

//console.log(owners);

export const getHeroeByID = (id) => heroes.find((e) => e.id === id);
//console.log(getHeroeByID(2));

export const getHeroesByOwnser = (owner) => heroes.filter((e) => e.owner === owner);
//console.log(getHeroesByOwnser('DC'));