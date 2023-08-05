import React from "react";
import Header from '../components/SignHeader'
import "./SignUpCompany.css";
import Footer from "../components/Footer"
import { useSignUpContext } from './context';
import axios from 'axios';

const SignUpCompany = () => {
  const { userData } = useSignUpContext();

  const [industry, setIndustry] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [type, setType] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [logo, setLogo] = React.useState("");
  const [contactLinkedin, setContactLinkedin] = React.useState("");
  const [contactInstagram, setContactInstagram] = React.useState("");
  const [contactFacebook, setContactFacebook] = React.useState("");
  const [contactTwitter, setContactTwitter] = React.useState("");

  const { name, email, password } = userData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "industry":
        setIndustry(value);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      password,
      industry,
      country,
      type,
      desc,
      logo,
      contactLinkedin,
      contactInstagram,
      contactFacebook,
      contactTwitter,
    };

    try {
      // Perform your API call here
      const response = await axios.post("http://localhost:8000/users/signup", formData);
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
      <div id='dataComp'>
        <div id='welcomeCompany'>
          "Welcome to Job Hunter, where top talent meets visionary employers. Find your perfect match now!" 🔍🎯✨
        </div>
        <form id='companyData' onSubmit={handleSubmit}>
          <h3>Company Information</h3>
          <div className="CompanyInformation card-div">
            <div className="input"></div>
            <div className="input">
              <label htmlFor="industry">Industry:</label>
              <input
                type="text"
                className="input-field"
                id="industry"
                name="industry"
                value={industry}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                className="input-field"
                id="country"
                name="country"
                value={country}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <label htmlFor="type">Type:</label>
              <input
                type="text"
                className="input-field"
                id="type"
                name="type"
                value={type}
                onChange={handleChange}
              />
            </div>
            <div className="input">
              <label htmlFor="desc">Description:</label>
              <textarea
                className="input-field"
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
                type="text"
                className="input-field"
                id="logo"
                name="logo"
                value={logo}
                onChange={handleChange}
              />
            </div>
          </div>
          <h3>Contact Information</h3>
          <div className="contactInformation card-div">
            <div className="input"></div>
            <div className="input">
              <label htmlFor="contactLinkedin">LinkedIn:</label>
              <input
                type="url"
                className="input-field"
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
                className="input-field"
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
                className="input-field"
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
                className="input-field"
                id="contactTwitter"
                name="contactTwitter"
                value={contactTwitter}
                onChange={handleChange}
              />
            </div>
          </div>
          <div id="submitCompany">
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default SignUpCompany;
