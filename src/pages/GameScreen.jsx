import "./GameScreen.css";
import MainLayout from "../layout/MainLayout.jsx";
import GameArea from "../components/GameArea.jsx";
import { useState } from "react";

function GameScreen() {
  const [index, setIndex] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  return (
    <div>
      <MainLayout index={index} totalScore={totalScore}>
        <GameArea 
        index={index} 
        setIndex={setIndex}
        totalScore={totalScore}
        setTotalScore={setTotalScore}
        />
      </MainLayout>
    </div>
  );
}

export default GameScreen;
