import React, { useState, useEffect } from 'react';

function GoogleMaps() {
  const [map, setMap] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [polygon, setPolygon] = useState(null);
  const [polygonArea, setPolygonArea] = useState(0);
  const [autocomplete, setAutocomplete] = useState(null);
  const [points, setPoints] = useState(null);
  const [lineDistance, setLineDistance] = useState(0);
  const [path1, setPath1] = useState(null)
  const [path2, setPath2] = useState(null)



  useEffect(() => {
    const initializeMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 45.464211, lng: 9.191383 },
        zoom: 22,
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

      const lineUI = document.createElement('div');
      lineUI.style.background = '#fff';
      lineUI.style.padding = '8px';
      lineUI.style.marginTop = '15px';
      lineUI.style.border = '1px solid #000';
      lineUI.style.cursor = 'pointer';
      lineUI.style.fontSize = "15px"
      lineUI.style.textAlign = 'center';
      lineUI.innerHTML = 'Traccia Linea';

      window.google.maps.event.addDomListener(drawingUI, 'click', function () {
        dm.setDrawingMode(window.google.maps.drawing.OverlayType.POLYGON);
      });

      window.google.maps.event.addDomListener(navigationUI, 'click', function () {
        dm.setDrawingMode(null);
      });

      window.google.maps.event.addDomListener(lineUI, 'click', function () {
        dm.setDrawingMode(window.google.maps.drawing.OverlayType.POLYLINE);
        setPoints(0)
        /* document.getElementById('map').addEventListener('click', function(event) {
          if(points === 0 || points === 1) {
            setPoints(points + 1);
          }else if(points === 2) {
            console.log("elelele")
            dm.setDrawingMode(null);
            calculateLineDistance(paths)
          }
        }); */
      });

      window.google.maps.event.addListener(dm, 'overlaycomplete', (event) => {
        if (event.type === window.google.maps.drawing.OverlayType.POLYGON) {
          // Rimuove un poligono esistente se presente
          if (polygon) {
            polygon.setMap(null);
          }
          // Imposta il nuovo poligono nello stato e calcola l'area
          setPolygon(event.overlay);
          calculateArea(event.overlay.getPath());
          // Disabilita la modalità di disegno
          dm.setDrawingMode(null);
        }
        if (event.type === window.google.maps.drawing.OverlayType.POLYLINE) {
          // Ottieni il percorso della polyline
          const path = event.overlay.getPath();
          setPath1(path.getAt(0))
          setPath2(path.getAt(1))
          // Se la polyline ha esattamente due punti
          if (path.getLength() === 2) {
            // Calcola la distanza tra i due punti
            calculateLineDistance(path);
            // Imposta la modalità di navigazione
            dm.setDrawingMode(null);
          } else {
            // Se ci sono meno di due punti, non fare nulla
            // o gestisci come preferisci
          }

          // Rimuovi la polyline dopo aver ottenuto i punti necessari
          event.overlay.setMap(null);
        }
        
        
      });


      map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(drawingUI);
      map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(navigationUI);
      map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(lineUI);

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

  /* useEffect(()=>{
    
      if(points == 2){
          calculateLineDistance(paths)
      }

  },[points]) */
  
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

  const calculateLineDistance = (path) => {
    if (path.getLength() === 2) {
      console.log(path1)
      const distance = window.google.maps.geometry.spherical.computeDistanceBetween(path.getAt(0), path.getAt(1));
      setLineDistance(distance);
      console.log(distance) // Aggiorna lo stato con la distanza calcolata
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

      <div id="map" ></div>
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
      {lineDistance > 0 && (
        <div className="line-distance">
          <p>Distanza: {lineDistance.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} metri</p>
        </div>
      )}
    </div>
  );
}

export default GoogleMaps;

/* 
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
 */