import React from "react";
import CoffeeCatalogItem from "./CoffeeCatalogItem";
import BestSellersItem from "./BestSellersItem";
import { Link } from "react-router-dom";

function CoffeeCatalog({ DataToRender }) {
  return (
    <div>
      {DataToRender.map((item) => {
        if (item.country) {
          return (
            <>
              <Link to={"/OurCoffee/" + item.id}>
                <CoffeeCatalogItem
                  url={item.url}
                  name={item.name}
                  country={item.country}
                  price={item.price}
                />
              </Link>
            </>
          );
        } else {
          return (
            <BestSellersItem
              url={item.url}
              name={item.name}
              country={item.country}
            />
          );
        }
      })}
    </div>
  );
}

export default CoffeeCatalog;
