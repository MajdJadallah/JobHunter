import { useEffect, useState } from "react";
import axios from "axios";

const PostJob = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/jobs/getjobs")
      .then((response) => {
        setJobs(
          response.data.filter(
            (job) => job.companyName === "Global School"
          )
        );
        console.log("response.data", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("AxiosError:", error);
      });
  }, []);
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
      <div className="container p-5">
        <table className="table align-middle bg-light text-dark">
          <thead className="bg-light">
            <tr>
              <th>Name</th>
              <th>Major</th>
              <th>Hiring Status</th>
              <th>Application Date</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      className="rounded-circle img-user-table"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">
                        {job.firstname} {job.lastname}
                      </p>
                      <p className="text-muted mb-0">{job.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{job.major}</p>
                </td>

                <td>
                  {(() => {
                    let badgeClass = "badge  text-light rounded-pill d-inline ";

                    if (job.status === "pending") {
                      badgeClass += "bg-info";
                    } else if (job.status === "approved") {
                      badgeClass += "color-status-approved";
                    } else {
                      badgeClass += "color-status-reject";
                    }

                    return (
                      <span className={badgeClass}>{job.status}</span>
                    );
                  })()}
                </td>

                <td>
                  <p className="text-muted mb-0">{job.createdAt}</p>
                </td>

                <td>
                  <p className="fw-normal mb-1">{job.jobRole}</p>
                  <p className="text-muted mb-0">{job.joblevel}</p>
                </td>
                <td>
                  <button type="button" className="btn btn-primary me-3">
                    See Apllecation
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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



