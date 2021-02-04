import { locationTaken, Gameboard } from "../Gameboard";

// locationTaken tests
test("happy path: locationTaken", () => {
  let testArray = new Array(10).fill(0).map(() => new Array(10).fill(""));
  expect(locationTaken(0, 0, testArray)).toBe(false);
});
test("locationTaken should return false if array location is occupied #2", () => {
  let testArray = new Array(10).fill(0).map(() => new Array(10).fill(""));
  testArray[0][2] = "x";
  expect(locationTaken(0, 2, testArray)).toBe(true);
});

// placeShip tests
test("happy path: placeShip", () => {
  const board = Gameboard();
  expect(board.placeShip(0, 0, "h", 4)).toBe(true);
});
test("placeShip should return false if called on already taken space", () => {
  const board = Gameboard();
  board.placeShip(0, 0, "h", 4);
  expect(board.placeShip(1, 0, "v", 2)).toBe(false);
});
