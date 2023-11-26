import React, { useState } from 'react'

const App = () => {

  const [input,setInput]=useState('')
  const [ans,setAns]=useState('');

  const handleCalculation=(a)=>{
     setInput(prevInput=>prevInput+a)
  }
  
  const handleDeleteLast = () => {
    const delInput=input.slice(0,-1)
   setInput(delInput)
  }

  const handleAC=()=>{
    setInput('')
  }

  const handleEvaluation=()=>{
    const result=eval(input)
    if(!result){
      setInput('syntax error')
    }
    setInput(result)
    setAns(result)
  }

  return (
    <div>
   <div className='screen'>{input}</div>   
   <div className="grid-container">
  <div className="grid-item" onClick={()=>handleCalculation('7')}>7</div>
  <div className="grid-item"onClick={()=>handleCalculation('8')}>8</div>
  <div className="grid-item"onClick={()=>handleCalculation('9')}>9</div>
  <div className="grid-item" onClick={handleDeleteLast}>DEL</div>
  <div className="grid-item" onClick={handleAC}>AC</div>
  <div className="grid-item"onClick={()=>handleCalculation('4')}>4</div>
  <div className="grid-item"onClick={()=>handleCalculation('5')}>5</div>
  <div className="grid-item"onClick={()=>handleCalculation('6')}>6</div>
  <div className="grid-item" onClick={()=>handleCalculation('*')}>X</div>
  <div className="grid-item"onClick={()=>handleCalculation('/')}>/</div>
  <div className="grid-item"onClick={()=>handleCalculation('1')}>1</div>
  <div className="grid-item"onClick={()=>handleCalculation('2')}>2</div>
  <div className="grid-item"onClick={()=>handleCalculation('3')}>3</div>
  <div className="grid-item"onClick={()=>handleCalculation('+')}>+</div>
  <div className="grid-item"onClick={()=>handleCalculation('-')}>-</div>
  <div className="grid-item"onClick={()=>handleCalculation('0')}>0</div>
  <div className="grid-item"onClick={()=>handleCalculation('.')}>.</div>
  <div className="grid-item"onClick={()=>handleCalculation('*10')}>×10</div>
  <div className="grid-item" onClick={()=>handleCalculation(ans)}>Ans</div>
  <div className="grid-item" onClick={handleEvaluation}>=</div>
</div>
    </div>
  )
}

export default App