import React from 'react';

function MapTilerMap() {
  const mapHTML = `
  <!DOCTYPE html>
  <html>
  <head>
  <meta charset="utf-8">
  <title>Draw a polygon and calculate its area</title>
  <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
  <link href="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css" rel="stylesheet">
  <script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script>
  <style>
    body { margin: 0; padding: 0; }
    #map { position: absolute; top: 0; bottom: 0; width: 100%; }
  </style>
  </head>
  <body>
  <style>
    .calculation-box {
      height: 75px;
      width: 150px;
      position: absolute;
      bottom: 40px;
      left: 10px;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 15px;
      text-align: center;
    }
  
    p {
      font-family: 'Open Sans';
      margin: 0;
      font-size: 13px;
    }
  </style>
  
  <script src="https://unpkg.com/@turf/turf@6/turf.min.js"></script>
  <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.4.0/mapbox-gl-draw.js"></script>
  <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-draw/v1.4.0/mapbox-gl-draw.css" type="text/css">
  <div id="map"></div>
  <div class="calculation-box">
    <p>Click the map to draw a polygon.</p>
    <div id="calculated-area"></div>
  </div>
  
  <script>
    // TO MAKE THE MAP APPEAR YOU MUST
    // ADD YOUR ACCESS TOKEN FROM
    // https://account.mapbox.com
    mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2bGVvIiwiYSI6ImNsbjdtcDNibzB6NW0ydG1ua2x0Y2I4cHkifQ.YJDbsqfZnH5XzUqa5mXf8w';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: 'mapbox://styles/mapbox/satellite-v9', // style URL
      center: [-91.874, 42.76], // starting position [lng, lat]
      zoom: 12 // starting zoom
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
  
    function updateArea(e) {
      const data = draw.getAll();
      const answer = document.getElementById('calculated-area');
      if (data.features.length > 0) {
        const area = turf.area(data);
        // Restrict the area to 2 decimal points.
        const rounded_area = Math.round(area * 100) / 100;
        answer.innerHTML = \`<p><strong>\${rounded_area}</strong></p><p>square meters</p>\`;
      } else {
        answer.innerHTML = '';
        if (e.type !== 'draw.delete')
          alert('Click the map to draw a polygon.');
      }
    }
  </script>
  
  </body>
  </html>
  
  `;

  return (
    <div className="map-container">
      <iframe
        title="Map"
        srcDoc={mapHTML}
        width="100%"
        height="500px"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default MapTilerMap;
