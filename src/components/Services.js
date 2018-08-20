import React from "react";
import companyPic from "../bg.jpg";
import computer from "../computer.png"

export default () => {
    return (
        <div className="component service-component">
        <div className="container-fluid no-padding">
            <div className="service-start">
            <h1 className="service-title">WHAT WE DO</h1>
                    <p className="service-desc">
                     Digitalspark offers a host of services in several IT areas. We provide both resource consultants and complete IT projects. 
                    </p>
            </div>
            <div className="programming">
            <div class="arrow-down"></div>
                <img src={ computer } className="pc-icon"/>
               <h1>PROGRAMMING</h1>
               <p className="service-desc">
                   We provide proffesional expertise in all new and demanding technologies on the market.
                   Such as Java, C#, React JS, Angular etc. We constantly strive to be active in the leading edge of system development.
               </p>
            </div>
            </div>
        </div>
    )
}