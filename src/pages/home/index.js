import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import "./style.css"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            redirect: false,
            users: [],
            admin: [{
                name: "Admin",
                role: "admin"
            }, {
                name: "Administrator",
                role: "admin"
            }]
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
             <div className="body-container">
                <div className="body-text">
                     <h1>First Ring For Michael Jordan</h1>
                     <p> June 12th of 1991, Michael Jordan and Scottie Pippen combined for 62 points, 17 rebounds, 17 assists and 10 steals to beat the Lakers 108-101 in Game 5 of the 91 Finals. The victory gave the two Chicago legends their first of six NBA championships and prevented Magic Johnson — 16 points, 20 assists and 11 rebounds in the loss — from winning his sixth NBA championship (in just 12 seasons). It was also the first championship for the 25-year-old Chicago franchise.
                         After the game, Jordan, who finished his dominant NBA Finals performance with 30 points, 10 assists and 5 steals, was in tears with his now deceased father and ex-wife by his side. 
                         “No one can ever take this away from me,” said an emotional Jordan. “This has been a seven-year struggle for me. It should get rid of the stigma of being a one-man team. We have players surrounding myself that make us an effective basketball team. I don’t know if I’ll ever have this same feeling again.”</p>
                 </div> 
              
              </div>
            </>
        );
    }
}
        



export default Home;