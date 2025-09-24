import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LC, NC, SC, UC } from './Passchar';

function App() {
  const [upper,setUpper]= useState(false);
  const [lower,setLower]= useState(false);
  const [num,setNum]= useState(false);
  const [symbol,setSymbol]= useState(false);
  const [pl,setPL] = useState(8);
  const [finalp,setFinalp] =useState('');

  let createPassword=()=>{
    let final_password='';
    let character_set='';
    if(upper|| lower || num || symbol)
    {
      if(upper) character_set+=UC
      if(lower) character_set+=LC
      if(num)  character_set+=NC
      if(symbol) character_set+=SC

      for(let i=0;i<pl;i++)
      {
        final_password+=character_set.charAt(Math.floor(Math.random()*character_set.length))
      }
      setFinalp(final_password)
    }
    else{
      alert("Please select atleast one checkbox.")
    }
  }

  let copy_pw=()=>{
    navigator.clipboard.writeText(finalp)
  }
  return (
    <>
      <div className='container'>
         <div className='p-box'>
          <h3>Password Generator</h3>
          <div className='answer'>
            <input type="text" value={finalp} readOnly/>
            <button onClick={copy_pw}>Copy</button>
          </div>

          <div className='passLength'>
            <label>Password length</label>
            <input type="number" value={pl} max={12} min={8} onChange={(event)=>setPL(event.target.value)}/>
          </div>

          <div className='passLength'>
            <label>Include uppercase letters</label>
            <input type="checkbox" checked={upper} onChange={()=>setUpper(!upper)}/>
          </div>

          
          <div className='passLength'>
            <label>Include lowercase letters</label>
            <input type="checkbox" checked={lower} onChange={()=>setLower(!lower)}/>
          </div>

          
          <div className='passLength'>
            <label>Include numbers</label>
            <input type="checkbox" checked={num} onChange={()=>setNum(!num)}/>
          </div>

          
          <div className='passLength'>
            <label>Include symbols</label>
            <input type="checkbox" checked={symbol} onChange={()=>setSymbol(!symbol)}/>
          </div>

          <button className='btn' onClick={createPassword}>Generate Password</button>

         </div>
      </div>
    </>
  )
}

export default App
