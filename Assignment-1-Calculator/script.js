function calculate(first, second, operator) {
  // switch selects the arithmetic operation to perform.
  switch (operator) {
    case "+": return first + second;
    case "-": return first - second;
    case "*": return first * second;
    case "/":
      if (second === 0) throw new Error("Cannot divide by zero.");
      return first / second;
    default: throw new Error("Choose a valid operation.");
  }
}

document.querySelector("#calculate").addEventListener("click", () => {
  const firstInput = document.querySelector("#first-number").value;
  const secondInput = document.querySelector("#second-number").value;
  const result = document.querySelector("#result");
  if (firstInput === "" || secondInput === "") {
    result.textContent = "Please enter both numbers.";
    return;
  }
  try {
    const answer = calculate(Number(firstInput), Number(secondInput), document.querySelector("#operator").value);
    result.textContent = `Result: ${answer}`;
  } catch (error) {
    result.textContent = error.message;
  }
});
