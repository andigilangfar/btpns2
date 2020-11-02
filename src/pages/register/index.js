import React, { Component } from 'react';
import './style.css'
import RowInput from '../../components/rowinput';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data : {},
            nama : "",
            username : "",
            password : "",
         }
    }

    onChangeInput = e => {
        this.setState({
            [e.target.name] : e.target.value
            // console.log(data)
        })
    }

    onClickRegister = async () => {
        const { nama, username, password } = this.state
        this.props.goRegister({ nama, username, password })
        console.log(this.props.goRegister.length)
        if (this.props.goRegister.length) {
            alert('Terima kasih sudah register bosq, satu langkah lagi, silahkan login')
        // } else {
        //     this.props.goRegister(this.state.data)
        //     this.setState(x => x.data = {})
        //     document.formRegister.reset()
        }
    }

    render() { 
        return ( 
            <div className="register">
                    <form className="form">
                    <RowInput label="Name" type="text"
                     name="nama" placeholder="Enter Your Name" 
                     onChangeInput={this.onChangeInput} />
                    <RowInput label="Username" type="text"
                     name="username" placeholder="Enter Your Username"
                     onChangeInput={this.onChangeInput} />
                    <RowInput label="Password" type="password"
                     name="password" placeholder="Enter Your Password"
                      onChangeInput={this.onChangeInput} />
                    <button type="button" className="submit-btn"
                     onClick={this.onClickRegister}>Register</button>
                    </form>
            </div>
         );
    }
}
 
export default Register;