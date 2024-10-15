const printString = (s: unknown): void => {
  if (typeof s === "string") {
    console.log(s);
  } else {
    console.log("You must provide string as input");
  }
};

printString("false");
