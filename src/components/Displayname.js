import React, { Component } from 'react';

class Displayname extends Component {
    render() {
        return <span className='handle'>{this.props.author.name}</span>;
    }
}

export default Displayname;