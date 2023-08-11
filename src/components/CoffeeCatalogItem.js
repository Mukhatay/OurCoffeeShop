import React from "react";
import coffeeCatalogPictures from "../img/CoffeeCatalog.png";
import DataJson from "../db.json";

function CoffeeCatalogItem({ price, country, url, name }) {
  return (
    <div>
      <img src={url} />
      <p>Our Coffee name:{name}</p>
      <p>From Country:{country}</p>
      <p>Price:{price}$</p>
    </div>
  );
}

export default CoffeeCatalogItem;
