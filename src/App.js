import React, {Component} from 'react';
import {Body,Nav} from "./templates"

class App extends Component{
    constructor(props) {
      super(props);
      this.state={
          page:"register",
          loginStatus:false
      }
    }
  
    onClickButton = (page)=>{
        this.setState({
            page
        })
    }
    setLoginStatus=(status)=>{
        console.log("check")
        console.log(status)
        this.setState({
            loginStatus:status
        })
    }
  
    render() {
      return(
          <>
            <Nav loginStatus={this.state.loginStatus}
             toPage={this.onClickButton}/>
            <Body loginStatus={this.state.loginStatus} 
            status={this.setLoginStatus} 
            page={this.state.page} 
            toPage={this.onClickButton}/>
          </>
      )
    }
  }
  
  export default App;