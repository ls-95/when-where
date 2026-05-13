import "./ScoreRoundBanner.css";
import { useGame } from "../context/GameContext";

function ScoreRoundBanner({ index }) {
  const { distanceScore, yearScore } = useGame();
  const totalScore = distanceScore + yearScore;

  return (
    <div className="score-round-banner">
      <div className="score-container">
        <p className="score-txt"> SCORE </p>
        <p className="score"> {totalScore}/1000 </p>
      </div>

      <div className="round-container">
        <p className="round-txt">ROUND</p>
        <p className="round"> {index + 1}/5 </p>
      </div>
    </div>
  );
}

export default ScoreRoundBanner;
