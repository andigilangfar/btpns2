import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="contact-form">
                <button type="submit">{this.props.children}</button>
            </div>
         );
    }
}
 
export default Button;