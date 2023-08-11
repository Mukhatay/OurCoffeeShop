import React, { useState } from "react";
import DataJson from "../db.json";
import coffeeCatalogPictures from "../img/CoffeeCatalog.png";
import CoffeeCatalogItem from "./CoffeeCatalogItem";

function CoffeeCatalog() {
  const fruitList = [
    "apple",
    "banana",
    "chery",
    "strewberry",
    "orange",
    "kiwi",
  ];

  const vegetableList = ["carrot", "poteto", "cucmber", "tomato"];
  const clientList = [
    {
      name: "John",
      phone: 5545,
      adres: "Bakstreest",
    },
    {
      name: "Mike",
      phone: 5878,
      adres: "Mikestreet",
    },
    {
      name: "Anderson",
      phone: 4884,
      adres: "Andersonstreet",
    },
  ];

  // return (
  //   <>
  //     {clientList.map((client) => {
  //       return (
  //         <h2>
  //           ourClientsName:{client.name} isPhone: {client.phone} hisAdress:
  //           {client.adres}
  //         </h2>
  //       );
  //     })}
  //     {fruitList.map((fruit) => {
  //       return <h2>{fruit}</h2>;
  //     })}
  //     {vegetableList.map((veget) => {
  //       return <h2>{veget}</h2>;
  //     })}

  //     {/* <h2>{fruit[0]}</h2>
  //
  //   </>
  // );

  return (
    <div>
      {DataJson.coffee.map((item) => {
        return (
          <>
            {/* <img src={coffeeCatalogPictures} />
            <p>{item.name}</p>
            <p>{item.country}</p>
            <p>{item.price}</p> */}
            <CoffeeCatalogItem />
          </>
        );
      })}
    </div>
  );
}

export default CoffeeCatalog;
