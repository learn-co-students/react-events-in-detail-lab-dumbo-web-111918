// Code CoordinatesButton Component Here
import React from 'react'

const CoordinatesButton = (props) => {

  const handleClick = (e) => {
    props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  return (
    <div>
      <button onClick={handleClick}>Coordinates</button>
    </div>
  )

}

export default CoordinatesButton;
