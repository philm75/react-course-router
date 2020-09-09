
import React, { PureComponent } from 'react'

class PureComp extends PureComponent {

    state = {
        name: 'Phil'
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.name === this.state.name) {
    //         return false
    //     }
    //     return true
    // }

    render() {
        console.log('render');
        return (
            <div>
                <h3>{this.state.name}</h3>
                <button onClick={() => this.setState({name: 'Philip'})}>
                    Click to change
                </button>
            </div>
        )
    }
}

export default PureComp;