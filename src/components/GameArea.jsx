import "./GameArea.css";
import GuessPannel from "./GuessPannel.jsx";
import Image from "./Images.jsx";
import { pics } from "./ImageList.jsx";
import { useState } from "react";
import { useNavigate } from "react-router";

function GameArea({ index, setIndex, totalScore, setTotalScore }) {
  const [name, setName] = useState("Guess");

  const [guessedYear, setGuessedYear] = useState(1962);
  const [yearScore, setYearScore] = useState(0);
  const [locationScore, setLocationScore] = useState(0);
  const navigate = useNavigate();

  const handleResults = () => {
    navigate("/score");
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

  const calculateYearScore = () => {
    const correctYear = Number(myArray[index].year);
    const yearDifference = Math.abs(correctYear - guessedYear);

    return Math.max(0, 100 - yearDifference * 5);
  };

  const handleGuess = () => {
    const pointsFromYear = calculateYearScore();

    setYearScore(pointsFromYear);
    setLocationScore(0);
    setTotalScore((previousScore) => previousScore + pointsFromYear);

    if (index <= 3) {
      setName("Next");
    } else {
      setName("Results");
    }
  };

  const handleNext = () => {
    if (index < myArray.length - 1 && index < 4) {
      setIndex(index + 1);
      setGuessedYear(1962);
      setYearScore(0);
      setLocationScore(0);
      setName("Guess");
    }
  };

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
          <GuessPannel
            handleGuess={handleGuess}
            handleNext={handleNext}
            handleResults={handleResults}
            name={name}
            newArray={myArray[index]}
            guessedYear={guessedYear}
            setGuessedYear={setGuessedYear}
            yearScore={yearScore}
            totalScore={totalScore}
          />
        </div>
      </div>
    </div>
  );
}

export default GameArea;
