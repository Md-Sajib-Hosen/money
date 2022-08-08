
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

  const totalExpense = (foodExpense + rentExpense + clothesExpense);

  const getExpense = document.getElementById('expenseAmount');

  const getBalance = document.getElementById('balance-amount');

      //Checking Condition or Validity 
  if(Income < 0 || isNaN(Income)){

    getIncomeField.value = ' ';
    return window.alert('put the valid income')
  }

  else if(foodExpense < 0 || isNaN(foodExpense)){
    foodExpenseField.value = ' ';

    return window.alert('please put valid food expense')
  }
  else if(rentExpense < 0 || isNaN(rentExpense)){
    rentExpenseField.value = '';
    return window.alert('put valid rent expense')
    
  }
  else if(clothesExpense < 0 || isNaN(clothesExpense)){

    clothesExpenseField.value =' ';
    return window.alert('put valid clothes expense')
  }

  else if(totalExpense > Income){
    getExpense.innerText = '';
    getBalance.innerText = ' ';

    return window.alert('increase your income')
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



//save button event handler

document.getElementById('savings-btn').addEventListener('click', function () {


function saveButton(){

  
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
  if( parcentangeValue < 0 || isNaN(parcentangeValue)){
    getSavings.innerText = '';
    getParcentage.value = ' ';
    getRemainingBalance.innerText = ' ';

    return window.alert('put a valid savings amount')

  }

  else if(savingAmount > balance || isNaN(savingAmount) ){

  //   const getSavings = document.getElementById('saving-amount');
   getSavings.innerText = '';
   getParcentage.value = ' ';
   getRemainingBalance.innerText = ' ';

    return window.alert('increase your balance to save more')
  }

  // const getSavings = document.getElementById('saving-amount');
  getSavings.innerText = savingAmount;

  // remaining balance

 
  //set ramining balance 
 
  getRemainingBalance.innerText = remainingBalance;

}

saveButton()

})



