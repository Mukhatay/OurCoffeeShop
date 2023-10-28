import React, { useEffect, useState } from "react";
import PlayerCards from "./PlayerCards";
import CasinoCards from "./CasinoCards";

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

  const [finishGame, setFinishGame] = useState(false);

  const getRandomCard = () => {
    const randomNumber = Math.floor(Math.random() * 13);
    const randomCard = allCardsInGame[randomNumber];
    return randomCard;
  };

  const addPlayerCard = () => {
    setPlayerCards((prev) => {
      return [...prev, getRandomCard()];
    });
  };

  const addCasinoCard = () => {
    setCasinoCards((prev) => {
      return [...prev, getRandomCard()];
    });
  };

  const startGame = () => {
    setPlayerCards((prev) => {
      return [];
    });
    setCasinoCards((prev) => []);
    addPlayerCard();
    addPlayerCard();
    addCasinoCard();
    addCasinoCard();
  };
  useEffect(() => {
    const playerPoints = playerCards.reduce((prevSum, currentValue) => {
      return prevSum + currentValue.points;
    }, 0);
    const casinoPoints = casinoCards.reduce((prevSum, currentValue) => {
      return prevSum + currentValue.points;
    }, 0);

    if (playerPoints > 21) {
      alert("You lose");
      setFinishGame(() => true);
    }
    if (casinoPoints > 21) {
      alert("You win");
      setFinishGame(() => true);
    }
    if (!finishGame && playerPoints > casinoPoints) {
      addCasinoCard();
    }
  }, [playerCards, casinoCards]);
  return (
    <div>
      <h1>Black Jack</h1>
      <button
        onClick={() => {
          startGame();
          setFinishGame(() => false);
        }}
      >
        Start new game
      </button>
      <button
        disabled={finishGame}
        onClick={() => {
          addPlayerCard();
        }}
      >
        Take card
      </button>
      <button
        disabled={finishGame}
        onClick={() => {
          addCasinoCard();
        }}
      >
        Casino card
      </button>
      <PlayerCards playerCardsToRender={playerCards} />
      <CasinoCards casinoCardsToRender={casinoCards} />
    </div>
  );
}

export default BlackJack;
