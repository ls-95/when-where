import "./GameArea.css"
import GuessPannel from "./GuessPannel.jsx";

function GameArea(){
    return(
        <div className="game-area">
            <div className="container">
                <div className="image">IMAGE</div>
            </div>

            <div className="container right-column">
                <div className="map">Map</div>
                <div className="guess-panel"><GuessPannel/></div>
            </div>
            
        </div>
    );
}

export default GameArea;