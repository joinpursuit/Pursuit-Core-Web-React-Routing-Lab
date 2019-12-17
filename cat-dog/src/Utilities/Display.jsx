import React from 'react'

class Pet extends React.Component {
    render() {
        return (
            <img src={this.props.url} alt="pet" />
        )
    }
}

export default Pet;