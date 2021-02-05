import Ship from "./Ship";
import { outOfRange, calculateCoords, arrayEquals } from "./helpers";

const Gameboard = () => {
  let ships = [];
  let missedShots = [];
  const getShips = () => ships;
  const getMissedShots = () => missedShots;

  const locationTaken = (xCoord, yCoord) => {
    for (let i = 0; i < ships.length; i++) {
      const coords = ships[i].coords;
      return coords.some((coord) => arrayEquals(coord, [xCoord, yCoord]));
    }
    return false;
  };

  const receiveAttack = (xCoord, yCoord) => {
    for (let i = 0; i < ships.length; i++) {
      const coords = ships[i].coords;
      const hit = coords.some((coord) => arrayEquals(coord, [xCoord, yCoord]));
      if (hit) {
        ships[i].ship.hit(xCoord, yCoord);
        return true;
      }
    }
    missedShots = [...missedShots, [xCoord, yCoord]];
    return false;
  };

  const placeShip = (x, y, dir, len) => {
    if (locationTaken(x, y)) return false;
    const coords = calculateCoords(x, y, dir, len);
    if (outOfRange(coords, 9)) return false;
    const ship = Ship(len);
    ships = ships.concat({ ship, coords });
    return true;
  };

  return { getShips, getMissedShots, placeShip, receiveAttack };
};

export default Gameboard;
