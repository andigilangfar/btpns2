import React, { Component } from 'react';
import { Label, Input, RowInput } from '../../components';
import "./style.css"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: ""
         }
    }
    onChangeInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onLogin = () => {
        const { username, password } = this.state
        console.log(username, " : ", password);

        const exist = this.props.listUsers.find((user) => user.username === username && user.password === password)
        if (exist) {
            alert(`Welcome ${exist.name}!!`)
            this.props.changeLogIn()
        } else alert("User undefined!!")
    }
    render() { 
        return ( 

            <>
                <div className="login-container"/>
                    <div className="body-title">Selamat Datang</div>
                    <div className="body-content">
                        <div className="login-input">
                        <RowInput value={this.state.username} label="Username" type="text" name="username" onChange={this.onChangeInput} />
                        <RowInput value={this.state.password} label="Password" type="password" name="password" onChange={this.onChangeInput} />
                        <input type="button" value="Login" onClick={this.onLogin} />
                        </div>
                    </div>
            </>    
         );
    }
}

export default Login;