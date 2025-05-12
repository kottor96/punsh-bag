import { useState } from 'react'
import './App.css'
import { Sac,SacCasser } from './components/img'
import Bar from './components/bar'
import Btn from './components/btn'
function App() {
  const [pv,setPv] = useState(100)
  let random = Math.round(Math.random()*20)
  let degat = 10
  function restart() {
    setPv(100)
  }
  pv < 0 && setPv(0);
  function taper(){
    setPv(pv-degat)
    random = Math.round(Math.random()*20)
  }
  function taper2() {
    setPv(pv-(degat*2))
    random = Math.round(Math.random()*20)
  }
  console.log(pv);
  
  return(
    <>
      <div id='box'>
        <div>
          <Bar pdv={pv}/>
        </div>
        <div>
          {pv <= 0 ?  <SacCasser pdv={pv}/> : random>6 ?<Sac pdv={pv} action={taper}/>: <Sac pdv={pv} action={taper2}/>}
        </div>
        <div>
          {pv<=0 ? 
          <Btn valeur='Restart' action={restart}/> 
          : random<6 ?
          <Btn valeur='Supa Punsh' action={taper2}/>
          :<Btn valeur='Punsh' action={taper}/>}
        </div>
      </div>   
    </>
  )
}

export default App
