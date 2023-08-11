import React from "react";
import coffeeCatalogPictures from "../img/CoffeeCatalog.png";
import DataJson from "../db.json";

function CoffeeCatalogItem({ price, country, img, name }) {
  return (
    <div>
      <img src={coffeeCatalogPictures} />
      <p>{name}</p>
      <p>{country}</p>
      <p>{price}</p>
    </div>
  );
}

export default CoffeeCatalogItem;
