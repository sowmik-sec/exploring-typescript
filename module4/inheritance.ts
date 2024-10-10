class Parent {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}
  makeSleep(hours: number) {
    return `${this.name} will sleep for ${hours}`;
  }
}

class Student extends Parent {
  constructor(public name: string, public age: number, public address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("Lena Paul", 30, "DeLand, Florida, United States");

class Teacher extends Parent {
  constructor(
    public name: string,
    public age: number,
    public address: string,
    public designation: string
  ) {
    super(name, age, address);
  }

  takeClasses(numOfClass: number): string {
    return `${this.name} will take ${numOfClass} class`;
  }
}

const teacher1 = new Teacher(
  "Angela White",
  39,
  "Sydney, Australia",
  "Professor"
);

console.log(teacher1.takeClasses(3));
