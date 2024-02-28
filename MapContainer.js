import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
  return (
    <Map
      google={props.google}
      zoom={14}
      initialCenter={{
        lat: 0.00,
        lng: 0.00,
      }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: '//normalement je dois mettre mon code ici mais pour des raisons de confidentialité je n ai pas demandé de API Key//',
})(MapContainer);

