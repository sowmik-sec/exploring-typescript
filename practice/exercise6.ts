// interface Person {
//   name: string;
//   age: number;
//   email: string;
// }

// const persons: Person[] = [
//   {
//     name: "Dani",
//     age: 23,
//     email: "da@ni.com",
//   },
//   {
//     name: "Danyal",
//     age: 21,
//     email: "da@nyal.com",
//   },
//   {
//     name: "Lexi",
//     age: 20,
//     email: "le@xi.com",
//   },
//   {
//     name: "Lore",
//     age: 22,
//     email: "lo@re.com",
//   },
//   {
//     name: "Alexa",
//     age: 29,
//     email: "ale@xa.com",
//   },
//   {
//     name: "Grace",
//     age: 28,
//     email: "gra@ce.com",
//   },
// ];

// const findPerson = <T extends Person>(
//   persons: Person[],
//   email: string
// ): Person | null => {
//   return persons.find((person) => person.email === email) || null;
// };

// console.log(findPerson(persons, "ale@xa.com"));
