document.addEventListener("DOMContentLoaded", function () {
  
    const resultElement = document.querySelector(".result");
    const buttons = document.querySelectorAll(".buttons button");
  
    let currentInput = "0";
    let currentOperator = null;
    let previousInput = "0";
  
    const updateResult = () => {
      resultElement.textContent = currentInput;
    };
  
    const handleNumberClick = (number) => {
      if (currentInput === "0" || currentInput === "-0") {
        currentInput = number.toString();
      } else {
        currentInput += number.toString();
      }
      updateResult();
    };
  
    
    const handleOperatorClick = (operator) => {
      if (currentOperator !== null) {
       
        performOperation();
      }
      currentOperator = operator;
      previousInput = currentInput;
      currentInput = "0";
      updateResult();
    };
  
    
    const performOperation = () => {
      const previous = parseFloat(previousInput);
      const current = parseFloat(currentInput);
  
      switch (currentOperator) {
        case "+":
          currentInput = (previous + current).toString();
          break;
        case "-":
          currentInput = (previous - current).toString();
          break;
        case "×":
          currentInput = (previous * current).toString();
          break;
        case "÷":
          currentInput = (previous / current).toString();
          break;
        default:
          
          break;
      }
  
      currentOperator = null;
      updateResult();
    };
  
    
    const handleEqualsClick = () => {
      performOperation();
    };
  
    
    const handleClearClick = () => {
      currentInput = "0";
      currentOperator = null;
      previousInput = "0";
      updateResult();
    };
  
    
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const buttonText = button.textContent;
  
        switch (buttonText) {
          case "+":
          case "-":
          case "×":
          case "÷":
            handleOperatorClick(buttonText);
            break;
          case "=":
            handleEqualsClick();
            break;
          case "C":
            handleClearClick();
            break;
          default:
            
            if (!isNaN(parseFloat(buttonText)) || buttonText === ",") {
              handleNumberClick(buttonText);
            }
            break;
        }
      });
    });
  });
  