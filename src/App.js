import React, { Component} from 'react';
import { Header, Nav, Body, Footer} from "./templates"


class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      page: "register",
      isLoggedIn: false
    }
  }

  onClickButton = (page) => {
    this.setState({
      page
    })
  }



  doLogout = () => {
    this.setState({ isLoggedIn: false })
  }

  changeLogIn = () => {
    this.setState(oldState => ({ isLoggedIn: !oldState.isLoggedIn }))
  }

  render() {
    console.log(this.state.page)
    return (
      <>
        <Header />
        <Nav
          statusLogin={this.state.isLoggedIn}
          changeLogIn={this.changeLogIn}
          changePage={this.onClickButton} />
        <Body
          page={this.state.page}
          statusLogin={this.state.isLoggedIn}
          changeLogIn={this.changeLogIn}
          changePage={this.onClickButton} />
        <Footer />
      </>
    );
  }
}

export default App;