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

export function IngredientsSearchMulitpleSelect(props) {
  const classes = useStyles();
  const [ingredientName, setingredientName] = React.useState([]);

  const handleChange = event => {
    setingredientName(event.target.value);
  };

  const ingredients = props.ingredients;

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
          ingredients={props.ingredients}
        >
          {ingredients.map(ingredient => (
            <MenuItem key={ingredients.id} value={ingredient.id}>
              <Checkbox checked={ingredientName.indexOf(ingredient.name) > -1} />
              <ListItemText primary={ingredient.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}