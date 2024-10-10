// interface

// interface IVehicle {
//   name: string;
//   model: string;
// }

// const vehicle: IVehicle = {
//   name: "Koenigsegg",
//   model: "Agera RS",
// };

// interface IVehicle {
//   startEngine(): void;
//   stopEngine(): void;
//   move(): void;
// }

// class Vehicle implements IVehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: string
//   ) {}
//   startEngine(): void {
//     console.log("Engine stared.");
//   }
//   stopEngine(): void {
//     console.log("Engine stopped.");
//   }
//   move(): void {
//     console.log("Car is moving.");
//   }
//   test() {
//     console.log(`I'm for testing purpose`);
//   }
// }

// const vehicle1 = new Vehicle("Car", "Bugatti", "Tourbillion");

// abstract class

abstract class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: string
  ) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract move(): void;
  abstract test(): void;
}

class Car extends Vehicle {
  startEngine(): void {
    console.log("car engine started.");
  }
  stopEngine(): void {
    console.log("car stopped.");
  }
  move(): void {
    console.log("car is moving.");
  }
  test(): void {
    console.log("testing.");
  }
}

// const car1 = new Vehicle("Car", "Pagani", " Utopia");
