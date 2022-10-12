const persona = {
  nombre: 'Fede',
  apellido: 'Mazzei',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 53332211,
    lat: 14.3232,
    lon: 34.9232321,
  }
};

//console.table({
//  persona
//});

console.log(persona)

//Para clonar un objeto = { ...persona }
//const persona2 = persona; //esto no se hace
const persona2 = {
  ...persona
}
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);