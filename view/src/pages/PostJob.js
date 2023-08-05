import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const PostJob = () => {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/jobs/getjobs")
      .then((response) => {
        setJobs(response.data.filter((job) => job.companyName === "discord"));
        setAllJobs(response.data);
        console.log("response.data", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("AxiosError:", error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Use the individual state setters to update the state for each input field
    // switch (name) {
    //   case "name":
    //     setName(event.target.value);
    //     break;
    //   case "firstname":
    //     setfirstname(event.target.value);
    //     break;
    //   case "lastname":
    //     setlastname(event.target.value);
    //     break;
    //   case "username":
    //     setusername(event.target.value);
    //     break;
    //   case "password":
    //     setPassword(event.target.value);
    //     break;
    //   case "email":
    //     setEmail(event.target.value);
    //     break;
    //   case "avatar":
    //     setAvatar(event.target.value);
    //     break;
    //   case "birthday":
    //     setBirthday(event.target.value);
    //     break;
    //   case "phone":
    //     setphone(event.target.value);
    //     break;

    //   case "jobrole":
    //     setjobrole(event.target.value);
    //     break;

    //   case "university":
    //     setUniversity(event.target.value);
    //     break;
    //   case "Graduation":
    //     setGraduation(event.target.value);
    //     break;

    //   case "speciality":
    //     setspeciality(event.target.value);
    //     break;
    //   case "yearofgraduation":
    //     setyearofgraduation(event.target.value);
    //     break;
    //   case "summary":
    //     setSummary(event.target.value);
    //     break;
    //   case "skills":
    //     setSkills(event.target.value);
    //     break;
    //   case "qualification":
    //     setQualification(event.target.value);
    //     break;
    //   default:
    //     break;
    // }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      //companyName by default
      .post("http://localhost:8080/users/signup", {
        // firstname,
        // lastname,
        // username,
        // phone,
        // birthday,
        // skills,
        // summary,
        // jobrole,
        // yearofgraduation,
        // univarsity,
        // speciality,
        // avatar,
        // email,
        // password,
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
  console.log("jobs", jobs);
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid" style={{ padding: "1rem 3rem 0" }}>
          <h1 className="h3 mb-3">
            <strong>JobHunter</strong> Dashboard
          </h1>
          <span className="input-group-text border-0" id="search-addon"></span>
        </div>
      </nav>
      <Row className="p-5">
        <Col className="jobs">
          <h1 className="text-center">All Jobs</h1>
          {allJobs.map((job) => (
            <Card className="mb-3">
              <Card.Body>
                <Card.Title id="title-job">{job.title}</Card.Title>
                <Card.Text>{job.desc}</Card.Text>
                <Link to={`/jobdetails/${job.id}`} id="more">
                  Details
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col className="postjob">
          <h1 className="text-center">Post New Job</h1>
          <div id="postJob">
            <div id="">
              <form onSubmit={handleSubmit} id="userData-Form">
                <div className="personalInfo card-div">
                  <div class="input">
                    <label htmlFor="title">Job Title:</label>
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
                      // value={birthday}
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
                      // value={avatar}
                      // onChange={handleChangeImage}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PostJob;

// import useFetch from "../customhooks/useFetch";
// import ApplicationsTable from "./ApplicationsTable";

// const AllAplications = () => {
//     let companyData = JSON.parse(localStorage.getItem('companyData'))[0];
//     const {data: applications , error , isPending} = useFetch('http://localhost:5000/application');
//     return (
//         <>
//             {isPending && <div>Loading ...</div>}
//             {error && <div>{error}</div>}
//             {applications && <ApplicationsTable applications={applications} companyData={companyData}/>}
//         </>
//     )
// }
// export default AllAplications

// import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const PostJob = () => {
//     const [title , setTitle] = useState('');
//     const [category , setCategory] = useState('Technology');
//     const [typeOfEmployment , setTypeOfEmployment] = useState('full-time');
//     const [jobLevel , setJobLevel] = useState('Junior');
//     const [capacity , setCapacity] = useState(1);
//     const [dateOfPost , setDateOfPost] = useState(formatDate().split('-').join('/'));
//     const [desc , setDesc] = useState('');
//     const [companyId , setCompanyId] = useState(JSON.parse(localStorage.getItem('companyData'))[0].id);
//     const navigate = useNavigate();

//     return (
//         <form className='post-job-form' onSubmit={onSubmit}>
//             <h2>Post Job</h2>
//             <div className="row">
//                 <div className="col-md-6 input-box">
//                     <p>title</p>
//                     <input
//                         type="text"
//                         placeholder='Job Title'
//                         required
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />
//                 </div>
//                 <div className="col-md-6 input-box">
//                     <p>category</p>
//                     <select
//                         required
//                         value={category}
//                         onChange={(e) => setCategory(e.target.value)}
//                     >
//                         <option value="Technology">Technology</option>
//                         <option value="Engineering">Engineering</option>
//                         <option value="Business">Business</option>
//                         <option value="Meadical">Meadical</option>
//                         <option value="Sales">Sales</option>
//                         <option value="Marketing">Marketing</option>
//                         <option value="Accounting">Accounting</option>
//                         <option value="Teaching">Teaching</option>
//                     </select>
//                 </div>
//                 <div className="col-md-6 input-box">
//                     <p>type of employment</p>
//                     <select
//                         required
//                         value={typeOfEmployment}
//                         onChange={(e) => setTypeOfEmployment(e.target.value)}
//                     >
//                         <option value="full-time">full-time</option>
//                         <option value="part-time">part-time</option>
//                     </select>
//                 </div>
//                 <div className="col-md-6 input-box">
//                     <p>job Level</p>
//                     <select
//                         required
//                         value={jobLevel}
//                         onChange={(e) => setJobLevel(e.target.value)}
//                     >
//                         <option value="Junior">Junior</option>
//                         <option value="Senior">Senior</option>
//                         <option value="Expert">Expert</option>
//                     </select>
//                 </div>
//                 <div className="col-md-6 input-box">
//                     <p>capacity</p>
//                     <input
//                         type="number"
//                         min={1}
//                         required
//                         value={capacity}
//                         onChange={(e) => setCapacity(e.target.value)}
//                     />
//                 </div>
//                 <div className="col-md-6 input-box">
//                     <p>date</p>
//                     <input
//                         type="date"
//                         value={formatDate()}
//                         disabled/>
//                 </div>
//                 <div className="col-12 input-box">
//                     <p>Description</p>
//                     <textarea
//                         rows='5'
//                         placeholder='Job Description'
//                         value={desc}
//                         required
//                         onInput={(e) => setDesc(e.target.value)}
//                     ></textarea>
//                 </div>
//                 <div className="col-md input-box d-flex justify-content-end">
//                     <button type='submit' className='btn-post'>Post Job</button>
//                 </div>
//             </div>
//         </form>
//     )
//     function onSubmit(e){
//         e.preventDefault();
//         console.log(category);
//         console.log(typeOfEmployment)
//         console.log(jobLevel)
//         console.log(capacity)
//         console.log(dateOfPost)

//         const job = {title , desc ,companyId , dateOfPost , category , typeOfEmployment , jobLevel ,capacity , applied: 0}

//         fetch('http://localhost:5000/jobs' , {
//             method: 'POST',
//             headers: { "Content-Type": 'application/json'},
//             body: JSON.stringify(job)
//         })
//         .then(() => {
//             console.log("new Job added");
//         })
//         navigate('/dashboard');
//     }
//     function padTo2Digits(num) {
//         return num.toString().padStart(2, '0');
//     }
//     function formatDate(date = new Date()) {
//         return [
//             date.getFullYear(),
//             padTo2Digits(date.getMonth() + 1),
//             padTo2Digits(date.getDate()),
//         ].join('-');
//     }
// }
// export default PostJob
