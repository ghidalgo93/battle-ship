const Ship = (length) => {
  if (length < 1) throw new Error("length cannot be zero");
  //hitArray is an array of length = length, filled with all false (no hits) to start
  let hitArray = new Array(length).fill(false);

  function hit(loc) {
    if (arguments.length > 1 || loc >= length) {
      throw new Error("loc must be a single number");
    }
    if (hitArray[loc] === true) return false;
    hitArray[loc] = true;
    return true;
  }

  const isSunk = () => {
    return hitArray.includes(false) ? false : true;
  };

  return { length, hitArray, hit, isSunk };
};

export default Ship;
