import Gameboard from "../Gameboard";

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
test("placeShip should be able to place vertical ships, return true", () => {
  const board = Gameboard();
  expect(board.placeShip(0, 0, "v", 4)).toBe(true);
});

// receiveAttack tests
test("happy path: receiveAttack should return false if received attack that missed", () => {
  const board = Gameboard();
  board.placeShip(0, 0, "h", 4);
  expect(board.receiveAttack(0, 2)).toBe(false);
});
test("receiveAttack should return true if received attack that hit", () => {
  const board = Gameboard();
  board.placeShip(0, 0, "h", 4);
  expect(board.receiveAttack(2, 0)).toBe(true);
});
test("receiveAttack should be able to handle miss for multiple ships added", () => {
  const board = Gameboard();
  board.placeShip(0, 0, "h", 4);
  board.placeShip(2, 3, "v", 3);
  expect(board.receiveAttack(0, 2)).toBe(false);
});
test("receiveAttack should be able to handle hit for multiple ships added", () => {
  const board = Gameboard();
  board.placeShip(0, 0, "h", 4);
  board.placeShip(2, 3, "v", 3);
  expect(board.receiveAttack(2, 5)).toBe(true);
});

//getMissedShots tests
test("happy path: getMissedShots should return empty initially instantiated missedShots array", () => {
  const board = Gameboard();
  expect(board.getMissedShots()).toEqual([]);
  expect(board.getMissedShots().length).toBe(0);
});
test("getMissedShots should return a length of 0 after a single hit shot", () => {
  const board = Gameboard();
  board.placeShip(0, 0, "h", 4);
  board.receiveAttack(2, 0);
  expect(board.getMissedShots().length).toBe(0);
});
test("getMissedShots should return a length of 1 after a single missed shot", () => {
  const board = Gameboard();
  board.placeShip(0, 0, "h", 4);
  board.receiveAttack(2, 1);
  expect(board.getMissedShots().length).toBe(1);
});

////locationTaken tests, only for dev (not exported in prod)
//xtest("happy path: location taken, location NOT taken so should return false", () => {
//  const board = Gameboard();
//  expect(board.locationTaken(0, 0)).toBe(false);
//});
//xtest("locationTaken should return true when ship already placed at location", () => {
//  const board = Gameboard();
//  board.placeShip(0, 0, "h", 4);
//  expect(board.locationTaken(1, 0)).toBe(true);
//});
