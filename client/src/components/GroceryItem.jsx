import React from 'react';

const GroceryItem = (props) => {
  
  return (
    <div>
      <li>{props.grocery.description} </li>
    </div>
  )
}

export default GroceryItem;