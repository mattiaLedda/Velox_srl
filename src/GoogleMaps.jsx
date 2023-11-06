import React, { useState, useEffect } from 'react';

function GoogleMaps() {
  const [map, setMap] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [polygon, setPolygon] = useState(null);
  const [polygonArea, setPolygonArea] = useState(0);
  const [polygonPerimeter, setPolygonPerimeter] = useState(0);
  const [sideLengths, setSideLengths] = useState([]);
  const [autocomplete, setAutocomplete] = useState(null);
  const [polygonEdges, setPolygonEdges] = useState([]);
  const [line, setLine] = useState(null);
  const [lineLength, setLineLength] = useState(0);


  useEffect(() => {
      const initializeMap = () => {
          const map = new window.google.maps.Map(document.getElementById('map'), {
              center: { lat: 40.7128, lng: -74.006 },
              zoom: 10,
              mapTypeId: 'satellite',
          });
  
          const dm = new window.google.maps.drawing.DrawingManager({
              drawingControl: true,
              drawingControlOptions: {
                  position: window.google.maps.ControlPosition.TOP_CENTER,
                  drawingModes: [window.google.maps.drawing.OverlayType.POLYGON, window.google.maps.drawing.OverlayType.POLYLINE],
              },
          });
  
          dm.setMap(map);
  
          window.google.maps.event.addListener(dm, 'overlaycomplete', (event) => {
              if (event.type === window.google.maps.drawing.OverlayType.POLYGON) {
                  if (polygon) {
                      polygon.setMap(null);
                  }
                  setPolygon(event.overlay);
                  const path = event.overlay.getPath();
                  calculateAreaAndPerimeter(path);
                  const lengths = calculateSideLengths(path);
                  setSideLengths(lengths);
              } else if (event.type === window.google.maps.drawing.OverlayType.POLYLINE) {
                  if (line) {
                      line.setMap(null);
                  }
                  setLine(event.overlay);
                  calculateLineLength(event.overlay);
              }
          });
  
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

  const calculateAreaAndPerimeter = (path) => {
    const area = window.google.maps.geometry.spherical.computeArea(path);
    const perimeter = calculatePerimeter(path);
    setPolygonArea(area);
    setPolygonPerimeter(perimeter);
  };

  const calculatePerimeter = (path) => {
    let perimeter = 0;
    for (let i = 0; i < path.getLength(); i++) {
      const startPoint = path.getAt(i);
      const endPoint = path.getAt((i + 1) % path.getLength());
      perimeter += window.google.maps.geometry.spherical.computeDistanceBetween(startPoint, endPoint);
    }
    return perimeter;
  };

  const calculateSideLengths = (path) => {
    const sideLengths = [];
    for (let i = 0; i < path.getLength(); i++) {
      const startPoint = path.getAt(i);
      const endPoint = path.getAt((i + 1) % path.getLength());
      const length = window.google.maps.geometry.spherical.computeDistanceBetween(startPoint, endPoint);
      sideLengths.push(length);
    }
    return sideLengths;
  };

  const calculateLineLength = (line) => {
    const path = line.getPath();
    const startPoint = path.getAt(0);
    const endPoint = path.getAt(1);
    const length = window.google.maps.geometry.spherical.computeDistanceBetween(startPoint, endPoint);
    setLineLength(length);
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
      setPolygonPerimeter(0);
      setSideLengths([]);
      removePolygonEdges();
    }
  };

  const clearLine = () => {
    if (line) {
      line.setMap(null);
      setLine(null);
      setLineLength(0);
  }
  };

  const removePolygonEdges = () => {
    // Rimuovi tutte le linee (lati) dal poligono
    polygonEdges.forEach((edge) => {
      edge.setMap(null);
    });
    setPolygonEdges([]);
  };

  return (
    <div className="search-street-page">
      <h1>Cerca una via</h1>
      <div className="search-box">
        <input
          type="text"
          id="search-input"
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
          <p>Perimetro del poligono: {polygonPerimeter.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} metri</p>
        </div>
      )}
      {sideLengths.length > 0 && (
        <div className="tot-area">
          <p>Lunghezza dei lati:</p>
          <ul>
            {sideLengths.map((length, index) => (
              <li key={index}>{length.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} metri</li>
            ))}
          </ul>
        </div>
      )}
      {polygon && (
        <div className="clear-poly-div">
          <button onClick={clearPolygon} className="clear-poly">Cancella Poligono</button>
        </div>
      )}

      {lineLength > 0 && (
        <div className="clear-poly-div">
          <button onClick={clearLine} className="clear-poly">Cancella Linea</button>
        </div>
      )}
      {lineLength > 0 && (
        <div className="tot-area">
          <p>Lunghezza della linea: {lineLength.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} metri</p>
        </div>
      )}
    </div>
  );
}

export default GoogleMaps;
