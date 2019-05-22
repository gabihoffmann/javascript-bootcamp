let myAccount = {
    name: 'Gabi',
    expenses: 0,
    income: 0
};

let addExpense = function (account,ammount) {
    account.expenses = + ammount;
    console.log(account)
    //The property changes will be reflected in myAccount object
    //because the objects are passed by reference
};

let addExpenseTwo = function (account,ammount) {
    account = {}
    // the relationship it's broken when try to assign a new value to the account
    // so the account point to another place in the memory
    console.log(account)
};

addExpense(myAccount, 2.50)
console.log(myAccount)

addExpenseTwo(myAccount, 2.60)
console.log(myAccount)

