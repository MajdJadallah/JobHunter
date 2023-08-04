import React from "react";
import DashboardHeader from "./DashboardHeader";

import { Link } from "react-router-dom";
const CompanyData = ({ company }) => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <h1 className="h3 d-inline align-middle px-3">Profile</h1>

          

           

              <span className="input-group-text border-0" id="search-addon">
          </span>
              
          </div>
        </nav>
      <main>
        <div className="container-fluid ">
          <div className="mb-3">
            <Link
              className="badge bg-dark text-white ms-2"
              to="upgrade-to-pro.html"
            ></Link>
          </div>
          <div className="row">
            <div className="col-md-4 col-xl-3   ">
              <div className="card mb-3">
                <div className="card-header">
                  <h5 className="card-title mb-0">Profile Details</h5>
                </div>
                <div className="card-body text-center">
                  <img
                    src={company.logo}
                    alt="Christina Mason"
                    className="img-fluid rounded-circle mb-2"
                    width="128"
                    height="128"
                  />
                  <h5 className="card-title mb-0">{company.name}</h5>
                  <br />

                  <div>
                    <Link className="btn btn-primary btn-sm mx-2" to="#">
                      Follow
                  </Link>
                    <Link className="btn btn-primary btn-sm" to="#">
                      <span data-feather="message-square"></span> Message
                  </Link>
                  </div>
                </div>
                <hr className="my-0" />
                <div className="card-body">
                  <h5 className="h6 card-title">Skills</h5>
                  <Link to="#" className="badge bg-primary me-1 my-1">
                    HTML
                </Link>
                  <Link to="#" className="badge bg-primary me-1 my-1">
                    JavaScript
                </Link>
                  <Link to="#" className="badge bg-primary me-1 my-1">
                    Sass
                </Link>
                  <Link to="#" className="badge bg-primary me-1 my-1">
                    Angular
                </Link>
                  <Link to="#" className="badge bg-primary me-1 my-1">
                    Vue
                </Link>
                  <Link to="#" className="badge bg-primary me-1 my-1">
                    React
                </Link>
                  <Link to="#" className="badge bg-primary me-1 my-1">
                    Redux
                </Link>
                  <Link to="#" className="badge bg-primary me-1 my-1">
                    UI
                </Link>
                  <Link to="#" className="badge bg-primary me-1 my-1">
                    UX
                </Link>
                </div>
                <hr className="my-0" />
                <div className="card-body">
                  <h5 className="h6 card-title">About</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <span
                        data-feather="home"
                        className="feather-sm me-1"
                      ></span>{" "}
                      Indusrty: <span>{company.indusrty}</span>
                    </li>

                    <li className="mb-1">
                      <span
                        data-feather="briefcase"
                        className="feather-sm me-1"
                      ></span>{" "}
                      Location: <span>{company.country}</span>
                    </li>
                  </ul>
                </div>
                <hr className="my-0" />
                <div className="card-body">
                  <h5 className="h6 card-title">Contact</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-1">
                      <Link to={company.ContactTwitter}>Twitter</Link>
                    </li>
                    <li className="mb-1">
                      <Link to={company.ContactTwitter}>Facebook</Link>
                    </li>
                    <li className="mb-1">
                      <Link to={company.ContactTwitter}>Instagram</Link>
                    </li>
                    <li className="mb-1">
                      <Link to={company.ContactTwitter}>LinkedIn</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-8 col-xl-9">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">Activities</h5>
                </div>
                <div className="card-body h-100">
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <hr />
                      <strong>Company Profile</strong> <br />
                      <hr />
                      <small className="text-muted">{company.desc}</small>
                      <br />
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <hr />
                      <strong>Working {company.name}</strong> <br />
                      <hr />
                      <div className="container text-start col-Contact ">
                        <div className="row py-2">
                          <div className="col-7 ">
                            <img
                              className="img-col-1"
                              src="https://www.biospace.com/getasset/9c2883e8-16b0-4c5f-8e98-ba3560edeead/"
                              alt=""
                            />
                          </div>
                          <div className="col -5">
                            <img
                              className="img-col-2"
                              src="https://web-static.wrike.com/blog/content/uploads/2016/11/Working-Effectively.jpg?av=d6fcc963c5c6f56257c39149bf1fd177"
                              alt=""
                            />

                            <img
                              className="img-col-2"
                              src="https://assets.website-files.com/6320fabc41e0512485e11e03/632631404cf8f7ec9812df2e_happy-employees-1080x675.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <strong>Our Team</strong> <br />
                      <hr />
                    </div>
                  </div>
                  <section id="cards">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 mb-4 pt-5">
                        <div className="card shadow-sm border-0">
                          <div className="card-body">
                            <div className="user-picture">
                              <img
                                src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=130&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=130"
                                className="shadow-sm rounded-circle"
                                height="130"
                                width="130"
                                alt=""
                              />
                            </div>
                            <div className="user-content">
                              <h5 className="text-capitalize user-name">
                                Omar Talal
                              </h5>
                              <p className=" text-capitalize text-muted small blockquote-footer">
                                <br />
                                Front End
                              </p>
                              <div className="small">
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star-half-alt text-warning"></i>
                                <i className="fas fa-star text-light"></i>
                                <i className="fas fa-star text-light"></i>
                              </div>
                              <p className="small text-muted mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet nemo harum repellendus
                                aut itaque. Temporibus quaerat dolores ut,
                                cupiditate molestiae commodi! Distinctio
                                praesentium, debitis aut minima doloribus earum
                                quia commodi.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 pt-5">
                        <div className="card shadow-sm border-0">
                          <div className="card-body">
                            <div className="user-picture">
                              <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                                className="shadow-sm rounded-circle"
                                height="130"
                                width="130"
                                alt=""
                              />
                            </div>
                            <div className="user-content">
                              <h5 className="text-capitalize user-name">
                                Ahmad Sami
                              </h5>
                              <p className=" text-capitalize text-muted small blockquote-footer">
                                <br />
                                Full Stack
                              </p>
                              <div className="small">
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-light"></i>
                                <i className="fas fa-star text-light"></i>
                              </div>
                              <p className="small text-muted mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet nemo harum repellendus
                                aut itaque. Temporibus quaerat dolores ut,
                                cupiditate molestiae commodi! Distinctio
                                praesentium, debitis aut minima doloribus earum
                                quia commodi.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 mb-4 pt-5">
                        <div className="card shadow-sm border-0">
                          <div className="card-body">
                            <div className="user-picture">
                              <img
                                src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                className="shadow-sm rounded-circle"
                                height="130"
                                width="130"
                                alt=""
                              />
                            </div>
                            <div className="user-content">
                              <h5 className="text-capitalize user-name">
                                Noor Ali
                              </h5>
                              <p className=" text-capitalize text-muted small blockquote-footer">
                                <br />
                                Designer
                              </p>
                              <div className="small">
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star text-warning"></i>
                                <i className="fas fa-star-half-alt text-warning"></i>
                                <i className="fas fa-star text-light"></i>
                              </div>
                              <p className="small text-muted mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet nemo harum repellendus
                                aut itaque. Temporibus quaerat dolores ut,
                                cupiditate molestiae commodi! Distinctio
                                praesentium, debitis aut minima doloribus earum
                                quia commodi.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <hr />

                  <div className="d-flex align-items-start">
                    <div className="flex-grow-1">
                      <strong>Our Service </strong> 
                      <br />
                      <hr />
                      <section className="section-services">
                        <div className="container">
                          <div className="row justify-content-center text-center">
                            <div className="col-md-10 col-lg-8"></div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 col-lg-4">
                              <div className="single-service">
                                <div className="part-1">
                                  <i class="fa-solid fa-mobile-screen-button"></i>{" "}
                                  <h3 className="title">App Development</h3>
                                </div>
                                <div className="part-2">
                                  <p className="description">
                                    Our experienced mobile app developers craft
                                    innovative and feature-rich applications for
                                    iOS and Android platforms. We create
                                    intuitive user interfaces, seamless user
                                    experiences, and scalable solutions We
                                    create intuitive user interfaces, that cater
                                    to your specific business requirements.
                                  </p>
                                  <Link to="#">
                                    <i className="fas fa-arrow-circle-right"></i>
                                    Read More
                                </Link>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                              <div className="single-service">
                                <div className="part-1">
                                  <i class="fa-solid fa-code"></i>
                                  <h3 className="title">Web Development</h3>
                                </div>
                                <div className="part-2">
                                  <p className="description">
                                    We specialize in designing and developing
                                    custom websites that are visually stunning,
                                    user-friendly, and optimized for search
                                    engines. From simple informational sites to
                                    complex e-commerce platforms, we leverage
                                    the latest technologies to create a powerful
                                    online presence for .
                                  </p>
                                  <Link to="#">
                                    <i className="fas fa-arrow-circle-right"></i>
                                    Read More
                                </Link>
                                </div>
                              </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                              <div className="single-service">
                                <div className="part-1">
                                  <i class="fa-solid fa-cloud"></i>{" "}
                                  <h3 className="title">Cloud Computing</h3>
                                </div>
                                <div className="part-2">
                                  <p className="description">
                                    We offer cloud computing services that
                                    enable businesses to leverage the
                                    scalability, flexibility, and
                                    cost-effectiveness of cloud platforms. We
                                    assist with cloud migration, infrastructure
                                    setup, and ongoing management to optimize
                                    your operations and enhance data security.{" "}
                                  </p>
                                  <Link to="#">
                                    <i className="fas fa-arrow-circle-right"></i>
                                    Read More
                                </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CompanyData;
