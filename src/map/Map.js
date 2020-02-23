import React from "react";

import "../App.css";

import CircularProgress from "@material-ui/core/CircularProgress";

import MapGoogle from "./components/MapGoogle";
import ListOfShops from "./components/ListOfShops";
import { getShops } from "../DataFetch/DataFetch";

const initialUserLocation = {
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
    alko: "all",
    localization: "all",
    shop: [],
    userLocation: { ...initialUserLocation }
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
    Promise.resolve(getShops())
      .then(data => {
        const filteredShopsByAlko = data.filter(shop => {
          if (this.state.alko === "all") {
            return true;
          }
          return shop.alko === this.state.alko;
        });
        const filteredShopsByCity = filteredShopsByAlko.filter(shop => {
          if (this.state.localization === "all") {
            return true;
          }
          return shop.localization === this.state.localization;
        });
        const sortedShops = filteredShopsByCity.sort((a, b) => {
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

  componentDidUpdate(prevState) {
    const alkoChanged = prevState.alko !== this.state.alko;
    const localizationChanged =
      prevState.localization !== this.state.localization;
    if ((alkoChanged || localizationChanged) && !this.state.isLoading) {
      this.fetchData();
    }
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

  handleAlkoChange = event => {
    this.setState({
      alko: event.target.value
    });
  };

  handleCityChange = event => {
    this.setState({
      localization: event.target.value
    });
  };

  render() {
    if (this.state.loading) {
      return <CircularProgress color="secondary" />;
    }

    if (this.error) {
      return <div>Bład: {this.state.error}</div>;
    }

    const {
      shop,
      shops,
      loading,
      userLocation,
      alko,
      localization
    } = this.state;

    return (
      <div className="googleMaps">
        <div className="googleMaps__label">
          <div className="googleMaps__shops">
            <ListOfShops
              shops={shops}
              onCheck={this.handleOnAction}
              valueAlko={alko}
              onChangeAlko={this.handleAlkoChange}
              valueCity={localization}
              onChangeCity={this.handleCityChange}
            />
          </div>
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
