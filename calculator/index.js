class Calculator {
    constructor(previousDisplayTextElement, currentDisplayTextElement) {
        this.previousDisplayTextElement = previousDisplayTextElement;
        this.currentDisplayTextElement = currentDisplayTextElement;
        this.clear();
    }

    clear() {
        this.previousOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand + number;
    }

    chooseOperation(operation) {
        if (this.currentOperand === '' || this.currentOperand === '.') return;
        this.compute();
        this.operation = operation;
        this.previousOperand = `${this.currentOperand} ${operation}`;
        this.currentOperand = '';
    }

    compute() {
        let prev = parseFloat(this.previousOperand);
        let current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) {
            this.currentOperand = prev || current;
            return;
        }
        const operationCase = {
            '+': prev + current,
            '-': prev - current,
            '✖️': prev * current,
            '➗': prev / current
        };
        this.currentOperand = operationCase[this.operation].toFixed(2);
    }

    deleteNumber() {
        this.currentOperand = this.currentOperand.slice(0, -1);
    }

    getDisplayNumber(number) {
        let stringNumber = number.toString().replace(/,/g, "");
        let integeDigit = parseFloat(stringNumber.split('.')[0]);
        let decimalDigit = stringNumber.split('.')[1];
        if (isNaN(integeDigit)) {
            integeDigit = '';
        } else {
            integeDigit = integeDigit.toLocaleString('en', { maximumFractionDigits: 0 });
        }

        if (decimalDigit !== undefined) {
            return `${integeDigit}.${decimalDigit}`;
        } else {
            return integeDigit;
        }
    }

    updateDisplay() {
        if (this.operation === undefined) {
            this.previousDisplayTextElement.innerText = '';
        } else {
            this.previousDisplayTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand.split(' ')[0])} ${this.previousOperand.split(' ')[1]}`;
        }
        this.currentDisplayTextElement.innerText =
            this.getDisplayNumber(this.currentOperand);
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
const previousDisplayTextElement = document.querySelector('[data-previous-display]');
const currentDisplayTextElement = document.querySelector('[data-current-display]');
const buttons = document.querySelectorAll('li');

const calculator = new Calculator(previousDisplayTextElement, currentDisplayTextElement);
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});


deleteButton.addEventListener('click', () => {
    calculator.deleteNumber();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
    calculator.clear();
    calculator.updateDisplay();
});

equalsButton.addEventListener('click', () => {
    calculator.compute();
    calculator.previousOperand = '';
    calculator.operation = undefined;
    calculator.updateDisplay();
    calculator.currentOperand = '';
});

buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.boxShadow = '0 0 0 #d0d0d0, 0 0 0 #f8f8f8';
        button.querySelector('.after').style.boxShadow = 
            'inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8';
    })

    button.addEventListener('mouseup', () => {
        button.style.boxShadow = '';
        button.querySelector('.after').style.boxShadow = '';
    })
});
