import { useState, useEffect } from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplayValue(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? digit : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplayValue('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const toggleSign = () => {
    setDisplayValue(String(-parseFloat(displayValue)));
  };

  const inputPercent = () => {
    const value = parseFloat(displayValue) / 100;
    setDisplayValue(String(value));
  };

  const handleOperator = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setDisplayValue(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = () => {
    const inputValue = parseFloat(displayValue);

    if (operator === '+') {
      return firstOperand + inputValue;
    } else if (operator === '-') {
      return firstOperand - inputValue;
    } else if (operator === 'x') {
      return firstOperand * inputValue;
    } else if (operator === '/') {
      return firstOperand / inputValue;
    }

    return inputValue;
  };

  const handleEquals = () => {
    if (!operator) return;

    const result = performCalculation();
    setDisplayValue(String(result));
    setFirstOperand(result);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const value = e.target.textContent;

    if (/[0-9]/.test(value)) {
      inputDigit(value);
    } else if (value === '.') {
      inputDecimal();
    } else if (value === 'AC') {
      clearDisplay();
    } else if (value === '±') {
      toggleSign();
    } else if (value === '%') {
      inputPercent();
    } else if (['+', '-', 'x', '/'].includes(value)) {
      handleOperator(value);
    } else if (value === '=') {
      handleEquals();
    }
  };

  return (
    <div>
      <div className="Rectangle-15">
        <div className="Rectangle-5">
          <input type="text" id="display" value={displayValue} disabled />
        </div>

        <div id="button_center">
          <div className="button clear">
            <a href="#" onClick={handleButtonClick}>AC</a>
          </div>
          <div className="button functions">
            <a href="#" onClick={handleButtonClick}>±</a>
          </div>
          <div className="button functions">
            <a href="#" onClick={handleButtonClick}>%</a>
          </div>
          <div className="button functions">
            <a href="#" onClick={handleButtonClick}>/</a>
          </div>
        </div>

        <div id="button_center">
          <div className="button numbers">
            <a href="#" onClick={handleButtonClick}>7</a>
          </div>
          <div className="button numbers">
            <a href="#" onClick={handleButtonClick}>8</a>
          </div>
          <div className="button numbers">
            <a href="#" onClick={handleButtonClick}>9</a>
          </div>
          <div className="button functions">
            <a href="#" onClick={handleButtonClick}>x</a>
          </div>
        </div>

        <div id="button_center">
          <div className="button numbers">
            <a href="#" onClick={handleButtonClick}>4</a>
          </div>
          <div className="button numbers">
            <a href="#" onClick={handleButtonClick}>5</a>
          </div>
          <div className="button numbers">
            <a href="#" onClick={handleButtonClick}>6</a>
          </div>
          <div className="button functions">
            <a href="#" onClick={handleButtonClick}>-</a>
          </div>
        </div>

        <div id="button_center">
          <div className="button numbers">
            <a href="#" onClick={handleButtonClick}>1</a>
          </div>
          <div className="button numbers">
            <a href="#" onClick={handleButtonClick}>2</a>
          </div>
          <div className="button numbers">
            <a href="#" onClick={handleButtonClick}>3</a>
          </div>
          <div className="button functions">
            <a href="#" onClick={handleButtonClick}>+</a>
          </div>
        </div>

        <div id="button_center">
          <div className="button numbers">
            <a href="#" onClick={handleButtonClick}>0</a>
          </div>
          <div className="button">
            <a href="#" onClick={handleButtonClick}>.</a>
          </div>
          <div className="button equal_sign">
            <a href="#" onClick={handleButtonClick}>=</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;