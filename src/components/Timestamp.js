import React, { Component } from 'react';

function formatDate(date) {
    return date.toLocalDateString();
}

class Timestamp extends Component {
    render() {

        return <span className='time'>{this.props.Date}</span>;
    }
}

export default Timestamp;