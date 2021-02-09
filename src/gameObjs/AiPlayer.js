import Gameboard from "./Gameboard";
import { arrayEquals } from "../helpers";

const AiPlayer = () => {
  const prototype = Gameboard();
  const getName = () => "Computer";
  const getRandomMove = () => {
    let coords = [];
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    coords = [x, y];
    return coords;
  };
  const legalMove = (coord) => {
    const includes = (elem) => arrayEquals(elem, coord);
    if (
      prototype.getHitShots().some(includes) ||
      prototype.getMissedShots().some(includes)
    ) {
      return false;
    }
    return true;
  };
  const attack = (enemy) => {
    let coords;
    do {
      coords = getRandomMove();
    } while (!legalMove(coords));
    if (enemy.receiveAttack(coords[0], coords[1])) return true;
    return false;
  };

  return Object.assign({}, prototype, {
    getName,
    attack,
    legalMove,
    getRandomMove,
  });
};

export default AiPlayer;
