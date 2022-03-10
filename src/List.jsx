import { Component } from 'react'

export default class List extends Component {
  render() {
    // create a list of fruits from the props
    const fruitListItems  = this.props.fruits.map((fruit, idx) => {
      return <li key={`fruitlistitem-${idx}`}>{fruit}</li>
    })
    return (
      <ul>
        {fruitListItems}
      </ul>
    )
  }
}