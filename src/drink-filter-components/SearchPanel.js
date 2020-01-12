import React from 'react';
import { DrinkSearchField } from '../drink-filter-components/DrinkSearchField';
import { IngredientsSearchMulitpleSelect } from '../drink-filter-components/IngredientsSearchMulitpleSelect';
import { AlkoSearchRadio } from '../drink-filter-components/AlkoSearchRadio';
import Grid from '@material-ui/core/Grid';

export default function SearchPanel() {
    return (
        <div>
            <Grid container spacing={5} justify="center" alignItems="center">
                <Grid item>
                    <DrinkSearchField />
                </Grid>
                <Grid item>
                    <IngredientsSearchMulitpleSelect />
                </Grid>
                <Grid item>
                    <AlkoSearchRadio />
                </Grid>
            </Grid>
        </div>
    )
}