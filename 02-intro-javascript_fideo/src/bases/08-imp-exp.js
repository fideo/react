//import {heroes} from './data/heroes';
//import {heroes} from './data/heroes'


// empiezo a escribir heroes y toco tab cuando hago un export default heroes; en heroes.js
//import heroes, {owners} from './data/heroes';
//import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";


//console.log(owners)


export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeById(2));

//export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroeByOwner('DC'));