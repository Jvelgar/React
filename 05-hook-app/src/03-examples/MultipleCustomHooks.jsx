import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";


const MultipleCustomHooks = () => {
  const { counter, decrement, increment } = useCounter(1);

  //const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;
  const url = '';
  const { data, hasError, isLoading } = useFetch(url);

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

      {isLoading ? <LoadingMessage /> : <PokemonCard />}

    
      <button className="btn btn-secondary" onClick={() => decrement()}>
        Anterior
      </button>
      <button className="btn btn-secondary" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};

export default MultipleCustomHooks;
