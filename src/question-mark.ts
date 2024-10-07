//ternary operator

const age: number = 15;

// if (age >= 18) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

const isAdult = age >= 18 ? "Yes" : "No";
// console.log(isAdult);

const isAuthenticatedUser = undefined;
// Nullish coalesnace operator
const userName = isAuthenticatedUser ?? "Guest";
console.log(userName);

type human = {
  name: string;
  age: number;
  address: {
    city: "No City";
    road: "No Road";
    home?: "";
  };
};

const manush1: human = {
  name: "Leana Lovings",
  age: 26,
  address: {
    city: "No City",
    road: "No Road",
  },
};

console.log(manush1);
