import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./Map.css";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(2);

  useEffect(() => {
    if (map.current) return;
    //@ts-ignore
    map.current = new maplibregl.Map({
      //@ts-ignore
      container: mapContainer.current,
      style: `https://demotiles.maplibre.org/style.json`,
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;
