import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import CompanyCard from "../components/CompanyCard";
import axios from "axios";

const Browsecompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/companies/getcompanies")
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("AxiosError:", error);
      });
  }, []);

  //render------------------------------------------------------------------------------------->
  return (
    <div className="browse">
      <Header active="browse" />
      {/* container  */}
      <Row className="p-5 my-5 mx-0" style={{ background: "black" }}>
        <Col style={{ marginTop: "60px" }}>
          <div className="pb-3">
            <input
              placeholder="Company Name"
              value=""
              onBlur=""
              onChange=""
              style={{
                width: "15rem",
                padding: ".3rem",
                color: "var(--main-color)",
                fontWeight: "600",
                border: "none",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="col-3 p-0">
            <div style={{ color: "white" }}>
              <h6>Categories</h6>
              <div className="form-check">
                <label className="form-check-label" htmlFor="technology">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Technology"
                    id="technology"
                    onChange="{handleCheckboxValue}"
                  />
                  Technology
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label" htmlFor="engineering">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Engineering"
                    id="engineering"
                    onChange="{handleCheckboxValue}"
                  />
                  Engineering
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label" htmlFor="business">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Business"
                    id="business"
                    onChange="{handleCheckboxValue}"
                  />
                  Business
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label" htmlFor="meadical">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Meadical"
                    id="meadical"
                    onChange="{handleCheckboxValue}"
                  />
                  Meadical
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label" htmlFor="sales">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Sales"
                    id="sales"
                    onChange="{handleCheckboxValue}"
                  />
                  Sales
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label" htmlFor="marketing">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Marketing"
                    id="marketing"
                    onChange="{handleCheckboxValue}"
                  />
                  Marketing
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label" htmlFor="accounting">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Accounting"
                    id="accounting"
                    onChange="{handleCheckboxValue}"
                  />
                  Accounting
                </label>
              </div>

              <div className="form-check">
                <label className="form-check-label" htmlFor="teaching">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value="Teaching"
                    id="teaching"
                    onChange="{handleCheckboxValue}"
                  />
                  Teaching
                </label>
              </div>
              <br />
            </div>
          </div>
        </Col>
        <Col className="col-9">
          <Row>
            <h1 className="mt-0 p-0" style={{ color: "white" }}>
              All Companies
            </h1>
          </Row>
          <Row>
            <div className="d-flex flex-wrap">
              {companies.map((company, index) => (
                <CompanyCard
                  company={company}
                  key={index} // Replace with a unique key for each company
                />
              ))}
            </div>
          </Row>
        </Col>
      </Row>
      <Footer active="browse" />
    </div>
  );
};

export default Browsecompanies;
