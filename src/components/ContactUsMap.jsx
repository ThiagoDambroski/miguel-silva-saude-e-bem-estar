import React from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

function ContactUsMap() {

     // Map settings
  const center = {
    lat: 38.95636, // Latitude for "Miguel e Silva Saúde e Bem Estar"
    lng: -9.341202, // Longitude for the location
  };

  const containerStyle = {
    width: "80%",
    height: "400px",
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyC9_24fEaoug-DK7nXMZw_XxQ4hRRqL3g0",
  });

  if (!isLoaded) {
    return <div>Carregando mapa...</div>;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <MarkerF position={center} />
    </GoogleMap>
  )
}

export default ContactUsMap