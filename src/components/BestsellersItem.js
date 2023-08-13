import React from "react";

function BestSellersItem({ price, name, url }) {
  return (
    <div>
      <img src={url} />
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}

export default BestSellersItem;
