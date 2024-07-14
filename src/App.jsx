
import './App.css'
import { Display } from './components/Display'
import { AllButtons } from './components/AllButtons'

export const App = () => {


  return (
    <div className='calculatorBody'>
      <Display />
      <AllButtons />
    </div>
  )
}

