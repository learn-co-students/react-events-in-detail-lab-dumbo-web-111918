// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{
  doIt = (event) => {
    let coors = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coors);
    // debugger

    // console.log(coors);
  }

  render() {
    // debugger
    return <button onClick= {this.doIt}>Coordinates</button>
  }
}

export default CoordinatesButton
