import React, { Component } from 'react';

class  Label extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <label label={this.props.label}>{this.props.children}</label>
        );
    }
}
 
export default Label;