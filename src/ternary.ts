const age = 14;
age > 18 ? console.log("adult") : console.log("not adult");

//nullish
const isAuthenticate = undefined;
const userName = isAuthenticate ?? "Guest"
console.log(userName);
function generateAdder(a: number): (b: number) => number {

    return function(b: number) {
  
      return a + b;
  
    };
  
  }
  
  
  
  const addTwo = generateAdder(2);
  
  console.log(addTwo(3));
  
  console.log(addTwo(5));