import React, { useState, useEffect } from "react";
import ImgTitleWithDescribe from "../components/ImgTitleWithDescribe";
import CoffeeGirl from "../img/coffee_girl.jpg";
import CoffeeCatalog from "../components/CoffeeCatalog";
import FilterButtons from "../components/FilterButtons";

function OurCoffee() {
  const [stateArrayButton, setStateArrayButton] = useState([]);
  const [inputState, setInputState] = useState("");
  const [fetchingCoffee, setFetchingCoffee] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchingData = () => {
      fetch("http://localhost:4000/coffee")
        .then((response) => response.json())
        .then((result) => setFetchingCoffee(result))
        .catch((error) => console.log("error", error));
    };
    fetchingData();
    setLoading(false);
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
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
                ? fetchingCoffee
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
                : fetchingCoffee.filter((item) => {
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
                ? fetchingCoffee.filter((item) => {
                    console.log(inputState);

                    if (stateArrayButton.includes(item.country)) {
                      return item;
                    }
                  })
                : fetchingCoffee
            }
          />
        )}
      </div>
    );
  }
}

export default OurCoffee;
