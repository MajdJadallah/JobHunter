// import React, { useState } from "react";
// import { useNavigate,Link } from "react-router-dom";
// import Header from '../components/SignHeader'
// import signup from '../images/signup.svg'
// import ragDoll from '../images/rag doll.png'
// const SignUP = () => {
//   const navigate = useNavigate(); 
//   const [isJobseeker, setIsJobseeker] = useState(false);
//   const [isCompany, setIsCompany] = useState(false);
// return (
//  <div id="mainSignUp">
//  <Header/>
//  <div id='signUp'>
//   <section >
//   <div className="container-fluid h-custom">
//   <div className="row d-flex justify-content-center align-items-center p-5">
//   <div className="col-md-9 col-lg-6 col-xl-5">
//    <img
//    src={ragDoll}
//    className="img-fluid"
//    alt="signup "
//    style={{width:"400px"}}
//    />
//   </div>
// <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//   <form onSubmit={onSubmit}>
//     <h1>Welcome to JobHunter</h1>
//     <br></br>
//     <div className="selector-container">
//   <div id="data-user">
//   <input
//     type='text'
//     placeholder="Enter your email"
//     id="email"
//     />
//     <input
//     type='text'
//     placeholder="Enter your password"
//     id="password"
//     />
//     <input
//     type='text'
//     placeholder="confirm password"
//     id='confirmPassword'
//     />
//   </div>
//     <div id="askFilter">
//     <p id="filter-text">Who Are You?</p>
//       <div id="filterUsers">
//       <label>
//         <input
//           type="radio"
//           value="jobseeker"
//           checked={isJobseeker}
//           onChange={() => {
//             setIsJobseeker(true);
//             setIsCompany(false);
          
//           }}
//         />
//         Jobseeker
//       </label>
//       <br />
//       <label>
//         <input
//           type="radio"
//           value="company"
//           checked={isCompany}
//           onChange={() => {
//             setIsJobseeker(false);
//             setIsCompany(true);
//           }}
//         />
//         Company
//       </label>
//       </div>
//     </div>
//       <br />
//       <br />
//     </div>
//     <div className="d-flex justify-content-between align-items-center">
//       <div className="form-check mb-0">
//         <input
//           className="form-check-input me-2"
//           type="checkbox"
//           value=""
//           id="form2Example3"
//         />
//         <label className="form-check-label">Remember me</label>
//       </div>
      
//     </div>
//     <div className="text-center text-lg-start mt-4 pt-2" id="next">
//     { !isCompany? <Link to = '/signup/jobseeker' type="submit" >Sign Up</Link>:<Link to = '/signup/company' type="submit">next</Link>}
//     </div>
//     <div id="afterNext">
//       <a href="#!" className="text-body">
//         Forgot password?
//       </a>
//       <Link to ='/signin' className="text-body">Sign In</Link>
//       </div>
//   </form>
// </div>
// </div>
// </div>
// </section>
// </div>
// </div>
// );
//   function onSubmit(e) {
//     e.preventDefault();
//     if (isJobseeker || isCompany) {
//       // Send the jsonData as a prop based on the user's choice
//       navigate(`/signup/${isJobseeker ? "jobseeker" : "company"}`);
//     } else {
//       alert("Please select Jobseeker or Company.");
//     }
//   }
// };
// export default SignUP;import React from "react";import React from "react";import React, { useState } from "react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/SignHeader";
import ragDoll from "../images/rag doll.png";
import { SignUpProvider, useSignUpContext } from "./context";
import axios from "axios";

const SignUP = () => {
  const navigate = useNavigate();
  const { onSubmit } = useSignUpContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isJobseeker, setIsJobseeker] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, password, isJobseeker, isCompany };

    try {
      // Perform your API call here
      const response = await axios.post("http://example.com/api/endpoint", formData);
      console.log("API Response:", response.data);
      // Optionally, you can handle the API response here
    } catch (error) {
      console.error("API Error:", error);
      // Handle errors from the API call if needed
    }

    onSubmit(formData);

    if (isJobseeker || isCompany) {
      // Send the jsonData as a prop based on the user's choice
      navigate(`/signup/${isJobseeker ? "jobseeker" : "company"}`);
    } else {
      alert("Please select Jobseeker or Company.");
    }
  };

  return (
    <SignUpProvider>
      <div id="mainSignUp">
        <Header />
        <div id="signUp">
          <section>
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center p-5">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img
                    src={ragDoll}
                    className="img-fluid"
                    alt="signup "
                    style={{ width: "400px" }}
                  />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form onSubmit={handleSubmit}>
                    <h1>Welcome to JobHunter</h1>
                    <br></br>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div id="askFilter">
                      <p id="filter-text">Who Are You?</p>
                      <div id="filterUsers">
                        <label>
                          <input
                            type="radio"
                            value="jobseeker"
                            checked={isJobseeker}
                            onChange={() => {
                              setIsJobseeker(true);
                              setIsCompany(false);
                            }}
                          />
                          Jobseeker
                        </label>
                        <br />
                        <label>
                          <input
                            type="radio"
                            value="company"
                            checked={isCompany}
                            onChange={() => {
                              setIsJobseeker(false);
                              setIsCompany(true);
                            }}
                          />
                          Company
                        </label>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3"
                        />
                        <label className="form-check-label">Remember me</label>
                      </div>
                    </div>
                    <div className="text-center text-lg-start mt-4 pt-2" id="next">
                      {!isCompany ? (
                        <button type="submit">Sign Up</button>
                      ) : (
                        <button type="submit">Next</button>
                      )}
                    </div>
                    <div id="afterNext">
                      <a href="#!" className="text-body">
                        Forgot password?
                      </a>
                      <Link to="/signin" className="text-body">
                        Sign In
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </SignUpProvider>
  );
};

export default SignUP;
