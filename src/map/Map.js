import React from "react";

import "../App.css";

import CircularProgress from "@material-ui/core/CircularProgress";

import MapGoogle from "./components/MapGoogle";
import List from "./components/ListOfShops";
import { getShops, getIngredients } from "../DataFetch/DataFetch";

export default class Map extends React.Component {
  state = {
    shops: [],
    loading: true,
    error: "",
    search: ""
  };

  componentDidMount() {
    this.fetchData();
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

  handleSearchChange(e) {
    this.setState({
      search: e.target.value.toLowerCase()
    });
  }

  render() {
    if (this.state.loading) {
      return <CircularProgress color="secondary" />;
    }

    if (this.error) {
      return <div>Bład: {this.state.error}</div>;
    }

    const { shops } = this.state;

    return (
      <div className="googleMaps">
        <div className="googleMaps__label">
          <List shops={shops} />
        </div>
        <div className="googleMaps__mapframe">
          <div className="googleMaps__map">
            <MapGoogle />
          </div>
        </div>
      </div>
    );
  }
}
