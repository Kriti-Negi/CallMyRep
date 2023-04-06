import react, {useState} from 'react';

function Spacer(props){
    const [height, setHeight] = useState(props.height);
    const [style, setStyle] = useState({height: 15});

    return (
        <div style={{style}}></div>
    )
}

export default Spacer;