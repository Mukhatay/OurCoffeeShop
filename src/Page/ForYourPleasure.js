import React from "react";
import ImgTitleWithDescribe from "../components/ImgTitleWithDescribe";
import CupOfCoffee from "../img/CupOfCoffee.png";
import CoffeeCatalog from "../components/CoffeeCatalog";
import DataJson from "../db.json";

function ForYourPleasure() {
  return (
    <div>
      <ImgTitleWithDescribe
        imgOfCoffee={CupOfCoffee}
        title={"About our goods"}
        description={`Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.`}
      ></ImgTitleWithDescribe>
      <CoffeeCatalog DataToRender={DataJson.goods} />
    </div>
  );
}

export default ForYourPleasure;
