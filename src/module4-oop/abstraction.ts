//! interface

// interface IVehicle {
//     name:string,
//     model:string
// }

// const vehicle:IVehicle={
//     name: "BMW",
//     model: 'X5'
// }
interface IVehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}
class Vehicle implements IVehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  startEngine(): void {
    console.log("startEngine");
  }
  stopEngine(): void {
    console.log("stopEngine");
  }
  move(): void {
    console.log("move");
  }
  test() {
    console.log("working");
  }
}

console.log(new Vehicle("car", "bmw", 67));

//! abstract class

abstract class Vehicle3 {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  abstract startEngine(): void 
  abstract stopEngine(): void 
   move(): void {
    console.log("move");
  }
}

class Car extends Vehicle3 {
    startEngine(): void {
        console.log("startEngine");
    }
    stopEngine(): void {
        console.log("stopEngine");
    }
  
}

console.log(new Car("bmw","br",908));