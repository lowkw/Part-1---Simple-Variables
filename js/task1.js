// Version 2.0
// Portoflio Assignment Task 1
/*Create a special calculator that read a number from the user, checks that it is an integer and performs a series of mathematical calculations as listed:
Calculate the square and cube of the number. A number squared is a number that is multiplied by itself; e.g., 22 is equal to 4 (2 * 2). A number cubed is a number that is multiplied by itself twice e.g., 23 is equal to 8 (2 * 2 * 2). 
calculates the number's factorial. A factorial is the product of an integer and all the integers below it; e.g., the factorial of 4 is equal to 24 (4 * 3 * 2 * 1).
*/

function sanitizeInput(input) {
  const element = document.createElement("div"); // create temporay element
  element.innerText = input; // treat any special characters as plain text
  return element.innerHTML; // special characters are escaped 
}

function calculate() {

  'use strict';
  // Sanitize user input
  let input = document.getElementById("number").value;
  input = sanitizeInput(input);

  // Validate input using regular expression (only numbers between 1 and 50 allowed)
  const isValidNumber = /^[1-9]$|^[1-4][0-9]$|^50$/.test(input);

  if (!isValidNumber) {
    alert("Please enter a valid number between 1 and 50.");
    return;
  }

  // Convert sanitized input to an integer
  const number = parseInt(input, 10);

  U.$('factorial').value = factorial(number);
  U.$('squared').value = square(number);
  U.$('cubed').value = cube(number);
  
  return false; 
}// End of calculate() function.

function factorial(num) {
  'use strict';
  if (num === 0 || num === 1) return 1; //factorial(0) shall return 1
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

function square(num) {
  'use strict';
  return num * num;
}

function cube(num) {
  'use strict';
  return num * num * num;
}

function init() {
  'use strict';
  document.getElementById('theForm').onsubmit = calculate;  
}// End of init() function.

window.onload = init;