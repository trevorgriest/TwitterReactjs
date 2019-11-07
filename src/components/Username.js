import React, { Component } from 'react';

class Username extends Component {
    render() {
        return <span className='name'>{this.props.author.handle}</span>;
    }
}

export default Username;