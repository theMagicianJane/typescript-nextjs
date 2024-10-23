function getAverageValue (array: number[]): number {
  if(array.length > 0 && !Array.isArray(array)) return;

  return array.reduce((acc, value) => acc + value, 0)
}

console.log(getAverageValue([]))