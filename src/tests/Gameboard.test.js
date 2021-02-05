import Gameboard from "../Gameboard";

//calculateCoords tests, only for dev (not exported in prod)
xtest("happy path: calculateCoords", () => {
  const board = Gameboard();
  expect(board.calculateCoords(2, 3, "h", 4)).toEqual([
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
  ]);
});

//locationTaken tests, only for dev (not exported in prod)
xtest("happy path: location taken", () => {
  const board = Gameboard();
  expect(board.locationTaken(0, 0)).toBe(false);
});
xtest("happy path: location taken", () => {
  const board = Gameboard();
  board.placeShip(0, 0, "h", 4);
  expect(board.locationTaken(0, 1)).toBe(true);
});

// placeShip tests
xtest("happy path: placeShip", () => {
  const board = Gameboard();
  expect(board.placeShip(0, 0, "h", 4)).toBe(true);
});

test("placeShip should return false if called on already taken space", () => {
  const board = Gameboard();
  board.placeShip(0, 0, "h", 4);
  expect(board.placeShip(1, 0, "h", 2)).toBe(false);
});
