import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    maxWidth: 300
  },
}));

const ITEM_HEIGHT = 200;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300
    }
  }
};

const ingredients = [
  {
      id: 1,
      name: "sok z limonki"
  },
  {
      id: 2,
      name: "cukier"
  },
  {
      id: 3,
      name: "lód"
  },
  {
      id: 4,
      name: "rum"
  },
  {
      id: 5,
      name: "sok z cytryny"
  },
  {
      id: 6,
      name: "sok ananasowy"
  },
  {
      id: 7,
      name: "sok grejpfrutowy"
  },
  {
      id: 8,
      name: "listki mięty"
  },
  {
      id: 9,
      name: "tequila"
  },
  {
      id: 10,
      name: "cointreau"
  },
  {
      id: 11,
      name: "bezalkoholowe blue curacao"
  },
  {
      id: 12,
      name: "wiórki kokosowe"
  },
  {
      id: 13,
      name: "syrop kokosowy"
  }
];

export function IngredientsSearchMulitpleSelect() {
  const classes = useStyles();
  const [ingredientName, setingredientName] = React.useState([]);

  const handleChange = event => {
    setingredientName(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="mutiple-checkbox-label" color="secondary">
          <em>Składniki</em>
        </InputLabel>
        <Select
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple value={ingredientName}
          onChange={handleChange}
          input={<Input />}
          renderValue={selected => selected.join(", ")}
          MenuProps={MenuProps}
          color="secondary"
        >
          {ingredients.map(ingredient => (
            <MenuItem key={ingredient.id} value={ingredient.name}>
              <Checkbox checked={ingredientName.indexOf(ingredient.name) > -1} />
              <ListItemText primary={ingredient.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}