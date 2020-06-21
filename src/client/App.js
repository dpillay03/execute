import React from 'react';
import AddItem from './AddItem.jsx'

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <h1>Execute</h1>
          <h2>Track Your Goals</h2>
        <AddItem />
      </div>
    );  
  }
}

export default App;
