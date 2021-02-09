import AiPlayer from "../gameObjs/AiPlayer";

//getRandomMove tests
test("happy path: getRandomMove should return an array of length 2", () => {
  const ai = AiPlayer();
  expect(ai.getRandomMove()).toHaveLength(2);
});
