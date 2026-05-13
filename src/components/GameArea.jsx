import "./GameArea.css";
import GuessPannel from "./GuessPannel.jsx";
import Image from "./Images.jsx";
import { pics } from "./ImageList.jsx";
import { useState } from "react";
import Map from "./Map.jsx";
import { useNavigate } from "react-router";

function GameArea({ index, setIndex, totalScore, setTotalScore }) {
  const [name, setName] = useState("Guess");
 

  const [guessedYear, setGuessedYear] = useState(1962);
  const [yearScore, setYearScore] = useState(0);
  const [locationScore, setLocationScore] = useState(0);
  const [yearDifference, setYearDifference] = useState(null);
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
  
  

  const [guessPosition, setGuessPosition]= useState(null);
  const [isSubmittedGuess, setIsSubmittedGuess] = useState(false); 
  const [ distance,setDistance] = useState(null); 

  const correctPosition = {
    lat: parseFloat(myArray[index].lat),
    lng: parseFloat(myArray[index].long),
  };

  //harvestine distance formula

    function getDistance(lat1, lng1, lat2, lng2){

      const R = 6371; 

      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLng = (lng2 - lng1) * Math.PI / 180;

      const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLng / 2) * Math.sin(dLng / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      return R * c;

    }


  const calculateYearScore = () => {
    const correctYear = Number(myArray[index].year);
    const yearDifference = Math.abs(correctYear - guessedYear);

    return Math.max(0, 100 - yearDifference * 5);
  };

  const handleGuess = () => {
    if (!guessPosition) return;

    const guessLat = guessPosition[0];
    const guessLng = guessPosition[1];

    const correctLat = correctPosition.lat;
    const correctLng = correctPosition.lng;

    const distance = getDistance(guessLat, guessLng, correctLat, correctLng);

    setDistance(distance);
    setIsSubmittedGuess(true);

    const correctYear = Number(myArray[index].year);
    const differenceFromYear = Math.abs(correctYear - guessedYear);
    setYearDifference(differenceFromYear);

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
      setYearDifference(null);
      setName("Guess");
    }
  
    setGuessPosition(null);
    setIsSubmittedGuess(false);
    setDistance(null);
  };
  
  return (
    <div className="game-area">
      <div className="container">
        <div className="image">
          <Image images={myArray} index={index} />
        </div>
      </div>

      <div className="container right-column">
        <Map guessPosition={guessPosition}
          setGuessPosition={setGuessPosition} 
          isSubmittedGuess={isSubmittedGuess} 
          correctPosition={correctPosition}>
        </Map>
        
      
        <div className="guess-panel">
          <GuessPannel
            handleGuess={handleGuess}
            handleNext={handleNext}
            handleResults={handleResults}
            name={name}
            newArray={myArray[index]}
            guessPosition={guessPosition}
            distance={distance}
            guessedYear={guessedYear}
            setGuessedYear={setGuessedYear}
            yearScore={yearScore}
            totalScore={totalScore}
            yearDifference={yearDifference}
          />
        </div>
      </div>
    </div>
  );
}

export default GameArea;
