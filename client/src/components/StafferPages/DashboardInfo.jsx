import { useState } from "react";
import ButtonLink from "../General/ButtonLink";
import Heading from "../General/Heading";
import StafferNav from "./StafferNav";

function DashboardInfo(props){
    console.log(props.constituent);
    return (
        <div>
            <StafferNav/>
            <div className="info-content">
                <Heading content = {props.constituent.doc.nameFirst + " " + props.constituent.doc.nameLast}/>
                <div className = "info-chunk">
                    <h3 className="info-chunk-heading">Zip Code</h3>
                    <p className = "info-chunk-content">{props.constituent.doc.zipCode}</p>
                </div>
                <div className = "info-chunk">
                    <h3 className="info-chunk-heading">Address</h3>
                    <p className = "info-chunk-content">{props.constituent.doc.address}</p>
                </div>
                <div className = "info-chunk">
                    <h3 className="info-chunk-heading">Issue/Complain Description</h3>
                    <p className = "info-chunk-content">{props.constituent.doc.description}</p>
                </div>
                <div style={{width: 200}}>
                    <ButtonLink type = "filled" content = "Back to Dashboard" link = "dashboard"/>
                </div>
            </div>
        </div>
    )
}


export default DashboardInfo;