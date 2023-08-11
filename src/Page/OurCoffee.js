import React from "react";
import ImgTitleWithDescribe from "../components/ImgTitleWithDescribe";
import CoffeeGirl from "../img/coffee_girl.jpg";
import CoffeeCatalog from "../components/CoffeeCatalog";

function OurCoffee() {
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
    </div>
  );
}

export default OurCoffee;
