import { useState } from 'react';
import { GoogleMap, LoadScript, Marker, DrawingManager } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 40.7128, // Latitudine del centro della mappa
  lng: -74.006, // Longitudine del centro della mappa
};

const options = {
  mapTypeId: 'satellite', // Imposta il tipo di mappa su "satellite" per la vista satellitare
};

function GoogleMaps() {
  const [markers, setMarkers] = useState([]);
  const [area, setArea] = useState(null);

  const onMapLoad = (map) => {
    // L'API di Google Maps è stata caricata e la mappa è pronta per essere utilizzata
    // Puoi eseguire qui le operazioni che richiedono l'API
    console.log('Google Maps API caricata con successo!', map);
  };

  const onMapClick = (e) => {
    setMarkers([...markers, e.latLng]);
  };

  const onPolygonComplete = (polygon) => {
    // Calcola l'area del poligono utilizzando il percorso delle coordinate dei marker
    const path = polygon.getPath();
    const area = window.google.maps.geometry.spherical.computeArea(path);
    setArea(area);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDHMFLWSCT53eOuuunr-n8Berat6tgL0Kc"
      onLoad={onMapLoad} // Aggiungi questa callback per gestire il caricamento dell'API
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        options={options}
        onClick={onMapClick}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}

        <DrawingManager
          onPolygonComplete={onPolygonComplete}
          drawingControlOptions={{
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [window.google.maps.drawing.OverlayType.POLYGON],
          }}
        />
      </GoogleMap>

      {area && (
        <div>
          <p>Area del poligono: {area.toFixed(2)} metri quadrati</p>
        </div>
      )}
    </LoadScript>
  );
}

export default GoogleMaps;
