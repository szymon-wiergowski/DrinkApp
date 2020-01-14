import React from 'react';
import { DrinkSearchField } from '../drink-filter-components/DrinkSearchField';
import { IngredientsSearchMulitpleSelect } from '../drink-filter-components/IngredientsSearchMulitpleSelect';
import { AlkoSearchRadio } from '../drink-filter-components/AlkoSearchRadio';
import Grid from '@material-ui/core/Grid';

export default function SearchPanel(props) {
    return (
        <div>
            <Grid container spacing={5} justify="center" alignItems="center">
                <Grid item>
                    <DrinkSearchField
                        valueSearchField={props.valueSearchField}
                        onChangeText={props.onChangeText}
                    />
                </Grid>
                <Grid item>
                    <IngredientsSearchMulitpleSelect
                        ingredients={props.ingredients}
                    />
                </Grid>
                <Grid item>
                    <AlkoSearchRadio
                        valueAlko={props.valueAlko}
                        onChangeAlko={props.onChangeAlko}
                    />
                </Grid>
            </Grid>
        </div>
    )
}