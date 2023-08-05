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
import React from "react";
import useFetch from "../customhooks/useFetch";
import CompanyData from "./CompanyData";

let companyTest = {
  name: "Discord",
  country: "USA",
  desc: "Company is a leading technology firm specializing in software development and digital solutions. With a dedicated team of skilled professionals and a track record of delivering innovative solutions, we help businesses thrive in the digital age.",
  logo: "https://logodownload.org/wp-content/uploads/2017/11/discord-logo-0.png",
  contactLinkedin: "https://www.linkedin.com/company/csdisco/",
  contactInstagram: "https://www.instagram.com/csdisco/",
  contactFacebook: "https://www.facebook.com/EstartaSolutions/",
  contactTwitter: "https://twitter.com/csdisco",
  email: "discord@discord.com",
  password: "$2b$10$BC1gebkKf9c2zpU/KNE.m.3Gxav6wLiP8/4NexNjQuJlZpQz498Mu",
  industry: "voice",
};

const CompanyProfile = () => {
  const [company, setCompany] = useState(companyTest);
  console.log(company.name)
//   let companyData = JSON.parse(localStorage.getItem("companyData"))[0];
//   const {
//     // data: company,
//     error,
//     isPending,
//   } = useFetch("http://localhost:5000/company/" + companyData.id);
  return (
    <>
      {/* {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {company != null && ( */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid" style={{ padding: "1rem 3rem 0" }}>
          <h1 className="h3 mb-3">
            <strong>JobHunter</strong> Dashboard
          </h1>
          <span className="input-group-text border-0" id="search-addon"></span>
        </div>
      </nav>
        <div className="my-5 mx-0 w-100 px-5 d-flex justify-content-center">
          <div className=" w-75">
            <Card
              style={{ width: "40rem" }}
              className="d-flex justify-content-center"
            >
              <Card.Img
                className="w-50 mx-auto"
                variant="top"
                src={company.logo}
              />
              <Card.Body>
                <Card.Title>{company.name}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>industry : {company.industry}</ListGroup.Item>
                <ListGroup.Item>Countey: {company.country}</ListGroup.Item>
                <ListGroup.Item>Email: {company.email}</ListGroup.Item>
                <ListGroup.Item>
                  <ListGroup>
                    Contact Info
                    <ListGroup.Item>
                      <FaLinkedin />{" "}
                      <Link to={company.contactLinkedin}>
                        {company.contactLinkedin}
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <FaFacebookF />{" "}
                      <Link to={company.contactFacebook}>
                        {company.contactFacebook}
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <FaInstagramSquare />{" "}
                      <Link to={company.contactInstagram}>
                        {company.contactInstagram}
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <FaTwitter />{" "}
                      <Link to={company.contactTwitter}>
                        {company.contactTwitter}
                      </Link>
                    </ListGroup.Item>
                  </ListGroup>
                </ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Link to={`/companydetails/${company._id}`} id="more">
                  Details
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      {/* )} */}
    </>
  );
};
export default CompanyProfile;
