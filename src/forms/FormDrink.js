import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocalBarTwoToneIcon from '@material-ui/icons/LocalBarTwoTone';
import BatteryUnknownIcon from '@material-ui/icons/BatteryUnknown';

const strength = [
  {
    value: 'Mocny',
    label: 'Mocny (pow. 15%)',
  },
  {
    value: 'Słaby',
    label: 'Słaby (od 0,5% do 15%)',
  },
  {
    value: 'Bezalkoholowy',
    label: 'Bezalkoholowy',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


export default function FormPropsTextFields() {
  const classes = useStyles();
  const [strengthen, setPowercy] = React.useState('Bez alkoholu');

  const handleChange = event => {
    setPowercy(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{ paddingTop: '6rem', paddingLeft: '1rem' }}>
        <TextField
          required
          id="outlined-required"
          label="Nazwa"
          variant="outlined"
          color="secondary"
          
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalBarTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Składniki"
          multiline
          rows="5"
          fullWidth
          placeholder="Składniki potrzebne do przygotowania drinka"
          variant="outlined"
          color="secondary"
        />
        <TextField
          required
          id="outlined-multiline-static"
          label="Opis"
          multiline
          rows="5"
          fullWidth
          placeholder="Sposób przygotowania drinka"
          variant="outlined"
          color="secondary"
        />
        <TextField
          required
          id="outlined-select-currency"
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
            ),
          }}
        >
          {strength.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}