import Gameboard from "../Gameboard";

//locationTaken tests, only for dev (not exported in prod)
test("happy path: location taken, location NOT taken so should return false", () => {
  const board = Gameboard();
  expect(board.locationTaken(0, 0)).toBe(false);
});
test("locationTaken should return true when ship already placed at location", () => {
  const board = Gameboard();
  board.placeShip(0, 0, "h", 4);
  expect(board.locationTaken(1, 0)).toBe(true);
});

// ships array properties tests
test("happy path: getShip returns the instantiated ships empty array", () => {
  const board = Gameboard();
  expect(board.getShips()).toEqual([]);
  expect(board.getShips().length).toBe(0);
});
test("getShips should return correct ship array as they are added, one ship placed should return ships length of 1", () => {
  const board = Gameboard();
  board.placeShip(0, 0, "h", 2);
  expect(board.getShips().length).toBe(1);
});

// placeShip tests
test("happy path: placeShip", () => {
  const board = Gameboard();
  expect(board.placeShip(0, 0, "h", 4)).toBe(true);
});
test("placeShip should return false if called on already taken space", () => {
  const board = Gameboard();
  board.placeShip(0, 0, "h", 4);
  expect(board.placeShip(1, 0, "h", 2)).toBe(false);
});
test("if ship is placed with any coordinates out of 10x10 board return false", () => {
  const board = Gameboard();
  expect(board.placeShip(9, 0, "h", 2)).toBe(false);
});
