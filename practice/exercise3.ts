// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
// }

// function findProducts<X extends Product>(products: X[], category: string): X[] {
//   return products.filter(
//     (product) => product.category.toLowerCase() === category.toLowerCase()
//   );
// }

// const products: Product[] = [
//   { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
//   { id: 2, name: "Phone", price: 800, category: "Electronics" },
//   { id: 3, name: "Shoes", price: 100, category: "Fashion" },
//   { id: 4, name: "Watch", price: 250, category: "Fashion" },
//   { id: 5, name: "Tablet", price: 600, category: "Electronics" },
//   { id: 6, name: "Headphones", price: 150, category: "Electronics" },
//   { id: 7, name: "T-Shirt", price: 30, category: "Fashion" },
//   { id: 8, name: "Desk Lamp", price: 40, category: "Home & Office" },
//   { id: 9, name: "Chair", price: 120, category: "Home & Office" },
//   { id: 10, name: "Backpack", price: 70, category: "Fashion" },
// ];

// console.log(findProducts(products, "Electronics"));
