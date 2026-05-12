import "./Header.css";
import Logo from "../assets/when-where-logo-white.png";

function Header() {
  return (
    <div className="logo-container">
      <img src={Logo} alt="logo white" className="logo" />
    </div>
  );
}

export default Header;
