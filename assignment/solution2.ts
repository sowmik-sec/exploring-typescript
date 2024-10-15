const persons = [
  { name: "Alice", age: 24 },
  { name: "Bob", age: 57 },
  { name: "Charlie", age: 35 },
  { name: "Diana", age: 68 },
  { name: "Eve", age: 42 },
  { name: "Frank", age: 9 },
  { name: "Grace", age: 76 },
  { name: "Hank", age: 5 },
  { name: "Ivy", age: 32 },
  { name: "Jack", age: 50 },
];

interface Person {
  name: string;
  age: number;
}

function adultPersons<T extends Person>(persons: T[]) {
  return persons.filter((person) => person.age >= 18);
}

console.log(adultPersons(persons));
