class BankAccounts1 {
  constructor(
    public id: number,
    public name: string,
    private _balance: number
  ) {}

  //getter
  get balance(): number {
    return this._balance;
  }

  /**
   * printBalance
   */
  //setter
  set deposit(value: number) {
    this._balance =this._balance + value;
  }
  /**
   * addBalance
   */
//   public addBalance(amount: number) {
//     this._balance = this._balance + amount;
//   }
}
class StudentAccount1 extends BankAccounts1 {
  test() {}
}
const myAccounts1 = new BankAccounts1(1, "Habib", 5000);
myAccounts1.deposit = 100
console.log(myAccounts1.balance);
