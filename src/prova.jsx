import React, { useState, useEffect } from 'react';

function GoogleMaps() {
  const [map, setMap] = useState(null);
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
          drawingModes: [window.google.maps.drawing.OverlayType.POLYLINE],
        },
      });

      dm.setMap(map);

      window.google.maps.event.addListener(dm, 'overlaycomplete', (event) => {
        if (event.type === window.google.maps.drawing.OverlayType.POLYLINE) {
          if (line) {
            line.setMap(null);
          }
          setLine(event.overlay);
          calculateLineLength(event.overlay);
        }
      });

      setMap(map);
    };

    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=drawing&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.initMap = initializeMap;
      };
    };

    loadGoogleMapsScript();
  }, []);

  const calculateLineLength = (line) => {
    const path = line.getPath();
    const startPoint = path.getAt(0);
    const endPoint = path.getAt(1);
    const length = window.google.maps.geometry.spherical.computeDistanceBetween(startPoint, endPoint);
    setLineLength(length);
  };

  return (
    <div className="search-street-page">
      <h1>Calcola la lunghezza di una linea</h1>
      <div id="map" className="map"></div>
      {lineLength > 0 && (
        <div className="line-length">
          <p>Lunghezza della linea: {lineLength.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} metri</p>
        </div>
      )}
    </div>
  );
}

export default GoogleMaps;
