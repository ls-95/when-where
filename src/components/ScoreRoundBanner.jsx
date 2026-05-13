import "./ScoreRoundBanner.css";
function ScoreRoundBanner({ index, totalScore }) {
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
