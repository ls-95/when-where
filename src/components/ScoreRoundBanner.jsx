import "./ScoreRoundBanner.css";
function ScoreRoundBanner({ index }) {
  return (
    <div className="score-round-banner">
      <div className="score-container">
        <div className="score-txt"> SCORE </div>
        <div className="score"> 0 </div>
      </div>
      <div className="round-container">
        <div className="round-txt">ROUND</div>
        <div className="round"> {index + 1}/5 </div>
      </div>
    </div>
  );
}

export default ScoreRoundBanner;
