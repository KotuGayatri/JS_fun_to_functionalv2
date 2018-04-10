const newClue = (name) => {
  const length = name.length;

  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };

};
const didGreenDoItWithA = newClue("Green")
console.log(didGreenDoItWithA("candlestick"));
console.log(didGreenDoItWithA("leadpipe"));
