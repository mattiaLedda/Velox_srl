import React, { useState } from 'react';
import { GoogleMap, LoadScriptNext, Polygon, Marker } from '@react-google-maps/api';
import * as turf from '@turf/turf';

const API_KEY = 'AIzaSyCYoxmzxtoNKjPT4Reh0zhVl3KgSJ4D1Jg';

const MapComponent = () => {
    const [path, setPath] = useState([]);
    const [drawingMode, setDrawingMode] = useState(false);

    const onMapClick = (e) => {
        if (!drawingMode) return;

        const newPath = [...path, { lat: e.latLng.lat(), lng: e.latLng.lng() }];
        setPath(newPath);
        if (newPath.length > 2) {
            const areaValue = calculateArea(newPath);
            console.log('Area:', areaValue, 'm²');
        }
    };

    const calculateArea = (path) => {
        const coords = path.map(point => [point.lng, point.lat]);
        coords.push(coords[0]);
        const polygon = turf.polygon([coords]);
        return turf.area(polygon);
    };

    return (
        <div>
            <LoadScriptNext googleMapsApiKey={API_KEY}>
                <GoogleMap
                    center={{ lat: 41.902782, lng: 12.496366 }} // Posizione centrale per Roma
                    zoom={14}
                    onClick={onMapClick}
                    mapContainerStyle={{ width: '800px', height: '600px' }}
                    options={{ draggableCursor: drawingMode ? 'crosshair' : 'default' }}
                >
                    {path.length > 0 && <Polygon path={path} />}
                    {path.map((point, index) => (
                        <Marker key={index} position={point} />
                    ))}
                </GoogleMap>
            </LoadScriptNext>
            <button onClick={() => setDrawingMode(!drawingMode)}>
                {drawingMode ? 'Ferma disegno' : 'Disegna tetto'}
            </button>
            <button onClick={() => {
                setDrawingMode(false);
                setPath([]);
            }}>
                Resetta percorso
            </button>
        </div>
    );
};

export default MapComponent;
