import Gameboard from "./Gameboard";

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
  const attack = (enemy) => {
    let coords;
    do {
      coords = getRandomMove();
    } while (!enemy.legalShot(coords));
    if (enemy.receiveAttack(coords[0], coords[1])) return true;
    return false;
  };

  return Object.assign({}, prototype, {
    getName,
    attack,
    getRandomMove,
  });
};

export default AiPlayer;
