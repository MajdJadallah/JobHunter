import React from "react";
import "./SignUpCompany.css";
import axios from "axios";
import "../App.css";
import Header from "../components/SignHeader";
import { useSignUpContext } from "./context";

const SignUpUser = () => {
  const { userData } = useSignUpContext();

  const [name, setName] = React.useState(userData.name || "");
  const [avatar, setAvatar] = React.useState("");
  const [password, setPassword] = React.useState(userData.password || "");
  const [jobTitle, setJobTitle] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [jobRole, setJobRole] = React.useState("");
  const [experience, setExperience] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [qualification, setQualification] = React.useState("");
  const [education, setEducation] = React.useState("");
  const [university, setUniversity] = React.useState("");
  const [Grade, setGrade] = React.useState("");
  const [Graduation, setGraduation] = React.useState("");
  const [skills, setSkills] = React.useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Use the individual state setters to update the state for each input field
    switch (name) {
      case "avatar":
        setAvatar(value);
        break;
      case "birthday":
        setBirthday(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "education":
        setEducation(value);
        break;
      case "university":
        setUniversity(value);
        break;
      case "Graduation":
        setGraduation(value);
        break;
      case "Grade":
        setGrade(value);
        break;
      case "jobTitle":
        setJobTitle(value);
        break;
      case "jobRole":
        setJobRole(value);
        break;
      case "experience":
        setExperience(value);
        break;
      case "skills":
        setSkills(value);
        break;
      case "qualification":
        setQualification(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      password,
      email: userData.email, // Email from context API
      jobTitle,
      birthday,
      phoneNumber,
      jobRole,
      experience,
      location,
      qualification,
      education,
      university,
      Grade,
      Graduation,
      skills,
    };

    try {
      // Perform your API call here
      const response = await axios.post(
        "http://localhost:8080/users/signup",
        formData
      );
      console.log("API Response:", response.data);
      // Optionally, you can handle the API response here
    } catch (error) {
      console.error("API Error:", error);
      // Handle errors from the API call if needed
    }
  };

  return (
    <>
    <Header />
    <div>
      <h1>ProfileUser signUp</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields for the remaining hooks */}
        <input
          type="text"
          name="avatar"
          placeholder="Enter your avatar"
          value={avatar}
          onChange={handleChange}
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Enter your job title"
          value={jobTitle}
          onChange={handleChange}
        />
        <input
          type="date"
          name="birthday"
          value={birthday}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="jobRole"
          placeholder="Enter your job role"
          value={jobRole}
          onChange={handleChange}
        />
        <input
          type="text"
          name="experience"
          placeholder="Enter your experience"
          value={experience}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Enter your location"
          value={location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="qualification"
          placeholder="Enter your qualification"
          value={qualification}
          onChange={handleChange}
        />
        <input
          type="text"
          name="education"
          placeholder="Enter your education"
          value={education}
          onChange={handleChange}
        />
        <input
          type="text"
          name="university"
          placeholder="Enter your university"
          value={university}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Grade"
          placeholder="Enter your Grade"
          value={Grade}
          onChange={handleChange}
        />
        <input
          type="text"
          name="Graduation"
          placeholder="Enter your Graduation"
          value={Graduation}
          onChange={handleChange}
        />
        <input
          type="text"
          name="skills"
          placeholder="Enter your skills"
          value={skills}
          onChange={handleChange}
        />
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </>
  );
};

export default SignUpUser;
