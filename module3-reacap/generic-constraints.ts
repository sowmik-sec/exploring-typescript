// const createArray = <X, Y>(param1: X, param2: Y): [X, Y] => {
//   return [param1, param2];
// };

// const result1 = createArray<string, string>("Bangladesh", "rude country");
// // const result2 = createArray<boolean>(true);
// const result3 = createArray<string, Array<string>>("Crushes", [
//   "Alexa Grace",
//   "Leah Gotti",
// ]);

// // spread operator

// const crust = "Alexa Grace";

// type MyInfoType = {
//   name: string;
//   age: number;
//   salary: number;
// };

// const myInfo: MyInfoType = {
//   name: "Mick Blue",
//   age: 47,
//   salary: 4234924,
// };

// const addMeInMyCrushMind = <T extends MyInfoType>(param: T): T => {
//   const crush = "Alexa Grace";
//   const newData = { ...param, crush };
//   return newData;
// };

// const result5 = addMeInMyCrushMind(myInfo);
