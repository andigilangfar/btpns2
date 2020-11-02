import React,{ Component } from 'react';
// import logo from './logo.svg';
import { Nav, Body, Footer } from './templates';
// import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page: 'home',
      statusLogin : true
     }
  }

  shouldComponentUpdate(lastProp) {
    if (lastProp.page !== this.state.page)
      return true
    return false
  }

  onClickButton = (page) => {
    this.setState({
      page
    })
  }

  changeStatus = () => {
    this.setState(oldState => ({ statusLogin : !oldState.statusLogin }))
  }

  doLogin = () => {
    this.setState({ statusLogin : true })
  }

  doLogout = () => {
    this.setState({ statusLogin : false })
  }

  render() { 
    console.log(this.state.page)
    return ( 
      <div>
        <Nav 
          changePage={this.onClickButton} 
          // statusLogin={this.state.statusLogin} 
          // changeStatus={this.changeStatus} 
        />
        <Body 
          page={this.state.page} 
          changePage={this.onClickButton} 
          changeStatus={this.changeStatus} 
          statusLogin={this.state.statusLogin} 
        />
        <Footer />
      </div>
     );
  }
}

export default App;
