const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentOperand = '';
let previousOperand = '';
let operation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'C') {
            currentOperand = '';
            previousOperand = '';
            operation = '';
            display.value = '';
        } else if (button.textContent === '=') {
            calculate();
        } else if (button.textContent === '+' ||
                   button.textContent === '-' ||
                   button.textContent === '*' ||
                   button.textContent === '/') {
            operation = button.textContent;
            previousOperand = currentOperand;
            currentOperand = '';
        } else {
            currentOperand += button.textContent;
        }
        display.value = currentOperand;
    });
});

function calculate() {
    let result;
    if (previousOperand !== '' && currentOperand !== '' && operation !== '') {
        // Converter para números antes de realizar a operação
        const num1 = parseFloat(previousOperand);
        const num2 = parseFloat(currentOperand);
        switch(operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = 'Erro: Divisão por zero';
                } else {
                    result = num1 / num2;
                }
                break;
        }
        currentOperand = result.toString(); // Converter o resultado para string para exibir
        previousOperand = '';
        operation = '';
        display.value = result;
    }
}