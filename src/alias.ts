
type CrushType ={
    name:string,
    age?:number,
    profession:string,
    address:string
}
const crus1:CrushType ={
    name:"mahi",
    age:17,
    profession:"student",
    address:"dhaka"
}
const crus2:CrushType={
    name:"mahi",
    profession:"student",
    address:"dhaka"
}

type OperationType = (num1:number , num2:number)=> number
const calculate = (num1:number, num2:number,operation:OperationType)=>{
  console.log(operation(num1,num2));  
}
calculate(100,20,(x,y)=> x-y)