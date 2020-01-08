import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stores: [{ lat: 54.409746, lng: 18.576603 },
            { latitude: 54.406666, longitude: 18.569598 },
            { latitude: 54.410410, longitude: 18.565582 },
            { latitude: 54.408760, longitude: 18.567254 },
            { latitude: 54.395471, longitude: 18.579619 }]
        }
    }

    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
            return <Marker key={index} id={index} position={{
                lat: store.latitude,
                lng: store.longitude
            }}
                onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {

        return (
            <div
                style={{
                    position: 'relative',
                    height: "calc(85vh - 10px)"
                }}>
                <Map
                    google={this.props.google}
                    zoom={14}
                    initialCenter={{ lat: 54.403209, lng: 18.569864 }}
                >
                    {this.displayMarkers()}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAuwndUmqb8cwyyD7BmYDsbA7tVoPZYmZU',
    v: "3.30"
})(MapContainer);

