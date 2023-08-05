// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import Header from "../components/SignHeader";
// import ragDoll from "../images/rag doll.png";
// import { SignUpProvider, useSignUpContext } from "./context";
// import axios from "axios";

// const SignUP = () => {
//   const navigate = useNavigate();
//   const { onSubmit } = useSignUpContext();

//   //useState
//   const [isJobseeker, setIsJobseeker] = useState(false);
//   const [isCompany, setIsCompany] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   //functions
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = {
//       email,
//       password,
//       confirmPassword,
//       isJobseeker,
//       isCompany,
//     };

//     try {
//       // Perform your API call here
//       const response = await axios.post(
//         "http://example.com/api/endpoint",
//         formData
//       );
//       console.log("API Response:", response.data);
//       // Optionally, you can handle the API response here
//     } catch (error) {
//       console.error("API Error:", error);
//       // Handle errors from the API call if needed
//     }

//     onSubmit(formData);

//     if (isJobseeker || isCompany) {
//       // Send the jsonData as a prop based on the user's choice
//       navigate(`/signup/${isJobseeker ? "jobseeker" : "company"}`);
//     } else {
//       alert("Please select Jobseeker or Company.");
//     }
//   };

//   // function onSubmit(e) {
//   //   e.preventDefault();
//   //   if (isJobseeker || isCompany) {
//   //     // Send the jsonData as a prop based on the user's choice
//   //     navigate(`/signup/${isJobseeker ? "jobseeker" : "company"}`);
//   //   } else {
//   //     alert("Please select Jobseeker or Company.");
//   //   }
//   // }

//   return (
//     <SignUpProvider>
//       <div id="mainSignUp">
//         <Header />
//         <div id="signUp">
//           <section>
//             <div className="container-fluid h-custom">
//               <div className="row d-flex justify-content-center align-items-center p-5">
//                 <div className="col-md-9 col-lg-6 col-xl-5">
//                   <img
//                     src={ragDoll}
//                     className="img-fluid"
//                     alt="signup "
//                     style={{ width: "400px" }}
//                   />
//                 </div>
//                 <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//                   <form onSubmit={handleSubmit}>
//                     <h1>Welcome to JobHunter</h1>
//                     <br></br>
//                     <div className="selector-container">
//                       <div id="data-user">
//                         {/* email input start */}
//                         <input
//                           type="text"
//                           required
//                           placeholder="Enter your email"
//                           id="email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                         />
//                         {/* email input end */}
//                         {/* password input start */}
//                         <input
//                           type="password"
//                           required
//                           placeholder="Enter your password"
//                           id="password"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                         />
//                         {/* password input end */}
//                         {/* confirmPassword input start */}
//                         <input
//                           type="password"
//                           required
//                           placeholder="confirm password"
//                           id="confirmPassword"
//                           value={confirmPassword}
//                           onChange={(e) => setConfirmPassword(e.target.value)}
//                         />
//                         {/* confirmPassword input end */}
//                       </div>
//                       {/* choose tybe jobseeker or company start */}
//                       <div id="askFilter">
//                         <p id="filter-text">Who Are You?</p>
//                         <div id="filterUsers">
//                           <label>
//                             <input
//                               type="radio"
//                               value="jobseeker"
//                               checked={isJobseeker}
//                               onChange={() => {
//                                 setIsJobseeker(true);
//                                 setIsCompany(false);
//                               }}
//                             />
//                             Jobseeker
//                           </label>
//                           <br />
//                           <label>
//                             <input
//                               type="radio"
//                               value="company"
//                               checked={isCompany}
//                               onChange={() => {
//                                 setIsJobseeker(false);
//                                 setIsCompany(true);
//                               }}
//                             />
//                             Company
//                           </label>
//                         </div>
//                       </div>
//                       <br />
//                       <br />
//                     </div>
//                     {/* choose tybe jobseeker or company end */}
//                     <div
//                       className="text-center text-lg-start mt-4 pt-2"
//                       id="next"
//                     >
//                       {!isCompany ? (
//                         <Link to="/signup/jobseeker/profileuser" type="submit">
//                           Sign Up
//                         </Link>
//                       ) : (
//                         <Link to="/signup/company" type="submit">
//                           Sign Up
//                         </Link>
//                       )}
//                     </div>
//                     <div id="afterNext">
//                       <div className="d-flex justify-content-between align-items-center">
//                       </div>
//                       <Link to="/signin" className="text-body">
//                         Sign In
//                       </Link>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </div>
//     </SignUpProvider>
//   );
// };
// export default SignUP;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/SignHeader";
import ragDoll from "../images/rag doll.png";
import { SignUpProvider, useSignUpContext } from "./context";
import axios from "axios";

const SignUP = () => {
  const navigate = useNavigate();
  const { onSubmit } = useSignUpContext();

  //useState
  const [isJobseeker, setIsJobseeker] = useState(false);
  const [isCompany, setIsCompany] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  //functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
      confirmPassword,
      isJobseeker,
      isCompany,
    };

    try {
      // Perform your API call here
      const response = await axios.post(
        "http://example.com/api/endpoint",
        formData
      );
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

  // function onSubmit(e) {
  //   e.preventDefault();
  //   if (isJobseeker || isCompany) {
  //     // Send the jsonData as a prop based on the user's choice
  //     navigate(`/signup/${isJobseeker ? "jobseeker" : "company"}`);
  //   } else {
  //     alert("Please select Jobseeker or Company.");
  //   }
  // }

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
                    <div className="selector-container">
                      <div id="data-user">
                        {/* email input start */}
                        <input
                          type="text"
                          required
                          placeholder="Enter your email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* email input end */}
                        {/* password input */}
                        <div>
                          <input
                            type={showPassword ? "text" : "password"}
                            required
                            placeholder="Enter your password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {/* <i
                            className={`fa ${
                              showPassword ? "fa-eye-slash" : "fa-eye"
                            } password-icon`}
                            onClick={handleTogglePassword}
                          ></i> */}
                        </div>

                        {/* confirmPassword input */}
                        <div>
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            required
                            placeholder="Confirm password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          {/* <i
                            className={`fa ${
                              showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                            } password-icon`}
                            onClick={handleToggleConfirmPassword}
                          ></i> */}
                        </div>
                      </div>
                      {/* choose tybe jobseeker or company start */}
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
                    </div>
                    {/* choose tybe jobseeker or company end */}
                    <div
                      className="text-center text-lg-start mt-4 pt-2"
                      id="next"
                    >
                      {!isCompany ? (
                        <Link to="/signup/jobseeker/profileuser" type="submit">
                          Sign Up
                        </Link>
                      ) : (
                        <Link to="/signup/company" type="submit">
                          Sign Up
                        </Link>
                      )}
                    </div>
                    <div id="afterNext">
                      <div className="d-flex justify-content-between align-items-center"></div>
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
