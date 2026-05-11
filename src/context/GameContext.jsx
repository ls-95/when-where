import { createContext, useContext, useState } from "react";

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [distanceScore, setDistanceScore] = useState(0);
  const [yearScore, setYearScore] = useState(0);

  function saveDistanceScore(scoreData) {
    setDistanceScore((prev) => prev + scoreData);
  }

  function saveYearScore(scoreData) {
    setYearScore((prev) => prev + scoreData);
  }

  return (
    <GameContext.Provider
      value={{ distanceScore, setDistanceScore, yearScore, setYearScore }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useApp() {
  return useContext(GameContext);
}
