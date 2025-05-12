export default function Btn(props) {
    return(
        <button onClick={props.action} className="bg-danger p-3 rounded-4">{props.valeur}</button>
    )
}
