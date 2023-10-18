import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import OnePokemons from "./OnePokemons";

function PokemonsLists() {
  const pokemonsFetchLists = useQuery("pokemonsLists", () =>
    fetch("https://pokeapi.co/api/v2/pokemon/").then((res) => res.json())
  );

  if (pokemonsFetchLists.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (pokemonsFetchLists.isError) {
    return <h1>Error...</h1>;
  }
  if (pokemonsFetchLists.isSuccess && pokemonsFetchLists.data) {
    console.log(pokemonsFetchLists);
    return (
      <div>
        <ul>
          {pokemonsFetchLists.data.results.map((el) => {
            return (
              <li>
                {el.name}

                <Link to={`/Pokemons/${el.url.split("/").slice(-2, -1)}`}>
                  <button>X</button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PokemonsLists;
