// import React from "react";
// import "./SignUpCompany.css";
// import axios from "axios";
// import '../App.css';
// import Header from '../components/SignHeader'
// const SignUpUser = () => {
//   const [name, setName] = React.useState("Tasneem");
//   const [avatar, setAvatar] = React.useState("Tasneem");
//   const [password, setPassword] = React.useState("123456789");
//   const [email, setEmail] = React.useState("tasneem@gmail.com");
//   const [jobTitle, setJobTitle] = React.useState("full-stack");
//   const [birthday, setBirthday] = React.useState("2023-06-27");
//   const [phoneNumber, setPhoneNumber] = React.useState("0774567890");
//   const [jobRole, setJobRole] = React.useState("bb");
//   const [experience, setExperience] = React.useState("bbb");
//   const [location, setLocation] = React.useState("mm");
//   const [qualification, setQualification] = React.useState("bb");
//   const [education, setEducation] = React.useState("b");
//   const [university, setUniversity] = React.useState("Al AL-Bayt");
//   const [Grade, setGrade] = React.useState("Al AL-Bayt");
//   const [Graduation, setGraduation] = React.useState("Al AL-Bayt");
//   const [skills, setSkills] = React.useState("b");
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     // Use the individual state setters to update the state for each input field
//     switch (name) {
//       case "name":
//         setName(value);
//         break;
//       case "password":
//         setPassword(value);
//         break;
//       case "email":
//         setEmail(value);
//         break;
//       case "avatar":
//         setAvatar(value);
//         break;
//         case "birthday":
//           setBirthday(value);
//         break;
//       case "phoneNumber":
//         setPhoneNumber(value);
//         break;
//       case "location":
//           setLocation(value);
//           break;
//       case "education":
//             setEducation(value);
//             break;
//       case "university":
//             setUniversity(value);
//             break;
//       case "Graduation":
//             setGraduation(value);
//             break;
//       case "Grade":
//             setGrade(value);
//             break;
//       case "jobTitle":
//             setJobTitle(value);
//             break;
//       case "jobRole":
//         setJobRole(value);
//         break;
//       case "experience":
//         setExperience(value);
//         break;
//       case "skills":
//           setSkills(value);
//           break;
//       case "qualification":
//         setQualification(value);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const response = await axios.post("http://localhost:8080/users/signup", {
//       name:name,
//       password:password,
//       email:email,
//       // jobTitle:jobTitle,
//       // birthday:birthday,
//       // phoneNumber:phoneNumber,
//       // jobRole:jobRole,
//       // experience:experience,
//       // location:location,
//       // qualification:qualification,
//       // education:education,
//       // skills:skills,
//       // aboutUs:aboutUs,
//       // type:type,
//       // logo:logo,
//       // id:id
//     })    // Handle form submission here, if needed
//     // You can access the form data using the state variables
//     // Example:
//     console.log(response)
//   };

//   return (
//   <>
//     <Header />
//     <div>
//     ProfileUser signUp
//     </div>
  
//   </>
//   );
// };

// export default SignUpUser;

import React from "react";
import "./SignUpCompany.css";
import axios from "axios";
import '../App.css';
import Header from '../components/SignHeader';
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

  const handleSubmit = async(e) => {
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
      const response = await axios.post("http://localhost:8080/users/signup", formData);
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
          {/* Name and email fields are already pre-filled */}
          <input
            type="text"
            name="avatar"
            placeholder="Enter your avatar"
            value={avatar}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
          />
          {/* Add more form fields as needed */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignUpUser;
