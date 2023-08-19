import React from "react";
import Logo from "../img/Beans_logo.png";
import { useParams } from "react-router-dom";
import DataJson from "../db.json";

function ForYourPleasureCoffee() {
  const qweryParams = useParams();
  const { id } = qweryParams;
  const { goods } = DataJson;
  const ForYourPleasureCoffeeData = goods.filter((item) => {
    if (item.id === id) {
      return item;
    }
  })[0];
  return (
    <div>
      <h2>About it</h2>
      <img src={Logo} alt="beans logo" />
      <img src={ForYourPleasureCoffeeData.url} />
      <p>{ForYourPleasureCoffeeData.name}</p>
      <p>{ForYourPleasureCoffeeData.price}</p>
    </div>
  );
}

export default ForYourPleasureCoffee;
