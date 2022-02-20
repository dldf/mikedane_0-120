import React, {useState} from "react"
import "./CountButton.css"

const CountButton = (props) => {
    const [currentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }
    const handleResetClick = () => {
        setCurrentCount(0)
    }
    console.log("state set; component (re)rendered.")
    console.log(props)

    // one way to do styles (embedded)
    const buttonStyles = {
        fontSize: "1.5em",
        background: props.buttonColor,
        borderRadius: "5px",
    }

    return (
        <div style={{padding:"1em", border:"1px solid black"}}>
            <button style={buttonStyles} onClick={handleClick}>+{props.incrementBy}</button>
            <div className="count-display">{currentCount}</div>
            <div> = {props.incrementBy} x {currentCount/props.incrementBy} </div>
            <button onClick={handleResetClick}>reset</button>
        </div>
    )
}

export default CountButton