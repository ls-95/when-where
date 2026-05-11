import "./GuessPannel.css";

function GuessPannel({ handleGuess, handleNext, name, newArray, distance }) {
  return (
    <div className=" guess-pannel">
      {name === "Next" && (
        <div className="results">
          <p>
            Location: {newArray.name ? `${newArray.name}, ` : ""}
            {newArray.address ? `${newArray.address},` : ""} {newArray.city},{" "}
            {newArray.country}
          </p>
          <p>Year: {newArray.year}</p>

          {distance && (
            <p>You were {Math.round(distance)} km away</p>
          )}

        </div>
      )}
      <div className="container-top">
        <div className="pin-row">
          <p>Place the pin on the map</p>
        </div>
        <div className="year-row">
          <label>Year</label>
          <input type="range" />
        </div>
      </div>

      <button
        className="guess-btn"
        onClick={name === "Guess" ? handleGuess : handleNext}
      >
        {name}
      </button>
    </div>
  );
}

export default GuessPannel;
