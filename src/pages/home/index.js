import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style.css'
import { connect } from 'react-redux'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users : [],
         }
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(json => this.setState({ users : json }))
    // }

    clickBtn = () => {
        this.props.history.push('/login')
    }

    render() { 
        if (!this.props.statusLogin)
            return <Redirect to="/login" />

        return ( 
            <>
                <h1>HOME</h1>
            </>
         );
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.auth.statusLogin,
    dataLogin: state.auth.dataLogin,
})

export default connect(mapStateToProps)(Home);