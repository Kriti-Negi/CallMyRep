import { Link } from 'react-router-dom';
import logo from '../Images/logo.jpg';
import '../Styles/navbar.css'
import '../Styles/buttons.css'

function ConstituentsNav(props){
    return(
        <nav className="navbar">
            <div className="left-navbar">
                <img src ={logo} alt = "our logo"/>
            </div>
            <div className="right-navbar-single">
                <Link to = {"/" + props.page} className = "nav-link">
                    <span className='button filled'>Back</span>
                </Link>
            </div>
        </nav>
    )
}

export default ConstituentsNav;