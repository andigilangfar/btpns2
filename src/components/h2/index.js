import React, { Component } from 'react';

class H2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <h2 hlabel={this.props.hlabel}>{this.props.children}</h2>

         );
    }
}
 
export default H2;