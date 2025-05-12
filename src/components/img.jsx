import bagCasser from '../assets/bag-burst.png'
import bag from '../assets/bag.png'

export function Sac(props){
    return(
        <div>
            <img src={bag} alt="sac de box" onClick={props.action}/>
        </div>
    )
}
export function SacCasser(){
    return(
        <>
            <img src={bagCasser} alt="sac de box pas casser"/>
        </>
    )
}