import './bar.jsx'


export default function Bar(props) {
    return(
        <div className="progress-stacked h-100">
            <div
                className="progress h-100"
                role="progressbar"
                aria-label="Segment one"
                aria-valuenow={15}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: `${props.pdv}%` }}
            >
                <div className="progress-bar bg-success" />
            </div>
            <div
                className="progress h-100"
                role="progressbar"
                aria-label="Segment two"
                aria-valuenow={30}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: `${100-props.pdv}%` }}
            >
                <div className="progress-bar bg-danger" />
            </div>
        </div>

            // {/* <div className="progress h-100 "  role="progressbar" aria-label="Danger example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
            //     <div className="progress-bar bg-danger" style={{ width: `${props.pdv}%` }} />
            // </div> */}
        
    )
}