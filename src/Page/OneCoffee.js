import React from "react";
import Logo from "../img/Beans_logo.png";
import { useParams } from "react-router-dom";
import DataJson from "../db.json";

function OneCoffee() {
  const qweryParams = useParams();
  const { id } = qweryParams;
  const { coffee } = DataJson;
  const OneCoffeeData = coffee.filter((item) => {
    if (item.id === id) {
      return item;
    }
  })[0];
  console.log(OneCoffeeData);
  // console.log(DataJson);
  return (
    <div>
      <h2>About it</h2>
      <img src={Logo} alt="Beans logo" />
      <img src={OneCoffeeData.url} />
      <p>Country:{OneCoffeeData.country}</p>
      <p>Description:{OneCoffeeData.description}</p>
      <p>Price:{OneCoffeeData.price}</p>
    </div>
  );
}

export default OneCoffee;
