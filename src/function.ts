//normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 3);

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arrNum: number[] = [1, 3, 6];

const newArray = arrNum.map((elem: number) => elem * elem);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Johurul",
  balance: 506,
  addBalance(money: number) {
    console.log(`My new Balance is ${this.balance + money}`);
  },
};
