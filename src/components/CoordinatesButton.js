import React, { PureComponent } from 'react'


// Code CoordinatesButton Component Here

export default class CoordinatesButton extends PureComponent {

    clickHandler = (e) => {
        let arr = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(arr)
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}></button>
            </div>
        )
    }

}

