import { useGame } from "../context/GameContext";
import "./RoundResults.css";

function RoundResults({ index }) {
  const { name, myArray, distance } = useGame();
  console.log("name:", name);
  console.log("distance:", distance);
  console.log("myArray[index]:", myArray[index]);
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
              <p className="calculation-text">
                (You were {Math.round(distance)} km away)
              </p>
            )}
          </p>
          <p>
            <span>Year</span>: {myArray[index].year}
          </p>
        </div>
      )}
    </div>
  );
}
export default RoundResults;
