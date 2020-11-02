import React,{Component} from "react"
import {connect} from "react-redux"
import {Switch,Route} from "react-router-dom"
import {Home, Login, Register} from "../../pages";

class Body extends Component{
    constructor(props) {
        super(props);
        this.state={
            dataUser: [{
                nama:"Human Capital",
                email:"HC@admin.com",
                password:"123",
                roletype: 0
            }, {
                nama:"CEO",
                email:"CEO@admin.com",
                password:"123",
                roletype: 1
            }],
            logout: true
        }
    }
       
    showPage = () => {
        const {page,status} = this.props
        return (
            <Switch>
                <Route exact path="/" children={(props) => <Home/>} />
                <Route exact path="/Login" children={(props) => <Login {...props} dataUser={this.state.dataUser}
                 logout={false} loginStatus={this.doLogin}/>} />
                <Route exact path='/Register' children={(props) => <Register {...props} dataUser={this.state.dataUser}
                 saveData={this.setDataUser}/>} />
            </Switch>
        )
    }

    doLogout = loginStatus => {
        console.log("cek dologin")
        console.log(loginStatus)
        this.props.toPage("login")
        this.props.status(false)
    
    }
    doLogin = loginStatus => {
        console.log(loginStatus)
        if(loginStatus.roletype === 0){
            {this.props.status("Human Capital")}
            alert("Welcome Human Capital")
            }else if(loginStatus.roletype === 1){
                {this.props.status("CEO")}
                alert("Welcome Chief")
            }else{
                {this.props.status("Staff")}
                alert("Welcome Staff")
            }
    //     if (loginStatus) {
    //         //this.props.toPage("home")
    //         this.props.status(true)
    //     }
    }
    setDataUser = (dataUser, idUser) => {
        // const idUser=this.state.dataUser.length;
        let data = this.state.dataUser
        data.splice(idUser, 1, dataUser)
        console.log("Isi Data User")
        console.log(dataUser)

        this.setState({
            dataUser: data
        })
        
    }
    render() {
        console.log(this.props.data)
        return <>
            <div id="main">
                {this.showPage()}
            </div>
        </>
    }
    
}
const mapStateToProps = state => ({
    data: state.data.dataUser
})

const mapDispatchToProps = (dispatch) => ({
    setData: (data) => dispatch({type: "addUser",  payload: {dataUser : data}
    })
})
export default connect(mapStateToProps, mapDispatchToProps)(Body)