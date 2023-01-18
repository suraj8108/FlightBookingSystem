import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Register.css";
import md5 from "md5";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { signup } from "../../Service/AuthService";

const Register = () => {

    const [userDetails, setuserDetails] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        password: "",
        emailId: "",
        loyalty:0,
    })
    const [confirmPassword, setConfirmPassword] = useState("")

    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(formValidate()){
            signup(userDetails)
            
        }
        else{
            toast.error("Please fill details correctly")
        }
    }
    const onChangeHandler = (e) => {
        switch (e.target.id) {
            case "firstName":
                setuserDetails(shopCart => ({
                    ...shopCart,
                    "firstName": e.target.value
                }));
                break;
            case "lastName":
                setuserDetails(shopCart => ({
                    ...shopCart,
                    "lastName": e.target.value
                }));
                break;
            case "password":
                setuserDetails(shopCart => ({
                    ...shopCart,
                    "password": e.target.value
                }));
                break;
            case "emailId":
                setuserDetails(shopCart => ({
                    ...shopCart,
                    "emailId": e.target.value
                }));
                break;
            case "phoneNumber":
                setuserDetails(shopCart => ({
                    ...shopCart,
                    "phoneNumber": e.target.value
                }));
                break;
            default:
                break;
        }
    }
    const onChangeConfirm=(e)=>{
        setConfirmPassword(e.target.value)
    }
    const formValidate = () => {
        if(confirmPassword!==userDetails.password){
            return false
        }
        if(userDetails.firstName==="" && userDetails.lastName==="" && userDetails.password==="" && userDetails.emailId==="" && userDetails.phoneNumber===""){
            return false
        }
        return true

    }
    return (
        <form class="box-form">
            <div class="left">
                <div class="overlay">
                    <h1>Brown Field Airlines</h1>
                </div>
            </div>
            <div class="right">
                <h5>Sign Up</h5>
                <div class="inputs">
                    <input id="firstName" type="text" class="name" placeholder="First Name" required onChange={onChangeHandler}/>
                    <input id="lastName" type="text" class="name" placeholder="Last Name" required onChange={onChangeHandler}/>
                    <input id="emailId" type="email" placeholder="Email" onChange={onChangeHandler} required />
                    <input id="password" type="password" class="name" placeholder="Password" onChange={onChangeHandler} required />
                    <input id="confirmPassword" type="password" class="name" placeholder="Confirm password" onChange={onChangeConfirm} required />
                    <input id="phoneNumber" type="number" placeholder="Phone Number" onChange={onChangeHandler}/>

                </div>
                <br /><br />
                <div class="Login_signup">
                    <button type="Submit" onClick={onSubmitHandler}>Sign Up</button>
                    <br />
                    <p>Have an account? <a data-dismiss="modal" data-bs-toggle="modal" data-toggle="modal" data-bs-target="#exampleModal">Click here to Login</a></p>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
            />
        </form>

    )
}

export default Register