// Add, subtract, multiply, or divide two numbers.
function calculate(firstNumber, secondNumber, operator) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      if (secondNumber === 0) {
        return "Cannot divide by zero.";
      }
      return firstNumber / secondNumber;
    default:
      return "Please choose an operation.";
  }
}

document.querySelector("#calculate").addEventListener("click", function () {
  const firstValue = document.querySelector("#first-number").value;
  const secondValue = document.querySelector("#second-number").value;
  const operator = document.querySelector("#operator").value;
  const result = document.querySelector("#result");

  if (firstValue === "" || secondValue === "") {
    result.textContent = "Please enter both numbers.";
    return;
  }

  const answer = calculate(Number(firstValue), Number(secondValue), operator);
  result.textContent = "Result: " + answer;
});
