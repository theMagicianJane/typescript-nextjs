function getAverageValue (array: number[]) {
  if(!Array.isArray(array)) return;

  return array.reduce((acc, value) => acc + value, 0)
}

console.log(getAverageValue([2, 3]))