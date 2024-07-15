import { useState } from "react";

export const AllButtons = ({ updateDisplay }) => {
    const [currentValue, setCurrentValue] = useState(""); 
    const [previousValue, setPreviousValue] = useState("");
    const [display, setDisplay] = useState("0");
    const [operator, setOperator] = useState("");

    const handleNumberClick = (number) => {
        // Verificar si el display actual es "0"
        if (display === "0") {
            if (number === ".") {
                setDisplay("0" + number);
                setCurrentValue("0" + number);
                updateDisplay("0" + number);
            } else {
                setDisplay(number);
                setCurrentValue(number);
                updateDisplay(number);
            }
        } else {
            // Si el display no es "0", concatenar número o punto decimal
            if (number === "." && !currentValue.includes(".")) {
                setCurrentValue(prevValue => prevValue + number);
                setDisplay(prevDisplay => prevDisplay + number);
                updateDisplay(display + number);
            } else if (number !== ".") {
                setCurrentValue(prevValue => prevValue + number);
                setDisplay(prevDisplay => prevDisplay + number);
                updateDisplay(display + number);
            }
        }
    };
    
    const handleOperatorClick = (clickedOperator) => {
        
        setOperator(clickedOperator);
        setPreviousValue(currentValue);
        setCurrentValue("");
        updateDisplay(clickedOperator);
    };


    const handleEqualClick = () => {

        let opResult = 0;
    
        switch (operator) {
            case "+":
                opResult = parseFloat(previousValue) + parseFloat(currentValue);
                break;
            case "-":
                opResult = parseFloat(previousValue) - parseFloat(currentValue);
                break;
            case "X":
                opResult = parseFloat(previousValue) * parseFloat(currentValue);
                break;
            case "/":
                opResult = parseFloat(previousValue) / parseFloat(currentValue);
                break;
            default:
                opResult = parseFloat(currentValue);
                break;
        }

        opResult = opResult.toFixed(2);

        setCurrentValue(opResult.toString()); // Limpiar el currentValue para una nueva entrada de número
        setPreviousValue("")
        setOperator(""); // Limpiar el operador para esperar una nueva operación
        setDisplay(opResult.toString());
        updateDisplay(opResult.toString());
    };

    const handleResetClick = () => {
        setPreviousValue("");
        setCurrentValue("");
        setDisplay("0");
        updateDisplay("0");
        setOperator("");
    };

    return (
        <div className="grid">
            <button onClick={handleResetClick}>C</button>
            <button onClick={() => handleOperatorClick('n')}>+-</button>
            <button onClick={() => handleOperatorClick('%')}>%</button>
            <button className="left" onClick={() => handleOperatorClick('/')}>/</button>
            <button onClick={() => handleNumberClick('7')}>7</button>
            <button onClick={() => handleNumberClick('8')}>8</button>
            <button onClick={() => handleNumberClick('9')}>9</button>
            <button className="left" onClick={() => handleOperatorClick('X')}>X</button>
            <button onClick={() => handleNumberClick('4')}>4</button>
            <button onClick={() => handleNumberClick('5')}>5</button>
            <button onClick={() => handleNumberClick('6')}>6</button>
            <button className="left" onClick={() => handleOperatorClick('-')}>-</button>
            <button onClick={() => handleNumberClick('1')}>1</button>
            <button onClick={() => handleNumberClick('2')}>2</button>
            <button onClick={() => handleNumberClick('3')}>3</button>
            <button className="left" onClick={() => handleOperatorClick('+')}>+</button>
            <button onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={() => handleNumberClick('.')}>.</button>
            <button className="equal" onClick={handleEqualClick}>=</button>
        </div>
    );
};
