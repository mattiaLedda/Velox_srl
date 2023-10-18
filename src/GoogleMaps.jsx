import React, { useState, useEffect } from 'react';

function GoogleMaps() {
  const [map, setMap] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [polygon, setPolygon] = useState(null);
  const [polygonArea, setPolygonArea] = useState(0);
  const [autocomplete, setAutocomplete] = useState(null); // Aggiunto stato per l'autocomplete

  useEffect(() => {
    const initializeMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 10,
        mapTypeId: 'satellite',
      });

      // const placesService = new window.google.maps.places.PlacesService(map);

      const dm = new window.google.maps.drawing.DrawingManager({
        drawingControl: true,
        drawingControlOptions: {
          position: window.google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [window.google.maps.drawing.OverlayType.POLYGON],
        },
      });

      dm.setMap(map);

      window.google.maps.event.addListener(dm, 'overlaycomplete', (event) => {
        if (event.type === window.google.maps.drawing.OverlayType.POLYGON) {
          if (polygon) {
            polygon.setMap(null);
          }
          setPolygon(event.overlay);
          calculateArea(event.overlay.getPath());
        }
      });

      // Inizializza l'autocomplete
      const input = document.getElementById('search-input');
      const options = {
        types: ['geocode'],
      };
      const autocomplete = new window.google.maps.places.Autocomplete(input, options);
      setAutocomplete(autocomplete);

      setMap(map);
    };

    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCYoxmzxtoNKjPT4Reh0zhVl3KgSJ4D1Jg&libraries=drawing,places&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.initMap = initializeMap;
      };
    };

    loadGoogleMapsScript();
  }, []);

  const calculateArea = (path) => {
    const area = window.google.maps.geometry.spherical.computeArea(path);
    setPolygonArea(area);
  };

  const handleSearch = () => {
    if (map && autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        map.setCenter(place.geometry.location);
        map.setZoom(20);
      }
    }
  };

  const clearPolygon = () => {
    if (polygon) {
      polygon.setMap(null);
      setPolygon(null);
      setPolygonArea(0);
    }
  };

  return (
    <div className="search-street-page">
      <h1>Cerca una via</h1>
      <div className="search-box">
        <input
          type="text"
          id="search-input" // Assicurati che l'ID sia "search-input"
          placeholder="Inserisci l'indirizzo"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Cerca</button>
      </div>
      <div id="map" className="map"></div>
      {polygonArea > 0 && (
        <div className="tot-area">
          <p>Area del poligono: {polygonArea.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} metri quadrati</p>
        </div>
      )}
      {polygon && (
        <div className="clear-poly-div">
          <button onClick={clearPolygon} className="clear-poly">Cancella Poligono</button>
        </div>
      )}
    </div>
  );
}

export default GoogleMaps;
