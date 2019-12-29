import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

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


export function FormPropsTextFields() {
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
          defaultValue="..."
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Składniki"
          multiline
          rows="4"
          defaultValue="Składniki potrzebna do przygotowania drinka"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Opis"
          multiline
          rows="4"
          defaultValue="Sposób przygotowania drinka"
          variant="outlined"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Moc"
          value={strengthen}
          onChange={handleChange}
          helperText="Wybierz moc drinka"
          variant="outlined"
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