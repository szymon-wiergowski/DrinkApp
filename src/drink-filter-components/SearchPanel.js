import React from 'react';
import { DrinkSearchField } from '../drink-filter-components/DrinkSearchField';
import { IngredientsSearchMulitpleSelect } from '../drink-filter-components/IngredientsSearchMulitpleSelect';
import { AlkoSearch } from '../drink-filter-components/AlkoSearch';
// import Grid from '@material-ui/core/Grid';

export default function SearchPanel(props) {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: '20px' }}>
            {/* <Grid container spacing={5} style={{ width: '100%', margin: '20px' }} justify="center" alignItems="center">
                <Grid item> */}
            <div style={{ padding: '20px' }}>
                <DrinkSearchField
                    valueSearchField={props.valueSearchField}
                    onChangeText={props.onChangeText}
                />
            </div>
            {/* </Grid>
                <Grid item> */}
            <div style={{ padding: '20px' }}>
                <IngredientsSearchMulitpleSelect
                    ingredients={props.ingredients}
                    valueSearchIngredients={props.valueSearchIngredients}
                    onChangeIngredients={props.onChangeIngredients}
                />
            </div>
            {/* </Grid>
                <Grid item> */}
            <div style={{ padding: '20px' }}>
                <AlkoSearch
                    valueAlko={props.valueAlko}
                    onChangeAlko={props.onChangeAlko}
                />
            </div>
            {/* </Grid>
            </Grid> */}
        </div >
    )
}