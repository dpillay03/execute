import React from 'react';
import AppendItem from './AppendItem.jsx';

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      listItems: {
        text: ' ',
        key: ' '
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const goal = this.state.listItems;
    if(goal.text !== ' '){
      const newGoals = [...this.state.items, goal];
      this.setState({
        items: newGoals,
        listItems:{
          text: ' ',
          key: ' '
        }
      })
      console.log('Goal: ', goal);
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      listItems:{
        text: event.target.value,
        key: Date.now()
      }
    });
  }

  render() {
    const { item } = <li>{this.state.listItems.text}</li>
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Input Goal'
            name='item'
            value={item}
            onChange={this.handleChange}
          />
          <p><button onClick={this.handleArray}>Add</button></p>
        </form>

        <AppendItem items={this.state.items} ></AppendItem>
      </div>
    );
  }
}

