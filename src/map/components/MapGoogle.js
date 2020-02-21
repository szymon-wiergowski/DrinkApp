import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export function mapContainer(props) {
  const { google, loading, userLocation, shop } = props;

  if (loading) {
    return null;
  }

  return (
    <Map
      google={google}
      initialCenter={{
        lat: 54.403345,
        lng: 18.56978
      }}
      center={userLocation}
      zoom={18}
    >
      <Marker key={shop.id} position={userLocation}/>
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAuwndUmqb8cwyyD7BmYDsbA7tVoPZYmZU",
  v: "3.30"
})(mapContainer);
