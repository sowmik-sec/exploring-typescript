type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newTypeUsingKeyOf = keyof PersonType;

const a: newTypeUsingKeyOf = "address";
const b: newTypeUsingKeyOf = "name";

// ({name:'Mr. X', age: 48})

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}

const property = getProperty({ name: "Mr. X", age: 38 }, "age");
