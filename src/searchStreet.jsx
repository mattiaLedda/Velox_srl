import React, { useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import * as turf from '@turf/turf';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2bGVvIiwiYSI6ImNsbjdtcDNibzB6NW0ydG1ua2x0Y2I4cHkifQ.YJDbsqfZnH5XzUqa5mXf8w'; // Sostituisci con il tuo access token

function SearchStreet() {
  const [searchQuery] = useState('');
  const [map, setMap] = useState(null);
  const [area, setArea] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

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
      const draw = new MapboxDraw({
        displayControlsDefault: false,
        // Select which mapbox-gl-draw control buttons to add to the map.
        controls: {
          polygon: true,
          trash: true
        },
        // Set mapbox-gl-draw to draw by default.
        // The user does not have to click the polygon control button first.
        defaultMode: 'draw_polygon'
      });
      map.addControl(draw);
      map.on('draw.create', updateArea);
      map.on('draw.delete', updateArea);
      map.on('draw.update', updateArea);
    }
  };
  function updateArea(e) {
    const data = draw.getAll();
    const answer = document.getElementById('calculated-area');
    if (data.features.length > 0) {
      const area = turf.area(data);
      // Restrict the area to 2 decimal points.
      const rounded_area = Math.round(area * 100) / 100;
      answer.innerHTML = `<p><strong>${rounded_area}</strong></p><p>square meters</p>`;
    } else {
      answer.innerHTML = '';
      if (e.type !== 'draw.delete')
        alert('Click the map to draw a polygon.');
    }
  }


  // Funzione per inizializzare la mappa
  const initializeMap = () => {
    const newMap = new mapboxgl.Map({
      container: 'map', // ID del container della mappa
      style: 'mapbox://styles/mapbox/satellite-streets-v12', // Stile della mappa (puoi cambiare lo stile)
      center: [-74.006, 40.7128], // Centro della mappa
      zoom: 10, // Zoom iniziale
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      // Select which mapbox-gl-draw control buttons to add to the map.
      controls: {
        polygon: true,
        trash: true
      },
      // Set mapbox-gl-draw to draw by default.
      // The user does not have to click the polygon control button first.
      defaultMode: 'draw_polygon'
    });

    newMap.addControl(draw);

    newMap.on('draw.create', updateArea);
    newMap.on('draw.delete', updateArea);
    newMap.on('draw.update', updateArea);

    setMap(newMap);

    // Aggiungi il componente MapboxGeocoder per i suggerimenti di ricerca in tempo reale
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Inserisci il nome della via',
    });

    newMap.addControl(geocoder);

    geocoder.on('result', (event) => {
      // Quando viene selezionato un suggerimento di ricerca, ottieni le coordinate del risultato
      const coordinates = event.result.center;

      // Centra la mappa sulle coordinate trovate
      newMap.flyTo({ center: coordinates, zoom: 19 });
    });
  };

  function updateArea(e) {
    const data = e.features[0];
    const area = turf.area(data);
    // Restrict the area to 2 decimal points.
    const rounded_area = Math.round(area * 100) / 100;
    setArea(rounded_area);
  }

  // Effettua l'inizializzazione della mappa quando il componente viene montato
  React.useEffect(() => {
    initializeMap();
  }, []);

  return (
    <div className="search-street-page">
      <h1>Cerca una via</h1>
      <div className="search-box">
        <AsyncTypeahead
          id="searchInput"
          labelKey="place_name"
          placeholder="Inserisci il nome della via"
          onSearch={(query) => {
            // Esegui una ricerca in tempo reale e imposta i risultati in `searchResults`
            setSearchResults([]);
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`)
              .then(response => response.json())
              .then(data => {
                setSearchResults(data.features);
              })
              .catch(error => {
                console.error('Errore nella ricerca della via:', error);
              });
          }}
          options={searchResults}
          onChange={(selected) => {
            // Quando viene selezionato un suggerimento di ricerca, ottieni le coordinate del risultato
            if (selected && selected.length > 0) {
              const coordinates = selected[0].center;

              // Centra la mappa sulle coordinate trovate
              map.flyTo({ center: coordinates, zoom: 19 });
            }
          }}
        />
        <button onClick={searchStreet}>Cerca</button>
      </div>
      <div id="map" className="map"></div>
      {area && (
        <div>
          <p>Area del poligono: {area} metri quadrati</p>
        </div>
      )}
    </div>
  );
}

export default SearchStreet;
