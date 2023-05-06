// key of guards

function add(
  params1: string | number,
  params2: string | number
): string | number {
  if (typeof params1 === "number" && typeof params2 === "number") {
    return params1 + params2;
  } else {
    return params1.toString() + params2.toString();
  }
}
// console.log(add(1, 1));

//in guards

type normalUser = {
  name: string;
};
type adminUser = {
  name: string;
  role: "admin";
};
function getUserType(params: normalUser | adminUser): string {
  if ("role" in params) {
    return `${params.name} your are admin`;
  } else {
    return `${params.name} your are not admin`;
  }
}
const userNormal: normalUser = { name: "rohim" };
const userAdmin: adminUser = { name: "rohim", role: "admin" };
console.log(getUserType(userAdmin));

//instaceof gaurds
class Animal4 {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  public makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}
class Dog extends Animal4 {
  constructor(name: string, species: string, sound: string) {
    super(name,species,sound)
  }
  public DogMethod() {
    console.log(`${this.species} sounds ${this.sound}`);
  }
}
class Cat extends Animal4 {
  constructor(name: string, species: string, sound: string) {
    super(name,species,sound)
  }
  public CatMethod() {
    console.log(`${this.species} sounds ${this.sound}`);
  }
}

function isDog(animal:Animal4):animal is Dog {
  return animal instanceof Dog
}

function getAnimal(animal:Animal4) {
  if (isDog(animal)) { //check instance
    animal.DogMethod();
  }
  else if(animal instanceof Cat){
    animal.CatMethod();
  }
  else{
    animal.makeSound
  }
  
}
const dog2 = new Dog("Tom", "dog", "ghew ghew"); //instanceof Dog
const cat3 = new Cat("snowy", "cal", "mew mew"); //instanceof Cat
getAnimal(cat3)