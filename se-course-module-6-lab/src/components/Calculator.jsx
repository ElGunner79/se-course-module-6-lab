
import React, { useState } from 'react';
function Calculator() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [operator, setOperator] = useState("+");
    const [result, setResult] = useState(0);

    const handleFirstNumberChange = (event) => {
        setFirstNumber(Number(event.target.value));
    };

    const handleSecondNumberChange = (event) => {
        setSecondNumber(Number(event.target.value));
    };

    const handleOperatorChange = (event) => {
        setOperator(event.target.value);
    };

    const handleCalculate = () => {
        const calculation = calculate(firstNumber, secondNumber, operator);
        setResult(calculation);
    };

    const handleReset = () => {
        setFirstNumber(0);
        setSecondNumber(0);
        setOperator("+");
        setResult(0);
    };

    return (
        <div>
            <input
                type="number"
                placeholder="First number"
                min="0"
                value={firstNumber}
                onChange={handleFirstNumberChange}
            />
            <select value={operator} onChange={handleOperatorChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input
                type="number"
                placeholder="Second number"
                min="0"
                value={secondNumber}
                onChange={handleSecondNumberChange}
            />
            <br></br>
            <button onClick={handleCalculate} style={{ margin: "10px" }}>
                Calculate
            </button>
            <p>Result: {result}</p>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

function calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
        default:
            return 0;
    }
}

export default Calculator;