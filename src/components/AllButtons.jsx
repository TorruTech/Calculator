import { useState } from "react";

export const AllButtons = ({ updateDisplay }) => {
    const [currentValue, setCurrentValue] = useState(''); 
    const [previousValue, setPreviousValue] = useState('');
    const [operator, setOperator] = useState(''); 

    const handleNumberClick = (value) => {
        setCurrentValue((prev) => prev + value);
        updateDisplay(value)
    };

    const handleOperatorClick = (op) => {
        if (op === 'n') {
            // Cambio de signo
            if (currentValue !== '') {
                const newValue = parseFloat(currentValue) * -1;
                setCurrentValue(newValue.toString());
                updateDisplay(newValue.toString());
            } else {
                // Manejar el caso donde no hay un valor actual
                // Aquí podrías optar por mostrar un mensaje de error o no hacer nada
                console.error('No hay un valor actual para cambiar de signo.');
            }
        } else {
            // Operadores +, -, X, /
            if (currentValue !== '') {
                // Si hay un valor actual, se considera como el primer operando
                setPreviousValue(currentValue);
                setCurrentValue('');
                setOperator(op);
                updateDisplay(op);
            } else {
                console.error('No hay un valor actual para la operación.');
            }
        }
    };
    

    const handleEqualClick = () => {
        if (previousValue !== '' && currentValue !== '') {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(previousValue) + parseFloat(currentValue);
                    break;
                case '-':
                    result = parseFloat(previousValue) - parseFloat(currentValue);
                    break;
                case 'X':
                    result = parseFloat(previousValue) * parseFloat(currentValue);
                    break;
                case '/':
                    result = parseFloat(previousValue) / parseFloat(currentValue);
                    break;
                case 'n':
                    result = parseFloat(currentValue * -1);
                    break;
                default:
                    result = '';
                    break;
            }
            updateDisplay(currentValue, result);
            setCurrentValue(result.toString());
            setPreviousValue('');
            setOperator('');
        }
    };

    const handleResetClick = () => {
        setCurrentValue('');
        setPreviousValue('');
        setOperator('');
        updateDisplay('C');
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