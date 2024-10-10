// // key of guard

// type Alphanumeric = number | string;

// function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
//   if (typeof param1 === "number" && typeof param2 === "number") {
//     return param1 + param2;
//   } else {
//     return parseFloat(param1.toString()) + parseFloat(param2.toString());
//   }
// }

// console.log(add("23", "42"));

// type NormalUserType = {
//   name: string;
// };

// type AdminUserType = {
//   name: string;
//   role: "admin";
// };

// function getUser(user: NormalUserType | AdminUserType) {
//   if ("role" in user) {
//     return `I'm an admin and my role is ${user.role}`;
//   } else {
//     return `I'm a normal user`;
//   }
// }

// const normalUser1: NormalUserType = { name: "Timea Bela" };
// const adminUser1: AdminUserType = { name: "Leana Lovings", role: "admin" };

// console.log(getUser(adminUser1));

// // instance of guard

// class Animal {
//   name: string;
//   species: string;
//   constructor(name: string, species: string) {
//     this.name = name;
//     this.species = species;
//   }
//   makeSound() {
//     console.log(`I'm making sound`);
//   }
// }

// class Dog extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeBark() {
//     console.log(`I'm barking`);
//   }
// }

// class Cat extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeMeaw() {
//     console.log(`I'm Meawing`);
//   }
// }

// function isDog(animal: Animal): animal is Dog {
//   return animal instanceof Dog;
// }
// function isCat(animal: Animal): animal is Cat {
//   return animal instanceof Cat;
// }

// function getAnimal(animal: Animal) {
//   if (isDog(animal)) {
//     animal.makeBark();
//   } else if (isCat(animal)) {
//     animal.makeMeaw();
//   } else {
//     animal.makeSound();
//   }
// }

// const animal1 = new Dog("German Bhai", "dog");
// const animal2 = new Cat("Pertian Bhai", "cat");
