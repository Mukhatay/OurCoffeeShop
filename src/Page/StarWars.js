import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

function StarWars() {
  // const [people, setPeople] = useState({
  //   count: 0,
  //   next: 0,
  //   previous: 0,
  //   results: [],
  // });

  // const [people, setPeople] = useState({});
  // const [loading, setLoading] = useState(true);

  const peopleFetch = useQuery("people", () =>
    fetch("https://swapi.dev/api/people/").then((res) => res.json())
  );
  console.log(peopleFetch);
  // useEffect(() => {
  //   setLoading(true);
  //   const fetchedData = fetch("https://swapi.dev/api/people/?page=2")
  //     .then((data) => {
  //       return data.json();
  //     })
  //     .then((parsedData) => {
  //       setPeople((prev) => {
  //         return parsedData;
  //       });
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  if (peopleFetch.isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (peopleFetch.isError) {
    return <h1>Error ...</h1>;
  }
  if (peopleFetch.isSuccess && peopleFetch.data) {
    return (
      <div>
        <ul>
          {peopleFetch.data.results.map((el) => {
            return <li>{el.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default StarWars;
