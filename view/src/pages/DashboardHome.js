import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import ChartA from "../components/ChartA";
import ChartB from "../components/ChartB";
import "react-calendar/dist/Calendar.css";
import Map from "./Map";

const DashboardHome = () => {
  const [value, onChange] = useState(new Date());

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
      <br />
      <main id="dashBoardMain">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col mt-0">
                      <h5
                        className="card-title"
                        style={{ fontFamily: "'Roboto Slab', serif" }}
                      >
                        Review
                      </h5>
                    </div>
                    <div className="col-auto">
                      <div className="stat text-primary">
                        <i
                          className=" fa-solid fa-book-open align-middle svg"
                          data-feather="truck"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <h1 className="mt-1 mb-3">79</h1>
                  <div className="mb-0">
                    <span className="text-danger">
                      <i className="mdi mdi-arrow-bottom-right fa-solid fa-arrow-down"></i>{" "}
                      -3.65%{" "}
                    </span>

                    <span className="text-muted">Since last week</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col mt-0">
                      <h5
                        className="card-title"
                        style={{ fontFamily: "'Roboto Slab', serif" }}
                      >
                        Visitors
                      </h5>
                    </div>
                    <div className="col-auto">
                      <div className="stat text-primary">
                        <i
                          className="fa-solid fa-users svg "
                          data-feather="users"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <h1 className="mt-1 mb-3">14.212</h1>
                  <div className="mb-0">
                    <span className="text-success">
                      <i className="mdi mdi-arrow-bottom-right fa-solid fa-arrow-up "></i>{" "}
                      5.25%{" "}
                    </span>
                    <span className="text-muted">Since last week</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col mt-0">
                      <h5
                        className="card-title"
                        style={{ fontFamily: "'Roboto Slab', serif" }}
                      >
                        schedule
                      </h5>
                    </div>
                    <div className="col-auto">
                      <div className="stat text-primary">
                        <i
                          className=" fa-solid fa-calendar-minus align-middle svg"
                          data-feather="dollar-sign"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <h1 className="mt-1 mb-3">3</h1>
                  <div className="mb-0">
                    <span className="text-success">
                      <i className="mdi mdi-arrow-bottom-right fa-solid fa-arrow-up"></i>{" "}
                      6.65%{" "}
                    </span>
                    <span className="text-muted">Since last week</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col mt-0">
                      <h5
                        className="card-title"
                        style={{ fontFamily: "'Roboto Slab', serif" }}
                      >
                        Message
                      </h5>
                    </div>
                    <div className="col-auto">
                      <div className="stat text-primary">
                        <i
                          className="align-middle fa-regular fa-message svg"
                          data-feather="shopping-cart"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <h1 className="mt-1 mb-3">24</h1>
                  <div className="mb-0">
                    <span className="text-danger">
                      <i className="mdi mdi-arrow-bottom-righ fa-solid fa-arrow-down"></i>{" "}
                      -2.25%{" "}
                    </span>
                    <span className="text-muted">Since last week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-8 col-xxl-9 d-flex">
            <div className="card flex-fill">
              <div
                className="card-header"
                style={{ backgroundColor: "#000", color: "#fff" }}
              >
                <h5
                  className="card-title mb-0"
                  style={{ fontFamily: "'Roboto Slab', serif" }}
                >
                  Latest Users
                </h5>
              </div>
              <table
                className="table table-hover my-0 px-5"
                style={{ padding: ".5rem 2rem" }}
              >
                <thead style={{ fontFamily: "'Roboto Slab', serif" }}>
                  <tr>
                    <th>Name</th>
                    <th className="d-none d-xl-table-cell">Start Date</th>
                    <th className="d-none d-xl-table-cell">Age</th>
                    {/* <th>Job Role</th> */}
                    <th className="d-none d-md-table-cell">Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ahmad Omar</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">25</td>
                    <td>
                      <span>user</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Yasmeen ahmad</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">30</td>
                    <td>
                      <span>user</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Al Yamamah Madi</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">45</td>
                    <td>
                      <span>user</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Discord</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">-</td>
                    <td>
                      <span>Company</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Amazon</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">-</td>
                    <td>
                      <span>Company</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Sarah Norman</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">29</td>
                    <td>
                      <span>user</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Vardot</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">-</td>
                    <td>
                      <span>Comany</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Orange</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">-</td>
                    <td>
                      <span>Comany</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xxl-3 d-flex order-1 order-xxl-1">
            <div className="card flex-fill">
              <div
                className="card-header"
                style={{ backgroundColor: "#000", color: "#fff" }}
              >
                <h5
                  className="card-title mb-0"
                  style={{ fontFamily: "'Roboto Slab', serif" }}
                >
                  Calendar
                </h5>
              </div>
              <div className="card-body d-flex">
                <div className="align-self-center w-100">
                  <div className="chart">
                    <div>
                      {" "}
                      <Calendar onChange={onChange} value={value} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardHome;
