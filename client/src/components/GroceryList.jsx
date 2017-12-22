import React from 'react';
import GroceryItem from './GroceryItem.jsx';
import AddGrocery from './AddGrocery.jsx';

class GroceryList extends React.Component {
  constructor(props) {
    super(props); 
  }
  
  render() {
    return (
      <div>
        <div className="addGrocery"> 
          <AddGrocery />
        </div>

        <div className="groceries">
          {this.props.data.groceryList.map((grocery) => <GroceryItem grocery={grocery} key={grocery.id} />)} 
        </div>
      </div>
    )
  }

}
export default GroceryList;
