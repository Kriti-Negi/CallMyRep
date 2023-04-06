import ButtonLink from "../General/ButtonLink";

function Card(props){
    return (
        <div className = "card">
            <p>{props.title}</p>
            <h2>{props.name}</h2>
            <div style = {{width: 200}}>
                <ButtonLink link = "inputinfo" type = "filled" content = "Call" beforeLinkSent = {() => props.beforeLink(props.index)}/>
            </div>
        </div>
    )
}

export default Card;