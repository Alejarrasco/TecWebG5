document.addEventListener("DOMContentLoaded", function () {
    const displayOperand1 = document.querySelector("[data-operand-1]");
    const displayOperand2 = document.querySelector("[data-operand-2]");
    const clearButton = document.querySelector("[data-clear]");
    const deleteButton = document.querySelector("[data-delete]");
    const operationButtons = document.querySelectorAll("[data-operation]");
    const numberButtons = document.querySelectorAll("[data-number]");
    const equalsButton = document.querySelector("[data-equals]");
  
    let operand1 = "";
    let operand2 = "";
    let simbol = "";
    let decimal = 2; // TODO Poder modificar la cantidad de decimales mediante un botón
    let currentOperation = null;
    let shouldResetDisplay = false;
  
    // Función para actualizar la vista de los operandos
    function updateDisplay() {
      // Mostrar operand1 en el campo de texto de abajo y operand2 en el campo de texto de arriba
      //TODO si el número es muy grande, mostrarlo en notación científica
      displayOperand1.textContent = simbol + operand2;
      displayOperand2.textContent = operand1;
    }
  
    // Función para manejar los números
    numberButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (currentOperation === null) {
          if (shouldResetDisplay) {
            operand1 = "";
            shouldResetDisplay = false;
          }
          operand1 += button.textContent;
          updateDisplay();
        } else {
          operand2 += button.textContent;
          updateDisplay();
        }
      });
    });

    // Función para manejar los simbolos de operaciones
    operationButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (currentOperation === null) {
          if (shouldResetDisplay) {
            operand1 = "";
            shouldResetDisplay = false;
          }
          // operand1 += button.textContent;
          updateDisplay();
        } else {
          operand2 += button.textContent;
          updateDisplay();
        }
      });
    });
  
    // Función para manejar las operaciones
    operationButtons.forEach((button) => {
      button.addEventListener("click", () => {
        if (operand2 !== "" && simbol !== "") {
          calculateResult(currentOperation);
          simbol = button.textContent;
          shouldResetDisplay = true;
          currentOperation = simbol;
          updateDisplay();
        } else if (operand1 !== "") {
          simbol = button.textContent;
          currentOperation = simbol;
          shouldResetDisplay = true;
          updateDisplay();
        }
      });
    });
  
    // Función para manejar el botón de igual
    equalsButton.addEventListener("click", () => {
      calculateResult(currentOperation);
    });

    // Funcion para el boton de igual
    function calculateResult(currentOperation){
      num1 = parseFloat(operand1);
      num2 = parseFloat(operand2);
      if (operand1 !== "" && operand2 !== "") {
        switch (currentOperation) {
          case "+":
            operand1 = (num1 + num2).toFixed(decimal);
            break;
          case "-":
            operand1 = (num1 - num2).toFixed(decimal);
            break;
          case "*":
            operand1 = (num1 * num2).toFixed(decimal);
            break;
          case "/":
            operand1 = (num1 / num2).toFixed(decimal);
            break;
        }
        operand2 = "";
        simbol = "";
        currentOperation = null;
        shouldResetDisplay = true;
        updateDisplay();
      }
    }
  
    // Función para manejar el botón de borrar
    deleteButton.addEventListener("click", () => {
      if (currentOperation === null) {
        operand1 = operand1.slice(0, -1);
      } else {
        operand2 = operand2.slice(0, -1);
      }
      updateDisplay();
    });
  
    // Función para manejar el botón de limpiar
    clearButton.addEventListener("click", () => {
      operand1 = "";
      operand2 = "";
      simbol = "";
      currentOperation = null;
      shouldResetDisplay = false;
      updateDisplay();
    });
  });


  


/* function appendToResult(value) {
    document.getElementById("operation").value += value;
}

function clearResult() {
    document.getElementById("operation").value = "";
    document.getElementById("result").value = "";
}

    function calculateResult() {
    try {
        const expression = document.getElementById("operation").value;
        const result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
} */