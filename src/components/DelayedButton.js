import React, { PureComponent } from 'react'


export default class DelayedButton extends PureComponent {

    clickHandler = (e) => {
        e.persist()
        setTimeout(()=> this.props.onDelayedClick(e), this.props.delay)
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}></button>
            </div>
        )
    }

}