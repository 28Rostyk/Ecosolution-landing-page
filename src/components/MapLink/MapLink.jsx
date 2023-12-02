import React from "react";

const MapLink = () => {
  const address = "79005, Ukraine, Lviv, Shota Rustaveli, 7";
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  return (
    <a href={mapUrl} target="_blank" rel="noopener noreferrer">
      <address style={{ fontStyle: "normal" }}>{address}</address>
    </a>
  );
};

export default MapLink;
