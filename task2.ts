const original = { a: 1, b: { c: 2 }, d: [{ d: { c: 5 }}, 4] };

const isObject = (data): boolean => typeof data === 'object' && !Array.isArray(data) && data !== null;

const cloneArray = data => {
  const newArray = [];

  data.forEach(item => newArray.push(createDeepClone(item)));

  return newArray;
}

const cloneObject = data => {
  const newObject = {}

  Object.entries(data).forEach(([key, value]) => {
    newObject[key] = createDeepClone(value) })

  return newObject;
}

const createDeepClone = data => {
  switch(true) {
    case Array.isArray(data):
      return cloneArray(data);

    case isObject(data):
     return cloneObject(data);

    default:
      return data;
  }
}

const deepCloned = createDeepClone(original);

console.log(deepCloned === original);
console.log(deepCloned.b === original.b);
console.log(deepCloned.d === original.d);
console.log(deepCloned.d[0] === original.d[0]);
console.log(deepCloned.d[0]['d'] === original.d[0]['d']);