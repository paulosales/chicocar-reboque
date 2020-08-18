import React from "react";
import { MapContainer } from "./styles";

const Map = () => {
  return (
    <MapContainer>
      <iframe
        title="Mapa"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.308611119591!2d-38.62265568550867!3d-3.742791644293271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74b0d9006ddf5%3A0x4d328914e8ab2ea0!2sChico+Car!5e0!3m2!1spt-BR!2sbr!4v1510511333253"
      ></iframe>
    </MapContainer>
  );
};

export default Map;
