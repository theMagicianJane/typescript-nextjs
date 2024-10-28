const arr: any[] = [1, 2, 3, 4, 5, 6];
const reverseArray = values => {
  let i = 0;

  if (!values && !Array.isArray(values)){
    throw new Error('An argument should be an array')
  }

  while (i < values.length - 1) {
    values.splice(i, 0, values[values.length - 1])
    values.pop();

    i++
  }
  return values;
}

const reversedArr = reverseArray(arr);
console.log(reversedArr === arr, reversedArr, arr)
