import React, { Component } from 'react'

// function component
// const searchBar = () => {
//   return <input />
// } 

// class component
class searchBar extends Component{
  // state
  constructor(props) {
    super(props)

    this.state = {term: 'input'}
  } 
  
  render() {
    return(
    <div>
      <input
      value = {this.state.term} 
      onChange = {event => this.setState({ term: event.target.value })} />
    </div>
    )
  }
}

export default searchBar