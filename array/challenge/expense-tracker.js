const account = {
    name : 'Andrew Mead',
    expenses: [],
    income: [],

    addExpense: function(description,ammount){
        this.expenses.push(
            {
                description: description,
                ammount: ammount
            }
        )

    },


    addIncome: function(description, ammount){
        this.income.push(
            {
                description: description,
                ammount: ammount
            }
        )
    },

    getAccountSummary: function () {
        let totalExpense = totalIncome = total = 0

            this.expenses.forEach(function (expense) {
                totalExpense += expense.ammount
            })

            this.income.forEach(function (income) {
                totalIncome += income.ammount
            })

            total = totalIncome - totalExpense;

                return `${this.name} has a balance of $${total}. $${totalIncome} in income and $${totalExpense} in expenses.`
        }
}

// Expense -> description, ammount
// getAccountSummary -> total up all expenses -> name account has $value in expenses.

account.addExpense('coffee',8)
account.addExpense('chocolate',10)


account.addIncome('Job',100)
console.log(account.getAccountSummary())

// add income array to account
// addIncome method -> description, amount
// Tweak a getAccountSummary