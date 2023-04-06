import Heading from "../General/Heading";
import ConstituentsNav from "./ConstituentsNav";

import '../Styles/constituents.css'
import Card from "./Card";
import { useState} from "react";

function ZipCode(props){

    const [zipcode, setZipcode] = useState("");
    const [name, setName] = useState("");

    const [cardInfo, setCardInfo] = useState([]);
    const [byName, setByName] = useState(false);

    function getCardInfo(e){
        if(e.target.name === "byName"){
            fetch("http://localhost:5000/api/findByName/" + name)
            .then(response => response.json())
            .then(data => {
                setCardInfo(data.doc)
                setByName(true)
            })
        }else{
            fetch("http://localhost:5000/api/findByZip/" + zipcode)
            .then(response => response.json())
            .then(data => {
                setCardInfo(data.doc)
                setByName(false)
            })
        }
    }

    function getRepOrSen(link){
        if(link.includes("house")){
            return "Representative"
        }else{
            return "Senator"
        }
    }

    function setCaller(index){
        const congressman = {
            phoneNumber: cardInfo[index].phone,
            name: cardInfo[index].name
        }
        props.editInfo({
            key: "",
            nameFirst: "",
            nameLast: "",
            zipCode: "",
            address: "",
            lastFourPhone: "",
            description: "",
            category: -1,
            congressManInfo: congressman
        });
    }

    return (
        <div>
            <ConstituentsNav page = ""/>
            <div className="page-container">
                <Heading content = "Find Your Rep"/>
                <div className = "zipcode-inputs">
                    <h2>Search By Area</h2>
                    <div className="zipcode-input">
                        <div className="zipcode-input-container">
                            <input value = {zipcode} onChange = {(e) => {setZipcode(e.target.value)}} type = "text" placeholder="Enter the zipcode"></input>
                        </div>
                        <div className="search-button">
                            <button name = "byZip" onClick = {(e) => {getCardInfo(e)}} className="search-btn">Search</button>
                        </div>
                    </div>
                </div>
                {!byName &&<div className="spacer-40"></div>}
                {!byName && cardInfo.map((elem, index) => <Card index = {index} key = {index} name = {elem.name} title = {getRepOrSen(elem.link)}  beforeLink = {() => setCaller(index)}/> )}
                <div className="spacer-40"></div>
                <Heading content = "OR"/>
                <div className = "zipcode-inputs">
                    <h2>Search By Name</h2>
                    <div className="zipcode-input">
                        <div className="zipcode-input-container">
                            <input value = {name} onChange = {(e) => {setName(e.target.value)}} type = "text" placeholder="Enter the Name"></input>
                        </div>
                        <div className="search-button">
                            <button name = "byName" onClick = {(e) => {getCardInfo(e)}} className="search-btn">Search</button>
                        </div>
                    </div>
                </div>

                {byName &&<div className="spacer-40"></div>}
                {byName && <div className="spacer-40"></div> && cardInfo.map((elem, index) => <Card index = {index} key = {index} name = {elem.name} title = {getRepOrSen(elem.link)} beforeLink = {() => setCaller(index)}/>)}
            </div>
        </div>
    )
}

export default ZipCode;