const arr: any[] = [1, 2, 3];
const reverseArray = (values: any[]): any[] | never => {
  if (!values && !Array.isArray(values)){
    throw new Error('An argument should be an array')
  }
  return values.reverse();
}

const reversedArr = reverseArray(arr);
console.log(reversedArr === arr, reversedArr, arr)
