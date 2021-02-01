const Ship = (length) => {
  let whereHit = new Array(length).fill(false);

  const hit = (loc) => {
    let hitArray = [...whereHit];
    hitArray[loc] = true;
    return hitArray;
  };

  return { length, hit };
};

export default Ship;
