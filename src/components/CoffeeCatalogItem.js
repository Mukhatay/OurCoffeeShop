import React from "react";

function CoffeeCatalogItem({ name, country, url, price }) {
  return (
    <div>
      <img src={url} />
      <p>{name}</p>
      <p>{country}</p>
      <p>{price}</p>
    </div>
  );
}

export default CoffeeCatalogItem;
