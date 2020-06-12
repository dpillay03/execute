import React from 'react';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ' '
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const goal = this.state;
    console.log(goal)
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({ 
      [event.target.name]: event.target.value 
    });
  }

  render() {
    const {item} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Goal is: {item}</p>
          <input
            type='text'
            placeholder='Input Goal'
            name='item'
            value={item}
            onChange={this.handleChange}
          />
          <p><button>Add</button></p> 
        </form>
      </div>
    );
  }
}

export default AddItem;
