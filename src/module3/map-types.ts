 const arrysOfNumber = [1,2,3]


 const araryOfString = arrysOfNumber.map(number => number.toString()) 
 console.log(araryOfString);

 type Volume = {
    height: number,
    width: number,
    depth: string
 } 
 type mewww<T> ={
  readonly [key in keyof T] : T[key]
  // [key in keyof Volume] : Volume[key]
 }

 const area1 :mewww<Volume>={
  height:12,
  width:23,
  depth: "444"
 }


 function getArrayItem<T, K extends keyof T>(arr: T[], index: number, key: K): T[K] {

  const item = arr[index];

  return item[key];

}



const users4 = [ { name: 'John', age: 30 }, { name: 'Mary', age: 25 },];

console.log(getArrayItem(users4, 0, 'name'))

interface Person {

  firstName: string;

  lastName: string;

}



function fullName<T extends Person>(person: T): string {

  return `${person.firstName} ${person.lastName}`;

}
console.log(fullName<Person>({firstName:"hahha",lastName:"jd"}));