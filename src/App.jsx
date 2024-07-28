import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, SetValue] = useState('');
  return (
    <>
      <div className="container">
        <div className="calculator">
          <form action="" >
            <div className='display'>
              <input type="text"  value={value}/>
              </div>
            <div>
          <input type="button" value="AC" onClick={e=>SetValue("")} />
          <input type="button" value="DE" onClick={e=>SetValue(value.slice(0,-1))} />
          <input type="button" value="." onClick={e => SetValue(value + e.target.value)} />
          <input type="button" value="/" onClick={e => SetValue(value + e.target.value)} />
        </div>
        <div>
          <input type="button" value="7" onClick={e => SetValue(value + e.target.value)} />
          <input type="button" value="8" onClick={e => SetValue(value + e.target.value)} />
          <input type="button" value="9" onClick={e => SetValue(value + e.target.value)}/>
          <input type="button" value="*" onClick={e => SetValue(value + e.target.value)}/>
        </div>
        <div>
          <input type="button" value="4" onClick={e => SetValue(value + e.target.value)} />
          <input type="button" value="5" onClick={e => SetValue(value + e.target.value)} />
          <input type="button" value="6" onClick={e => SetValue(value + e.target.value)}/>
          <input type="button" value="+" onClick={e => SetValue(value + e.target.value)} />
        </div>
        <div>
          <input type="button" value="1" onClick={e => SetValue(value + e.target.value)} />
          <input type="button" value="2" onClick={e => SetValue(value + e.target.value)} />
          <input type="button" value="3" onClick={e => SetValue(value + e.target.value)} />
          <input type="button" value="-" onClick={e => SetValue(value + e.target.value)} />
        </div>
        <div>
          <input type="button" value="00" onClick={e => SetValue(value + e.target.value)} />
          <input type="button" value="0" onClick={e => SetValue(value + e.target.value)} />
          <input type="button" value="="  className='equal' onClick={e=>SetValue(eval(value))}/>
          
        </div>
          </form>
        </div>
        
      </div>
      
    </>
  )
}

export default App
