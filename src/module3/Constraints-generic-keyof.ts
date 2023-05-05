type newType ={
    name:string,
    age:number,
    dob:string
}

type newDataType = "name" | "age" |"dob"
type newTypeWithKeyof = keyof newType



const findKeyValue =<X,Y extends keyof X> (obj:X,key:Y)=>{
    return obj[key]
}

const reponse = findKeyValue({name:"rahman",age:23},"age")
console.log(reponse);

// const sum =(nums:Array<number>,target:number)=>{
//  for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1 ; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target)
//        return [i,j]     
//     }  
//  }
// }
// console.log(sum([3,2,4,4],6));