function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function outOfRange(coords, range) {
  return coords.some((entry) => entry[0] > range || entry[1] > range);
}

const calculateCoords = (xCoord, yCoord, direction, length) => {
  if (length < 1) throw new Error("length must be positive");
  if (!(direction === "h" || direction === "v"))
    throw new Error("direction must be h or v");
  let coordinates = [];
  if (direction === "h") {
    for (let i = xCoord; i < xCoord + length; i++) {
      coordinates = [...coordinates, [i, yCoord]];
    }
  } else if (direction === "v") {
    for (let i = yCoord; i < yCoord + length; i++) {
      coordinates = [...coordinates, [xCoord, i]];
    }
  }
  return coordinates;
};

export { outOfRange, calculateCoords, arrayEquals };
