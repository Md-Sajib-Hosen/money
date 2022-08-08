
function getTheValue() {
  // get the income
  const getIncomeField = document.getElementById('income-field');
  const Income = parseFloat(getIncomeField.value);
  //food expense
  const foodExpenseField = document.getElementById('food-field');
  const foodExpense = parseFloat(foodExpenseField.value);

  //rent expense
  const rentExpenseField = document.getElementById('rent-field');
  const rentExpense = parseFloat(rentExpenseField.value)
  //Clothes expense

  const clothesExpenseField = document.getElementById('clothes-field');
  const clothesExpense = parseFloat(clothesExpenseField.value)
  //Total Expense
  const totalExpense = (foodExpense + rentExpense + clothesExpense);

  const getExpense = document.getElementById('expenseAmount');
  //Getting Balance 
  const getBalance = document.getElementById('balance-amount');

  //Checking Condition or Validity 
  if (Income < 0 || isNaN(Income)) {

    getIncomeField.value = ' ';
    return window.alert('Put the valid Income')
  }

  else if (foodExpense < 0 || isNaN(foodExpense)) {
    foodExpenseField.value = ' ';

    return window.alert('Please put valid Food Expense')
  }
  else if (rentExpense < 0 || isNaN(rentExpense)) {
    rentExpenseField.value = '';
    return window.alert('Put valid rent Expense')

  }
  else if (clothesExpense < 0 || isNaN(clothesExpense)) {

    clothesExpenseField.value = ' ';
    return window.alert('Put valid clothes Expense')
  }

  else if (totalExpense > Income) {
    getExpense.innerText = '';
    getBalance.innerText = ' ';

    return window.alert('Increase your Income')
  }


  // set Total Expense
  getExpense.innerText = totalExpense;

  //set balance amount
  getBalance.innerText = Income - totalExpense;


}

//calculate button event handler
document.getElementById('calculate-btn').addEventListener('click', function () {


  getTheValue();
})

//savings  button event handler

document.getElementById('savings-btn').addEventListener('click', function () {


  function saveButton() {


    const getParcentage = document.getElementById('savings-parcentange');
    const parcentangeValue = parseFloat(getParcentage.value);

    // balance

    const getBalance = document.getElementById('balance-amount').innerText;
    const balance = parseFloat(getBalance);

    // set savings amount 

    const savingAmount = balance * parcentangeValue / 100;
    //get savings
    const getSavings = document.getElementById('saving-amount');

    const remainingBalance = balance - savingAmount;
    const getRemainingBalance = document.getElementById('remaining-balance');

    //Checking condition or Validity
    if (parcentangeValue < 0 || isNaN(parcentangeValue)) {
      getSavings.innerText = '';
      getParcentage.value = ' ';
      getRemainingBalance.innerText = ' ';

      return window.alert('Put a valid Savings Amount')

    }

    else if (savingAmount > balance || isNaN(savingAmount)) {
      getSavings.innerText = '';
      getParcentage.value = ' ';
      getRemainingBalance.innerText = ' ';

      return window.alert('Increase your Balance to save more')
    }

    getSavings.innerText = savingAmount;

    //set ramining balance 

    getRemainingBalance.innerText = remainingBalance;

  }

  saveButton()

})



