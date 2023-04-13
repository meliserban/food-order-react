import React from 'react';
import MealItemForm from './MealItemForm';
import { MenuItemStyled } from "./MenuItem.styles";

function MenuItem({ image, name, price}) {
    return (
        <MenuItemStyled>
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>${price}</p>
            <MealItemForm />
        </MenuItemStyled>
    )
};

export default MenuItem;