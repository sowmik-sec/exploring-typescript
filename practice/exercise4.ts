// type ProductType = [string, number, number];

// const products: ProductType[] = [
//   ["Laptop", 1200, 5],
//   ["Phone", 800, 10],
//   ["Shoes", 100, 50],
//   ["Watch", 250, 20],
//   ["Tablet", 600, 7],
//   ["Headphones", 150, 30],
//   ["T-Shirt", 30, 100],
//   ["Desk Lamp", 40, 15],
//   ["Chair", 120, 25],
//   ["Backpack", 70, 60],
// ];

// function calculatePrice<T extends ProductType>(products: T[]): number {
//   return products.reduce(
//     (total, product) => total + product[1] * product[2],
//     0
//   );
// }

// console.log(calculatePrice(products));
