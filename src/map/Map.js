import React from "react";

import "../App.css";

import CircularProgress from "@material-ui/core/CircularProgress";

import MapGoogle from "./components/MapGoogle";
import ListOfShops from "./components/ListOfShops";
import { getShops } from "../DataFetch/DataFetch";

const initialuserLocation = {
  lat: 54.40333,
  lng: 18.570192
};

export default class Map extends React.Component {
  state = {
    shops: [],
    loading: true,
    error: "",
    sortBy: "name",
    sortOrder: "asc",
    search: "",
    shop: [],
    userLocation: { ...initialuserLocation }
  };

  componentDidMount() {
    this.fetchData();
    this.geolocation();
  }

  geolocation() {
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

  fetchData() {
    getShops()
      .then(data => {
        const filteredShops = data.filter(shop => {
          const shopName = shop.name.toLowerCase();
          return shopName.includes(this.state.search);
        });
        const sortedShops = filteredShops.sort((a, b) => {
          const dA = a[this.state.sortBy];
          const dB = b[this.state.sortBy];
          if (typeof dA === "string") {
            return dA.localeCompare(dB);
          } else {
            return dA - dB;
          }
        });
        if (this.state.sortOrder === "desc") {
          sortedShops.reverse();
        }
        this.setState({
          shops: sortedShops,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error.toString()
        });
      });
  }

  handleOnAction = id => {
    const checkedShop = this.state.shops.filter(shop => {
      return shop.id === id;
    });
    const coords = checkedShop[0];
    this.setState({
      shop: coords,
      userLocation: { lat: coords.lat, lng: coords.lon }
    });
  };

  render() {
    if (this.state.loading) {
      return <CircularProgress color="secondary" />;
    }

    if (this.error) {
      return <div>Bład: {this.state.error}</div>;
    }

    const { shop, shops, loading, userLocation } = this.state;

    return (
      <div className="googleMaps">
        <div className="googleMaps__label">
          <ListOfShops shops={shops} onCheck={this.handleOnAction} />
        </div>
        <div className="googleMaps__mapframe">
          <div className="googleMaps__map">
            <MapGoogle
              loading={loading}
              userLocation={userLocation}
              shop={shop}
            />
          </div>
        </div>
      </div>
    );
  }
}
