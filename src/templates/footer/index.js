import React, { Component } from 'react';
import "./style.css"

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer">
                <footer className="copyright">©2020</footer>
            </div>
         );
    }
}
 
export default Footer;