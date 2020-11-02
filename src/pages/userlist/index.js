import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import "./style.css"

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            admin: [
                {
                    name: "admin",
                }
            ],
         }
    }

    componentDidMount() {
        if (this.props.statusLogin) {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                const dataUsers = json.map(user => ({
                    ...user,
                    password: "1234"
                }))

                console.info('dataUsers: ', dataUsers)
                this.setState({
                    users: [...dataUsers, ...this.state.admin]
                })

                const result = dataUsers.find(value => value.password === "1234")
                const resultFilter = dataUsers.filter(value => value.password === "1234")
                console.log("result : ", result)
                console.log("resultFiler : ", resultFilter)
            })
        }
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
                    return <tr key={idx}>
                    {/* // <div key={idx}>Name : {user.name}</div> */}
                    <th scope="row">{idx+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                        <>  
                            <button className='btn-detail'>Detail</button>
                            <button className='btn-edit'> Edit</button>
                            <button className='btn-delete'>Delete</button>
                        </>
                    </tr>
                    })
                }
            </>
         );
    }
}

const mapStateToProps = (state) => ({
    statusLogin: state.auth.statusLogin,
    dataLogin: state.auth.dataLogin,
})
 
export default connect(mapStateToProps)(UserList);