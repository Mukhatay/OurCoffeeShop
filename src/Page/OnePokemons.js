import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
function OnePokemons() {
  const params = useParams();
  const id = params.id;
  const [adressToFetch, setAdressToFetch] = useState();
  console.log(id);

  const OnePokemonsFetch = useQuery(["OnePokemon", id], () =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
  );

  // useEffect(() => {
  //   if (pokemonsFetchLists.isSuccess && pokemonsFetchLists.data) {
  //     pokemonsFetchLists.data.results.forEach((element) => {
  //       if (element.name === id) {
  //         setAdressToFetch(() => {
  //           return element.url;
  //         });
  //       }
  //     });
  //   }
  // }, [pokemonsFetchLists.isSuccess, id, pokemonsFetchLists.data]);

  if (OnePokemonsFetch.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (OnePokemonsFetch.isError) {
    return <h1>Error...</h1>;
  }
  if (OnePokemonsFetch.isSuccess) {
    console.log(OnePokemonsFetch.data);
    return (
      <div>
        <h2>Pokemon name is: {OnePokemonsFetch.data.name} </h2>
        <img src={OnePokemonsFetch.data.sprites.front_default} />
        <img src={OnePokemonsFetch.data.sprites.back_default} />
        <img src={OnePokemonsFetch.data.sprites.front_shiny} />

        <h2>Pokemon height is: {OnePokemonsFetch.data.height} </h2>

        <h2>
          Pokemon forms is:{" "}
          {OnePokemonsFetch.data.forms.map((el) => {
            return <li>{el.name}</li>;
          })}{" "}
        </h2>
        <h2>
          Pokemon ability is:{" "}
          {OnePokemonsFetch.data.abilities.map((el) => {
            return <li>{el.ability.name}</li>;
          })}{" "}
        </h2>
      </div>
    );
  }
}

export default OnePokemons;
