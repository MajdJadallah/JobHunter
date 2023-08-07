import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate, useParams ,Link } from "react-router-dom";
import man from "../images/man.png";
import axios from "axios";



function Applied() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [experience, setExperience] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [qualification, setQualification] = useState("");
  const [cv, setCv] = useState("");
  const [email, setEmail] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [joblevel, setJobLevel] = useState("");
  const [major, setMajor] = useState("");
  const [apply, setApply] = useState({});
  const [companyName, setCompanyName] = useState("");

  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState("");
  const { companyid, typeOfEmployment, title, name } = useParams();
  console.log(name.replace( /\s/g, ''))
  // useEffect(() => {
  //   const today = new Date();
  //   const formattedDate = today.toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "2-digit",
  //     day: "2-digit",
  //   });
  //   setCurrentDate(formattedDate);
  // }, []);
//--------------------Post data of apply job--------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:8080/applications/apply", {
        firstname,
        lastname,
        birthday,
        location,
        email,
        phonenumber,
        jobRole,
        joblevel,
        experience,
        qualification,
        major,
        companyName:name.replace( /\s/g, ''),
      })
      .then((response) => {
        console.log(response.data);
        setApply(response.data);    
          navigate('/findjob');

      })
      .catch((error) => {
        console.log(`Error fetching data apply: ${error}`);
        console.log("Error response:", error.response);
      });
      // navigate("")

  };

  return (
    <div id="AppliedPage">
      <Header />
      <div id="AplliedContent">
        <img src={man} alt="man" id="man" />

        <form onSubmit={handleSubmit} id="appliedForm" type="submit">
          <h1 id="applyNow">Apply Now</h1>
          <div className="row g-4 AppliedPageForm">
          <div className="col-md-6 input-box">
              <label>First Name</label>
              <input
                type="text"
                required
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="col-md-6 input-box">
              <label>Last Name</label>
              <input
                type="text"
                required
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="col-md-6 input-box">
              <label>Birthday</label>
              <input
                type="date"
                required
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
            <div className="col-md-6 input-box">
              <label>Location</label>
              <input
                type="text"
                required
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="col-md-6 input-box">
              <label>Email</label>
              <input
                type=""
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6 input-box">
              <label>Phone Number</label>
              <input
                type="text"
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>



            <div className="col-md-6 input-box">
              <label>Company Name</label>
              <input type="text" required value={name.replace( /\s/g, '')} disabled />
            </div>
            <div className="col-md-6 input-box">
              <label>Job Title</label>
              <input type="text"required value={title.replace( /\s/g, '')} disabled />
            </div>
            <div className="col-md-6 input-box">
              <label>Job Role</label>
              <input
                type="text"
                required
                onChange={(e) => setJobRole(e.target.value)}
              />
            </div>
            <div className="col-md-6 input-box">
              <label>Job Level</label>
              <input
                type="text"
                required
                onChange={(e) => setJobLevel(e.target.value)}
              />
            </div>
            <div className="col-md-6 input-box">
              <label>Major</label>
              <input type="text" required  onChange={(e) => setMajor(e.target.value)}/>
            </div>
            <div className="col-md-6 input-box">
              <label>Experience</label>
              <input
                type="text"
                required
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <div className="col-md-12 input-box">
              <label>Qualification</label>
              <textarea
                type="text"
                required
                onChange={(e) => setQualification(e.target.value)}
              />
            </div>
          </div>
          <button style={{textDecoration:"none",textAlign:"center"}}id="submitApplication" >submit</button>
          {/* <Link to ='/findjob' type="submit" id="submitApplication" style={{textDecoration:"none",textAlign:"center"}}>
              Submit
            </Link> */}
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Applied;
