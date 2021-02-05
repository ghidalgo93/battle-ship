import Ship from "./Ship";

const Gameboard = () => {
  let ships = [];
  const locationTaken = (xCoord, yCoord) => {
    return false;
  };
  const calculateCoords = (xCoord, yCoord, direction, length) => {
    if (length < 1 || direction !== ("h" || "v")) throw TypeError;
    let coordinates = [];
    if (direction === "h") {
      for (let i = xCoord; i < xCoord + length; i++) {
        coordinates = [...coordinates, [i, yCoord]];
      }
    } else if (direction === "v") {
      for (let i = yCoord; i < yCoord + length; i++) {
        coordinates = [...coordinates, [xCoord, i]];
      }
    }
    return coordinates;
  };

  const placeShip = (x, y, dir, len) => {
    if (locationTaken(x, y)) return false;
    const coords = calculateCoords(x, y, dir, len);
    const ship = Ship(len);
    ships = [...ships, { ship, coords }];
    return true;
  };

  return { locationTaken, placeShip };
};

export default Gameboard;
