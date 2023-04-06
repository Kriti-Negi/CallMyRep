import logo from './Images/logo.jpg'
import './Styles/navbar.css'
function HomeNav(){
    return (
        <nav className="navbar">
            <div className="left-navbar">
                <img src ={logo} alt = "our logo"/>
            </div>
            <div className="right-navbar">
                <div className = "nav-link" onClick={() => window.location.replace("/#howitworks")}>
                    <span>How it works</span>
                </div>
                <div className = "nav-link" onClick={() => window.location.replace("/#about")}>
                    <span>About</span>
                </div>
            </div>
        </nav>
    )
}  

export default HomeNav;