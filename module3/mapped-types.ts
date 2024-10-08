const arrayOfNumbers = [1, 2, 3]; // make array string

const arrayOfStrings = arrayOfNumbers.map((number) => number.toString());
console.log(arrayOfStrings);

type Volume = {
  height: number;
  width: number;
  depth: number;
};

type Area<T> = {
  //   [key in keyof Volume]: Volume[key];
  [key in keyof T]: T[key];
};

const area1: Area<{ name: string }> = { name: "Sasha" };

type AreaString = {
  height: string;
  width: string;
};

type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
};

const rectangularArea: AreaReadOnly = {
  height: 10,
  width: 12,
};

type A = Volume["height"]; //look up types
type B = keyof Volume;
