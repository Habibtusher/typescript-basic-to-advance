//! 1. Convert the following JavaScript array into a TypeScript tuple
//!  const userInfo = [101, "Ema", "John", true,  , "2023"];

const userInfo: [number, string, string, boolean, undefined, string] = [
    101,
    "Ema",
    "John",
    true,
    undefined,
    "2023",
  ];
  // console.log(userInfo);
  
  //!  2. Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.
  
  //! For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.
  
  //! The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.
  
  const compareFunction = (
    array1: Array<number>,
    array2: Array<number>
  ): Array<number> => {
    let output: number[] = [];
    array1.forEach((element) => {
      if (array2.includes(element)) {
        output.push(element);
      }
    });
    return output;
  };
  const array1 = [1, 2, 3, 4, 4, 5];
  const array2 = [2, 4, 6, 7, 5, 5, 8, 7];
  
  // console.log(compareFunction(array1, array2));
  
  //! You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.
  
  //! Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.
  
  interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
  }
  
  const products1: Product[] = [
    { id: 1, name: "Product 1", price: 20, category: "Electronics" },
    { id: 2, name: "Product 2", price: 30, category: "Electronics" },
    { id: 3, name: "Product 3", price: 40, category: "Electronics" },
    { id: 4, name: "Product 4", price: 50, category: "F" },
  ];
  
  const filterFunction = <X extends Product, Y extends keyof X> (
    products: X[],
    criterion: Y,
    value: X[Y]
  ): X[] => {
    return products.filter((product) => product[criterion] === value);
  };
  
  
  console.log(filterFunction(products1,"category","Electronics"));



//! 4. Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type ProductTuple<X, Y, Z> = [X, Y, Z];
type ProductType = ProductTuple<string, number, number>[];
const calculateTotalCost = (products: ProductType): number => {
  let totalCost = 0;
  //   for (let i = 0; i < products.length; i++) {
  //     const [name,price,quantity] = products[i]
  //     totalCost += price * quantity;

  //   }
  for (const [name, price, quantity] of products) {
    totalCost += price * quantity;
  }
  return totalCost;
};

const products34: ProductType = [
  ["Apples", 2, 10],
  ["Bananas", 1, 20],
  ["Oranges", 1, 5],
];

const totalCost = calculateTotalCost(products34);
console.log(totalCost);

//! 5. Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?
const numbers: Array<number> = [1, 3, 5, 8];

const sumOfAllNumbers = (array: Array<number>): number => {
  let sum: number = 0;
  for (const number of array) {
    if (number % 2 === 0) {
      sum += number;
    }
  }
  return sum;
};
console.log(sumOfAllNumbers(numbers));

//! 6. Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.

interface IPerson {
  name: string;
  age: number;
  email: string;
}

const findPersonByEmail = (
  array1: IPerson[],
  email: string
): IPerson | null => {
  const person = array1.find((ele) => ele.email === email);
  if (person) {
    return person;
  } else {
    return null;
  }
};
const persons: IPerson[] = [
  { name: "habi", age: 25, email: "tusher@gmail.com" },
  { name: "mon", age: 25, email: "mon@gmail.com" },
  { name: "sara", age: 25, email: "sara@gmail.com" },
  { name: "tonoy", age: 8, email: "tonoy@gmail.com" },
];
console.log(findPersonByEmail(persons, "tonoy@gmail.com"));


//! 7. Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.

const findMaxAndMin =(...array1:Array<number>):void=>{
    const min = Math.min(...array1);
    const max = Math.max(...array1);
    console.log(min,max);

}
findMaxAndMin(1,2,3,4,5,6,7,8,9,10,78)



//! 8. Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.

type colorType = "red" | "green" | "blue";

const FormateColor = (color: colorType, isUppercase?: boolean) => {
  if (isUppercase === true) {
    return color.toLocaleUpperCase();
  }
  return color.toLocaleLowerCase();
};

// console.log(FormateColor("red",true));
