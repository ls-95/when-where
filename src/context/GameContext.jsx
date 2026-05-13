import { createContext, useContext, useState } from "react";
import { pics } from "../components/ImageList";

const GameContext = createContext(null);

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export function GameProvider({ children }) {
  const [distanceScore, setDistanceScore] = useState(0);
  const [yearScore, setYearScore] = useState(0);
  const [name, setName] = useState("Guess");
  const [myArray, setMyArray] = useState(() => shuffleArray(pics));
  const [distance, setDistance] = useState(null);

  function resetGame() {
    setDistance(0);
    setName("Guess");
    setMyArray(shuffleArray(pics));
    setDistance(null);
  }

  function saveDistanceScore(scoreData) {
    setDistanceScore((prev) => prev + scoreData);
  }

  function saveYearScore(scoreData) {
    setYearScore((prev) => prev + scoreData);
  }

  return (
    <GameContext.Provider
      value={{
        distanceScore,
        setDistanceScore,
        saveDistanceScore,
        yearScore,
        saveYearScore,
        name,
        setName,
        myArray,
        distance,
        setDistance,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
