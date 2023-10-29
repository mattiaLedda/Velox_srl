import React, { useState, useEffect } from 'react';

function GoogleMaps() {
  const [map, setMap] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [polygon, setPolygon] = useState(null);
  const [polygonArea, setPolygonArea] = useState(0);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    const initializeMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 45.464211, lng: 9.191383 },
        zoom: 14,
        mapTypeId: 'satellite',
      });

      const dm = new window.google.maps.drawing.DrawingManager({
        drawingControl: false,
        polygonOptions: {
          editable: true,
        },
      });

      dm.setMap(map);

      const drawingUI = document.createElement('div');
      drawingUI.style.background = '#fff';
      drawingUI.style.padding = '8px';
      drawingUI.style.border = '1px solid #000';
      drawingUI.style.cursor = 'pointer';
      drawingUI.style.textAlign = 'center';
      drawingUI.style.marginBottom = '5px';
      drawingUI.style.marginTop = '15px';
      drawingUI.style.fontSize = "15px";
      drawingUI.innerHTML = 'Traccia Tetto';

      const navigationUI = document.createElement('div');
      navigationUI.style.background = '#fff';
      navigationUI.style.padding = '8px';
      navigationUI.style.marginTop = '15px';
      navigationUI.style.border = '1px solid #000';
      navigationUI.style.cursor = 'pointer';
      navigationUI.style.fontSize = "15px"
      navigationUI.style.textAlign = 'center';
      navigationUI.innerHTML = 'Naviga Mappa';

      window.google.maps.event.addDomListener(drawingUI, 'click', function () {
        dm.setDrawingMode(window.google.maps.drawing.OverlayType.POLYGON);
      });

      window.google.maps.event.addDomListener(navigationUI, 'click', function () {
        dm.setDrawingMode(null);
      });

      window.google.maps.event.addListener(dm, 'overlaycomplete', (event) => {
        if (event.type === window.google.maps.drawing.OverlayType.POLYGON) {
          if (polygon) {
            polygon.setMap(null);
          }
          setPolygon(event.overlay);
          calculateArea(event.overlay.getPath());
          dm.setDrawingMode(null);
        }
      });

      map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(drawingUI);
      map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(navigationUI);

      const input = document.getElementById('search-input');
      const options = { types: ['geocode'] };
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
    console.log(area)
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
    <div className="search-street-page mt-5">
      <h1>Cerca una via</h1>
      <div className="search-box mb-5">
        <div className="input-group">
          <input
            type="text"
            id="search-input"
            className="form-control"
            placeholder="Inserisci l'indirizzo"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleSearch}>Cerca</button>
          </div>
        </div>
      </div>

      <div id="map" style={{ height: '800px', width: '800px', borderRadius: "20px" }}></div>
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
