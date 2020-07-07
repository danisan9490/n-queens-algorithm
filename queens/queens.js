'use strict';

/* Given a chessboard of `n` size, in how many different ways can
 you place `n` queens such that none of them attack each other? */

function nQueens(size) {

  let col = Array(size).fill(0);
  let diagRight = Array(size).fill(0);
  let diagLeft = Array(size).fill(0);
  let solution = 0;
  let queens = 0;

  function shiftLeft(diagLeft) {
    diagLeft.shift();
    diagLeft.push(0);
    return diagLeft;
  }

  function shiftRight(diagRight) {
    diagRight.pop();
    diagRight.unshift(0);
    return diagRight;
  }

  function addQueens(col, diagRight, diagLeft) {

    col = col.slice(0, size);
    diagRight = diagRight.slice(0, size);
    diagLeft = diagLeft.slice(0, size);

    shiftLeft(diagLeft);
    shiftRight(diagRight);

    for (let i = 0; i <= size; i++) {
      if (col[i] === 0 && diagRight[i] === 0 && diagLeft[i] === 0) {
        col[i] = 1;
        diagRight[i] = 1;
        diagLeft[i] = 1;
        queens++;
        if (queens === size) solution++;
        else addQueens(col, diagRight, diagLeft);
        queens--;
        col[i] = 0;
        diagRight[i] = 0;
        diagLeft[i] = 0;
      }
    }
  }
  addQueens(col, diagRight, diagLeft);
  return solution;
}


module.exports = nQueens;