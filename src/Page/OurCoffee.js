import React, { useState } from "react";
import ImgTitleWithDescribe from "../components/ImgTitleWithDescribe";
import CoffeeGirl from "../img/coffee_girl.jpg";
import CoffeeCatalog from "../components/CoffeeCatalog";
import DataJson from "../db.json";
import FilterButtons from "../components/FilterButtons";

function OurCoffee() {
  const [stateArrayButton, setStateArrayButton] = useState([]);
  const [inputState, setInputState] = useState("");
  return (
    <div>
      <ImgTitleWithDescribe
        imgOfCoffee={CoffeeGirl}
        title={"About our beans"}
        description={`Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention
so questions.As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face`}
      ></ImgTitleWithDescribe>
      <input
        type="text"
        value={inputState}
        onChange={(event) => {
          setInputState(event.target.value);
        }}
      />
      <FilterButtons
        arrayButton={stateArrayButton}
        setArrayButton={setStateArrayButton}
      />

      {inputState !== "" ? (
        <CoffeeCatalog
          DataToRender={
            stateArrayButton.length > 0
              ? DataJson.coffee
                  .filter((item) => {
                    console.log(inputState);
                    if (
                      item.country.includes(inputState) ||
                      item.name.includes(inputState)
                    ) {
                      return item;
                    }
                  })
                  .filter((item) => {
                    console.log(inputState);

                    if (stateArrayButton.includes(item.country)) {
                      return item;
                    }
                  })
              : DataJson.coffee.filter((item) => {
                  console.log(inputState);
                  if (
                    item.country.includes(inputState) ||
                    item.name.includes(inputState)
                  ) {
                    return item;
                  }
                })
          }
        />
      ) : (
        <CoffeeCatalog
          DataToRender={
            stateArrayButton.length > 0
              ? DataJson.coffee.filter((item) => {
                  console.log(inputState);

                  if (stateArrayButton.includes(item.country)) {
                    return item;
                  }
                })
              : DataJson.coffee
          }
        />
      )}
    </div>
  );
}

export default OurCoffee;
