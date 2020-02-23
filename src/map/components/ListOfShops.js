import React from "react";

import List from "@material-ui/core/List";

import Shop from "./Shop";
import SearchPanel from "./SearchPanel";

import "../../App.css";

export default function FolderList(props) {
  const { shops, onCheck, valueAlko, onChangeAlko, valueCity, onChangeCity } = props;

  return (
    <div>
      <SearchPanel valueAlko={valueAlko} onChangeAlko={onChangeAlko} valueCity={valueCity} onChangeCity={onChangeCity}/>
      <List className="googleMaps__items">
        {shops.map(shop => {
          return (
            <div key={shop.id}>
              <Shop id={shop.id} shop={shop} onCheck={onCheck} />
            </div>
          );
        })}
      </List>
    </div>
  );
}
