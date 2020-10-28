import React, { Component } from 'react';
import {Input, Label, Button } from "../../components"
import "./style.css"


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  <div className="contact-form">
              <h1>Contact Us</h1>
                        <Label> Name : </Label>
                       <Input type="text" placeholder="Enter Your Name"/>
                        <>Email :</>
                        <Input type="email" placeholder="Enter Your Email"/>
                         <Label>Message :</Label>
                         <Input type="text" placeholder="Enter Your Message"/> 
                        <Button type="submit" value="Send"/>  
                 

                 </div>
                 );
    }
}
 
export default About;