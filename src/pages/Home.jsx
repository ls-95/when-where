import "./Home.css";
import Logo from "../assets/when-where-logo.png";
import Background from "../assets/when-where-background-2.png";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const handleEmail = () => {
    const promptInput = prompt(
      `What would you like to contact us about?`,
    ).trim();
    if (promptInput !== "") {
      alert(
        `Your email regarding "${promptInput}" will be handled by our customer service department that was last seen in the 1970s, so please allow extra time for them to return. 
  We still have hope. 
  Thank you.`,
      );
    } else {
      alert("Please type something");
    }
  };
  const handleClick = (message) => {
    alert(
      `There ${message === "Terms of Use" ? "are" : "is"} no “${message}” yet. Please remain patient while we pretend to create them.`,
    );
  };

  return (
    <div
      className="home-container"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="main-container">
        <img src={Logo} alt="When & Where logo" className="logo-home" />
        <div className="btn-container">
          <button className="btn-play" onClick={() => navigate("/game")}>
            Play
          </button>
          <button className="btn-exit" onClick={() => navigate("/login")}>
            Exit
          </button>
        </div>
      </div>
      <div className="footer-container">
        <div className="email-container">
          <button onClick={handleEmail}>
            thisisnotarealemail@when&where.com
          </button>
        </div>
        <div className="footer-btn-container">
          <button onClick={() => handleClick("Terms of Use")}>
            Terms of Use
          </button>
          <button onClick={() => handleClick("Privacy Policy")}>
            Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
