import "./ScoreRoundBanner.css";
import { useGame } from "../context/GameContext";

function ScoreRoundBanner({ index }) {
  const { distanceScore, yearScore } = useGame();
  const totalScore = distanceScore + yearScore;

  return (
    <div className="score-round-banner">
      <div className="score-container">
        <div className="score-txt"> SCORE </div>
        <div className="score"> {totalScore}/1000 </div>
      </div>

      <div className="round-container">
        <div className="round-txt">ROUND</div>
        <div className="round"> {index + 1}/5 </div>
      </div>
    </div>
  );
}

export default ScoreRoundBanner;
