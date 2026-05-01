import "./Header.css"
import Logo from "../assets/when-where-logo-white.png"

function Header(){
    return(
        <div className="header">
            <div className="logo-container">
                <div><img src={Logo} alt="logo white"className="logo" /></div>
            </div>
         
           
         
            

        </div>
    );
}

export default Header;