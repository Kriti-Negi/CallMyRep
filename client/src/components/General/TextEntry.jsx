function TextEntry(props){
    return (
        <div className="input-container">
            <label className="input-label">{props.label}</label>
            <textarea onChange = {(e) => {props.onInput(e)}} name = {props.name} rows = {props.rows} className = "input" placeholder={props.input} type = {props.type? props.type: "text"}/>
        </div>
    )
}

export default TextEntry;