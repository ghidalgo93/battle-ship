import React, { useState, useEffect } from "react";
import "../styles/App.css";
import Board from "./Board";
import Player from "../gameObjs/Player";
import AiPlayer from "../gameObjs/AiPlayer";

const player1 = Player("bob");
const player2 = AiPlayer();
player1.randomizeShips();
player2.randomizeShips();

const Game = (props) => {
  // reset func: new game function to randomizeShips and reset boards
  const [gameover, setGameover] = useState(false);
  const handleGameover = () => {
    setGameover(!gameover);
  };

  const [p1isNext, setP1IsNext] = useState(true);
  const handleTurnSwitch = () => {
    setP1IsNext(!p1isNext);
  };

  useEffect(() => {
    if (!p1isNext) {
      player2.attack(player1);
      handleTurnSwitch();
    }
  }, [p1isNext, handleTurnSwitch]);

  const message = () => {
    if (gameover) {
      return <div>Game Over</div>;
    } else {
      return (
        <div>{`Next Player: ${
          p1isNext ? player1.getName() : player2.getName()
        }`}</div>
      );
    }
  };

  const content = (
    <div>
      {message()}
      <div className={"row"}>
        <Board
          player={player1}
          handleTurnSwitch={handleTurnSwitch}
          handleGameover={handleGameover}
        />
        <Board
          player={player2}
          handleTurnSwitch={handleTurnSwitch}
          handleGameover={handleGameover}
        />
      </div>
      {/* newGame btn */}
    </div>
  );

  return content;
};

export default Game;
