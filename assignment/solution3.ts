function reverseString<T>(...str: T[]): T[] {
  return str.reverse();
}

const result1 = reverseString("abc", "def", "asdf", "hf", "fda");
const result2 = reverseString("abc", "hf", "fda");

console.log(result1);
console.log(result2);
