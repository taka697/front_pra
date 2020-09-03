import React from 'react';
import axios from 'axios'

class ApiTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'sample',
      value: 1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  handleClick() {
    axios.get(`${'http://localhost:3000/api/v1/posts'}/${this.state.value}`)
      .then(response => {
        this.setState({
          place: response.data.data.title,
        })
      })
      .catch(() => {
        console.log('error')
        console.log(`${'http://localhost:3000/api/v1/posts'}/${this.state.value}`)
        this.setState({
          place: 'error',
        })
      })
  }

  render() {
    return (
      <>
        <h1>State {this.state.value}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite number:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>{this.state.place}</h1>
        <button onClick={this.handleClick}>click!</button>
      </>
    )
  }

}

export default ApiTest;
