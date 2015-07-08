import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        var { recipient } = this.props;

        return (
            <h1>Hello, {recipient}!</h1>
        );
    }
};

export default HelloWorld;