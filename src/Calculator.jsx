
import './App.css'
import { Display } from './components/Display'
import { AllButtons } from './components/AllButtons'
import { useState } from 'react'

export const Calculator = () => {

  const [displayValue, setDisplayValue] = useState("0");

  const updateDisplay = (value) => {

    setDisplayValue(value)
   
  };

  return (
    <div className='calculatorBody'>
      <Display displayValue = {displayValue} />
      <AllButtons updateDisplay = {updateDisplay}/>
    </div>
  )
}

