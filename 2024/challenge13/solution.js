function isRobotBack(moves) {
  let x = 0,
    y = 0;
  const baseMoves = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, 1],
    D: [0, -1],
  };

  const convertedMoves = [];

  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === "!") {
      if (moves[i + 1] === "D") convertedMoves.push("U");
      if (moves[i + 1] === "U") convertedMoves.push("D");
      if (moves[i + 1] === "L") convertedMoves.push("R");
      if (moves[i + 1] === "R") convertedMoves.push("L");
      i++;
    } else if (moves[i] === "*") {
      convertedMoves.push(moves[i + 1]);
    } else if (moves[i] === "?") {
      if (!convertedMoves.includes(moves[i + 1])) convertedMoves.push(moves[i + 1])
      i++;
    } else {
      convertedMoves.push(moves[i]);
    }
  }

  convertedMoves.forEach((move) => {
    x += baseMoves[move][0];
    y += baseMoves[move][1];
  });

  if (x === 0 && y === 0) return true;
  return [x, y];
}

module.exports = isRobotBack
