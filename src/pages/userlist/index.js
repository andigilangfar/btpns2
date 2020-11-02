import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    clickBtn = () => {
        this.props.history.push('./login')
    }

    render() { 
        if (!this.props.statusLogin)
            return <Redirect to="/login" />

        return ( 
            <>
                <h2>Daftar Users</h2>
                {
                    this.props.users.map((user, idx) => {
                    return <div key={idx}>Name : {user.name}</div>
                    })
                }
            </>
         );
    }
}
 
export default UserList;