const nombre = 'Federico';
const apellido = 'Mazzei';

//const nombreCompleto = nombre + ' ' + apellido
// Templates Strings
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

function getSaludo(nombre) {
  return 'Hola Mundo ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre)}`);