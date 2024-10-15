type newType<T> = T extends string ? string : number;

interface Person<T> {
  name: string;
  age: newType<T>;
}

function myFunc<T extends string | number>(obj: Person<T>): void {
  console.log(obj);
}

myFunc({ name: "Grace", age: "23" });
