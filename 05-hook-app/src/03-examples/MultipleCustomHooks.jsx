import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {

  const {} = useFetch('https://thronesapi.com/api/v2/Characters/1');

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr></hr>
    </>
  )
}
