import React from "react";

export const ShowIncrement = ({ increment }) => {
  return (
    <button className="btn btn-secondary" onClick={() => increment(5)}>
      Incrementar
    </button>
  );
};
