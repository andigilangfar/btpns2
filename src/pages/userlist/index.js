import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Userlist extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            users : [],
         
        }
    }


   componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => this.setState({ users : json }))
    }
    render() { 
        
        return ( 
            <>
              <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user, idx) => {
                                return <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <button>View</button>
                                        <button>Edit</button>
                                        {user.role === "user" && <button>Delete</button>}
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </>
        );
    }
}
 
export default Userlist;