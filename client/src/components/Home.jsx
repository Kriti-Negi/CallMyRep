import Heading from "./General/Heading";
import HomeNav from "./HomeNav";
import ButtonLink from './General/ButtonLink'
import Spacer from "./General/Spacer";

import homeIcon from './Images/homeIcon.png';
import people from './Images/people.jpg';

import './Styles/home.css';


function Home(){
    return (
        <div>
            <HomeNav/>
            <section className="header-section">
                <div className="left-header-section">
                    <Heading content = "Call my Rep" align = "center"/>
                    <p className="left-text">An easy way to get your point across the nation. </p>
                    <Spacer height = {15}/>
                    <div className="button-container-300">
                        <ButtonLink link = "zipcode" type = "filled" content = "Call a Congressman" beforeLinkSent = {() => {}}/>
                        <ButtonLink link = "dashboard" type = "outline" content = "Staffer Login" beforeLinkSent = {() => {}}/>
                    </div>
                </div>
                <div className="right-header-section">
                    <img className = "right-header-img" src = {homeIcon}></img>
                </div>
            </section>
            <section className="hero-banner" id = "howitworks">
                <Heading content = "How it works"/>
                <p className="center-text">Congressmen get hundreds of calls everyday. To make it easier for everyone, we’ve made a way for staffers to easy see the information they need and quickly answer your questions.</p>
            </section>
            <section className="about-us" id = "about">
                <div className="left-about-section">
                    <img className = "left-about-img" src = {people} alt = "people icon"></img>
                </div>
                <div className="right-about-section">
                    <Heading content = "About Us"/>
                    <p className="left-text">We are a group of high school students looking for a way to reclaim the people’s voice in government.</p>
                    <div className="spacer-30"></div>
                    <div style={{width: 300}}>
                        <a className = "button filled" href="https://en.wikipedia.org/wiki/Video">Watch the video</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;