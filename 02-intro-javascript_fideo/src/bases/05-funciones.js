// Funciones en JS

// const saludar = function (nombre) {
//   return `hola, ${ nombre }`;
// }

const saludar2 = (nombre) => {
  return `hola, ${ nombre }`;
}

const saludar3 = (nombre) => `hola, ${ nombre }`;
const saludar4 = () => `hola mundo`;

console.log(saludar2('Fede'))
console.log(saludar3('Lore'))
console.log(saludar4())

// const getUser = () => {
//   return {
//     uid: 'ABC123',
//     username: 'Fideo'
//   }
//}

// Esto de acá abajo es lo mismo que lo de arriba.
// los parentesis implican que estoy devolviendo un objeto
const getUser = () => ({
  uid: 'ABC123',
  username: 'Fideo'
});

const user = getUser();
console.log(user);

//Tarea
// 1. transformar a función de flecha
// 2. Retornar un objeto implícito
// 3. Pruebas

// function getUsuarioActivo(nombre) {
//   return {
//     uid: 'ABC567',
//     username: nombre
//   }
// }

const getUsuarioActivo = (nombre) => ({
  uid: 'ABC567',
  username: nombre
});

const usuarioActivo = getUsuarioActivo('Federico');
console.log(usuarioActivo)