import { useCounter } from "../hook/useCounter";

const CounterWithCustomHooks = () => {
  const { counter, increment, decrement, resert } = useCounter();


  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />

      <button utton className="btn btn-dark" onClick={ () => decrement(1)}>
        -1
      </button>
      <button className="btn btn-dark" onClick={resert}>
        Reset
      </button>
      <button className="btn btn-dark" onClick={ () => increment(2) }>
        +1
      </button>
    </>
  );
};

export default CounterWithCustomHooks;
