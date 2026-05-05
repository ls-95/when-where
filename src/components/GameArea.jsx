import "./GameArea.css";
import GuessPannel from "./GuessPannel.jsx";
import Image from "./Images.jsx";
import { pics } from "./ImageList.jsx";

function GameArea() {
  const handleGuess = () => {
    console.log("Hello", pics[0].city);
  };
  return (
    <div className="game-area">
      <div className="container">
        <div className="image">
          <Image />
        </div>
      </div>

      <div className="container right-column">
        <div className="map">Map</div>
        <div className="guess-panel">
          <GuessPannel onclick={handleGuess} />
        </div>
      </div>
    </div>
  );
}

export default GameArea;
