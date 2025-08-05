// sum of two number

const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));

if (isNaN(num1) || isNaN(num2)) {
  alert("Please enter valid numbers!");
} else {
  alert(`Sum: ${num1 + num2}`);
}
