type Color = "red" | "green" | "blue";

const checkColor = (color: Color, flag?: boolean): void => {
  if (flag) {
    console.log(color.toUpperCase());
  } else {
    console.log(color.toLowerCase());
  }
};

checkColor("green", false);
