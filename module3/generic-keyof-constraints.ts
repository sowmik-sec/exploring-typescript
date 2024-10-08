type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address";

type newTypeUsingKeyOf = keyof PersonType;

const a: newType = "address";
const b: newType = "name";

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {}

const property = getProperty({ name: "Mr. X", age: 42 }, "age");
