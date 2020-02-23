import React from 'react';
import { DrinkSearchField } from '../drink-filter-components/DrinkSearchField';
import { IngredientsSearchMulitpleSelect } from '../drink-filter-components/IngredientsSearchMulitpleSelect';
import { AlkoSearch } from '../drink-filter-components/AlkoSearch';
import { useMediaQuery } from '@material-ui/core';

export default function SearchPanel(props) {
    const matches = useMediaQuery('(min-width:875px)')

    if (matches === true) {
        return (
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", margin: '20px'}}>
                <div style={{ padding: '20px' }}>
                    <DrinkSearchField
                        valueSearchField={props.valueSearchField}
                        onChangeText={props.onChangeText}
                    />
                </div>
                <div style={{ padding: '20px' }}>
                    <IngredientsSearchMulitpleSelect
                        ingredients={props.ingredients}
                        valueSearchIngredients={props.valueSearchIngredients}
                        onChangeIngredients={props.onChangeIngredients}
                    />
                </div>
                <div style={{ padding: '20px' }}>
                    <AlkoSearch
                        valueAlko={props.valueAlko}
                        onChangeAlko={props.onChangeAlko}
                    />
                </div>
            </div >
        )
    } else {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center"}}>
                <div style={{ padding: '10px', marginTop: '20px' }}>
                    <DrinkSearchField
                        valueSearchField={props.valueSearchField}
                        onChangeText={props.onChangeText}
                    />
                </div>
                <div style={{ padding: '10px' }}>
                    <IngredientsSearchMulitpleSelect
                        ingredients={props.ingredients}
                        valueSearchIngredients={props.valueSearchIngredients}
                        onChangeIngredients={props.onChangeIngredients}
                    />
                </div>
                <div style={{ padding: '10px' }}>
                    <AlkoSearch
                        valueAlko={props.valueAlko}
                        onChangeAlko={props.onChangeAlko}
                    />
                </div>
            </div >
        )
    }
}