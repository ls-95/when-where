import { useGame } from "../context/GameContext";
import "./RoundResults.css";

function RoundResults({ index }) {
  const { name, myArray, distance } = useGame();
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
            <span className="calculation-text">
              (You were "year" years off)
            </span>
          </p>
        </div>
      )}
    </div>
  );
}
export default RoundResults;
