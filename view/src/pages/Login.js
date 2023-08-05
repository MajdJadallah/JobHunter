import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import axios from "axios";
import signin from '../images/rag doll.png'
import Header from '../components/SignHeader'
const Login = () => {
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
const navigate = useNavigate();
function handleemail(e) {
    setemail(e.target.value);
  }
  function handlepassword(e) {
    setpassword(e.target.value);
  }
  async function onSubmit(e) {
    e.preventDefault();
    let userinfo = await axios.post('http://localhost:8000/users/signin',{email,password})||"";
    console.log(userinfo.data)
    localStorage.clear();
    sessionStorage.clear();
    if (userinfo.data.email.length > 1) {
      localStorage.setItem("userData", JSON.stringify(userinfo));
      sessionStorage.setItem("userActive", true);
      navigate("/");}
  }
  return (
    <>
    <Header />
        <section>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100 p-5">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                    <img
                        src={signin}
                        className="img-fluid"
                        alt="signin"
                        style={{width:"400px"}}
                    />
                </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={onSubmit} id="signInForm">
                            <div className="form-outline mb-4">
                                <label className="form-label" >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    required
                                    onInput={handleemail}
                                    value={email}
                                    className="form-control form-control-lg"
                                    placeholder="Enter Email"
                                    style={{
                                        backgroundColor: "#fff",
                                        border: "0.5px solid #3e3e3e",
                                        width: "100%",
                                        padding: "0.5rem 1rem",
                                        fontSize:" 1rem",
                                        fontWeight: "400",
                                        lineHeight: "1.5",
                                        borderRadius: "5px",
                                        }}
                                />
                            </div>
                            <div className="form-outline mb-3">
                                <label className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    required
                                    onInput={handlepassword}
                                    value={password}
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    style={{
                                        backgroundColor: "#fff",
                                        border: "0.5px solid #3e3e3e",
                                        width: "100%",
                                        padding: "0.5rem 1rem",
                                        fontSize:" 1rem",
                                        fontWeight: "400",
                                        lineHeight: "1.5",
                                        borderRadius: "5px",
                                        }}
                                />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        value=""
                                        id="form2Example3"
                                    />
                                <label className="form-check-label">
                                    Remember me
                                </label>
                            </div>
                                <a href="#!" className="text-body">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <Link to="/" 
                                    type="submit"
                                    className="login-btn"
                                >
                                Sign In
                                </Link>
                            </div>
                            <div id="afterNext">
                                <a href="#!" className="text-body">
                                Forgot password?
                                </a>
                            <Link to ='/signup' className="text-body">Sign Up</Link>
                             </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};
export default Login;