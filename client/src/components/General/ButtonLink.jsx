import { Link } from "react-router-dom";
import '../Styles/buttons.css';
function ButtonLink(props){
    return (
        <div>
            <Link to = {"/" + props.link}>
                <button onClick = {(event) => props.beforeLinkSent(event)} className = {"button " + props.type}>
                    {props.content}
                </button>
            </Link>
        </div>
    )
}

export default ButtonLink;