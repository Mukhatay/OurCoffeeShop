import React, { useState, useEffect } from "react";
import Logo from "../img/Beans_logo.png";
import { useParams } from "react-router-dom";
import DataJson from "../db.json";

function OneCoffee() {
  const [oneFetchingCoffeeState, setOneFetchingCoffeeState] = useState({});
  const [loading, setLoading] = useState(true);
  const qweryParams = useParams();
  const { id } = qweryParams;
  useEffect(() => {
    setLoading(true);
    const fetchOneCoffee = () => {
      fetch(`http://localhost:4000/coffee/${id}`)
        .then((response) => response.json())
        .then((result) => setOneFetchingCoffeeState({ ...result }))
        .catch((error) => console.log("error", error));
    };
    fetchOneCoffee();
    setLoading(false);
  }, []);

  // const { coffee } = DataJson;
  // const  = coffee.filter((item) => {
  //   if (item.id === id) {
  //     return item;
  //   }
  // })[0];
  // console.log(OneCoffeeData);
  // console.log(DataJson);
  if (loading) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div>
        <h2>About it</h2>
        <img src={Logo} alt="Beans logo" />
        <img src={oneFetchingCoffeeState.url} />
        <p>Country:{oneFetchingCoffeeState.country}</p>
        <p>Description:{oneFetchingCoffeeState.description}</p>
        <p>Price:{oneFetchingCoffeeState.price}</p>
      </div>
    );
  }
}

export default OneCoffee;
