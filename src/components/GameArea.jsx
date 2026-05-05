import "./GameArea.css";
import GuessPannel from "./GuessPannel.jsx";
import Image from "./Images.jsx";
import { pics } from "./ImageList.jsx";
import { useState } from "react";

function GameArea() {
  const [index, setIndex] = useState(0);
  const handleGuess = () => {
    if (index <= 3) {
      if (index < myArray.length - 1) {
        setIndex(index + 1);
      }
    } else {
      alert("This is the end");
    }
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  const [myArray] = useState(() => shuffleArray(pics));

  return (
    <div className="game-area">
      <div className="container">
        <div className="image">
          <Image images={myArray} index={index} />
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
