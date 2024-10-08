// Generic interface
interface CrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

interface PersonInterface {
  name: string;
  age: number;
}

const crush$: CrushInterface<PersonInterface, PersonInterface> = {
  name: "Anikka Albright",
  husband: { name: "Mick Blue", age: 46 },
  wife: { name: "Tori Black", age: 36 },
};

const crust1: CrushInterface<boolean, undefined> = {
  name: "Leah Gotti",
  husband: true,
};

const crust2: CrushInterface<string, null> = {
  name: "Leah Gotti",
  husband: "Anonymous",
};
const crust3: CrushInterface<object, string> = {
  name: "Leah Gotti",
  husband: {
    name: "Mr. X",
    salary: 1234,
  },
  wife: "Lana Rhoades",
};

type GenericTuple<X, Y> = [X, Y];
type RelationWithSalary = {
  name: string;
  salary: number;
};

const relation: GenericTuple<string, string> = ["Arya", "Sansa"];
interface RelationWithSalaryInterface {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [
  {
    name: "Lyana",
    salary: 1342334,
  },
  "Charcie",
];

type GenericArray<T> = Array<T>;
const rollNumbers: GenericArray<number> = [44, 12, 4];
const rollNumbers2: GenericArray<string> = ["44", "12", "4"];
const rollNumber3: GenericArray<boolean> = [true, false];

type NameRollType = { name: string; roll: number };

const userNameAdnRollNumbers: GenericArray<NameRollType> = [
  {
    name: "Mr. x",
    roll: 12,
  },
  {
    name: "Mr. y",
    roll: 120,
  },
];
