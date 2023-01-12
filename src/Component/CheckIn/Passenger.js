import React, { useEffect } from "react";
import "./Passenger.css"

const Passenger = (props) => {
    
    useEffect(()=>{
        
    },[props.seat])

    return (
        <div class="cf w-100 center">
            <div class=" central fl w-10 tc pv3 bg-white">
                Passenger Details:
            </div>
            <div class="info fl w-30 tc pv3 bg-white">
                {props.firstName.toUpperCase() + " " + props.lastName.toUpperCase()}
            </div>
            <div class="info fl w-30 tc pv3 bg-white">
                {props.gender}
            </div>
            <div class="info fl w-10 tc pv3 bg-white">
                {props.seat}
            </div>
        </div>
    )
}
export default Passenger