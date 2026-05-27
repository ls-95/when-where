import "./HowToPlay.css";

function HowToPlay({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>How to Play</h2>

        <div className="modal-section">
          <p>
            You'll be shown <strong>5 mystery street photos</strong> from
            different places and times. Your job is to figure out{" "}
            <span className="when">when</span> &{" "}
            <span className="where">where</span> each one was taken!
          </p>
        </div>

        <div className="modal-section">
          <h3>Each Round</h3>
          <ul>
            <li>
              Study the photo carefully — look for cars, signs, buildings, and
              fashion clues
            </li>
            <li>Drop a pin on the map where you think the photo was taken</li>
            <li>Use the slider to guess the year the photo was taken</li>
            <li>
              Hit <strong>Guess</strong> to submit your answer
            </li>
          </ul>
        </div>

        <div className="modal-section">
          <h3>Scoring</h3>
          <ul>
            <li>
              <strong>Location</strong> — the closer your pin, the more points
              (up to 100pts per round)
            </li>
            <li>
              <strong>Year</strong> — the closer your guess, the more points (up
              to 100pts per round)
            </li>
            <li>
              Maximum total score is <strong>1000 points</strong> across all 5
              rounds
            </li>
          </ul>
        </div>

        <button className="modal-close-btn" onClick={onClose}>
          Got it!
        </button>
      </div>
    </div>
  );
}

export default HowToPlay;
