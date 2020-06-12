import React from 'react';

class AddItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
  }
  render(){
  const {item} = this.state
  return (
      <div>
        <input
        type='text'
        name='item'
        placeholder='Input Goal'
        value={item}
        onChange={this.handleChange}
      />
        <button id='submitButton'
                type='submit'
                value='value'
                >Add</button>
        <p>{item}</p>
      </div>
  );
  }
}

export default AddItem;
