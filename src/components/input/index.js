import React, { Component } from 'react';
import "./style.css"

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="input-group">
                {this.props.children}
                <input type={this.props.type}
                name={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onClick={this.props.funcName}
                onChange={this.props.onChangeInput}/>
            </div>
         );
    }
}
 
export default Input ;