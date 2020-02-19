import React from "react";

import List from "@material-ui/core/List";

import Shop from "./Shop";
import SearchPanel from "./SearchPanel";

import "../../App.css";

export default function FolderList(props) {
  const {
    shops,
    onCheck,
    valueAlko,
    onChangeAlko,
    valueSearchField,
    onChangeText
  } = props;

  return (
    <div>
      <SearchPanel valueAlko={valueAlko} onChangeAlko={onChangeAlko} />
      <List className="googleMaps__items">
        {shops.map(shop => {
          return (
            <div key={shop.id}>
              <Shop id={shop.id} shop={shop} onCheck={onCheck}/>
            </div>
          );
        })}
      </List>
    </div>
  );
}
