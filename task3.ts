const createTree = (depth: number): object => {
  let newObject = {};

  if (!depth || typeof depth === 'number') {
    throw new Error('Argument should be type number and more than 0');
  }

  Array.from({ length: depth }, (_, i) => i + 1)
    .forEach(depth => {
      newObject = { value: depth, child: depth <= 1 ? null : createTree(depth - 1) }
  })

  return newObject;
}

console.log(createTree(0))