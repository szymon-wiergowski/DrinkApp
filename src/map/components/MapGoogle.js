import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const initialFormState = {
  lat: 54.40333,
  lng: 18.570192
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLocation: { ...initialFormState },
      loading: true
      //   stores: [
      //     { latitude: 54.409746, longitude: 18.576603 },
      //     { latitude: 54.406666, longitude: 18.569598 },
      //     { latitude: 54.41041, longitude: 18.565582 },
      //     { latitude: 54.40876, longitude: 18.567254 },
      //     { latitude: 54.395471, longitude: 18.579619 }
      //   ]
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  //   displayMarkers = () => {
  //     return this.state.stores.map((store, index) => {
  //       return (
  //         <Marker
  //           key={index}
  //           id={index}
  //           position={{
  //             lat: store.latitude,
  //             lng: store.longitude
  //           }}
  //           onClick={() => console.log("You clicked me!")}
  //         />
  //       );
  //     });
  //   };


      // this.setState({
      //   userLocation: { lat: this.props.latitude, lng: this.props.longitude }
      // });
    }
  }

  render() {

    const { loading, userLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return null;
    }

    return (
      <Map
        google={google}
        initialCenter={userLocation}
        zoom={14}
        // disableDefaultUI={true}
      >
        {/* {this.displayMarkers()} */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAuwndUmqb8cwyyD7BmYDsbA7tVoPZYmZU",
  v: "3.30"
})(MapContainer);
