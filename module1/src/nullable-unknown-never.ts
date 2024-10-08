const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search");
  } else {
    console.log("Searching...");
  }
};

searchName(null);

const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed} mps`);
  }
  if (typeof speed === "string") {
    const value = speed.split(" ");
    const convertedSpeed = (parseFloat(value[0]) * 1000) / 3600;
    console.log(`My speed is ${convertedSpeed} mps`);
  } else {
    console.log("Type is wrong");
  }
};

getMyCarSpeed(10);
getMyCarSpeed("32 kmph");

function throwError(message: string): never {
  throw new Error(`Error may happen ${message}`);
}

// throwError("luck you");
