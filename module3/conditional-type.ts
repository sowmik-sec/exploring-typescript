// type a1 = null;
// type a3 = undefined;
// type a4 = number;

// type a2 = a1 extends string ? string : null;

// //nested conditional type
// type d = a1 extends null
//   ? null
//   : a3 extends number
//   ? number
//   : a4 extends null
//   ? null
//   : never;

// type Sheikh = {
//   wife1: string;
//   wife2: string;
// };

// type A = keyof Sheikh; // 'wife1' | 'wife2'

// // type CheckProperty<T, K> = T extends { wife1: string } ? true : false;

// type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

// type CheckWife2 = CheckProperty<Sheikh, "wife1">;

// type Bandhubi = "Arya" | "Rachel" | "Sasha";
// type RemoveBandhubi<T, K> = T extends K ? never : T;

// type CurrentBandhobi = RemoveBandhubi<Bandhubi, "Arya">;
