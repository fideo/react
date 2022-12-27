import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={ () => increment(1) }>
        +2
      </button>
      <button className="btn btn-secondary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={ () => decrement(1) }>
        -2
      </button>
    </>
  );
};
