const arr: unknown[] = [1, 2, 3, 4];
const reverseArray = (values: unknown[]): unknown[]  => {
  const length: number = values.length;

  for (let i: number = 0, j: number = length - 1; i < length / 2; i++, j--) {
    values.splice(i, 1, values.splice(j, 1, values[i])[0]);
  }

  return values;
}

const reversedArr = reverseArray(arr);
console.log(reversedArr === arr, reversedArr, arr)
