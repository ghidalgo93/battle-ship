import Gameboard from "./Gameboard";

const Player = (name) => {
  const getName = () => name;
  const attack = (enemy, coords) => {
    if (enemy.receiveAttack(coords[0], coords[1])) return true;
    return false;
  };

  return Object.assign({}, Gameboard(), { getName, attack });
};

export default Player;
