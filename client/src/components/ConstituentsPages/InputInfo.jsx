import { useState } from "react";
import ButtonLink from "../General/ButtonLink";
import Input from "../General/Input";
import TextEntry from "../General/TextEntry";
import ConstituentsNav from "./ConstituentsNav";


function InputInfo(props){
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [zipcode, setZipCode] = useState("");
    const [four, setFour] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState(1);

    function setInfo(){
        props.editInfo({
            key: Math.floor(Math.random() * (100000)),
            nameFirst: fName,
            nameLast: lName,
            zipCode: zipcode,
            address: address,
            lastFourPhone: four,
            description: description,
            category: category,
            congressManInfo: props.user.congressManInfo
        })
    }

    function onInputChange(e){
        if(e.target.name === "nameFirst"){
            setFName(e.target.value);
        }else if(e.target.name === "nameLast"){
            setLName(e.target.value);
        }else if(e.target.name === "zipCode"){
            setZipCode(e.target.value);
        }else if(e.target.name === "lastFourPhone"){
            setFour(e.target.value);
        }else if(e.target.name === "description"){
            setDescription(e.target.value);
        }else if(e.target.name === "address"){
            setAddress(e.target.value);
        }else if(e.target.name === "tag"){
            setCategory(e.target.value);
        }
    }

    return (
        <div>
            <ConstituentsNav page = "zipcode"/>
            <div className="page-container">
                <h2>Enter Your Information Below</h2>
                <div className="inputs">
                    <Input name = "nameFirst" onInput = {onInputChange} label = "First Name" type = "text" input = ""/>
                    <Input name = "nameLast" onInput = {onInputChange} label = "Last Name" type = "text" input = ""/>
                    <Input name = "zipCode" onInput = {onInputChange} label = "Zip Code" type = "text" input = ""/>
                    <TextEntry name = "address" onInput = {onInputChange} rows = {3} label = "Address" type = "text" input = ""/>
                    <Input name = "lastFourPhone" onInput = {onInputChange} label = "Last Four Digits of Your Phone Number" type = "text" input = ""/>
                    <TextEntry name = "description" onInput = {onInputChange} rows = {6} label = "In three sentences, tell us what you're calling about" type = "text" input = ""/>
                    <div className="dropdown">
                        <label >Choose a Category:</label>
                        <select onChange = {onInputChange} name="tag" id = "tag" className="tag">
                            <option value="1">Military Application</option>
                            <option value="2">Casework</option>
                            <option value="3">Complaint</option>
                            <option value="4">Question about Bill</option>
                            <option value="5">Other</option>
                        </select>
                    </div>
                    <div className = "checkbox">
                        <input type="checkbox" id="checkboxAgreement" name="agreement" value="checkbox"/>
                        <label> I acknowledge that the information I enter will be viewed by a staffer. </label>
                    </div>
                    <ButtonLink type = "filled" content = "submit" link = "confirmation" beforeLinkSent = {() => setInfo()}/>
                </div>
            </div>
        </div>
        
    )
}

export default InputInfo;