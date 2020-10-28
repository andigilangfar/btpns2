import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../../components'
import "./style.css"

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    shouldComponentUpdate(lastProp) {
        if (lastProp.statusLogin !== this.props.statusLogin)
            return true
        return false
    }
    render() { 
        return ( 
            <div className="nav-container">
                <Link to="/home">
                <Menu text="Home" goToPage={ ()=> this.props.changePage('home') }/>
                </Link>
                <Link to="/about">
                <Menu text="About" goToPage={ ()=> this.props.changePage('about') }/>
                </Link>
                <Link to="/userlist">
                <Menu text="UserList" goToPage={ ()=> this.props.changePage('userlist') }/>
                </Link>
                {this.props.statusLogin?
                 <Menu text="Logout" goToPage={() => this.props.changeLogIn(false)}>Logout</Menu>
                :
                <>
                    <Link to="/login">
                <Menu text="Login" goToPage={ ()=> this.props.changePage('login') } />
                </Link>
                <Link to="/">
                <Menu text="Register" goToPage={ ()=> this.props.changePage('register') }/>
                </Link>
                
                </>
                }   
            </div>
         );
    }
}
 
export default Nav;