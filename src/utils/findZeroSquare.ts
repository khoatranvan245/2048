const findZeroSquare = (array: number[][]) => {
  const result: number[][] = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] == 0) result.push([i, j]);
    }
  }
  return result;
};

export default findZeroSquare;
