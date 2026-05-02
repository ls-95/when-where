
import "./GuessPannel.css"

function GuessPannel(){
    return(
        <div className=" guess-pannel">
            <div className="container-top">
               <div className="pin-row">
                  <p>Place the pin on the map</p>
               </div>
               <div className="year-row">
                  <label>Year</label>
                 <input type="range"/>
               </div>
            </div>
            
            <button className="guess-btn"> Guess</button>
            
        </div>
    )
}

export default GuessPannel;