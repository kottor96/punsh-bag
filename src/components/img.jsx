import "./img.css";

export default function Sac(props){
    console.log(`${props.rotato} deg`);
    
    return(
        <div>
            <img src={props.url} alt="sac de box" onClick={props.action}   style={{ transform: `rotate(${props.rotato}deg)` }}/>
        </div>
    )
}
