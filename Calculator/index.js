const numberButtons = document.querySelectorAll(".numbers");
window.onload = function () {
  const displayNumber = function (event) {
    const displaySection = document.getElementById("display");
    const clickedelement = event.target;
    const numberPressed = clickedelement.textContent;

    if (displaySection.value === "0") {
      displaySection.value = numberPressed;
    } else {
      displaySection.value += numberPressed;
    }
  };

  for (let node of numberButtons) {
    node.addEventListener("click", displayNumber);
  }

  const keepMemory = function (event) {
    const displaySection = document.getElementById("display");
    const clickedelement = event.target;
    const operation = clickedelement.textContent;
    const firstNum = displaySection.value;

    console.log(firstNum);
    console.log(operation);
  };

  const functionButtons = document.querySelectorAll(".functions");

  for (let node of functionButtons) {
    node.addEventListener("click", keepMemory);
  }
  const firstNum = displaySection.value;

  const secondaryNum = function () {
    const displaySection = document.getElementById("display");
    const secondNumber = displaySection.value;
    const numberOne = parseInt(firstNum);
    const numberTwo = parseInt(secondNumber);
    switch (openeration) {
      case "+":
        firstNum = numberOne + numberTwo;
        break;
      case "-":
        firstNum = numberOne - numberTwo;
        break;
      case "/":
        firstNum = numberOne / numberTwo;
        break;
      case "x":
        firstNum = numberOne * numberTwo;
        break;
    }
  };

  secondaryNum();

  const resultButton = document.getElementsByClassName("equal_sign");
  resultButton.addEventListener("click", secondaryNum);
};
