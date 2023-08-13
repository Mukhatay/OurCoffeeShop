import React from "react";
import CoffeeCatalogItem from "./CoffeeCatalogItem";
import BestSellersItem from "./BestSellersItem";

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
