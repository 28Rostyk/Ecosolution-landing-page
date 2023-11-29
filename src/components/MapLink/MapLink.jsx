import React from "react";

const MapLink = () => {
  const address = "79005, Ukraine, Lviv, Shota Rustaveli, 7";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  return (
    <a href={mapUrl} target="_blank" rel="noopener noreferrer">
      79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
    </a>
  );
};

export default MapLink;
