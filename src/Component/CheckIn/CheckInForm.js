import React from "react";
import { useState } from "react";
import axios from "axios";
import "../Login/login.css";
import md5 from "md5";
const CheckInForm = () => {

    const [pnr , setPnr] = useState("");
    const [session , setSession] = useState("");
    const [email, setEmail] = useState("");
    
    const onEmailHandler = (e) => {
        setPnr(e.target.value)
    }
    const onPasswordHandler = (e) => {
        setEmail(e.target.value)  
    }

    const onSubmitHandler=()=>{
        
        alert("check In")
    }

    return (
        <div class="box-form">
            <div class="left">
                <div class="overlay">
                    <h1>Brown Field Airlines</h1>
                </div>
            </div>
            <div class="right">
                <h5 class="">Check In</h5>
                <div class="inputs pt3">
                    <input type="text" placeholder="PNR Number" onChange={onEmailHandler}/>
                    <br/>
                    <input type="password" placeholder="Email Address" onChange={onPasswordHandler}/>
                </div>
                <br/><br/>
                <div class="Login_signup ">
                    <button onClick={onSubmitHandler}>Check In</button>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default CheckInForm;