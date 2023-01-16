import React from "react"
import SearchResult from "../Search/SearchResult"
import "./UserProfile.css"
const UserProfile = () => {
    return (
        <div>
            <nav class="navbar navbar1 navbar-expand-lg">
                <div class="container-fluid">
                    <a class="" href="/"><img className="ms-4 navlogo" alt="" src="/assets/images/logo.png" /> <br /><span class="ms-1 logotext">BROWNFIELD</span> </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class=" navbar-list navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="w-50">
                            </li>

                        </ul>
                        <span class="navbar-text">
                            <a href="/" className="a me-4">About us</a>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn me-2 btn-outline-light">Login</button>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#Register" class="btn  me-2 btn-outline-light">Register</button>
                        </span>
                    </div>
                </div>
            </nav>
            <div className="user-profile">
                <h1 className="mt3 tc">Welcome Anand</h1>
                <div className="cf">
                    <div className="pl5 section1 fl w-100-m w-100-ns w-50-l bg-white pv3">
                        <h3 className="tc">User Details</h3>
                        <div class="cf w-100 center">
                            <div class="fl w-20 tc pv3 bg-white">
                                First Name :
                            </div>
                            <input id="firstName" class="info fl w-60 tc pv3 bg-white" placeholder="First Name" disabled />
                        </div>
                        <div class="cf w-100 center">
                            <div class=" fl w-20 tc pv3 bg-white">
                                Last Name :
                            </div>
                            <input id="lastName" class="info fl w-60 tc pv3 bg-white" placeholder="Last Name" disabled />
                        </div>
                        <div class="cf w-100 center">
                            <div class=" fl w-20 tc pv3 bg-white">
                                Phone Number :
                            </div>
                            <input id="phoneNo" class="info fl w-60 tc pv3 bg-white" placeholder="Phone Number" disabled />
                        </div>
                        <div class="cf w-100 center">
                            <div class=" fl w-20 tc pv3 bg-white">
                                Email Id :
                            </div>
                            <input id="email" class="info fl w-60 tc pv3 bg-white" placeholder="email" disabled />
                        </div>
                    </div>
                    <div className="center fr-l mr5 loyalty-card w-40-l w-80 pv5 w-100-m">
                        <h3 className="tc mb4">Check Your Loyalty points here</h3>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src="/assets/images/loyalty.jpg" alt="Avatar" style={{ "width": "100%", "height": "100%", }} />
                                </div>
                                <div class="flip-card-back">
                                    <h3>Loyalty Points
                                    </h3>
                                    <h1 className="pv4">105</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Flights">
                    <p className="pl5 fw7 f3  w-50-m w-50-l w-100-s ">Flights Scheduled : <img src="/assets/images/departure.png" className="w-10" /></p>
                    <SearchResult />
                    <SearchResult />
                    <SearchResult />
                </div>
            </div>
        </div>
    )
}
export default UserProfile