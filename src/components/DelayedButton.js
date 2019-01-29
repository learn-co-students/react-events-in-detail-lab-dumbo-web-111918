// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component{
  theThing = () => {
    debugger
  }

  render() {
    // debugger
    return <button onClick={(event) => setTimeout(this.props.onDelayedClick(event), this.props.delay)}>delay</button>
    //
  }
}

export default DelayedButton
