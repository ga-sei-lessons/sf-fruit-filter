import { Component } from 'react'
import Input from "./Input"
import List from "./List"
import RemovedList from './RemovedList'

const defaultFruits = ['Banana', 'Apple', 'Mango', 'Watermelon', 'Honey dew melon', 'Avacado', 'Orange', 'Cherry', 'Tomato']

export default class FruitContainer extends Component {
  // here is where state will be managed, so the input and list can share state
  state = {
    fruitsToDisplay: defaultFruits, // fruits to show in the List.jsx
    inputFilterValue: '', // input data from Input.jsx
    removedFruits: []
  }
  // this method will be drilled down to the input
  handleFilterChange = (e) => {
    e.preventDefault()
    const filteredFruitsList = defaultFruits.filter(fruit => {
      // lower case them both so its case insensitive
      return fruit.toLowerCase().includes(e.target.value.toLowerCase())
    })
    // revers the bool with the js logical NOT operator !
    const removedFruits = defaultFruits.filter(fruit => {
      // lower case them both so its case insensitive
      return !fruit.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      inputFilterValue: e.target.value,
      fruitsToDisplay: filteredFruitsList,
      removedFruits
    }, () => console.log(this.state)) 
  }

  render() {
    return (
      // here is where we will render the input and list
      <>
        <Input 
          // everthing we need to control a form, that wil update state here in the parent component
          handleFilterChange={this.handleFilterChange}
          value={this.state.inputFilterValue}
        />
        <List 
          fruits={this.state.fruitsToDisplay}
        />
        <RemovedList 
          removedFruits={this.state.removedFruits}
        />
      </>
    )
  }
}