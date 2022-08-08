
function getTheValue() {
  // get the income
  const getIncomeField = document.getElementById('income-field');
  const Income = parseFloat(getIncomeField.value);
  // expense
  //food expense
  const foodExpenseField = document.getElementById('food-field');
  const foodExpense = parseFloat(foodExpenseField.value);

  //rent expense

  const rentExpenseField = document.getElementById('rent-field');
  const rentExpense = parseFloat(rentExpenseField.value)
  //Clothes expense

  const clothesExpenseField = document.getElementById('clothes-field');
  const clothesExpense = parseFloat(clothesExpenseField.value)



  //Expense amount
  const totalExpense = (foodExpense + rentExpense + clothesExpense);

  // set Total Expense

  const getExpense = document.getElementById('expenseAmount');

  getExpense.innerText = totalExpense;

  //set balance amount

  const getBalance = document.getElementById('balance-amount');
  getBalance.innerText = Income - totalExpense;







}

//calculate button event handler
document.getElementById('calculate-btn').addEventListener('click', function () {


  getTheValue();
})

//save button event handler

document.getElementById('savings-btn').addEventListener('click', function () {



  const getParcentage = document.getElementById('savings-parcentange');
  const parcentangeValue = parseFloat(getParcentage.value);

  // balance

  const getBalance = document.getElementById('balance-amount').innerText;
  const balance = parseFloat(getBalance);

  // set savings amount 

  const savingAmount = balance * parcentangeValue / 100;


  const getSavings = document.getElementById('saving-amount');
  getSavings.innerText = savingAmount;



  // const getSavings = document.getElementById('saving-amount');
  // getSavings.innerText= savingAmount;



  // remaining balance


  const remainingBalance = balance - savingAmount;
  console.log('remainingBalance is', remainingBalance)
  //set ramining balance 
  const getRemainingBalance = document.getElementById('remaining-balance');
  getRemainingBalance.innerText = remainingBalance;




})



