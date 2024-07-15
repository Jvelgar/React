import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("For");
  }
  return `${iterationNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />
      <h4>{memorizeValue}</h4>
      <button className="btn btn-secondary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-secondary" onClick={() => setShow()}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
