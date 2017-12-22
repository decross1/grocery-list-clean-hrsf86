import React from 'react';
import ReactDOM from 'react-dom';
import Data from '../../database/data.js';
import GroceryList from './components/GroceryList.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  
  render () {
    return (
          <div>
            <GroceryList data={this.props.data}/>
          </div>
          );
  }
}

ReactDOM.render(<App data={Data}/>, document.getElementById('app'));