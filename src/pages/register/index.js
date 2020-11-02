import React, { Component } from 'react';
import {connect} from "react-redux"
import {Input} from "../../components"
import "./style.css"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            email: "",
            name: "",
            password: "",
            dataUser: []
        }
    }

    onChangeInput = e => {
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    gotoLogin = () =>{
        this.props.history.push('/Login')
    }

    doRegister = async () =>{
        const {email,password,name}=this.state
        console.log(this.props)
        const {dataUser}=this.props
        console.log("Check dataUser")
        console.log(dataUser)
        const idUser=dataUser.length;
        console.log("Check Email")
        if(name&&email&&password){
            console.log("true")
            console.log(dataUser)
        
            let statusUser = false    
            statusUser=dataUser.find(val=>{
                if (val.email===email){
                    return true
                }
            })
        
        if(statusUser){
            alert("Email has Already Exist")
        } else {
            let dataRegister={
                name: name,
                password: password,
                email: email
            }
        this.props.saveData(dataRegister, idUser)
        console.log(dataRegister)
        await this.props.setData(dataRegister)
        this.props.history.push('/Login')
        console.log("register") 
        }

        }else{
            alert("Please Check Again")
            console.log(false)
        }

    }
    render() { 
        return (
            <div className="Regist-container">
                <h1>Regist Here !</h1>
                <form>
                    <p>Name :</p>
                    <Input type="text" name="name" 
                     placeholder="Enter Your Name"
                     value={this.state.name}
                     onChangeInput={this.onChangeInput}/>
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
                    <Input type="button" name="btnRegister"
                     value="Register"
                     funcName={this.doRegister}/>
                     <Input type="button" name="btnRegister"
                     value="Login"
                     funcName={this.gotoLogin}/>
                </form>  
            </div>
                
          );
    }
}

const mapStateToProps = state => ({
    data: state.data.dataUser
})

const mapDispatchToProps = (dispatch) => ({
    setData: (data) => dispatch({type: "addUser",  payload: {dataUser : data}
    })
})
export default connect(mapStateToProps, mapDispatchToProps)(Register)
