import WorldMap from "../assets/world-map.webp";
import "./FinalScore.css";
import { useNavigate } from "react-router";
import WhiteLogo from "../assets/when-where-logo-white.webp";
import { useGame } from "../context/GameContext";

function FinalScore() {
  const navigate = useNavigate();
  const { distanceScore, yearScore } = useGame();
  const totalScore = distanceScore + yearScore;

  return (
    <div
      className="final-score-container"
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${WorldMap})`,
      }}
    >
      <div className="final-score-logo-container">
        <img
          src={WhiteLogo}
          alt="When & Where logo"
          className="final-score-logo"
        />
      </div>
      <div className="final-score-main">
        <div className="user-total-score-container">
          <p className="final-score-title bold">Final Score:</p>
          <p>
            <span className="user-total-score bold">{totalScore}</span>{" "}
            <span className="game-total opacity">/ 1000</span>
          </p>
        </div>

        <div className="year-distance-scores-container">
          <div className="user-scores">
            <p className="score-title bold">Distance:</p>
            <p>
              <span className="user-score bold">{distanceScore}</span>{" "}
              <span className="total opacity">/ 500</span>
            </p>
          </div>

          <div className="user-scores">
            <p className="score-title bold">Year:</p>
            <p>
              <span className="user-score bold">{yearScore}</span>{" "}
              <span className="total opacity">/ 500</span>
            </p>
          </div>
        </div>

        <div className="final-score-btn">
          <button className="play-again-btn" onClick={() => navigate("/home")}>
            Play Again
          </button>
          <button className="exit-game-btn" onClick={() => navigate("/login")}>
            Exit Game
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinalScore;
