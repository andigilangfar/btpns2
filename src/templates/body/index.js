import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home, Login, Register, UserList } from '../../pages'
import './style.css'

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataRegister : [],
            dataLogin : {},
            dataAdmin : [
                {
                    nama : "admin",
                    username : "admin",
                    password : "admin",
                }
            ],
            users : [
                {
                    password : "123",
                }
            ],
         }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.setState({ users : json }))
    }

    // onRegister = data => {
    //     if(this.state.dataRegister.push(data)) {
    //         alert("Terima kasih telah mendaftar")
    //     } else {
    //         alert("Silahkan coba daftar lagi")
    //     }
    //     console.log("Data Register : ", this.state.dataRegister)
    // }

    // goLogin = async data => {
    //     await this.setState({ dataLogin : data })
    //     console.log('Data Login : ', this.state.dataLogin)
    //     this.props.changeStatus(true)
    // }

    showPage = () => {
        const { statusLogin, changeStatus } = this.props

        // if (page === 'home')
        //     return <Home />

        // if (page === 'login')
        //     return <Login title="LOGIN" dataRegister={this.state.dataRegister} dataLogin={this.state.dataLogin} updateLogin={this.goLogin} />

        // if (page === 'register')
        //     return <Register title="REGISTER" goRegister={this.onRegister} dataRegister={this.state.dataRegister} />

        return (
            <Switch>
                <Route exact path="/" children={(props) => <Home {...props} statusLogin={statusLogin} /> } />
                <Route path="/userlist" children={(props) => <UserList {...props} statusLogin={statusLogin} users={this.state.users} /> } />
                <Route path="/login">
                    <Login title="LOGIN" changeStatus={changeStatus} dataRegister={this.state.dataRegister} statusLogin={this.props.statusLogin} dataAdmin={this.state.dataAdmin} users={this.state.users} />
                </Route>
                <Route path="/register">
                    <Register title="REGISTER" dataRegister={this.state.dataRegister} goRegister={this.onRegister} />
                </Route>
            </Switch>
        )
    
    }

    onRegister = obj => {
        const { nama, username, password } = obj
        let oldUsers = this.state.dataRegister
        oldUsers.push({
            nama,
            username,
            password,
        })
        this.setState({
            dataRegister : oldUsers
        })
    }

    render() { 
        return ( 
            <div>
                { this.showPage() }
                
            </div>
         );
    }
}
 
export default Body;