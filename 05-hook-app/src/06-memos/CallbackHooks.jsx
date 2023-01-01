import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHooks = () => {

  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    (value) => {
      setCounter( (c) => c + value);
    },
    [],
  )
  

  // const incrementFather = () => {
  //     setCounter( counter + 1);
  // };

  return (
    <>
      <h1>useCcallback Hooks: { counter }</h1>
      <hr/>
      <ShowIncrement increment={incrementFather} />
    </>
  )
}
