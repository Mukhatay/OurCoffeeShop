import React, { useEffect, useState, useContext } from "react";
import ImgTitleWithDescribe from "../components/ImgTitleWithDescribe";
import CupOfCoffee from "../img/CupOfCoffee.png";
import CoffeeCatalog from "../components/CoffeeCatalog";
import accountContext from "../context/account/accountContext";
import alertContext from "../context/alert/alertContext";

export default function ForYourPleasure() {
  const accountState = useContext(accountContext);
  const [fetchForYourPleasure, setFetchForYourPleasure] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lg, setLg] = useContext(alertContext);

  useEffect(() => {
    setLoading(true);
    const fetchingForYourPleasure = () => {
      fetch("http://localhost:4000/goods")
        .then((response) => response.json())
        .then((result) => setFetchForYourPleasure([...result]))
        .catch((error) => console.log("error", error));
    };
    fetchingForYourPleasure();
    setLoading(false);
  }, []);

  if (loading) {
    <h1>Loading</h1>;
  } else {
    return (
      <div>
        <ImgTitleWithDescribe
          imgOfCoffee={CupOfCoffee}
          title={"About our goods"}
          description={`Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.`}
        ></ImgTitleWithDescribe>
        <h2>Текущий счет первого аккаунта {accountState[0]}</h2>
        <h2>Текущий счет второго аккаунта {accountState[2]}</h2>
        <h3>Текущий язык {lg ? "KZ" : "ENG"}</h3>
        <CoffeeCatalog DataToRender={fetchForYourPleasure} />
      </div>
    );
  }
}
