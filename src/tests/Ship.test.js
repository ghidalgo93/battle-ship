import Ship from "../gameObjs/Ship";

// length tests
test("happy path: length", () => {
  const ship = Ship(2);
  expect(ship.length).toBe(2);
});
test("ship with zero length should throw err", () => {
  expect(() => Ship(0)).toThrow();
});
test("ship with negative values will throw error", () => {
  expect(() => Ship(-2)).toThrow();
});

// hit array tests
test("happy path: hit array", () => {
  const ship = Ship(2);
  expect(ship.hitArray).toEqual([false, false]);
});
test("hitArray reflects hit on a non-hit location correctly", () => {
  const ship = Ship(2);
  ship.hit(0);
  expect(ship.hitArray).toEqual([true, false]);
});
test("hitArray relects hit on a hit location correctly, ie no change", () => {
  const ship = Ship(2);
  ship.hit(0);
  ship.hit(0);
  expect(ship.hitArray).toEqual([true, false]);
});

// hit tests
test("happy path: hit returns true on a hit", () => {
  const ship = Ship(2);
  expect(ship.hit(0)).toBe(true);
});
test("hit returns false when location has already been hit", () => {
  const ship = Ship(2);
  ship.hit(0);
  expect(ship.hit(0)).toBe(false);
});
test("hit will throw error if passed more than one argument", () => {
  const ship = Ship(2);
  expect(() => ship.hit(0, 0)).toThrow();
});
test("hit will throw error if loc is out of range", () => {
  const ship = Ship(2);
  expect(() => ship.hit(2)).toThrow();
});

//isSunk tests
test("happy path: isSunk", () => {
  const ship = Ship(2);
  expect(ship.isSunk()).toBe(false);
});
test("happy path 2: isSunk", () => {
  const ship = Ship(2);
  ship.hit(0);
  ship.hit(1);
  expect(ship.isSunk()).toBe(true);
});
