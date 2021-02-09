import Player from "../gameObjs/Player";
import React, { useState } from "react";
import "../styles/App.css";
import { arrayEquals } from "../helpers";

const Square = (props) => {
  const [hitStyle, setHitStyle] = useState("unknown");

  const renderStyle = () => {
    const includes = (elem) => arrayEquals(elem, props.coord);
    if (props.player.getMissedShots().some(includes)) {
      setHitStyle("miss");
    } else if (props.player.getHitShots().some(includes)) {
      setHitStyle("hit");
    } else {
      setHitStyle("unknown");
    }
  };

  const handleClick = () => {
    props.player.receiveAttack(props.coord[0], props.coord[1]);
    renderStyle();
    props.handleTurnSwitch();
    //check for win condition
    //switch turns
  };

  //if the player is a non-ai player, make their squares
  let content = <button className={hitStyle} onClick={handleClick}></button>;
  if (props.player.getName() !== "Computer") {
    content = <button className={hitStyle} disabled></button>;
  }

  return content;
};

export default Square;