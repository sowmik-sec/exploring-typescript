const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findMinMax = (arr: number[]): number[] => {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return [min, max];
};

console.log(findMinMax([...arr]));
