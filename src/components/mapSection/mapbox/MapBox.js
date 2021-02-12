import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import { stores } from "./helper/fakeData";

// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2FicmllbGppIiwiYSI6ImNraWcxcHFiNDA3Y3cycHFqdWdudDRvODYifQ.FbnpQq5I7Ft7PaKVW0WSzg";

const StyledMapContainer = styled.div`
  width: 80vw;
  height: 80vw;
  .mapboxgl-popup-close-button {
    display: none;
  }
`;

const MapBox = (props) => {
  const mapContainerRef = useRef(null);
  const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

  const [myMap, setMap] = useState("");

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/light-v10", //'mapbox://styles/mapbox/streets-v11',
      center: [-0.118092, 51.509865],
      zoom: 11.4,
    });

    setMap(map);

    map.on("load", function () {
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          map.addSource("random-points-data", {
            type: "geojson",
            data: stores,
          });
          map.addLayer({
            id: "random-points-layer",
            type: "symbol",
            source: "random-points-data",
            layout: {
              "icon-image": "custom-marker",
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    map.on("click", "random-points-layer", (e) => {
      map.flyTo({
        center: e.features[0].geometry.coordinates,
        zoom: 15,
        essential: true,
      });
    });

    map.on("mouseenter", "random-points-layer", (e) => {
      if (e.features.length) {
        map.getCanvas().style.cursor = "pointer";
      }
    });

    map.on("mouseleave", "random-points-layer", () => {
      map.getCanvas().style.cursor = "";
    });

    return () => map.remove();
  }, []);

  return (
    <div id="map">
      <StyledMapContainer ref={mapContainerRef} />
    </div>
  );
};

export default MapBox;
