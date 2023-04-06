import { Link } from 'react-router-dom';
import logo from '../Images/logo.jpg';
import '../Styles/navbar.css'

function StafferNav(){
    return(
        <nav className="navbar">
            <div className="left-navbar">
                <img src ={logo} alt = "our logo"/>
            </div>
            <div className="right-navbar-single">
                <Link to = "/dashboard" className = "nav-link">
                    <span>Dashboard</span>
                </Link>
            </div>
        </nav>
    )
}

export default StafferNav;