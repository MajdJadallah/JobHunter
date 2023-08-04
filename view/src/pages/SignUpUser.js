import React from "react";
import "./SignUpCompany.css";
import axios from "axios";
import '../App.css';
import Header from '../components/SignHeader'
const SignUpUser = () => {
  const [name, setName] = React.useState("Tasneem");
  const [avatar, setAvatar] = React.useState("Tasneem");
  const [password, setPassword] = React.useState("123456789");
  const [email, setEmail] = React.useState("tasneem@gmail.com");
  const [jobTitle, setJobTitle] = React.useState("full-stack");
  const [birthday, setBirthday] = React.useState("2023-06-27");
  const [phoneNumber, setPhoneNumber] = React.useState("0774567890");
  const [jobRole, setJobRole] = React.useState("bb");
  const [experience, setExperience] = React.useState("bbb");
  const [location, setLocation] = React.useState("mm");
  const [qualification, setQualification] = React.useState("bb");
  const [education, setEducation] = React.useState("b");
  const [university, setUniversity] = React.useState("Al AL-Bayt");
  const [Grade, setGrade] = React.useState("Al AL-Bayt");
  const [Graduation, setGraduation] = React.useState("Al AL-Bayt");
  const [skills, setSkills] = React.useState("b");
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Use the individual state setters to update the state for each input field
    switch (name) {
      case "name":
        setName(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "email":
        setEmail(value);
        break;
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/users/signup", {
      name:name,
      password:password,
      email:email,
      // jobTitle:jobTitle,
      // birthday:birthday,
      // phoneNumber:phoneNumber,
      // jobRole:jobRole,
      // experience:experience,
      // location:location,
      // qualification:qualification,
      // education:education,
      // skills:skills,
      // aboutUs:aboutUs,
      // type:type,
      // logo:logo,
      // id:id
    })    // Handle form submission here, if needed
    // You can access the form data using the state variables
    // Example:
    console.log(response)
  };

  return (
  <>
    <Header />
    <div>
    ProfileUser signUp
    </div>
  
  </>
  );
};

export default SignUpUser;

