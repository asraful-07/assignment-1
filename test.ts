interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  return products
    .map((item) => {
      const baseTotal = item.price * item.quantity;
      const discountAmount = item.discount
        ? (baseTotal * item.discount) / 100
        : 0;

      return baseTotal - discountAmount;
    })
    .reduce((acc, curr) => acc + curr, 0);
}

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
