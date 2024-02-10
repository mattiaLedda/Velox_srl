import React, { useState, useEffect } from 'react';

function GoogleMaps({ onGoogleMapsDataChange }) {
  const [map, setMap] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [polygon, setPolygon] = useState(null);
  const [polygonArea, setPolygonArea] = useState(0);
  const [autocomplete, setAutocomplete] = useState(null);
  const [points, setPoints] = useState(null);
  const [lineDistance, setLineDistance] = useState(0);
  const [path1, setPath1] = useState(null)
  const [path2, setPath2] = useState(null)
  const [drawingLine, setDrawingLine] = useState(false)
  const [drawingPoligon, setDrawingPoligon] = useState(false)



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
        setDrawingLine(false)
        setDrawingPoligon(true)
        setLineDistance(0)
        
      });

      window.google.maps.event.addDomListener(navigationUI, 'click', function () {
        dm.setDrawingMode(null);
        setDrawingLine(false)
        setDrawingPoligon(false)
        setLineDistance(0)
        clearPolygon()
      });

      window.google.maps.event.addDomListener(lineUI, 'click', function () {
        dm.setDrawingMode(window.google.maps.drawing.OverlayType.POLYLINE);
        setPoints(0)
        setDrawingLine(true)
        setDrawingPoligon(false)
        setLineDistance(0)
        clearPolygon()
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
    onGoogleMapsDataChange(area)
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
      setPolygonArea(null);
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
      {
        drawingLine &&
        <p style={{color: "red", fontWeight:"500", fontSize:"20px"}}>Clicca una volta sul primo punto della mappa, e due volte sul secondo per ottenere la lunghezza</p>
      }

{
        drawingPoligon &&
        <p style={{color: "red", fontWeight:"500", fontSize:"20px"}}>Traccia il tetto e clicca due volte sull'ultimo punto per completare </p>
      }

      <div id="map" ></div>
      {polygonArea > 0 && (
        <div className="tot-area">
          <p>Superficie del tetto: {polygonArea.toLocaleString('it-IT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} metri quadrati</p>
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

