// Desestructuración
// Asignación Desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: 'Soldado'
};

const {
  nombre,
  edad,
  clave,
} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// Podemos definir constantes directamente y que tome su valor por defecto.
const useContext = ({
  clave,
  nombre,
  edad,
  rango = 'Capitan'
}) => {
  //console.log(`Tu nombre es ${nombre} tiene la edad de ${edad} años y su rango es ${rango}`);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1232,
      lng: -12.3256,
    }
  }
}
//retornaPerona(persona)
const {
  nombreClave,
  anios,
  latlng: {
    lat,
    lng
  },
} = useContext(persona);


console.log(nombreClave, anios);
console.log(lat, lng);