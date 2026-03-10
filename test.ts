// Test file for review reply check workflow
export function hello() {
  console.log('hello');
}

export function calculateTotal(items: { price: number; quantity: number }[]) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
