const createArray = (param: string): string[] => {
  return [param];
};

const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};
function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}

type Name = { name: string };

const result = createArray1<string, string>("Bangladesh", "I love my country");
const result2 = createArray1<boolean, number>(true, 33);
const result3 = createArray1<Name, boolean>({ name: "Bangladesh" }, true);
const result4 = createArray1<boolean, Array<string>>(true, ["Bahrain"]);

// spread operator

const addMeInMyCrushMind = <T>(myInfo: T) => {
  const crush = "Alexa Grace";
  const newData = { ...myInfo, crush };
  return newData;
};

const myInfo = {
  name: "Mick Blue",
  age: 48,
  salary: 4324234234,
};

const result5 = addMeInMyCrushMind(myInfo);

result5.crush;
