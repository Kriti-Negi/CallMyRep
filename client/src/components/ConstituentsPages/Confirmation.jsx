import ButtonLink from "../General/ButtonLink";
import Heading from "../General/Heading";
import ConstituentsNav from "./ConstituentsNav";
import { useEffect, useState } from 'react';

function Confirmation(props){

    const [useEffectRan, setUseEffectRan] = useState(false);

    useEffect(() => {
        console.log(props.user.congressManInfo);

        if(!useEffectRan){
            let link = "http://localhost:5000/api/" + props.user.key + "/" + props.user.nameFirst + "/" + 
            props.user.nameLast + "/" + props.user.zipCode + "/" + 
            props.user.address + "/" + props.user.lastFourPhone + "/" + props.user.description + "/" +
            props.user.category + "/" + props.user.congressManInfo.name + "/" + 
            props.user.congressManInfo.phoneNumber + "";
    
            console.log(link);
            console.log(props.user);
            fetch(link);
            console.log("herw");
            setUseEffectRan(true);
        }
    }, []);

    return(
        <div>
            <ConstituentsNav page = "inputinfo"/>
            <div className="page-container">
                <Heading content = {"Call this number: " + props.user.congressManInfo.phoneNumber}/>
                <Heading content = {"Your verification code is: " + props.user.key}/>
                <p>The staffer you call will ask for this verification code on the phone in order to access your data.</p>
                <div style = {{width: 300}}>
                    <ButtonLink beforeLinkSent = {() => {}} link = "" content = "Exit" type = "filled"/>
                </div>
            </div>
        </div>
    )
}

export default Confirmation;