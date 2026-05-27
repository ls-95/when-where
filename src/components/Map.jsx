import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

function ClickHandler({ setGuessPosition, isSubmittedGuess }) {
  useMapEvents({
    click(e) {
      if (isSubmittedGuess) return;

      console.log("CLICKED", e.latlng);
      setGuessPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return null;
}

function Map({
  guessPosition,
  setGuessPosition,
  correctPosition,
  isSubmittedGuess,
}) {
  const formatted = guessPosition
    ? `${guessPosition[0].toFixed(4)}, ${guessPosition[1].toFixed(4)}`
    : "";
  const formattedAnswer = correctPosition
    ? `${correctPosition.lat.toFixed(4)}, ${correctPosition.lng.toFixed(4)}`
    : "";

  //zoom on result
  function ZoomToResult({ guessPosition, correctPosition, isSubmittedGuess }) {
    const map = useMap();

    if (isSubmittedGuess && guessPosition) {
      map.fitBounds([guessPosition, correctPosition]);
    }
    return null;
  }

  return (
    <div>
      <MapContainer
        center={[40, 0]} /*lat- long*/
        zoom={3}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url={`https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Wy3Gt7OuVVmIgLAbjFMF`}
          attribution="&copy; MapTiler & OpenStreetMap contributors"
        />
        <ClickHandler
          setGuessPosition={setGuessPosition}
          isSubmittedGuess={isSubmittedGuess}
        />

        <ZoomToResult
          guessPosition={guessPosition}
          correctPosition={correctPosition}
          isSubmittedGuess={isSubmittedGuess}
        />

        {guessPosition && (
          <Marker position={guessPosition}>
            <Popup> Your guess : {formatted}</Popup>
          </Marker> //pin
        )}

        {isSubmittedGuess && (
          <Marker position={[correctPosition.lat, correctPosition.lng]}>
            <Popup>Correct answer: {formattedAnswer}</Popup>
          </Marker> // second pin
        )}

        {isSubmittedGuess && guessPosition && (
          <Polyline
            positions={[
              guessPosition,
              [correctPosition.lat, correctPosition.lng],
            ]}
          /> //line
        )}
      </MapContainer>
    </div>
  );
}
export default Map;
