type User = {
  name: string;
  age: number;
};

type extendedUser = User & {
  role: string;
};

interface IUser {
  name: string;
  age: number;
}

// const userWithTypeAsias: User = {
//   name: "Type Alias",
//   age: 100,
// };

// const userWithInterface: IUser = {
//   name: "Vagirothi",
//   age: 1000,
// };

interface IExtendedUser extends IUser {
  role: string;
}

type rollNumber = number;

// Object, Function, Array

type addNumbersType = (num1: number, num2: number) => number;

interface IAddNumbers {
  (num1: number, num2: number): number;
}

type rollNumbersType = number[];

interface IRollNumbers {
  [index: number]: number;
}

const rollNumbers: IRollNumbers = [1, 2, 3];

const addNumbers: IAddNumbers = (num1, num2) => num1 + num2;

const user: extendedUser = {
  name: "Manush",
  age: 23,
  role: "admin",
};
