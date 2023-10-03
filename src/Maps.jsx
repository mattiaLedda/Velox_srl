import { useState } from 'react';
import { GoogleMap, Marker, LoadScript, Autocomplete } from '@react-google-maps/api';
import { polygon, area } from '@turf/turf';

function Maps() {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const [autocomplete, setAutocomplete] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [areaMeasurement, setAreaMeasurement] = useState(null);

  const handlePlaceSelect = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const location = place.geometry.location;
        const newMarker = { lat: location.lat(), lng: location.lng() };
        setMarkers([...markers, newMarker]);
        setAutocomplete(null); // Resetta l'autocomplete
      }
    }
  };

  const calculateArea = () => {
    if (markers.length < 3) {
      alert("Aggiungi almeno tre punti sulla mappa per calcolare l'area.");
      return;
    }

    // Crea un poligono usando i punti
    const turfPolygon = polygon([markers]);

    // Calcola l'area del poligono
    const calculatedArea = area(turfPolygon);
    setAreaMeasurement(calculatedArea);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDHMFLWSCT53eOuuunr-n8Berat6tgL0Kc" libraries={["places"]}>
      <div>
        <Autocomplete onLoad={(autocomplete) => setAutocomplete(autocomplete)}>
          <input type="text" placeholder="Cerca una via o luogo" />
        </Autocomplete>
        <button onClick={handlePlaceSelect}>Aggiungi Posizione</button>
        <button onClick={calculateArea}>Calcola Area</button>
        {areaMeasurement && <div>Superficie: {areaMeasurement} metri quadrati</div>}
        <GoogleMap mapContainerStyle={mapStyles} zoom={14} center={defaultCenter}>
          {markers.map((marker, index) => (
            <Marker key={index} position={marker} />
          ))}
        </GoogleMap>
      </div>
    </LoadScript>
  );
}

export default Maps;
