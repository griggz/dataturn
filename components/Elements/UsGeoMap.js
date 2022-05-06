import React, { memo } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useRouter, withRouter } from "next/router";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = ({ setTooltipContent }) => {
  const router = useRouter();

  return (
    <>
      <ComposableMap
        data-tip=""
        projection="geoAlbersUsa"
        projectionConfig={{ scale: 1000 }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { name } = geo.properties;
                  setTooltipContent(`${name}`);
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                onClick={() => {
                  const { name } = geo.properties;
                  router.push(`policy-portal/state/${name}`);
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#2DA3DC",
                    outline: "none",
                    cursor: "pointer",
                  },
                  pressed: {
                    fill: "#2296cd",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default withRouter(memo(MapChart));
