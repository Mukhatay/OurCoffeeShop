import React, { useState, useEffect, useContext } from "react";
import ImgTitleWithDescribe from "../components/ImgTitleWithDescribe";
import CoffeeGirl from "../img/coffee_girl.jpg";
import CoffeeCatalog from "../components/CoffeeCatalog";
import FilterButtons from "../components/FilterButtons";
import accountContext from "../context/account/accountContext";
import alertContext from "../context/alert/alertContext";

function OurCoffee() {
  const [stateArrayButton, setStateArrayButton] = useState([]);
  const [inputState, setInputState] = useState("");
  const [fetchingCoffee, setFetchingCoffee] = useState([]);
  const [loading, setLoading] = useState(true);
  const stateManagement = useContext(accountContext);
  const [lg, setLg] = useContext(alertContext);

  console.log(stateManagement, "this is context");

  useEffect(() => {
    setLoading(true);
    const fetchingData = () => {
      fetch("http://localhost:4000/coffee")
        .then((response) => response.json())
        .then((result) => setFetchingCoffee([...result]))
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
        <h2>My first account {stateManagement[0]} </h2>{" "}
        <button
          onClick={() => {
            stateManagement[1](stateManagement[0] + 500);
          }}
        >
          Пополнить счет первого аккаунта{" "}
        </button>
        <h2>My second account {stateManagement[2]} </h2>{" "}
        <button
          onClick={() => {
            stateManagement[3](stateManagement[2] + 600);
          }}
        >
          Пополнить счет второго аккаунта{" "}
        </button>
        <h3>Текущий язык {lg ? "KZ" : "ENG"} </h3>
        <button
          onClick={() => {
            setLg(!lg);
          }}
        >
          Change language
        </button>
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
