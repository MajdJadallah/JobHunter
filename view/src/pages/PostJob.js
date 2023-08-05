import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SignUpCompany.css";

const PostJob = () => {
  const [name, setName] = useState("discord");
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({
    companyName: name,
    title: "",
    desc: "",
    category: "",
    typeOfEmployment: "",
    jobLevel: "",
    capacity: "",
    applied: 0,
  });
  // const [allJobs, setAllJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setSelectedCategory(e.target.value);
  };

  const handleEditProfile = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/jobs/getjobs")
      .then((response) => {
        setJobs(
          response.data.filter(
            (job) => job.companyName.toLowerCase() === "discord"
          )
        );
        // setAllJobs(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("AxiosError:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios
      //companyName by default
      .post("http://localhost:8080/jobs/postjob", formData)
      .then((response) => {
        console.log("response.data", response.data);
        setIsModalOpen(true);
        setFormData ({
          companyName: name,
          title: "",
          desc: "",
          category: "",
          typeOfEmployment: "",
          jobLevel: "",
          capacity: "",
          applied: 0,
        })
        setSelectedCategory(null)
      })
      .catch((error) => {
        console.log(`Error fetching personal info: ${error}`);

        console.log("Error response:", error.response);
      }); // Handle form submission here, if needed
    // You can access the form data using the state variables
    // Example:
    console.log(response);
  };
  // console.log("jobs", jobs);
  console.log("formdata", formData);
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
          {jobs.map((job) => (
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
                  <div className="input">
                    <label htmlFor="title">Job Title:</label>
                    <input
                      type="text"
                      className="input-field"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="lastname">Job Description:</label>
                    <input
                      type="text"
                      className="input-field"
                      id="desc"
                      name="desc"
                      value={formData.desc}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="category">Category:</label>
                    <select
                      className="input-field"
                      id="category"
                      name="category"
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                    >
                      {!selectedCategory && (
                        <option value="" disabled>
                          Choose a Category
                        </option>
                      )}
                      <option value="technology">Technology</option>
                      <option value="engineering">Engineering</option>
                      <option value="business">Business</option>
                      <option value="marketing">Marketing</option>
                      <option value="sales">Sales</option>
                      <option value="medical">Medical</option>
                      <option value="teaching">Teaching</option>
                      <option value="accounting">Accounting</option>
                    </select>
                  </div>
                  <div className="input">
                    <label htmlFor="typeOfEmployment">
                      Type Of Employment:
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      id="typeOfEmployment"
                      name="typeOfEmployment"
                      value={formData.typeOfEmployment}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="jobLevel">Job Level:</label>
                    <input
                      type="tel"
                      className="input-field"
                      id="jobLevel"
                      name="jobLevel"
                      value={formData.jobLevel}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input   ">
                    <label htmlFor="capacity">Capacity:</label>
                    <input
                      type="number"
                      className="input-field"
                      id="capacity"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      id="submitPost"
                      type="submit"
                      className="submit p-1"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <p>{selectedCategory}</p>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PostJob;
