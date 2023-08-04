import React from "react";
import Account from "../images/person-circle.svg";
import Resume from "../images/resume.png"
import Quick from '../images/quick.png';
import apply from '../images/aplly.png';
import "../App.css"
function Steps() {
  return (
    <div id="stepsSection">
      <div id="container-steps" className="container">
        <h2>Just 4 Easy Steps to New Job</h2>
        <div className="row">
            <div className="col steps">
              <div className="containerCard">
                <img src={Account} alt="Account" />
                <div>
                    <h4>Account</h4>
                    
                </div>
              </div>
            </div>
            <div className="col">
                <div className="containerCard">
                <img src={Resume} alt="Resume" id="resume" />
                <div>
                    <h4>Cv/Resume</h4>
                </div>
                </div>
            </div>
            <div className="col">
            <div className="containerCard">
                <img src={Quick} alt="Quick" />
                   <div>
                    <h4>Quick Jobs</h4>
                   </div>
            </div>
            </div>
            <div className="col">
            <div className="containerCard">
                <img src={apply} alt="Quick" />
                    <h4>Apply Them</h4>
                </div>
            <div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
