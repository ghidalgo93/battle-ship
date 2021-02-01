import Ship from "./Ship";

it("should produce a function that returns correct hit array", () => {
  const length = 2;
  const ship1 = Ship(length);

  const result = ship1.hit(0);

  expect(result).toEqual([true, false]);
});
