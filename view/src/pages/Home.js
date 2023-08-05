import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/Footer";
import HomeBg from '../images/home-bg.svg'
import hunter from '../images/hunter.png'
import Steps from '../components/Steps';
import tech from '../images/technology.png'
import medical from '../images/hospital.png'
import Business from '../images/bussnies.png'
import Sales from '../images/sales.png'
import Teaching from '../images/teach.png'
import Accounting from '../images/accounts.png'
import Marketing from '../images/marketing.png'
import Enginnering from '../images/engineering.png'
import axios from "axios";


import '../App.css'
const Home = () => {
  //--------------------------click on category to fetch data from backend---------------
  const [category,setCategory]=useState(null)
  const handleCategory=()=>{
      axios.get(`http://localhost:8080/jobs/getjobs/${category}`)
      .then((response)=>{
        setCategory(response.data.category)
        console.log(response.data.category)
      }
      )
      .catch((err)=>{console.log("error in front category")})

  }
  return (
    <div className="home">
      <Header active="home" />
      <div className="container" id="homeBg" style={{ backgroundImage: `url(${HomeBg})` , margin:0}}>
        <div className="row" id="welcome-container">
          <div className="col">
          <img id="hunter" src={hunter} alt="hunter"/>
          </div>
          <div className="col" id="welcomeText">
          <h2>Hey There, Job Hunters! 🏹 Ready To Chase That Dream Job?</h2>
          <p id="welcomeP">Let's aim high and bag that perfect opportunity together! 💼🌟</p>
            <Link to ="/findjob" id='FindJob' style={{textDecoration:"none"}}>Find Job</Link>
          </div>
        </div>
      </div>
      <Steps/>
      <div id="categoriesSection">
      <h1 id="title">Top Trending Categories</h1>
      <Container id="grid-categories">
        <Row class="row">
          <Col class="col">
            <Link to={`/findjob/Technology`} class="card" onClick={handleCategory}>
              <img
              src={tech}
              alt='tech'
              className="categoryIcon"
              />
              <p>
                Technology
              </p>
            </Link>
          </Col>

          <Col class="col">
            <Link to={`/findjob/Engineering`} class="card" onClick={handleCategory}>
            <img
              src={Enginnering}
              alt='tech'
              className="categoryIcon"
              />
              <p>
                Engineering
              </p>
            </Link>
          </Col>

          <Col class="col">
            <Link className="Link" to={`/findjob/Business`} class="card" onClick={handleCategory}>
            <img
              src={Business}
              alt='tech'
              className="categoryIcon"
              />
              <p>
                Business
              </p>
            </Link>
          </Col>

          <Col class="col">
            <Link className="Link" to={`/findjob/Meadical`} class="card" onClick={handleCategory}>
            <img
              src={medical}
              alt='tech'
              className="categoryIcon"
              />
              <p>
                Meadical
              </p>
            </Link>
          </Col>
        </Row>

        <Row class="row" id="second-row-grid">
          <Col class="col">
            <Link className="Link" to={`/findjob/Sales`} class="card" onClick={handleCategory}>
            <img
              src={Sales}
              alt='tech'
              className="categoryIcon"
              />
              <p>
                Sales
              </p>
            </Link>
          </Col>

          <Col class="col">
            <Link className="Link" to={`/findjob/Marketing`} class="card" onClick={handleCategory}>
            <img
              src={Marketing}
              alt='tech'
              className="categoryIcon"
              />
              <p>
                Marketing
              </p>
            </Link>
          </Col>

          <Col class="col">
            <Link className="Link" to={`/findjob/Accounting`} class="card" onClick={handleCategory}>
            <img
              src={Accounting}
              alt='tech'
              className="categoryIcon"
              />
              <p>
                Accounting
              </p>
            </Link>
          </Col>

          <Col class="col">
            <Link className="Link" to={`/findjob/Teaching`} class="card" onClick={handleCategory}>
            <img
              src={Teaching}
              alt='tech'
              className="categoryIcon"
              />
              <p>
                Teaching
              </p>
            </Link>
          </Col>
        </Row>
      </Container>
      </div>
      

      <Footer />
    </div>
  );
};
export default Home;
