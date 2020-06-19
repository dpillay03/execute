import React from 'react';
import AppendItem from './AppendItem.jsx';

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      strikeThrough: [],
      listItems: {
        text: ' ',
        key: ' '
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault()
    document.getElementById("input-form").reset()
    const goal = this.state.listItems;
    if (goal.text !== ' ') {
      const newGoals = [...this.state.items, goal];
      this.setState({
        items: newGoals,
        listItems: {
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
      listItems: {
        text: event.target.value,
        key: Date.now()
      }
    });
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  updateItem = (text, key) => {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        console.log(item.key + "    " + key)
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  };



  render() {
    const { item } = <li>{this.state.listItems.text}</li>
    return (
      <div>
        <form id="input-form" onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Input Goal'
            name='item'
            value={item}
            onChange={this.handleChange}
          />
          <p><button onClick={this.handleArray}>Add</button></p>
        </form>

        <AppendItem items={this.state.items}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
          />
      </div>
    );
  }
}

