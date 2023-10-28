import React from "react";

function CasinoCards({ casinoCardsToRender }) {
  return (
    <div>
      <h2>Casino Cards:</h2>
      <ul>
        {casinoCardsToRender.map((el, index) => {
          return <li key={el.name}>{el.name}</li>;
        })}
      </ul>
      <h2>
        Casino points:
        {casinoCardsToRender.reduce((prevSum, currentValue) => {
          return prevSum + currentValue.points;
        }, 0)}
      </h2>
    </div>
  );
}

export default CasinoCards;
