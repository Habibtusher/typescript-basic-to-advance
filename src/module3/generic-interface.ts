interface CrushInterface<T, X> {
  name: string;
  husband: T;
  wife?: X;
}

const crush1: CrushInterface<boolean, boolean> = {
  name: "jul8",
  husband: true,
  wife: true,
};
const crush2: CrushInterface<string, string> = {
  name: "julh",
  husband: "true",
  wife: "yes",
};
const crush3: CrushInterface<{name:string,salary:number}, string> = {
  name: "jul",
  husband: {
    name:"hh",
    salary:890
  },
  wife: "yes",
};
console.log(crush3);