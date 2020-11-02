import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from '../../components';
import { connect } from 'react-redux'
import './style.css'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    // shouldComponentUpdate(lastProp, nextProp) {
    //     if (lastProp.statusLogin !== this.props.statusLogin)
    //         return true
    //     return false
    // }
    render() { 
        return ( 
            <div className="navbar">
                <Link to="/">
                    <Menu text="Home" goToPage={ () => this.props.changePage('home') } />
                </Link>
                <Link to="/userlist">
                    <Menu text="Users List" goToPage={ () => this.props.changePage('userlist') } />
                </Link>
                {/* <Link>
                    <Menu text="Rekomendasi" goToPage={ () => this.props.changePage('rekomendasi') } />
                </Link> */}
                
                {this.props.statusLogin ?
                    <Menu text="Logout" goToPage={this.props.doLogout} />
                    :
                    <>
                        <Link to="/login">
                            <Menu text="Login" goToPage={ () => this.props.changePage('login') } />
                        </Link>
                        <Link to="/register">
                            <Menu text="Register" goToPage={ () => this.props.changePage('register') } />
                        </Link>
                    </>
                }

                {this.onLogin}
            </div>
         );
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.auth.statusLogin,
    adminLogin: state.auth.admin,
})

const mapDispatchToProps = (dispatch) => ({
    doLogout: (adminLogin) => dispatch({ type: "LOGOUT", payload: adminLogin })
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Nav);