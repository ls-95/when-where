import "./Header.css";
import { useNavigate } from "react-router";
import Logo from "../assets/when-where-logo-white.png";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="logo-container" onClick={() => navigate("/home")}>
      <button className="logo-btn">
        <img src={Logo} alt="logo white" className="logo" />
      </button>
    </div>
  );
}

export default Header;
