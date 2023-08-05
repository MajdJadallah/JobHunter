import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function JobSearch() {
  let concatenatedArray = [];
  let categoryResult = [];
  let joblevelResult = [];
  let slicedArr = [];
  let typeOfEmploymentResult = [];
  const [jobs, setJobs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  let [filteredList, setFilteredList] = useState([]);
  const { category } = useParams();

  let [typeOfEmploymentValue, settypeofEmploymentValue] = useState({
    "Full-time": false,
    "Part-time": false,
  });

  let [joblevelValue, setjoblevelValue] = useState({
    Junior: false,
    Senior: false,
  });

  let [categoryValue, setccategoryValue] = useState({
    Technology: false,
    Engineering: false,
    Business: false,
    Meadical: false,
    Sales: false,
    Marketing: false,
    Accounting: false,
    Teaching: false,
  });

  useEffect(() => {
    // Fetch data from the API endpoint in your backend
    axios
      .get("http://localhost:8080/jobs/getjobs")
      .then((response) => {
        setJobs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    let fetchResult = jobs.filter((job) => job.category === category);
    setFilteredList(fetchResult);
  }, [jobs]);

  function inputFunction(e) {
    setInputValue(e.target.value);
    let searchResult = jobs.filter((job) =>
      job.title.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    setFilteredList(searchResult);
  }
  // *********************************************************************************************************
  //added Part-time for the 9 ids

  useEffect(() => {
    if (category === undefined) setFilteredList(jobs);
  }, [jobs]);

  //function get the value of the checkbox
  const handleCheckboxValue = (e) => {
    // e.target.checked && (setccategoryValue({
    //   ...categoryValue,
    //   [`${e.target.value}`]: true,
    // })
    // );

    //update if properties false or true
    e.target.checked
      ? (typeOfEmploymentValue[`${e.target.value}`] = true)
      : (typeOfEmploymentValue[`${e.target.value}`] = false);

    e.target.checked
      ? (categoryValue[`${e.target.value}`] = true)
      : (categoryValue[`${e.target.value}`] = false);

    e.target.checked
      ? (joblevelValue[`${e.target.value}`] = true)
      : (joblevelValue[`${e.target.value}`] = false);
    //filters section
    //typeOfEmployment filter section
    let truetypeOfEmployment = Object.keys(typeOfEmploymentValue).filter(
      (prop) => typeOfEmploymentValue[prop] === true
    );
    if (truetypeOfEmployment) {
      typeOfEmploymentResult = truetypeOfEmployment.map((prop) =>
        jobs.filter((job) => job.typeOfEmployment === prop)
      );
      concatenatedArray = [].concat(...typeOfEmploymentResult);
      // filteredList = concatenatedArray;
    }
    // Category filter section
    let trueCategories = Object.keys(categoryValue).filter(
      (prop) => categoryValue[prop] === true
    );
    if (trueCategories) {
      categoryResult = trueCategories.map((prop) =>
        jobs.filter((job) => job.category === prop)
      );
      concatenatedArray = [].concat(...categoryResult);
      // filteredList = concatenatedArray;
    }
    // Job level filter section
    let truejoblevel = Object.keys(joblevelValue).filter(
      (prop) => joblevelValue[prop] === true
    );

    if (truejoblevel) {
      joblevelResult = truejoblevel.map((prop) =>
        jobs.filter((job) => job.jobLevel === prop)
      );
      concatenatedArray = [].concat(...joblevelResult);
    }

    setFilteredList(concatenatedArray);
    console.log(concatenatedArray);
  };

  if (filteredList !== undefined) {
    slicedArr = filteredList.slice(0, 6);
  }

  return (
    <>
      <div className="col-3 p-0">
        <div style={{ fontFamily: "'Roboto Slab', serif" }}>
          <h6>Type of Employment</h6>
          <div className="form-check">
            <label className="form-check-label" htmlFor="Fulltime">
              <input
                className="form-check-input"
                type="checkbox"
                value="Full-time"
                id="Fulltime"
                onChange={handleCheckboxValue}
              />
              Full-time
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label" htmlFor="Parttime">
              <input
                className="form-check-input"
                type="checkbox"
                value="Part-time"
                id="Parttime"
                onChange={handleCheckboxValue}
              />
              Part-time
            </label>
          </div>
          <br />

          <h6>Categories</h6>
          <div className="form-check">
            <label className="form-check-label" htmlFor="technology">
              <input
                className="form-check-input"
                type="checkbox"
                value="Technology"
                id="technology"
                onChange={handleCheckboxValue}
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
                onChange={handleCheckboxValue}
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
                onChange={handleCheckboxValue}
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
                onChange={handleCheckboxValue}
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
                onChange={handleCheckboxValue}
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
                onChange={handleCheckboxValue}
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
                onChange={handleCheckboxValue}
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
                onChange={handleCheckboxValue}
              />
              Teaching
            </label>
          </div>
          <br />

          <h6>Job Level</h6>
          <div className="form-check">
            <label className="form-check-label" htmlFor="senior">
              <input
                className="form-check-input"
                type="checkbox"
                value="Senior"
                id="senior"
                onChange={handleCheckboxValue}
              />
              Senior
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label" htmlFor="Junior">
              <input
                className="form-check-input"
                type="checkbox"
                value="Junior"
                id="Junior"
                onChange={handleCheckboxValue}
              />
              Junior
            </label>
          </div>
        </div>
      </div>
      {/* end of filter section */}
      <div className="col-9 p-0">
        <div className="AllJob">
          <h1 id="title-of-card">All Jobs</h1>
          <input
            placeholder="Enter the job search"
            value={inputValue}
            onBlur={inputFunction}
            onChange={inputFunction}
            id="inputField"
          />
        </div>
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <Row>
          {slicedArr.map((job) => (
            <Col key={job.id} md={6} className="h-100">
              <Card id="card">
                <Card.Body>
                  <Card.Title id="title-job">{job.title}</Card.Title>
                  <Card.Text>{job.desc}</Card.Text>
                  <Link to={`/jobdetails/${job.id}`} id="more">
                    Details
                  </Link>
                </Card.Body>
              </Card>
              <br />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
export default JobSearch;
