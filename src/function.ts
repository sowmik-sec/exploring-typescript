//normal function

// default parameter
function add(num1: number, num2: number = 35): number {
  return num1 + num2;
}

add(3);

// spread operator
const myFriends = ["Danny", "Arya", "Khalisi"];
const newFriends = ["John", "Robert", "Ramsay"];
myFriends.push(...newFriends);
// console.log(myFriends);
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

// rest parameter

const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`Hi ${friend}`));

greetFriends("Mormont", "Lyana", "Sansa");

const [bestFriend] = myFriends;

console.log(`My best friend is ${bestFriend}`);

const myBestFriend: {
  name: string;
  age: number;
} = {
  name: "Theon Greyjoy",
  age: 34,
};

const { name: bFriendName } = myBestFriend;
console.log(bFriendName);
