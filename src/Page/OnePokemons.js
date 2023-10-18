import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
function OnePokemons() {
  const params = useParams();
  const id = params.id;
  const [adressToFetch, setAdressToFetch] = useState();
  console.log(params);

  const pokemonsFetchLists = useQuery("pokemonsLists", () =>
    fetch("https://pokeapi.co/api/v2/pokemon/").then((res) => res.json())
  );

  const OnePokemonsFetch = useQuery("onePokemons", () =>
    fetch("").then((res) => res.json())
  );

  useEffect(() => {
    if (pokemonsFetchLists.isSuccess && pokemonsFetchLists.data) {
      pokemonsFetchLists.data.results.forEach((element) => {
        if (element.name === id) {
          setAdressToFetch(() => {
            return element.url;
          });
        }
      });
    }
  }, [pokemonsFetchLists.isSuccess, id, pokemonsFetchLists.data]);
  if (pokemonsFetchLists.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (pokemonsFetchLists.isError) {
    return <h1>Error...</h1>;
  }
}

export default OnePokemons;
