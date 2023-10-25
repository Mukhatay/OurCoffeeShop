import React from "react";

function PlayerCards({ playerCardsToRender }) {
  return (
    <div>
      <h2>Player Cards: </h2>
      <ul>
        {playerCardsToRender.map((el) => {
          return <li>{el.name}</li>;
        })}
      </ul>
      <h2>
        Player points:
        {playerCardsToRender.reduce((prevSum, currentValue) => {
          return prevSum + currentValue.points;
        }, 0)}
      </h2>
    </div>
  );
}

export default PlayerCards;
