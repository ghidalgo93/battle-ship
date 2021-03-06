import React from "react";
import "../styles/App.css";
import Square from "./Square";

const Board = (props) => {
  const renderSquares = () => {
    let board = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        row = row.concat(
          <Square
            key={[i, j]}
            coord={[i, j]}
            player={props.player}
            handleTurnSwitch={props.handleTurnSwitch}
            handleGameover={props.handleGameover}
          />
        );
      }
      board = board.concat(row);
    }
    return board;
  };

  const content = (
    <div>
      {props.player.getName()}
      <div className={"board"}>{renderSquares()}</div>
    </div>
  );

  return content;
};

export default Board;
