// import { motion } from "framer-motion";

export default function Sac(props){
    return(
        <div>
            <img src={props.url} alt="sac de box" onClick={props.action}/>
        </div>
    )
}
// export function SacCasser(){
//     return(
//         <>
//             <img src={bagCasser} alt="sac de box pas casser"/>
//         </>
//     )
// }