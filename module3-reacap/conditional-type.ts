// type a1 = string;
// type a3 = undefined;
// type a4 = number;
// type a2 = a1 extends string ? string : null;

// type d = a1 extends null
//   ? null
//   : a3 extends number
//   ? number
//   : a4 extends null
//   ? null
//   : number;

// type Sheikh = {
//   wife1: string;
//   wife2: string;
// };

// type A = keyof Sheikh;

// type CheckProperty<T, K> = K extends A ? true : false;

// type CheckWife1 = CheckProperty<Sheikh, "wife1">;

// type Bandhobi = "Lexi" | "Lena" | "Lexi";

// type RemoveBandhobi<T, K> = T extends "Lena" ? never : T;

// type CurrentBandhobi = RemoveBandhobi<Bandhobi, "Lena">;
