import React, { useState } from "react";
import PlayerCards from "./PlayerCards";

function BlackJack() {
  const [playerCards, setPlayerCards] = useState([]);
  const [casinoCards, setCasinoCards] = useState([]);
  const [allCardsInGame, setAllCardsInGame] = useState([
    { name: "2 Diamonds", points: 2 },
    { name: "3 Diamonds", points: 3 },
    { name: "4 Diamonds", points: 4 },
    { name: "5 Diamonds", points: 5 },
    { name: "6 Diamonds", points: 6 },
    { name: "7 Diamonds", points: 7 },
    { name: "8 Diamonds", points: 8 },
    { name: "9 Diamonds", points: 9 },
    { name: "10 Diamonds", points: 10 },
    { name: "J Diamonds", points: 2 },
    { name: "Q Diamonds", points: 3 },
    { name: "K Diamonds", points: 4 },
    { name: "A Diamonds", points: 11 },
  ]);
  return (
    <div>
      <h1>Black Jack</h1>
      <button
        onClick={() => {
          setPlayerCards((prev) => {
            return [];
          });
        }}
      >
        Start new game
      </button>
      <button
        onClick={() => {
          const randomNumber = Math.floor(Math.random() * 13);
          const randomCard = allCardsInGame[randomNumber];
          setPlayerCards((prev) => {
            return [...prev, randomCard];
          });
          console.log(randomCard);
        }}
      >
        Take card
      </button>
      <PlayerCards playerCardsToRender={playerCards} />
    </div>
  );
}

export default BlackJack;
