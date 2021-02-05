import { outOfRange, calculateCoords } from "./helpers";

//calculateCoords tests, only for dev (not exported in prod)
test("happy path: calculateCoords", () => {
  expect(calculateCoords(2, 3, "h", 4)).toEqual([
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
  ]);
});

//outOfRange tests
test("happy path: outOfRange returns false if within range", () => {
  const crds = [
    [0, 0],
    [0, 0],
  ];
  expect(outOfRange(crds, 10)).toBe(false);
});
test("happy path: outOfRange returns true if out of range", () => {
  const crds = [
    [0, 11],
    [0, 0],
  ];
  expect(outOfRange(crds, 10)).toBe(true);
});
