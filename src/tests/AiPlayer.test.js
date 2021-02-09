import AiPlayer from "../gameObjs/AiPlayer";

//getRandomMove tests
test("happy path: getRandomMove should return an array of length 2", () => {
  const ai = AiPlayer();
  expect(ai.getRandomMove()).toHaveLength(2);
});

//legal move test
test("happy path: legalMove should return true when there are no hits/misses", () => {
  const ai = AiPlayer();
  const coords = [0, 0];
  expect(ai.legalMove(coords)).toBe(true);
});
test("legalMove should return false when called on coord that has been hit", () => {
  const ai = AiPlayer();
  const coords = [0, 0];
  ai.receiveAttack(coords[0], coords[1]);
  expect(ai.legalMove(coords)).toBe(false);
});
