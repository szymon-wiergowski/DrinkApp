import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Shop from "./Shop";
import SearchPanel from "./SearchPanel";

import "../../App.css";

export default function FolderList(props) {
  const { shops, onCheck } = props;

  return (
    <div>
      <SearchPanel
        valueSearchField={props.valueSearchField}
        onChangeText={props.onChangeText}
      />
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
