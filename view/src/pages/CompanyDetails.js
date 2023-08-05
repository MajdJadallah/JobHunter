import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, ListGroup, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import {
  FaGoogle,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

const CompanyDetails = () => {
  const [company, setCompany] = useState([]);
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const _id = params.id;

  useEffect(() => {
    let name
    axios
      .get(`http://localhost:8080/companies/getcompany/${_id}`)
      .then((response) => {
        setCompany(response.data);
        name = response.data.name.toLowerCase();
      })
      .catch((error) => {
        console.error("AxiosError:", error);
      });

    axios
      .get(`http://localhost:8080/jobs/getjobs`)
      .then((response) => {
        setJobs(response.data.filter((job) => job.companyName === name));
      })
      .catch((error) => {
        console.error("AxiosError:", error);
      });
  }, []);
  
  console.log(jobs);
  return (
    <div>
      <Header />
      <div className="my-5 mx-0 w-100">
        <div className="d-flex justify-content-center w-100">
          <Card
            style={{ width: "60rem",padding:".5rem 2rem 3rem " }}
            className="d-flex justify-content-center"
          >
            <Card.Img
              className="w-50 mx-auto"
              variant="top"
              src={company.logo}
            />
            <Card.Body>
              <Card.Title style={{fontFamily: "'Roboto Slab', serif"}}>{company.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
              <span style={{fontFamily: "'Roboto Slab', serif"}}>Industry: </span> {company.industry}
              <br></br>
              <span style={{fontFamily: "'Roboto Slab', serif"}}>Countey: </span> {company.country}
              <br></br>
              <span style={{fontFamily: "'Roboto Slab', serif"}}>Email: </span> {company.email}
              </ListGroup.Item>
              <ListGroup.Item>
                <ListGroup >
                <p style={{fontFamily: "'Roboto Slab', serif"}}>Contact Information </p>
                  <ListGroup.Item>
                    <FaLinkedin />{" "}
                    <Link to={company.contactLinkedin} 
                    style={{textDecoration:'none', color:"#000" , fontWeight:"600"}}>
                      {company.contactLinkedin}
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FaFacebookF />{" "}
                    <Link to={company.contactFacebook}
                    style={{textDecoration:'none', color:"#000" , fontWeight:"600"}}>
                      {company.contactFacebook}
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FaInstagramSquare />{" "}
                    <Link to={company.contactInstagram}
                    style={{textDecoration:'none', color:"#000" , fontWeight:"600"}}>
                      {company.contactInstagram}
                    </Link>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <FaTwitter />{" "}
                    <Link to={company.contactTwitter}
                    style={{textDecoration:'none', color:"#000" , fontWeight:"600"}}>
                      {company.contactTwitter}
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
        <div className="d-flex justify-content-center w-100 mt-5">
          <Card
            style={{ width: "60rem" }}
            className="d-flex justify-content-center"
          >
            <Card.Body>
              <Card.Title
              style={{fontFamily: "'Roboto Slab', serif"}}>Jobs</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {jobs.map((job) => (
                <ListGroup.Item>
                <span style={{fontFamily: "'Roboto Slab', serif"}}>Job title: </span>
                   {job.title}<br/>
                  <Link to={`/companydetails/${company._id}`} id="more">
                  <span style={{fontFamily: "'Roboto Slab', serif", textDecoration:"none" , color:"#000"}}>Details </span>

                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyDetails;
