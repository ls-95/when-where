import "./Home.css";
import Logo from "../assets/when-where-logo.webp";
import Background from "../assets/when-where-background-2.webp";
import { useNavigate } from "react-router";
import { useGame } from "../context/GameContext";
import { useState } from "react";
import HowToPlay from "../components/HowToPlay";

function Home() {
  const { resetGame } = useGame();
  const navigate = useNavigate();
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState(false);
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
      <div className="how-to-play-container">
        <button
          className="btn-how-to-play"
          onClick={() => setIsHowToPlayOpen(true)}
        >
          How To Play
        </button>
      </div>
      <div className="main-container">
        <img src={Logo} alt="When & Where logo" className="logo-home" />
        <div className="btn-container">
          <button
            className="btn-play"
            onClick={() => {
              resetGame();
              navigate("/game");
            }}
          >
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
        <div className="footer-names">
          <p>Fulvia Franco</p>
          <p>Jakob Körling</p>
          <p>Laetitia Saunders</p>
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
      {isHowToPlayOpen && (
        <HowToPlay onClose={() => setIsHowToPlayOpen(false)} />
      )}
    </div>
  );
}
export default Home;
