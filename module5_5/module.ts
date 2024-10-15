import { add as addTwo } from "./main";
export const add = (param1: number, param2: number): number => {
  return param1 + param2;
};

console.log(addTwo(2, 3, 5));
