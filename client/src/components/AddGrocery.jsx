import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (
        <div>
          <div>Add Some Sweet Sweet Groceries</div>
            <div style={{fontSize: 10}}>
            Stuff to Add <input type="text" style={{height: 20, width: 200}}></input>
          </div>
        </div>
      )
  }
}

export default AddGrocery;

