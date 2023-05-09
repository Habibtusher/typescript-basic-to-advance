let newVariable: any;

newVariable = "New Variable";

<string>newVariable.length;


const calculateKm = (val: string | number): string | number | undefined => {
  if (typeof val === "string") {
    const value = parseFloat(val) * 1000;
    return `converted result : ${value} grm`;
  } 
  if(typeof val === "number") {
    return val * 1000;
  }
};

const returnNumber = calculateKm(100) as number;
const returnString =calculateKm("100") as string;
console.log("result`", typeof returnString,returnString);