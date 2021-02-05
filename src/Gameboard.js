import Ship from "./Ship";
import { outOfRange, calculateCoords, arrayEquals } from "./helpers";

const Gameboard = () => {
  let ships = [];
  let missedShots = [];
  const getShips = () => ships;
  const getMissedShots = () => missedShots;

  // ships include ship obj, check all and see if the number sunk === number of ships
  const allSunk = () => {
    if (ships.length < 1) throw new Error("No ships placed yet");
    let numSunk = 0;
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].ship.isSunk()) numSunk++;
    }
    return numSunk === ships.length;
  };

  // check ships to see if coord is already taken
  const locationTaken = (xCoord, yCoord) => {
    for (let i = 0; i < ships.length; i++) {
      const coords = ships[i].coords;
      return coords.some((coord) => arrayEquals(coord, [xCoord, yCoord]));
    }
  };

  // check each ship obj in ships to see if their coords include the hit coords
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

  // check if the location is a legal placement, if so add it
  const placeShip = (x, y, dir, len) => {
    if (locationTaken(x, y)) return false;
    const coords = calculateCoords(x, y, dir, len);
    if (outOfRange(coords, 9)) return false;
    const ship = Ship(len);
    ships = ships.concat({ ship, coords });
    return true;
  };

  return { getShips, getMissedShots, placeShip, receiveAttack, allSunk };
};

export default Gameboard;
