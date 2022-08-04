import React from 'react'
import GoogleMapReact from 'google-map-react';

const map = () => {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
          lat: 6.496537922483665,
          lng: 3.3526835770845844
        },
        zoom: 11
      };

  return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
  )
}

export default map