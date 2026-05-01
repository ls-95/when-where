import "./Header.css"
import Logo from "../assets/when-where-logo-white.png"


function Header(){
    return(
        <div className="header">
            <div className="logo-container">
                <div><img src={Logo} alt="logo white"className="logo" /></div>
            </div>
            <div className="score-round-banner">
                <div className="score-container">
                    <div className="score-txt"> SCORE </div>
                    <div className="score"> 0 </div>
                </div>
                <div className="round-container">
                    <div className="round-txt">ROUND</div>
                    <div className="round"> 1/5 </div>
                </div>
            </div>

        </div>
    );
}

export default Header;