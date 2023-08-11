import React from "react";

function BestsellersItem({ url, name, price }) {
  return (
    <div>
      <img src={url} />
      <p>Our Coffee name:{name}</p>
      <p>Price:{price}$</p>
    </div>
  );
}

export default BestsellersItem;
