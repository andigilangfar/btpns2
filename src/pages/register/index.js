import React, { Component } from 'react';
import { Label } from '../../components'
import { RowInput, Input } from '../../components'
import "./style.css"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            username: "",
            password: ""
        }
    }
    onChangeInput = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    
    }

    doRegister = async () =>{
        const {name, username, password } = this.state
        this.props.tambahUser({ name, username, password })
        console.log(this.props.tambahUser.Length)
        
        // let oldUsers = this.state.users
        // oldUsers.push({
        //     name,
        //     username,
        //     password
        // })
        // this.setState({
        //     users:oldUsers
        // })
    
        // this.state.users.push(name, username, password)

        //      await this.setState(oldState => {
        //      let oldData = oldState.users
        //      oldData.push({ name, username, password })
        //  })
        //  console.log(this.state.users);

    }

    renderUsers = () => {
        return this.props.listUsers.map((users, idx) => {
            return <div key={idx}>
                name: {users.name} - password: {users.password}
            </div>
        })
    }
    render() { 
        return (
            <div className="body-container">
                <form className="regist-container" >
                <RowInput label="Name" name="name" type="text" onChange={this.onChangeInput} />
                    <RowInput label="Username" name="username" type="text" onChange={this.onChangeInput} />
                    <RowInput label="Password" name="password" type="password" onChange={this.onChangeInput} />
                        <Input typeInput="button" valueInput="Register" onClickInput={this.doRegister} />
                    </form>
                    {this.renderUsers()}
                    </div>
          );
   
        }
}
 
export default Register;