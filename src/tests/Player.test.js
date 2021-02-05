import Player from "../Player";

// getName tests
test("happy path: getName returns 'bob'", () => {
  const player = Player("bob");
  expect(player.getName()).toBe("bob");
});

// attack tests
test("happy path: attack returns false when misses", () => {
  const alice = Player("alice");
  const bob = Player("bob");
  expect(alice.attack(bob, [0, 0])).toBe(false);
});
test("attack returns true when hits", () => {
  const alice = Player("alice");
  const bob = Player("bob");
  bob.placeShip(0, 0, "h", 4);
  expect(alice.attack(bob, [0, 0])).toBe(true);
});
