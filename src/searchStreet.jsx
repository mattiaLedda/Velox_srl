import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2bGVvIiwiYSI6ImNsbjdtcDNibzB6NW0ydG1ua2x0Y2I4cHkifQ.YJDbsqfZnH5XzUqa5mXf8w'; // Sostituisci con il tuo access token

function SearchStreet() {
  const [searchQuery, setSearchQuery] = useState('');
  const [map, setMap] = useState(null);

  // Funzione per cercare una via
  const searchStreet = () => {
    if (map) {
      // Utilizza il servizio di geocodifica di Mapbox per cercare la via
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?access_token=${mapboxgl.accessToken}`)
        .then(response => response.json())
        .then(data => {
          // Estrai le coordinate del risultato (ad esempio, la prima corrispondenza)
          const coordinates = data.features[0].center;

          // Centra la mappa sulle coordinate trovate
          map.flyTo({ center: coordinates, zoom: 19 });
        })
        .catch(error => {
          console.error('Errore nella ricerca della via:', error);
        });
    }
  };

  // Funzione per inizializzare la mappa
  const initializeMap = () => {
    const newMap = new mapboxgl.Map({
      container: 'map', // ID del container della mappa
      style: 'mapbox://styles/mapbox/satellite-streets-v12', // Stile della mappa (puoi cambiare lo stile)
      center: [-74.006, 40.7128], // Centro della mappa
      zoom: 10, // Zoom iniziale
    });
    setMap(newMap);
  };

  // Effettua l'inizializzazione della mappa quando il componente viene montato
  React.useEffect(() => {
    initializeMap();
  }, []);

  return (
    <div className="search-street-page">
      <h1>Cerca una via</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="Inserisci il nome della via"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={searchStreet}>Cerca</button>
      </div>
      <div id="map" className="map"></div>
    </div>
  );
}

export default SearchStreet;
