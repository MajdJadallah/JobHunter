import axios from 'axios';
import React from "react";
import Header from '../components/SignHeader'
import "./SignUpCompany.css";
import Footer from "../components/Footer"
const SignUpCompany = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [type, setType] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [logo, setLogo] = React.useState("");
  const [contactLinkedin, setContactLinkedin] = React.useState("");
  const [contactInstagram, setContactInstagram] = React.useState("");
  const [contactFacebook, setContactFacebook] = React.useState("");
  const [contactTwitter, setContactTwitter] = React.useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Use the individual state setters to update the state for each input field
    switch (name) {
      case "name":
        setName(value);
        break;
      case "industry":
        setIndustry(value);
        break;
       case "password":
      setPassword(value);
      break;
       case "email":
      setEmail(value);
      break;
      case "country":
        setCountry(value);
        break;
      case "type":
        setType(value);
        break;
      case "desc":
        setDesc(value);
        break;
      case "logo":
        setLogo(value);
        break;
      case "contactLinkedin":
        setContactLinkedin(value);
        break;
      case "contactInstagram":
        setContactInstagram(value);
        break;
      case "contactFacebook":
        setContactFacebook(value);
        break;
      case "contactTwitter":
        setContactTwitter(value);
        break;
      default:
        break;
    }
  };
  async function handleSubmit(e){
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:8000/users/signup", {
          name: name,
          password: password,
          email: email,
          industry: industry,
          country: country,
          type: type,
          desc: desc,
          logo: logo,
          contactLinkedin: contactLinkedin,
          contactInstagram: contactInstagram,
          contactFacebook: contactFacebook,
          contactTwitter: contactTwitter,
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
  }
  const handleChangeImage = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;
        console.log('Image URL:', imageUrl);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  return (
  <>
  <Header/>
  <div id='dataComp'>
  <div id='welcomeCompany'>"Welcome to Job Hunter, where top talent meets visionary employers. Find your perfect match now!" 🔍🎯✨</div>
  <form id='companyData'>
  <h3>Company Information</h3>
    <div className="CompanyInformation card-div">
    <div className="input">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
         className=" input-field"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
      />
    </div>
    <div className="input">
      <label htmlFor="industry">Industry:</label>
      <select
        type="text"
        className=" input-field"
        id="industry"
        name="industry"
        value={industry}
        onChange={handleChange}>
        <option>technology</option>
        <option>engineering</option>
        <option>business</option>
        <option>marketing</option>
        <option>sales</option>
        <option>medical</option>
        <option>teaching</option>
        <option>accounting</option>
      </select>
      {/* <input
        type="text"
         className=" input-field"
        id="industry"
        name="industry"
        value={industry}
        onChange={handleChange}
      /> */}
    </div>
    <div className="input">
      <label htmlFor="country">Country:</label>
      <input
        type="text"
         className=" input-field"
        id="country"
        name="country"
        value={country}
        onChange={handleChange}
      />
    </div>
    {/* <div className="input">
      <label htmlFor="type">Type:</label>
      <input
        type="text"
         className=" input-field"
        id="type"
        name="type"
        value={type}
        onChange={handleChange}
      />
    </div> */}
    <div className="input">
      <label htmlFor="desc">Description:</label>
      <textarea
         className=" input-field"
        id="desc"
        name="desc"
        rows="4"
        value={desc}
        onChange={handleChange}
      />
    </div>
    <div className="input">
      <label htmlFor="logo">Logo:</label>
      <input
        type="file"
         className=" input-field"
        id="logo"
        name="logo"
        value={logo}
        onChange={handleChangeImage}
      />
    </div>
    </div>
    <h3>Contact Information</h3>
    <div className="contactInformation card-div">
    {/* <div className="input">
      <label htmlFor="email">email:</label>
      <input
        type="email"
         className=" input-field"
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
    </div> */}
    <div className="input">
      <label htmlFor="contactLinkedin">LinkedIn:</label>
      <input
        type="url"
         className=" input-field"
        id="contactLinkedin"
        name="contactLinkedin"
        value={contactLinkedin}
        onChange={handleChange}
      />
    </div>
    <div className="input">
      <label htmlFor="contactInstagram">Instagram:</label>
      <input
        type="url"
         className=" input-field"
        id="contactInstagram"
        name="contactInstagram"
        value={contactInstagram}
        onChange={handleChange}
      />
    </div>
    <div className="input">
      <label htmlFor="contactFacebook">Facebook:</label>
      <input
        type="url"
         className=" input-field"
        id="contactFacebook"
        name="contactFacebook"
        value={contactFacebook}
        onChange={handleChange}
      />
    </div>
    <div className="input">
      <label htmlFor="contactTwitter">Twitter:</label>
      <input
        type="url"
         className=" input-field"
        id="contactTwitter"
        name="contactTwitter"
        value={contactTwitter}
        onChange={handleChange}
      />
    </div>
    </div>
    <div id="submitCompany">
    <button type="submit" className="submit" onClick={handleSubmit}>
      Submit
    </button>
  </div>
  </form>
</div>
<Footer/>
  </>
  );
};

export default SignUpCompany;
