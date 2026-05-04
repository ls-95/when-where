import "./GameScreen.css"
import MainLayout from "../layout/MainLayout.jsx";
import GameArea from "../components/GameArea.jsx";

function GameScreen(){
    return(
        <div>
            <MainLayout>
                <GameArea></GameArea>
            </MainLayout>
        </div>
    );
}

export default GameScreen;