import Header from "../components/Header";
import Footer from "../components/Footer";
import Browse from "../images/browse.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import logoCompany from '../images/logoCompany.png';
const Browsecompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedIndustries, setSselectedIndustries] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/companies/getcompanies")
      .then((res) => {
        setCompanies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handlendustryChange = (e) => {
    const industry = e.target.value;
    setSselectedIndustries((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(industry)) {
        return prevSelectedCategories.filter((c) => c !== industry);
      } else {
        return [...prevSelectedCategories, industry];
      }
    });
  };

  const filteredList = companies.filter((company) => {
    const jobTitle = company.name.toLowerCase();
    const jobCategory = company.industry.toLowerCase();
    const searchTerm = search.toLowerCase();
    const categoryFilter =
    selectedIndustries.length === 0 ||
    selectedIndustries.includes(jobCategory);
    const titleFilter = jobTitle.includes(searchTerm);
    return categoryFilter && titleFilter;
  });
  const industries = [
    "Technology",
    "Medical",
    "Accounting",
    "Marketing",
    "Sales",
    "Teaching",
    "Engineering",
    "Business",
  ];
  //render------------------------------------------------------------------------------------->
  return (
    <div className="browse" style={{ background: "#fff" }}>
      <Header active="browse" />
      {/* container  */}
      <div id="findJobJumbotron">
        <div id="text">
          <h1 id="h1">Find Your Dream Company</h1>
          <p id="p">
            Find your next career at companies like Discorde ,Drobbox and
            Amazon.
          </p>
          <button id="lets-start">Lets start</button>
        </div>
        <img src={Browse} alt="job seeker" id="jobSeeker" />
      </div>
      <div id="jobs-container">
        <Row className="p-5 m-0" style={{ background: "#F8F8F8" }}>
          <div className="col-3 p-5">
            <div>
              <h3
                style={{
                  fontFamily: "'Roboto Slab', serif",
                  marginBottom: "2rem",
                }}
              >
                Industry
              </h3>
              {industries.map((category) => (
                <div>
                  <label
                    key={category}
                    style={{
                      fontFamily: "'Roboto Slab', serif",
                      paddingLeft: ".5rem",
                    }}
                  >
                    <input
                      type="checkbox"
                      value={category.toLowerCase()}
                      checked={selectedIndustries.includes(
                        category.toLowerCase()
                      )}
                      onChange={handlendustryChange}
                    />
                    {category}
                    <br></br>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <Col>
            <Row>
              <div className="AllJob">
                <h1 id="title-of-card">All Companies</h1>
                <input
                  type="text"
                  placeholder="Search for a Job"
                  onChange={handleSearch}
                  value={search}
                  id="inputField"
                />
              </div>
              {filteredList.length > 0 ? (
                filteredList.map((company) => (
                  <Col key={company.id} md={4} className="h-100">
                    <Card
                      style={{
                        width: "20rem",
                        height: "30rem",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: ".5rem 1rem 0",
                        textAlign: "start",
                        boxShadow:
                          "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important",
                      }}
                    >
                      <Card.Img
                        variant="top"
                        src={logoCompany}
                        style={{ width: "150px" }}
                      />

                      <Card.Body>
                        <Card.Title
                          style={{ fontFamily: "'Roboto Slab', serif" }}
                        >
                          {company.name}
                        </Card.Title>
                        <Card.Text>
                          {company.name}is a specialicit company in{" "}
                          {company.industry} located on {company.country}
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Link to={`/companydetails/${company.id}`} id="more">
                          Details
                        </Link>
                      </Card.Body>
                    </Card>
                    <br />
                  </Col>
                ))
              ) : (
                <p>No jobs found.</p>
              )}
            </Row>
          </Col>
        </Row>
      </div>
      <Footer active="browse" />
    </div>
  );
};

export default Browsecompanies;
