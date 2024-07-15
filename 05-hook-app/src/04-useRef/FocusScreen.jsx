import React from "react";
import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  };

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Nombre"
        className="form-control"
      />
      <button className="btn btn-secondary mt-1" onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};
