
import '../Styles/input.css'

function Input(props){

    return (
        <div className="input-container">
            <label className="input-label">{props.label}</label>
            <input onChange = {(e) => {props.onInput(e)}} name = {props.name} className = "input" placeholder={props.input} type = {props.type? props.type: "text"}/>
        </div>
    )
}

export default Input;