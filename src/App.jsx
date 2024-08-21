import './App.css'
import { useState } from 'react'

function App() {
 const [color,setColor] = useState('')
  return (
    <div className='container justify-content-center d-flex align-items-center' style={{backgroundColor: color, height:'100vh',width:'1000vh'}}>
      <button onClick={()=>{setColor('green')}} className='btn btn-success ms-5'>GREEN</button>
      <button onClick={()=>{setColor('red')}}  className='btn btn-danger ms-5'>RED</button>
      <button onClick={()=>{setColor('yellow')}}  className='btn btn-warning ms-5'>YELLOW</button>
      <button onClick={()=>{setColor('blue')}}  class="btn btn-info ms-5">BLUE</button>
      <button onClick={()=>{setColor('black')}}  class="btn btn-dark ms-5">BLACK</button>
  </div>
)
}

export default App
