import { useState } from 'react'
import './App.css'
import { Sac,SacCasser } from './components/img'
import Bar from './components/bar'
import Btn from './components/btn'
function App() {
  const [pv,setPv] = useState(100)
  function restart() {
    setPv(100)
  }
  function taper(){
    setPv(pv-10)
  }
  console.log(pv);
  
  return(
    <>
      <div id='box'>
        <div>
          <Bar pdv={pv}/>
        </div>
        <div>
          {pv != 0 ? <Sac pdv={pv} action={taper}/> : <SacCasser pdv={pv}/>}
        </div>
        <div>
          {pv<=0 ? <Btn valeur='Restart' action={restart}/> :<Btn valeur='Punsh' action={taper}/>}
        </div>
      </div>   
    </>
  )
}

export default App
