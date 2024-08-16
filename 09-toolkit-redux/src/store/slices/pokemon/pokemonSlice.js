import { createSlice } from "@reduxjs/toolkit";
export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    perPage: 10,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload.pokemons;
      state.page = action.payload.page;
      state.isLoading = false;
    },
  },
});
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
