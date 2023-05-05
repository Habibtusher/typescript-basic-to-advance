type GenericType<T> = Array<T>;
type GenericTuples<X, Y> = [X, Y];

// type NameAndsalary = {
//   name: string;
//   salary: number;
// };

interface INameAndSalary {
    name: string,
    salary: number
}
const genericTuplesCheck: GenericTuples<INameAndSalary, string> = [
  {
    name: "habib",
    salary: 22222,
  },
  "mahi",
];
const rollNumbers: GenericType<number> = [1, 12, 13];
const rollNumbers2: GenericType<string> = ["1", "2", "3"];

type NameRoll = { name: string; age: number };
const userNameAndRoll: GenericType<NameRoll> = [
  {
    name: "f",
    age: 2,
  },
];
