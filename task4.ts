interface Good { name: string, price: number, available: boolean }

function getStringDescription (good: Good): string {
  if (typeof good !== 'object') return;

  const { name, price, available } = good;

  if ( price <= 0 ) {
    throw new Error ('Price should not be 0 or less than 0')
  }

  return `Good: ${name}, price: ${price}$, available: ${available ? 'In stock': 'Out of stock'}`
}

console.log(getStringDescription({ name: 'Cup', price: 1, available: true }));