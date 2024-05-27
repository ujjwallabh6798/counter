import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
 //let counter  = 0


 //value increment function
 const addValue = () =>{
  // console.log("clicked",counter) //debugging
//   if(counter<20){
//  counter=counter+1
//   }
 setCounter(counter+1) 
 }

 //value decrement function
 const removeValue=()=>{
  if(counter>0){
    counter=counter-1
  }
  setCounter(counter)
 }

  return (
    <>
    
      <h1>Coffee With React | Counter FUnctionality with useState Hook</h1>
      <h2>Counter value : {counter}</h2>

      <button
      onClick={addValue}
      
      >Add Value </button>
      <br></br>
      <button
      onClick={removeValue}
      >Remove Value </button>
      <p>Footer</p>
    </>
  )
}

export default App
