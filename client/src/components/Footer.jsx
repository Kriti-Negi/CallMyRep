import logo from './Images/logo.jpg';
import './Styles/footer.css'

function Footer(){
    return (
        <footer>
            <div className="footer-img">
                <img src = {logo} alt = "logo"/>
            </div>
            <div className="footer-text">
                <h3>Call My Rep</h3>
                <p>(c) 2023 Samsung Solve For Tomorrow Competition</p>
            </div>
        </footer>
    )
}

export default Footer;