// Code DelayedButton Component Here
import React from "react"

const DelayedButton = (props) => {

  const handleClick = (e) => {
    e.persist();
    setTimeout(() => {
      props.onDelayedClick(e),
        props.delay
    })
  }

  return (
    <div>
      <button onClick={handleClick}>Delayed</button>
    </div>
  )

}

export default DelayedButton;