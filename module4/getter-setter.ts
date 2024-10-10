class BankAccount {
  id: number;
  name: string;
  private _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  get balance(): number {
    return this._balance;
  }
  set balance(amount: number) {
    this._balance = amount;
  }
  //   getBalance() {
  //     return this.balance;
  //   }
  getDeposit(amount: number) {
    this._balance = this.balance + amount;
  }
}

class StudentAccount extends BankAccount {
  // test() {
  //   this.balance;
  // }
}

const myAccount = new BankAccount(444, "Melody Marks", 324);
console.log(myAccount);

console.log(myAccount.balance);

myAccount.balance = 423423;

console.log(myAccount.balance);
