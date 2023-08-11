import React from "react";
import Logo from "../img/Beans_logo.png";

function TitleWithDescribe({ title, description }) {
  // const title = props.title;
  // const description = props.description;
  // const { title, description } = props;
  return (
    <div>
      <h2>{title}</h2>
      <img src={Logo} alt="logo of beans" />
      <p>{description}</p>
    </div>
  );
}

export default TitleWithDescribe;
