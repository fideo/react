import { useFetch, useCounter } from "../hooks/index"
import { LoadingCharacter, Character } from "./index";


export const MultipleCustomHooks = () => {
  const { counter, increment, decrement} = useCounter();

  const {data, isLoading, hasError} = useFetch('https://thronesapi.com/api/v2/Characters/'+counter);

  //console.log({data, isLoading, hasError});
  //const {imageUrl, fullName, title} = !!data && data; //este es el original lo modifico en la linea de abajo para que me funciones el test 
  const {imageUrl, fullName, title} = !!data && data[0];



  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr></hr>

      {
        isLoading
        ?<LoadingCharacter />
        :<Character imageUrl={imageUrl} fullName={fullName} title={title} />
      }

      <button className="btn btn-primary" disabled={isLoading} onClick={ () => decrement(1) } >
        Previus Character
      </button>

      <button className="btn btn-primary" disabled={isLoading} onClick={ () => increment(1) } >
        Next Character
      </button>


    </>
  )
}
