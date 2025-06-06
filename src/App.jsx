import { useState } from 'react'
import './App.css'
import Sac from './components/img'
import Bar from './components/bar'
import Btn from './components/btn'
import bagCasser from './assets/bag-burst.png'
import bag from './assets/bag.png'



function App() {
  const [pv,setPv] = useState(100)
  const [rotate,setRotate] = useState(0)



  let time
  function vibration(deg) {
    setRotate(rotate+deg*2)
    time && clearTimeout(time)
    time = setTimeout(()=>{
      setRotate(0)
    },1000)
  }

  // randomazeur
  let random = Math.round(Math.random()*20)
  
  // reset
  function restart() {
    setPv(100)
  }

  // definir dégat
  let degat = 10
  // remet les pv a 0 pour ne pas avoir de valeur negative
  pv < 0 && setPv(0);
  function taper(){
    setPv(pv-degat)
    random = Math.round(Math.random()*20) 
    vibration(degat)
  }
  // critical
  function taper2() {
    let degat2=degat*2
    setPv(pv-(degat2))
    random = Math.round(Math.random()*20)
    vibration(degat2)
    
  }
  // console.log(pv);
  
  return(
    <>
      <div id='box'>
        <div>
          <Bar pdv={pv}/>
        </div>
        <div>
          {pv <= 0 ?  <Sac url={bagCasser} rotato={rotate}/> : random>6 ?<Sac url={bag} action={taper} rotato={rotate}/>: <Sac url={bag} action={taper2} rotato={rotate}/>}
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
