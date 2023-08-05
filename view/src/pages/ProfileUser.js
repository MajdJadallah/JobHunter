import React from "react";
import "./SignUpCompany.css";
import axios from "axios";
import Footer from "../components/Footer";
import "../App.css";
import Header from "../components/Header";
import { useState } from "react";
const ProfileUser = () => {
  const [name, setName] = React.useState("");
  const [avatar, setAvatar] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [qualification, setQualification] = React.useState("");
  const [univarsity, setUniversity] = React.useState("");
  const [Graduation, setGraduation] = React.useState("");
  const [skills, setSkills] = React.useState("");

  const [summary, setSummary] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [phone, setphone] = useState("");
  const [jobrole, setjobrole] = useState("");
  const [yearofgraduation, setyearofgraduation] = useState("");
  const [speciality, setspeciality] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Use the individual state setters to update the state for each input field
    switch (name) {
      case "name":
        setName(event.target.value);
        break;
      case "firstname":
        setfirstname(event.target.value);
        break;
      case "lastname":
        setlastname(event.target.value);
        break;
      case "username":
        setusername(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "avatar":
        setAvatar(event.target.value);
        break;
      case "birthday":
        setBirthday(event.target.value);
        break;
      case "phone":
        setphone(event.target.value);
        break;

      case "jobrole":
        setjobrole(event.target.value);
        break;

      case "university":
        setUniversity(event.target.value);
        break;
      case "Graduation":
        setGraduation(event.target.value);
        break;

      case "speciality":
        setspeciality(event.target.value);
        break;
      case "yearofgraduation":
        setyearofgraduation(event.target.value);
        break;
      case "summary":
        setSummary(event.target.value);
        break;
      case "skills":
        setSkills(event.target.value);
        break;
      case "qualification":
        setQualification(event.target.value);
        break;
      default:
        break;
    }
  };
  const handleChangeImage = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        console.log("Image URL:", imageUrl);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("http://localhost:8080/users/signup", {
        firstname,
        lastname,
        username,
        phone,
        birthday,
        skills,
        summary,
        jobrole,
        yearofgraduation,
        univarsity,
        speciality,
        avatar,
        email,
        password,
        // id:id
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`Error fetching personal info: ${error}`);

        console.log("Error response:", error.response);
      }); // Handle form submission here, if needed
    // You can access the form data using the state variables
    // Example:
    console.log(response);
  };
  return (
    <>
      <Header />
      <div id="userProfile">
        <div id="welcomeProfile">
          "Hey Rockstar! 🤘 Welcome to your job-seeking playground! Showcase
          your skills, flaunt your experience, and let's groove our way to
          landing the coolest gigs in town! 🎉🚀"
        </div>
        <form onSubmit={handleSubmit} id="userData-Form">
          <h3>Personal Information</h3>
          <div className="personalInfo card-div">
            <div class="input">
              <label htmlFor="firstname">First Name:</label>
              <input
                type="text"
                className="input-field"
                id="first_name"
                name="firstname"
                onChange={handleChange}
              />
            </div>
            <div class="input">
              <label htmlFor="lastname">Last Name:</label>
              <input
                type="text"
                className="input-field"
                id="last_name"
                name="lastname"
                onChange={handleChange}
              />
            </div>
            {/* <div class='input'>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="input-field"
          id="email"
          name="email"
          onChange={handleChange}
        />
      </div> */}
            <div class="input">
              <label htmlFor="location">Username:</label>
              <input
                type="text"
                className="input-field"
                id="username"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div class="input">
              <label htmlFor="birthday">Birthday:</label>
              <input
                type="date"
                className="input-field"
                id="birthday"
                name="birthday"
                value={birthday}
                onChange={handleChange}
              />
            </div>
            <div class="input">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                className="input-field"
                id="phone"
                name="phone"
                onChange={handleChange}
              />
            </div>
            <div class="input   ">
              <label htmlFor="avatar">Picture:</label>
              <input
                type="file"
                className="input-field"
                id="avatar"
                name="avatar"
                value={avatar}
                onChange={handleChangeImage}
              />
            </div>
            {/* <div class='input   '>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="input-field"
          id="password"
          name="password"
          onChange={handleChange}
        />
      </div> */}
          </div>
          <h3>Education Information</h3>
          <div className="educationInfo card-div">
            <div class="input">
              <label htmlFor="university">University:</label>
              <input
                type="text"
                className="input-field"
                id="university"
                name="university"
                onChange={handleChange}
              />
            </div>
            <div class="input">
              <label htmlFor="Graduation">Year of Graduation:</label>
              <input
                type="text"
                className="input-field"
                id="yearofgraduation"
                name="yearofgraduation"
                onChange={handleChange}
              />
            </div>

            <div class="input">
              <label htmlFor="Graduation">Speciality:</label>
              <input
                type="text"
                className="input-field"
                id="speciality"
                name="speciality"
                onChange={handleChange}
              />
            </div>
            <div class="input">
              <label htmlFor="summary">Summary:</label>
              <input
                type="text"
                className="input-field"
                id="summary"
                name="summary"
                onChange={handleChange}
              />
            </div>
          </div>
          <h3>Experience Information</h3>
          <div className="experienceInfo card-div">
            <div class="input">
              <label htmlFor="skills">Skills:</label>
              <input
                type="text"
                className="input-field"
                id="skills"
                name="skills"
                onChange={handleChange}
              />
            </div>

            <div class="input">
              <label htmlFor="qualification">Job Role:</label>
              <textarea
                type="text"
                className="input-field"
                id="jobrole"
                name="jobrole"
                onChange={handleChange}
              />
            </div>
            <div class="input">
              <label htmlFor="qualification">Qualification:</label>
              <textarea
                type="text"
                className="input-field"
                id="qualification"
                name="qualification"
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" id="submit">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};
export default ProfileUser;
