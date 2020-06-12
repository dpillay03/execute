import React from 'react';
import AddItem from './AddItem.jsx'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Execute</h1>
        <AddItem />
      </div>
    );  
  }
}

export default App;
