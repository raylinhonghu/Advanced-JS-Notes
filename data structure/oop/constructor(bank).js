function Checking(amount){
  this.balance = amount;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.toString = toString;
}

function deposit(amount){
  this.balance += amount;
}

function withdraw(amount){
  if (amount > this.balance){
    console.log("insufficient Balance");
  }else{
    this.balance -= amount;
  }
}

function toString(){
  console.log("your balance is " + this.balance)
}

// word 'this' will bind propertise and methods to the object
