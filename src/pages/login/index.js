import React, { Component } from 'react';
import './style.css'
import RowInput from '../../components/rowinput';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
         }
    }

    onChangeInput = e => {
        // console.log(e.target)
        this.setState( {
            [e.target.name] : e.target.value
        })
        // console.log(e)
    }
//LOGIN CLICK
    onClickLogin = async () => {

        const { username, password } = this.state
        console.log(username, " : ", password)

        if (username && password) {
            let statusLogin = this.props.adminLogin.find(admin => (admin.username === username && admin.password === password))
            if (statusLogin) {
                alert('Login Success')
                let type = statusLogin.type
                this.props.doLogin({username, password, type}, this.props.adminLogin)
            } else {
                alert('Check your Password or Username')
            }
        } else {
            alert('Check your Form')
        }
    }

    render() { 
        if (this.props.statusLogin)
            return <Redirect to="/" />
        
        return ( 
            <div className="login">
                    <form className="form">
                        <RowInput label="Username" type="text"
                         name="username" placeholder="Enter Your Username"
                         onChangeInput={this.onChangeInput} />
                        <RowInput label="Password" type="password"
                         name="password" placeholder="Enter Your Password"
                         onChangeInput={this.onChangeInput} />
                        <button type="button" className="submit-btn"
                         onClick={this.onClickLogin}>Login</button>
                    </form>
            </div>
         );
    }
}


//REDUX DATA//
const mapStateToProps = (state) => ({
    statusLogin: state.auth.statusLogin,
    adminLogin: state.auth.admin,
})

const mapDispatchToProps = (dispatch) => ({
    doLogin: (adminLogin, dataLogin) => dispatch({ type: "LOGIN", payload: { adminLogin, dataLogin } })
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);