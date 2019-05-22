let myAccount = {
    name: 'Gabi',
    expenses: 0,
    income: 0
};

let addExpense = function (account,ammount) {
    account.expenses += ammount;
};

let addIncome = function (account,credit){
    account.income += credit
};


let resetAccount = function(account){
    account.expenses = 0
    account.income = 0
};


let getAccountSummary = function(account){
    return console.log(`Account for ${account.name} has $${account.income - account.expenses}.  $${account.income} in income and $${account.expenses} in expenses`)
}

getAccountSummary(myAccount)

addIncome(myAccount,1000)
getAccountSummary(myAccount)

addExpense(myAccount, 20)
getAccountSummary(myAccount)

addExpense(myAccount, 25)
getAccountSummary(myAccount)

resetAccount(myAccount)
getAccountSummary(myAccount)



