class Person2 {
  /**
   * takeNap
   */
  public takeNap(): void {
    console.log("i am sleeping 8 hours");
  }
}

class Student3 extends Person2 {
  public takeNap(): void {
    console.log("i am sleeping 10 hours");
  }
}
class Developer extends Person2 {
  public takeNap(): void {
    console.log("i am sleeping 2 hours");
  }
}

function getNap(params: Person2) {
  params.takeNap();
}

const person = new Person2();
const student = new Student3();
const developer = new Developer();
getNap(person);
getNap(student);
getNap(developer);



//example 2


class Shape {
  /**
   * getArea
   */
  public getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }

  public getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectanglae extends Shape {
  constructor(public height: number, public width: number) {
    super();
  }
  /**
   * name
   */
  public getArea(): number {
    return this.height * this.width;
  }
}
function getAreaOfShape(params:Shape) {
    console.log(params.getArea());
}

getAreaOfShape(new Circle(5))
getAreaOfShape(new Rectanglae(5,5))