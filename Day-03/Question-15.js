function circularArray(matrix) {
  const n = matrix.length;
  const result = [];

  for (let i = n - 1; i >= 0; i--) {
    result.push(matrix[i][0]);
  }

  for (let j = 1; j < n; j++) {
    result.push(matrix[0][j]);
  }

  for (let i = 1; i < n; i++) {
    result.push(matrix[i][n - 1]);
  }

  for (let j = n - 2; j > 0; j--) {
    result.push(matrix[n - 1][j]);
  }

  return result;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(circularArray(matrix));
