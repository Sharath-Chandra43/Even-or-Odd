// Write your code here

import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  getEvenOrOdd = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  getRandomNumber = () => parseInt(Math.random() * 100)

  onIncrement = () => {
    const count = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + count}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="description">Count is {this.getEvenOrOdd()}</p>
          <button type="button" onClick={this.onIncrement} className="button">
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
