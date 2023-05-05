interface InfoInterface {
    name:string,
    age:number,
    salary: number
}

interface IMendatory {
    name:string,
    age:number,

}
const info1:InfoInterface ={
    name:"hhh",
    age:12,
    salary:560000
}

const addInfo1 = <T extends IMendatory>(info:T)=>{
    const dob="12-2-2020"
    const newInfo ={...info,dob}
    return newInfo

}
const res41 = addInfo1<InfoInterface>(info1)

console.log(res41);