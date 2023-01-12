import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Register.css";
import md5 from "md5";

const Register = () => {

    const [email , setEmail] = useState("");
    const [session , setSession] = useState("");
    const [password, setPassword] = useState("");
    
    const onEmailHandler = (e) => {
        setEmail(e.target.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.target.value)  
    }

    const onSubmitHandler=()=>{
        const user= ({
            email:email,
            password:md5(password)
        })
        console.log(user)
        axios.post("http://localhost:8085/login", user).then(res => {
            console.log(res.data)

        }).catch(err => {
            alert("error")
            alert(err.response.data.message)
        })

    }

    return (
        <div class="box-form">
            <div class="left">
                <div class="overlay">
                    <h1>Brown Field Airlines</h1>
                </div>
            </div>
            <div class="right">
                <h5>Sign Up</h5>
                <div class="inputs">
                    <input type="text" class="name" placeholder="First Name"/>
                    <input type="text" class="name" placeholder="Last Name"/>
                    <input type="email" placeholder="Email" onChange={onEmailHandler} />
                    <input type="password" class="name" placeholder="Password" onChange={onPasswordHandler} />
                    <input type="password" class="name" placeholder="Confirm password" onChange={onPasswordHandler} />
                    <input type="number" placeholder="Phone Number"/>
                    
                </div>
                <br /><br />
                <div class="Login_signup">
                    <button onClick={onSubmitHandler}>Sign Up</button>
                    <br />
                    <p>Have an account? <a data-dismiss="modal" data-bs-toggle="modal" data-toggle="modal"  data-bs-target="#exampleModal">Click here to Login</a></p>
                </div>
            </div>
        </div>

    )
}

export default Register