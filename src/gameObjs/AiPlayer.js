import Gameboard from "./Gameboard";

const AiPlayer = () => {
  const prototype = Gameboard();
  const getName = () => "Computer";
  const getRandomLegalMove = () => {
    // if the gameboard is filled throw error
    if (prototype.getMissedShots().concat(prototype.getHitShots()).length > 99)
      throw new Error("all spaces filled");
    let coords = [];
    do {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      coords = [x, y];
    } while (
      prototype.getMissedShots().includes(coords) ||
      prototype.getHitShots().includes(coords)
    );
    return coords;
  };
  const attack = (enemy, coords) => {
    if (enemy.receiveAttack(coords[0], coords[1])) return true;
    return false;
  };

  return Object.assign({}, prototype, {
    getName,
    attack,
    getRandomLegalMove,
  });
};

export default AiPlayer;
