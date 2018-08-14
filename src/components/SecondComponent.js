import React from "react";
import companyPic from "../bg.jpg";

export default () => {
    return (
        <div className="component second-component">
            <div className="container-fluid row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1 className="about-title">WHAT WE DO</h1>
                    <p className="about-desc"><h3>Committed to help companies grow</h3>
                     Digitalspark is a supplier of  IT consultants. 
                     We work with startups and established companies in the private and public sector. 
                     Among our customers are companies in e-health, games, e-commerce, financial payments, 
                     Telecom and IoT.


                    </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img src={ companyPic } alt="company-pic" className="about-img"></img>
                </div>
            </div>
        </div>
    )
}