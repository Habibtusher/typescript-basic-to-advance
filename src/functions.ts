// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

const addtwo = (num1: number, num2: number) => {
  return num1 + num2;
};

const users: { 
  name: string;
  balance: number;
  addMoney(money: number): number;
} = {
  name: "habib",
  balance: 10,
  addMoney(money: number) {
    return this.balance + money;
  },
};
const greetting =(...friends:string[])=>{
    friends.map(friend => console.log(`Hi ${friend}`))

}
greetting("jodu","modu","kodu")