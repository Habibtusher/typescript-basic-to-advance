//! 1.
const userInfo2: [number, string, string, boolean, undefined, string] = [
  101,
  "Ema",
  "John",
  true,
  ,
  "2023",
];

//? 2.

function compareTwoArray(arr1: Array<number>, arr2: Array<number>) {
  let newArray: Array<number> = [];
  arr1.forEach((element) => {
    if (arr2.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;
}
// console.log(compareTwoArray([1, 2, 3, 4, 5],[2, 4, 6, 8]));

//! 3.

interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}
function filterProduct<X extends IProduct, Y extends keyof X>(
  arr: X[],
  criterion: Y,
  value: X[Y]
): X[] {
  const filteredData = arr.filter((ele) => ele[criterion] === value);
  return filteredData;
}
const products3: IProduct[] = [
  { id: 1, name: "Product 1", price: 20, category: "Electronics" },
  { id: 2, name: "Product 2", price: 30, category: "Electronics" },
  { id: 3, name: "Product 3", price: 40, category: "Electronics" },
  { id: 4, name: "Product 4", price: 50, category: "F" },
];
// console.log(filterProduct(products3,"category","F"));

//? 4.

type ProductTuples<X, Y, Z> = [X, Y, Z];
type ProductArray = ProductTuples<string, number, number>[];

function totalCostCalculate(arr: ProductArray): number {
  let total = 0;
  for (const [name, price, quantity] of arr) {
    total += price * quantity;
  }
  return total;
}

const Productss: ProductArray = [
  ["Product 1", 20, 1],
  ["Product 2", 30, 1],
  ["Product 3", 40, 1],
];
// console.log(totalCostCalculate(Productss));

//! 5.

function calculateArraySum(...arr: Array<number>): number {
  let total = 0;
  for (const ele of arr) {
    if (ele % 2 === 0) {
      total += ele;
    }
  }
  return total;
}
// console.log(calculateArraySum(1,2,3,4));

//? 6.

interface PersonInterface {
  name: string;
  age: number;
  email: string;
}

function findUser(
  arr: PersonInterface[],
  email: string
): PersonInterface | null {
  const user = arr.find((ele) => ele.email === email);
  if (user) {
    return user;
  } else {
    return null;
  }
}

const Person23: PersonInterface[] = [
  {
    name: "Habib",
    age: 23,
    email: "tugrp@example.com",
  },
  {
    name: "Rahman",
    age: 23,
    email: "rahman@example.com",
  },
];
// console.log(findUser(Person23,"rahmexample.com"));

//! 7.

const findMaxAndMinNumberInArray = (...arr: Array<number>): void => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    console.log(min, max);
};
findMaxAndMinNumberInArray(1,2,3,4,56)


//? 8.

type colors = "red" | "blue" | "green"

const colorProblem =(color:colors,isUppercase?:boolean):void=>{
    if(isUppercase){
        console.log(color.toUpperCase());
    }
    else{
        console.log(color.toLowerCase());
    }

}
colorProblem("red",true)