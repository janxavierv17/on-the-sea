import { useRef, useEffect } from "react";

type MapTypes = {
  center: any;
  zoom: any;
};

export const Map: React.FC<MapTypes> = ({ center, zoom }) => {
  const mapRef = useRef<HTMLDivElement | null>();

  useEffect(() => {
    if (mapRef) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: zoom,
      });
      new window.google.maps.Marker({
        position: center,
        map: map,
      });
    }
  }, [center, zoom]);

  return <div ref={mapRef}>Map</div>;
};
