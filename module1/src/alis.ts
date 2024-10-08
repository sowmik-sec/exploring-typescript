type CrustType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};
const crust1: CrustType = {
  name: "Leah Gotti",
  age: 27,
  profession: "acting",
  address: "Texas",
};
const crust2: CrustType = {
  name: "Alexa Grace",
  profession: "acting",
  address: "California",
};

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

type CrushNameType = string;

type OperationType = (x: number, y: number) => number;

const calculate = (
  number1: number,
  number2: number,
  operation: OperationType
) => {
  return operation(number1, number2);
};

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
