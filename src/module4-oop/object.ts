class Animal {
  public name: string;
  public species: string;
  public sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  public makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}


//using parameter properties (less code)

class Animal1 {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  public makeSound() {
    console.log(`The ${this.name} says ${this.sound} www`);
  }
}

const dog = new Animal("Tom", "dog", "ghew ghew");
const cat = new Animal1("snowy", "cal", "mew mew");
dog.makeSound();
cat.makeSound();
