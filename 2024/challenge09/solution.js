function moveTrain(board, mov) {
  const base = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  };
  const prevI = board.findIndex((x) => x.indexOf("@") > -1);
  const i = prevI + base[mov][0];
  const j = board[prevI].indexOf("@") + base[mov][1];
  if ([i, j].includes(-1) || board[i][j] === "o") return "crash";
  if (board[i][j] === "*") return "eat";
  return "none";
}

module.exports = moveTrain;
