import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const Map = withGoogleMap((props) => {
  return (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={12}
      defaultCenter={{lat: props.lat, lng: props.lon}}
    />
  );
});

export default Map;
