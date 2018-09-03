import React from "react";
import companyPic from "../bg.jpg";
import leo from '../img/leo.jpeg'
import sebastian from '../img/sebastian.jpeg'
import ivan from '../img/ivan.jpeg'
import alwin from '../img/alwin.jpeg'
import isaac from '../img/isaac.jpeg'
import marcus from '../img/marcus.png'

export default () => {
    return (
        <div className="component second-component">
            <div className="container-fluid row">
                <div className="col-lg-6 col-md-12 col-sm-12 about-wrap">
                    <h1 className="about-title">WHO WE ARE</h1>
                    <h3 className="text-center quote-text">"Committed to help companies grow"</h3>
                    <p className="about-desc">
                     Digitalspark is a supplier of  IT consultants. 
                     We work with startups and established companies in the private and public sector. 
                     Among our customers are companies in e-health, games, e-commerce, financial payments, 
                     Telecom and IoT.
                    </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 photo-grid">
                <img class="profile-pic" src={leo} alt="profile-pic"></img>
                <img class="profile-pic" src={isaac} alt="profile-pic"></img>
                <img class="profile-pic" src={alwin} alt="profile-pic"></img>
                <img class="profile-pic" src={sebastian} alt="profile-pic"></img>
                <img class="profile-pic" src={ivan} alt="profile-pic"></img>
                <img class="profile-pic" src={marcus} alt="profile-pic"></img>
                </div>
            </div>
        </div>
    )
}