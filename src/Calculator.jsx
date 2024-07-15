
import './App.css'
import { Display } from './components/Display'
import { AllButtons } from './components/AllButtons'
import { useState } from 'react'

export const Calculator = () => {

  const [displayValue, setDisplayValue] = useState("0");

  const updateDisplay = (value, result = 0, operator = '+') => {

    const operators = ['+', '-', 'X', '/'];

    if (value >= 0 && value <= 9) {
      setDisplayValue(displayValue + value);
    } else if (operators.includes(value)) {
      setDisplayValue(value)
    } else if (value === 'C') {
      setDisplayValue("0")
    } else if (result != 0) {
      setDisplayValue(result)
    } else if (operator === 'n') {
      setDisplayValue(value)
    }
  };

  return (
    <div className='calculatorBody'>
      <Display displayValue = {displayValue} />
      <AllButtons updateDisplay = {updateDisplay}/>
    </div>
  )
}

