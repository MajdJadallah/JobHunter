import { useEffect, useState } from "react";
import axios from "axios";

const AllAplications = () => {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/applications/getapplications")
      .then((response) => {
        setApplications(
          response.data.filter(
            (application) => application.companyName === "apple"
          )
        );
        console.log("response.data", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("AxiosError:", error);
      });
  }, []);
  console.log("applications", applications);
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
            {applications.map((application) => (
              <tr key={application.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                      alt=""
                      className="rounded-circle img-user-table"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1">
                        {application.firstname} {application.lastname}
                      </p>
                      <p className="text-muted mb-0">{application.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{application.major}</p>
                </td>

                <td>
                  {(() => {
                    let badgeClass = "badge  text-light rounded-pill d-inline ";

                    if (application.status === "pending") {
                      badgeClass += "bg-info";
                    } else if (application.status === "approved") {
                      badgeClass += "color-status-approved";
                    } else {
                      badgeClass += "color-status-reject";
                    }

                    return (
                      <span className={badgeClass}>{application.status}</span>
                    );
                  })()}
                </td>

                <td>
                  <p className="text-muted mb-0">{application.createdAt}</p>
                </td>

                <td>
                  <p className="fw-normal mb-1">{application.jobRole}</p>
                  <p className="text-muted mb-0">{application.joblevel}</p>
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

export default AllAplications;

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
