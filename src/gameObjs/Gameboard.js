import Ship from "./Ship";
import { outOfRange, calculateCoords, arrayEquals } from "../helpers";

const Gameboard = () => {
  let ships = [];
  let missedShots = [];
  let hitShots = [];
  const getShips = () => ships;
  const getMissedShots = () => missedShots;
  const getHitShots = () => hitShots;

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
  const locationHasShip = (xCoord, yCoord) => {
    if (ships.length < 1) return false;
    for (let i = 0; i < ships.length; i++) {
      const coords = ships[i].coords;
      return coords.some((coord) => arrayEquals(coord, [xCoord, yCoord]));
    }
  };

  const legalShot = (coord) => {
    const includes = (elem) => arrayEquals(elem, coord);
    if (getHitShots().some(includes) || getMissedShots().some(includes)) {
      return false;
    }
    return true;
  };

  // check each ship obj in ships to see if their coords include the hit coords
  const receiveAttack = (xCoord, yCoord) => {
    if (!legalShot([xCoord, yCoord])) {
      throw new Error("not legal shot");
    }
    for (let i = 0; i < ships.length; i++) {
      const coords = ships[i].coords;
      const hit = coords.some((coord) => arrayEquals(coord, [xCoord, yCoord]));
      if (hit) {
        const index = coords.findIndex((elem) =>
          arrayEquals(elem, [xCoord, yCoord])
        );
        ships[i].ship.hit(index);
        hitShots = [...hitShots, [xCoord, yCoord]];
        return true;
      }
    }
    missedShots = [...missedShots, [xCoord, yCoord]];
    return false;
  };

  // check if the location is a legal placement, if so add it
  const placeShip = (x, y, dir, len) => {
    if (locationHasShip(x, y)) return false;
    const coords = calculateCoords(x, y, dir, len);
    if (outOfRange(coords, 9)) return false;
    const ship = Ship(len);
    ships = ships.concat({ ship, coords });
    return true;
  };

  //place ships randomly on the board for a quick start
  const randomizeShips = () => {
    const shipLengths = [5, 4, 3, 3, 2];
    shipLengths.forEach((len) => {
      let x, y, randDir;
      do {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
        let coinToss = Math.floor(Math.random() * 2);
        randDir = coinToss < 1 ? "h" : "v";
      } while (!placeShip(x, y, randDir, len));
    });
    return ships;
  };

  return {
    getShips,
    getMissedShots,
    getHitShots,
    placeShip,
    receiveAttack,
    allSunk,
    randomizeShips,
    locationHasShip,
    legalShot,
  };
};

export default Gameboard;
