import React from "react";
import TitleWithDescribe from "./TitleWithDescribe";

function ImgTitleWithDescribe({ imgOfCoffee, title, description }) {
  return (
    <div>
      <img src={imgOfCoffee} alt="img of coffee" />
      <TitleWithDescribe
        title={title}
        description={description}
      ></TitleWithDescribe>
    </div>
  );
}

export default ImgTitleWithDescribe;
