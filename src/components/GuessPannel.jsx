import "./GuessPannel.css";
import { useGame } from "../context/GameContext";

function GuessPannel({
  handleGuess,
  handleNext,
  handleResults,
  guessedYear,
  setGuessedYear,
  //yearScore,
  //locationScore,
  //totalScore,
  distance
}) {
  const { name } = useGame();
  return (
    <div className=" guess-pannel">
      <div className="container-top">
        <div className="pin-row">
          <p>Place the pin on the map</p>
        </div>

        <div className="year-row">
          <label htmlFor="year-slider">Year: {guessedYear}</label>
          <input
            id="year-slider"
            type="range"
            min="1900"
            max="2025"
            value={guessedYear}
            disabled={name === "Next"}
            onChange={(event) => setGuessedYear(Number(event.target.value))}
          />
        </div>
      </div>

      <button
        className="guess-btn"
        onClick={
          name === "Guess"
            ? handleGuess
            : name === "Next"
              ? handleNext
              : name === "Results"
                ? handleResults
                : null
        }
      >
        {name}
      </button>
    </div>
  );
}

export default GuessPannel;
