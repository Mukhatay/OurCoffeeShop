import React, { useState } from "react";
import DataJson from "../db.json";
import coffeeCatalogPictures from "../img/CoffeeCatalog.png";
import CoffeeCatalogItem from "./CoffeeCatalogItem";
import BestsellersItem from "./BestsellersItem";

function CoffeeCatalog({ DataToRender }) {
  return (
    <div>
      {DataToRender.map((item) => {
        if (item.country) {
          return (
            <>
              <CoffeeCatalogItem
                url={item.url}
                name={item.name}
                country={item.country}
                price={item.price}
              />
            </>
          );
        } else {
          return (
            <BestsellersItem
              url={item.url}
              name={item.name}
              price={item.price}
            />
          );
        }
      })}
    </div>
  );
}

export default CoffeeCatalog;

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

const fruitList = ["apple", "banana", "chery", "strewberry", "orange", "kiwi"];

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
