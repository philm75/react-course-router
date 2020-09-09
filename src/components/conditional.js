import React, { Component } from 'react';

class Conditional extends Component {

    state = {
        loading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 3000)
    }

    render() {

        if (this.state.loading) {
            return (
                <div>Loading...</div>
            )            
        } else {
            return (
                <>
                    <div>Conditional</div>
                </>
            )
        }
    }
}

export default Conditional;