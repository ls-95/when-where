import "./GameScreen.css";
import MainLayout from "../layout/MainLayout.jsx";
import GameArea from "../components/GameArea.jsx";
import { useState } from "react";

function GameScreen() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <MainLayout index={index}>
        <GameArea index={index} setIndex={setIndex}></GameArea>
      </MainLayout>
    </div>
  );
}

export default GameScreen;
