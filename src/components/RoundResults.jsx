import { useGame } from "../context/GameContext";
import "./RoundResults.css";

function RoundResults({ index }) {
  const { name, myArray, distance, yearDifference } = useGame();
  return (
    <div className="round-results">
      {(name === "Next" || name === "Results") && (
        <div className="results">
          <p>
            <span>Location</span>:{" "}
            {myArray[index].name ? `${myArray[index].name}, ` : ""}
            {myArray[index].address ? `${myArray[index].address},` : ""}{" "}
            {myArray[index].city}, {myArray[index].country}{" "}
            {distance && (
              <span className="calculation-text">
                (You were {Math.round(distance)} km away)
              </span>
            )}
          </p>
          <p>
            <span>Year</span>: {myArray[index].year}{" "}
            {yearDifference !== null && (
              <span className="calculation-text">
                {yearDifference === 0
                  ? "(You guessed the correct year)"
                  : `(Your guess was ${yearDifference} years off)`}
              </span>
            )}
          </p>
        </div>
      )}
    </div>
  );
}
export default RoundResults;
