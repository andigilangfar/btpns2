import React, { Component } from 'react';
import {connect} from "react-redux"
import "./style.css"
import {Input} from "../../components"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
         }
    }

    onChangeInput = e =>{
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // LOGIN FUNCTION 
    doLogin = () =>{
        const{email,password}=this.state
        const{dataUser}=this.props
        if (email&&password){
            let statusLogin = false
            statusLogin=dataUser.find(data=>(data.email==email&data.password==password))
            if(statusLogin){
                this.props.history.push("/")
                this.props.loginStatus(statusLogin)
            } else {
                alert("Failed to Login")
            }
        } else {
            alert("Check your Form")
            }
        }
    
    //GO TO REGISTER FORM
    gotoRegist = () => {
        this.props.history.push('/Register')
    }

    render() { 
        return (
            <div className="Login-container">
                <h1>Login Here !</h1>
                <form>
                    <p>Email :</p>
                    <Input type="text" name="email"
                     placeholder="Enter Your Email"
                     value={this.state.email}
                     onChangeInput={this.onChangeInput}/>
                    <p>Password :</p>
                    <Input type="password" name="password"
                     placeholder="Enter Your Password"
                     value={this.state.password}
                     onChangeInput={this.onChangeInput}/>
                    <Input type="button" name="btnlogin"
                     value="login"
                     funcName={this.doLogin}/>
                     <Input type="button" name="btnlogin"
                     value="Register"
                     funcName={this.gotoRegist}
                     />
                </form>  
            </div>
                
          );
    }
}
const mapStateToProps = state => ({
    data: state.data.dataUser
})
export default connect(mapStateToProps)(Login)