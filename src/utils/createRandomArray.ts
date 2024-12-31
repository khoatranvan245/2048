const createRandomArray = () => {
  const array = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const pos1 = Math.floor(Math.random() * 16);
  let pos2 = Math.floor(Math.random() * 16);
  while (pos2 == pos1) {
    pos2 = Math.floor(Math.random() * 16);
  }

  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (count == pos1 || count == pos2) {
        array[i][j] = 2;
      }
      count++;
    }
  }

  return array;
};

export default createRandomArray;
