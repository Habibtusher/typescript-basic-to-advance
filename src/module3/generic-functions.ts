
const addArray =<T>(value : T): T[]=>{
 return [value]
}

const addArrayWithTuples =<X,Y,Z> (value1:X,value2:Y,value:Z):[X,Y,Z]=>{
return [value1,value2,value]
}
const res = addArrayWithTuples<number,string,Array<string>>(1,"ee",["k"])
const res1 = addArray<string>("f")



//spread operator
const info ={
    name:"hhh",
    age:12,
}

const addInfo = <T>(info:T)=>{
    const dob="12-2-2020"
    const newInfo ={...info,dob}
    return newInfo

}
const res4 = addInfo(info)

console.log(res4);