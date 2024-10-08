// type GenericTuple<X, Y> = [X, Y];

// const relation: GenericTuple<string, string> = ["Arya", "Gendrey"];

// type RelationWithSalaryType = {
//   name: string;
//   salary: number;
// };

// interface RelationWithSalaryInterface {
//   name: string;
//   salary: number;
// }

// const relationWithSalary: GenericTuple<object, string> = [
//   { name: "Arya", salary: 234 },
//   "fasdfsd",
// ];
// const relationWithSalary2: GenericTuple<RelationWithSalaryInterface, string> = [
//   { name: "Arya", salary: 234 },
//   "fasdfsd",
// ];

// type GenericArray<T> = Array<T>;

// const rollNumbers: GenericArray<number> = [12, 3, 4];
// const rollNumbers2: GenericArray<string> = ["12", "3", "4"];
// const rollNumber3: GenericArray<boolean> = [true, false];

// type NameRollType = { name: string; roll: number };

// const userNameAndRollNumber: Array<NameRollType> = [
//   { name: "Mr. X", roll: 12 },
//   { name: "Mr. Y", roll: 132 },
// ];
