import React, { useState } from "react";
import { useCounter } from "../hooks";
import { Samll } from "./Samll";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Samll value={counter} />
      </h1>
      <hr />
      <button className="btn btn-secondary" onClick={() => increment()}>
        +1
      </button>
      <button className="btn btn-secondary" onClick={() => setShow()}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
