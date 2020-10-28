import React, { Component } from 'react';
import "./style.css"

import { Home, About, Login, Register, Userlist } from "../../pages"

class Body extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            page: "register",
            dataRegister: [],
            dataLogin: {},
            users: []
        }
    }

    // onClickRegister = data =>{
    //     if(this.state.dataRegister.push(data)){
    //         alert("Berhasil Registrasi")
    //     }else{
    //         alert("Gagal Registrasi")
    //     }
    //     console.log("Data Register : ", this.state.dataRegister);
    // }
    // updateLogin = async data => {
    //     await this.setState({dataLogin : data})
    //     console.log("Data Login : ", this.state.dataLogin)
    //     this.props.changeStatus(true)
    
    // }

    showPage = () => {
        const { page, changeLogIn } = this.props

        if (page === "home")
            return <Home />

        if (page === "about")
            return <About />
            
            if (page === "userlist")
            return <Userlist />

        if (page === "login")
            return  <Login changeLogIn={changeLogIn} listUsers={this.state.users} />

        if (page === "register")
            return <Register listUsers={this.state.users} tambahUser={this.addUsers} />
    }
    
    addUsers = obj => {
        const { name, username, password } = obj
        let oldUsers = this.state.users
        oldUsers.push({
            name,
            username,
            password
        })
        this.setState({
            users: oldUsers
        })
    }



    render() { 
        return (
                <>
                    {
                        this.showPage()
                    }
                </>
            
            
            // <div className="body-container">
            //     <form className="regist-container" >
            //             <Label>
            //                  email:
            //             <input type="text" name="email" />
            //                 </Label>
            //             <Label>
            //                  Username:
            //             <input type="text" name="username" />
            //                 </Label>
            //             <Label>
            //                  password:
            //             <input type="password" name="password" />
            //                 </Label>
            //             <input type="submit" value="Submit" />
            //         </form>
                    

        //         {/* <img src={ logo1 } className="logojordan"></img>
                
        //         <div className="body-text">
        //             <h1>First Ring For Michael Jordan</h1>
        //             <p> June 12th of 1991, Michael Jordan and Scottie Pippen combined for 62 points, 17 rebounds, 17 assists and 10 steals to beat the Lakers 108-101 in Game 5 of the 91 Finals. The victory gave the two Chicago legends their first of six NBA championships and prevented Magic Johnson — 16 points, 20 assists and 11 rebounds in the loss — from winning his sixth NBA championship (in just 12 seasons). It was also the first championship for the 25-year-old Chicago franchise.
        //                 After the game, Jordan, who finished his dominant NBA Finals performance with 30 points, 10 assists and 5 steals, was in tears with his now deceased father and ex-wife by his side. 
        //                 “No one can ever take this away from me,” said an emotional Jordan. “This has been a seven-year struggle for me. It should get rid of the stigma of being a one-man team. We have players surrounding myself that make us an effective basketball team. I don’t know if I’ll ever have this same feeling again.”</p>
        //         </div> */}

        //         {/* <div className="contact-form">
        //         <h1>Contact Us</h1>
        //                 <Label> Name : </Label>
        //                 <Input type="text" placeholder="Enter Your Name"/>
        //                 <>Email :</>
        //                 <Input type="email" placeholder="Enter Your Email"/>
        //                 <Label>Message :</Label>
        //                 <Input type="text" placeholder="Enter Your Message"/> */}
        //                 {/* <Button type="submit" value="Send"/>  */}
        //         {/* </div>

        //         <div className="about-container">
        //             <h1>About Us</h1>
        //             <div className="box">
        //                 <H2 Vision />
        //                 <p>NBA (National Basketball Association) is constantly improving the core aspects of the sport, including ethics to ensure that it sets the best standards for other leagues to emulate.</p>
        //             <div className="box">
        //                 <H2 Values />
        //                 <p>NBA core values comprise “integrity, teamwork, respect, and innovation.”</p>
        //             </div> */}
        //         {/* </div>
        //     </div> */}
        // </div>


          );
    }
}
 
export default Body ;
