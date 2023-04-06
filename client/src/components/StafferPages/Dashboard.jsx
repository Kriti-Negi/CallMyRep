import Heading from "../General/Heading";
import Input from "../General/Input";
import StafferNav from "./StafferNav";
import '../Styles/dashboard.css'
import { useState } from "react";

function Dashboard(){
    const [number, setNumber] = useState("");
    const [code, setCode] = useState("");
    const [doc, setDoc] = useState();
    const [message, setMessage] = useState("");
    const [onForm, setOnForm] = useState(true);

    function updatePhone(e){
        setNumber(e.target.value);
    }

    function updateCode(e){
        setCode(e.target.value);
    }

    function findConstituent(e){
        ///api/stafferDash/:key/:phoneNumber
        fetch("http://localhost:5000/api/stafferDash/" + code + "/" + number)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log("http://localhost:5000/api/stafferDash/" + code + "/" + number);
                setDoc(data.doc);
                if(data.works === false){
                    setMessage("Incorrect phone number or code");
                }else{
                    setOnForm(false);
                    setMessage("");
                }
            })
    }

    return (
        <div>
            <div hidden = {!onForm}>
                <StafferNav/>
                <div className="content">
                    <div>
                        <Heading content = "Staffer Dashboard"/>
                        <p className="error-message">{message}</p>
                    </div>
                    <div className="inputs">
                        <Input 
                            label = "Insert last 4 digits of caller’s phone number (required)" 
                            input = "Phone Number"
                            onInput = {updatePhone}
                        />
                        <Input
                            label = "Insert Verification Code (ask caller for it) (required)"
                            input = "Code"
                            onInput = {updateCode}
                        />
                    </div>
                    <div style={{width: 200}}>
                        <button className = "button filled" onClick={(e) => {findConstituent(e)}}>Find Constituent</button>
                    </div>
                </div>
            </div>
            <div hidden = {onForm}>
                <div>
                    <StafferNav/>
                    <div className="info-content">
                        <Heading content = {(doc ? doc.nameFirst: "") + " " + (doc ? doc.nameLast: "")}/>
                        <div className = "info-chunk">
                            <h3 className="info-chunk-heading">Zip Code</h3>
                            <p className = "info-chunk-content">{doc ? doc.zipCode: ""}</p>
                        </div>
                        <div className = "info-chunk">
                            <h3 className="info-chunk-heading">Address</h3>
                            <p className = "info-chunk-content">{doc? doc.address: ""}</p>
                        </div>
                        <div className = "info-chunk">
                            <h3 className="info-chunk-heading">Issue/Complain Description</h3>
                            <p className = "info-chunk-content">{doc? doc.description: ""}</p>
                        </div>
                        <div style={{width: 200}}>
                            <button className = "button filled" onClick={() => {setOnForm(!onForm)}}>Back to Dashboard</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;