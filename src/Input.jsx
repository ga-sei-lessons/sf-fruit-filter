import { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <>
        <label htmlFor="fruit-filter">Filter Them Fruits:</label>
        <input 
          type="text"
          value={this.props.value}
          onChange={this.props.handleFilterChange}
          id="fruit-filter"
        />
      </>
    )
  }
}