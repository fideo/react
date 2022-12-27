import { useFetch, useCounter } from "../hooks/index"
import { LoadingCharacter, Character } from "../03-examples/index";


export const Layout = () => {
  const { counter, increment, decrement} = useCounter();

  const {data, isLoading, hasError} = useFetch('https://thronesapi.com/api/v2/Characters/'+counter);

  //console.log({data, isLoading, hasError});
  const {imageUrl, fullName, title} = !!data && data;



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
