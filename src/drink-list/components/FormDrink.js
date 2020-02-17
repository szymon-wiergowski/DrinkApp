import React from "react";

import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import LocalBarTwoToneIcon from "@material-ui/icons/LocalBarTwoTone";
import BatteryUnknownIcon from "@material-ui/icons/BatteryUnknown";
import IngrediensList from "./IngrediensList";

const strength = [
  {
    value: "> 15%",
    label: "Mocny (pow. 15%)"
  },
  {
    value: "0,5% - 15%",
    label: "Słaby (od 0,5% do 15%)"
  },
  {
    value: "< 0,5%",
    label: "Bezalkoholowy"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 450
    }
  }
}));

export default function FormDrink(props) {
  const classes = useStyles();
  const [strengthen, setPowercy] = React.useState("");

  const handleChange = event => {
    setPowercy(event.target.value);
  };
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <form className={classes.root} noValidate autoComplete="off" style={{display: 'flex', flexDirection: 'column'}}>
        <TextField
          required
          value={props.name}
          onChange={props.onChangeName}
          fullWidth
          id="outlined-required"
          label="Nazwa"
          variant="outlined"
          color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalBarTwoToneIcon />
              </InputAdornment>
            )
          }}
        />
        <IngrediensList />
        <TextField
          required
          fullWidth
          id="outlined-multiline-static"
          label="Przepis"
          multiline
          rows="5"
          placeholder="Sposób przygotowania drinka"
          variant="outlined"
          color="secondary"
        />
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Pochodzenie"
          variant="outlined"
          color="secondary"
        />
        <TextField
          required
          fullWidth
          id="outlined-select-power"
          select
          label="Moc"
          value={strengthen}
          onChange={handleChange}
          helperText="Wybierz moc drinka"
          variant="outlined"
          color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BatteryUnknownIcon />
              </InputAdornment>
            )
          }}
        >
          {strength.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
    </div>
  );
}
