
//common value in person
class Person {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}
  makeSleep(hours: number): string {
    return `${this.name} will sleep ${hours} hours`;
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

class Teacher extends Person {
  constructor(
    name: string,
    age: number,
    address: string,
    public designation: string
  ) {
    super(name, age, address);
    this.designation = designation;
  }

  takeClasses(classes: number): string {
    return `${this.name} will talke ${classes} classes`;
  }
}

const stu1 = new Student("habib", 23, "bhuapur");
const techer1 = new Teacher("habib sir", 23, "Dhaka", "Professors");

console.log(techer1.takeClasses(2));
