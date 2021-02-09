import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Board from "./Board";
import Player from "../gameObjs/Player";
import AiPlayer from "../gameObjs/AiPlayer";

const player1 = Player("bob");
const player2 = AiPlayer();
player1.randomizeShips();
player2.randomizeShips();

const Game = () => {
  // reset func: new game function to randomizeShips and reset boards

  const [p1isNext, setP1IsNext] = useState(true);

  useEffect(() => {
    if (!p1isNext) {
      player2.attack(player1);
      handleTurnSwitch();
    }
  }, [p1isNext]);

  const handleTurnSwitch = () => {
    setP1IsNext(!p1isNext);
  };

  const content = (
    <div>
      <div>{`Next Player: ${
        p1isNext ? player1.getName() : player2.getName()
      }`}</div>
      <div className={"row"}>
        <Board player={player1} handleTurnSwitch={handleTurnSwitch} />
        <Board player={player2} handleTurnSwitch={handleTurnSwitch} />
      </div>
      {/* newGame btn */}
    </div>
  );

  return content;
};

export default Game;
