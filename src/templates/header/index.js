import React, { Component } from 'react';
import "./style.css"
import logo from "./nbalogo.webp"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header">
                <img src={ logo } className="logoheader"></img>
                </div>
         );
    }
}
 
export default Header;