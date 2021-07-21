import { useRef, useLayoutEffect } from "react";
type MapTypes = {
  map?: any;
  center?: any;
  zoom?: any;
};

export const Map: React.FC<MapTypes> = ({ center, zoom }) => {
  // const divRef = useRef<any>(null);

  // useLayoutEffect(() => {
  //   const googleMap = new window.google.maps.Map(divRef, {
  //     center: center,
  //     zoom: zoom,
  //   });
  // });

  // // const map = new window.google.maps.Map(mapRef.current, {
  // //   center: center,
  // //   zoom: zoom,
  // // })
  // // new window.google.maps.Marker({
  // //   position: center,
  // //   map: map,
  // // )}

  return (
    <div></div>
    // <div ref={divRef} className="map">
    //   Map
    // </div>
  );
};
