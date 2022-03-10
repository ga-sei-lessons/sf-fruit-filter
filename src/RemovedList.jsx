import { Component } from 'react'

export default class RemovedList extends Component {
  render() {
   const remvedFruits = this.props.removedFruits.map((fruit, idx) => {
     return <li key={`removedFruit${idx}`}>{fruit}</li>
   })
    return (
      <>
        <h4>These fruits where removed:</h4>
        <ul>
          {remvedFruits}
        </ul>
      </>
    )
  }
}