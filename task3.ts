function getAverageValue (array: number[]): number {
  if (!array || !array.length) {
    throw new Error('Arguments should include an array with items type number');
  }

  return array.reduce((acc, value) => acc + value, 0)
}

console.log(getAverageValue([]))