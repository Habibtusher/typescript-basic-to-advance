class BankAccounts {
  constructor(
    public id: number,
    public name: string,
    protected _balance: number
  ) {}

  /**
   * printBalance
   */
  public printBalance() {
    console.log(`current balance ${this._balance}`);
  }
  /**
   * addBalance
   */
  public addBalance(amount: number) {
    this._balance = this._balance + amount;
  }
}
class StudentAccount extends BankAccounts {
  test() {
    console.log(this._balance);
  }
}
const myAccounts = new BankAccounts(1, "Habib", 5000);

console.log(myAccounts);
