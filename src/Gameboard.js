import Ship from "./Ship";
import { outOfRange, calculateCoords, arrayEquals } from "./helpers";

const Gameboard = () => {
  let ships = [];
  const getShips = () => ships;

  const locationTaken = (xCoord, yCoord) => {
    for (let i = 0; i < ships.length; i++) {
      for (let j = 0; j < ships[i].coords.length; j++) {
        if (arrayEquals(ships[i].coords[j], [xCoord, yCoord])) {
          return true;
        }
      }
    }
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

  return { getShips, locationTaken, placeShip };
};

export default Gameboard;
