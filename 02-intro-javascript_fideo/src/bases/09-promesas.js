import { getHeroeById} from "./bases/08-imp-exp";


// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     const heroe = getHeroeById(3);
//     //console.log(heroe);

//     // console.log('dos segundos despues')
//     resolve(heroe);
//     reject("No se pudo encontrar el héroe");
//   }, 2000);
// });

// promesa.then((heroe)=>{
//   console.log(heroe);
// }).catch( err => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      const heroe = getHeroeById(id);
      //console.log(heroe);

      // console.log('dos segundos despues')
      if (heroe) {
        resolve(heroe);
      }else{
        reject("No se pudo encontrar el héroe");
      }
    }, 2000);
  });

}

getHeroeByIdAsync(1).then(
  //heroe => console.log(heroe)).catch(
  heroe => console.log(heroe.name)).catch(
  //err => console.log(err)
  console.warn
)