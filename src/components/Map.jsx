import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { useState } from "react";
import { useMapEvents, useMap } from "react-leaflet";



function Map({guessPosition, setGuessPosition, correctPosition, isSubmittedGuess}){

    const formatted = guessPosition ? `${guessPosition[0].toFixed(4)}, ${guessPosition[1].toFixed(4)}`: "";
    const formattedAnswer = correctPosition ? `${correctPosition[0].toFixed(4)}, ${correctPosition[1].toFixed(4)}`: "";

    function ClickHandler({setGuessPosition, isSubmittedGuess}){
    useMapEvents({
        click(e){
            if(isSubmittedGuess) return;

            console.log("CLICKED", e.latlng);
            setGuessPosition([e.latlng.lat, e.latlng.lng]);
        
        },
    });
    
    return null;
}


    //zoom on result
    function ZoomToResult({ guessPosition, correctPosition, isSubmittedGuess }) {

      const map = useMap();

        if (isSubmittedGuess && guessPosition) {

           map.fitBounds([guessPosition,correctPosition]);
        }
        return null;
    }

    return(
        <div>
            <MapContainer
              center={[40, 0]} /*lat- long*/ 
              zoom={1}
              style={{ height: "100%", width: "100%" }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap"
               />
                <ClickHandler setGuessPosition={setGuessPosition} isSubmittedGuess={isSubmittedGuess} />
                 
                <ZoomToResult guessPosition={guessPosition} correctPosition={correctPosition} isSubmittedGuess={isSubmittedGuess}/>

               {guessPosition && (
                   <Marker position={guessPosition}>     
                      <Popup> Your guess : {formatted}</Popup>
                   </Marker>                                    //pin
                )}    

                {isSubmittedGuess && (
                    <Marker position={correctPosition}>
                       <Popup>Correct answer: {formattedAnswer}</Popup> 
                    </Marker>                                     // second pin
                )}     

                {isSubmittedGuess && guessPosition && (
                   <Polyline positions={[guessPosition, correctPosition]} />//line
                )}  
                
            </MapContainer>
        </div>
    )


}

export default Map;