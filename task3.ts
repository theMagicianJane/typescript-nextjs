const checkIfNumber = array => array.every(item => typeof item === 'number' && !isNaN(item));

function getAverageValue (array: number[]): number {
  if (!array || !array.length || !checkIfNumber(array)) {
    throw new Error('Arguments should include an array with items type number');
  }

  return array.reduce((acc, value) => acc + value / array.length, 0)
}

console.log(getAverageValue([6, 1]))