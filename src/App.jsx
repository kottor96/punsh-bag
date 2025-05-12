import { useState } from 'react'
import './App.css'
import Sac from './components/img'
import Bar from './components/bar'
import Btn from './components/btn'
import bagCasser from './assets/bag-burst.png'
import bag from './assets/bag.png'



function App() {
  const [pv,setPv] = useState(100)
  // const [rotate, setRotate] = useState(0)


  let random = Math.round(Math.random()*20)
  let degat = 10
  function restart() {
    setPv(100)
  }
  pv < 0 && setPv(0);
  function taper(){
    setPv(pv-degat)
    random = Math.round(Math.random()*20)
    setRotate(rotate+degat)
  }
  function taper2() {
    setPv(pv-(degat*2))
    random = Math.round(Math.random()*20)
    setRotate(rotate+degat*2)
  }
  console.log(pv);
  
  return(
    <>
      <div id='box'>
        <div>
          <Bar pdv={pv}/>
        </div>
        <div>
          {pv <= 0 ?  <Sac url={bagCasser}/> : random>6 ?<Sac url={bag} action={taper}/>: <Sac url={bag} action={taper2}/>}
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
