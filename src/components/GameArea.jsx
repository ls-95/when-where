import "./GameArea.css";
import GuessPannel from "./GuessPannel.jsx";
import Image from "./Images.jsx";
import { pics } from "./ImageList.jsx";
import { useState } from "react";
import Map from "./Map.jsx";

function GameArea({ index, setIndex }) {
  const [name, setName] = useState("Guess");
  const handleGuess = () => {
    setName("Next");

    if(!guessPosition)return;
    const distance = getDistance(guessPosition, correctPosition);
    setDistance(distance);
    setIsSubmittedGuess(true);
  };

  const handleNext = () => {
    if (index <= 3) {
      if (index < myArray.length - 1) {
        setIndex(index + 1);
      }
    } else {
      alert("This is the end");
    }
    setName("Guess");


    setGuessPosition(null);
    setIsSubmittedGuess(false);
    setDistance(null);
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
  
  // GUESS LOCATION

  const [guessPosition, setGuessPosition]= useState(null);
  const [isSubmittedGuess, setIsSubmittedGuess] = useState(false); 
  const [ distance,setDistance] = useState(null); 

  const correctPosition = [48.8566, 2.3522];

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
            name={name}
            newArray={myArray[index]}
            guessPosition={guessPosition}
          />
        </div>
      </div>
    </div>
  );
}

export default GameArea;
