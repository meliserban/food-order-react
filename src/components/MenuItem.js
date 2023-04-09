import React from 'react';
import MealItemForm from './MealItemForm';

function MenuItem({ image, name, price}) {
  return (
    <div className='menuItem'>
      
        <div style={{ backgroundImage: `url(${image})` }}></div>

         <h1>{name}</h1>

        <p>${price}</p> 
        <MealItemForm />

        </div>

  )
};

export default MenuItem;