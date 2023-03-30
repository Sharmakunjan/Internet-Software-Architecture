
/*const add=document.getElementById('addButton');
function updateaddButton(){
    
}*/
let buttons = document.querySelectorAll('button');
let result = document.querySelector('#display');
let calculation = '';
buttons.forEach(button => {
  button.addEventListener('click', () => {
    let buttonValue = button.value;
    if (buttonValue == 'C') {
      calculation = '';
      result.value = '';
    }
    else if (buttonValue === '=') {
      try {
        const finalresult = eval(calculation);
        calculation = finalresult;
        result.value = finalresult;
      } catch (err) {
        result.value = 'Error';
        calculation = '';
      }
    }
    else {
      calculation += buttonValue;
      result.value = calculation;
    }
  });
}); 


/*const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Initialize the calculator state
let operand1 = "";
let operator = "";
let operand2 = "";

// Add click event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Get the clicked button's value
    const value = button.value;

    // Handle the different button types
    if (/\d/.test(value)) {
      // The button is a digit
      if (operator === "") {
        // We are entering the first operand
        operand1 += value;
        display.value = operand1;
      } else {
        // We are entering the second operand
        operand2 += value;
        display.value = operand2;
      }
    } else if (value === "C") {
      // The button is the clear button
      operand1 = "";
      operator = "";
      operand2 = "";
      display.value = "";
    } else if (value === "=") {
      // The button is the equals button
      const result = calculateResult();
      operand1 = result;
      operator = "";
      operand2 = "";
      display.value = result;
    } else {
      // The button is an operator
      operator = value;
    }
  });
});

// Helper function to calculate the result of the current operation
function calculateResult() {
  const num1 = parseFloat(operand1);
  const num2 = parseFloat(operand2);
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
}*/