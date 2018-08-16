import React from "react";

export default () => {
    return (
        <div className="component fourth-component">
            <div className="container">
            <h1 className="consult-title">THE TEAM</h1>
                <div class="row">
                  <div class="card-deck">
                      <div class="card">
                          <img class="card-img-top" src="//placehold.it/450x450" alt="Card image cap"></img>
                          <div class="card-block">
                          <h4 class="card-title">Leo</h4>
                          <p class="card-text">Frontend developer</p>
                          </div>
                      </div>
                      <div class="card">
                          <img class="card-img-top" src="//placehold.it/450x450" alt="Card image cap"></img>
                          <div class="card-block">
                          <h4 class="card-title">Sebastian</h4>
                          <p class="card-text">Frontend developer</p>
                          </div>
                      </div>
                      <div class="card">
                          <img class="card-img-top" src="//placehold.it/450x450" alt="Card image cap"></img>
                          <div class="card-block">
                          <h4 class="card-title">Markus</h4>
                          <p class="card-text">Fullstack developer</p>
                          </div>
                      </div>
                  </div>
              </div>
              <h1 className="join-us">Join us!</h1>
              <a target="_blank" href ="https://digitalspark.teamtailor.com/connect" className="linkToSecond"><div className="tt-btn">Connect with Team Tailor</div></a>
            </div>
        </div>
    )
}