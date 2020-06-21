import React from 'react';
import AppendItem from './AppendItem.jsx';
import './listItem.css';

export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      listItems: {
        text: ' ',
        key: ' '
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.finishItem = this.finishItem.bind(this);
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

  finishItem = (key) => {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    setTimeout(() => {
      this.setState({
        items: filteredItems
      })
    }, 500);

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
            id='input'
            value={item}
            onChange={this.handleChange}
          />
          <button id='add' onClick={this.handleArray}>Add</button>
        </form>

        <AppendItem items={this.state.items}
          finishItem={this.finishItem}
          updateItem={this.updateItem}
        />
      </div>
    );
  }
}

