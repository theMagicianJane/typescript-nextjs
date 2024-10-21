
function BankAccount() {
  let balance = 0;
  const doTransaction = (moneyAmount, type) => {
    if (moneyAmount < 0) {
      throw new Error(`The deposit/withdraw amount of money can't be less than 0`);
    }

    if (typeof moneyAmount === 'number') {
      balance = type === 'deposit' ?  balance + moneyAmount : balance - moneyAmount;
    } else {
      throw new Error(`Invalid type of money amount`);
    }
  };

  this.deposit = moneyAmount => {
    if(typeof moneyAmount === 'number') {
      doTransaction(balance, moneyAmount, 'deposit');
    } else {
      throw new Error(`Invalid type of money amount`);
    }
  }

  this.withdraw = moneyAmount => {
    if (balance > moneyAmount) {
      doTransaction(balance, moneyAmount, 'withdraw');
    } else {
      throw new Error(`There isn't enough money on your account`);
    }
  }

  this.getBalance = () => console.log(balance);
}

const bankAccount = new BankAccount();
bankAccount.deposit(-100)
bankAccount.withdraw(50)
bankAccount.deposit(700000)
bankAccount.getBalance()