import React from "react";
import prohibited from "./prohibited.png"
import "./TandCs.css"

const TermsAndConditions = (props) => {

    return (
        <div className="tc mt3">
            <h4>Please Make Sure you are not carrying any of the following</h4>
            <div class="cf mt5">
                <div class="fl w-100 tc pv5 ">
                    <img src={prohibited} className="w-70"/>
                </div>
            </div>
            <div className="mv2">
                <p class="pa0 ma0 lh-copy f5 pointer"><input className="checkbox" id="Accept" type="checkbox" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample" onClick={()=>props.check(document.getElementById("Accept").checked)}/> Accept</p>
            </div>
        </div>
    )
}
export default TermsAndConditions