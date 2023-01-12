import React from "react";
import "./SearchResult.css";
import flightNo from "./FlightNo.png"

const SearchResult = (props) => {
    return (
        <div class="search-card">
            <article class="card-search center w-90 br3 hidden ba b--black-100 mv2">
                <div class="pa3">
                    <div class="cf">
                        <div class="fl w-30 w-10-l tc pt2 ">
                            <h4>11:50</h4>
                            <p>Kochi</p>
                        </div>
                        <div class="fl w-0 w-20-l dn dib-ns tc pt2 ">
                           <p>-----1hr 20mins-----></p>
                        </div>
                        <div class="fl w-30 w-10-l tc pt2 ">
                            <h4>13:10</h4>
                            <p>Delhi</p>
                        </div>
                        <div class="fl w-20 w-20-l dn dib-ns tc pt2 ">
                          <img src="/assets/images/flightNo.png" alt="flight No:" className="flightNo"/><p>BF1134</p>  
                        </div>
                        <div class="fl fw5 w-20 w-20-l tc pt2 ">
                            Non-Stop
                        </div>
                        <div class="fl fw6 h3 w-20 w-20-l tc pt2 ">
                            $45
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default SearchResult;