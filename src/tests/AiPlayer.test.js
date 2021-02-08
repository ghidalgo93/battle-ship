import AiPlayer from "../gameObjs/AiPlayer";

//getRandomLegalMove tests
test("happy path: getRandomLegalMove should return an array of length 2", () => {
  const ai = AiPlayer();
  expect(ai.getRandomLegalMove()).toHaveLength(2);
});
