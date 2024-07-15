import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";

const MultipleCustomHooks = () => {
  const { counter, decrement, increment } = useCounter(1);

  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`;

  const { data, hasError, isLoading } = useFetch(url);

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

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
