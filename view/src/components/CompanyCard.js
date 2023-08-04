import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom";

const CompanyCard = ({company,index}) => {
  console.log(company._id)
  return (
    <div className="me-4 mt-4">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={company.logo} style={{height: "200px"}} />
        <Card.Body>
          <Card.Title>{company.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>industry : {company.industry}</ListGroup.Item>
          <ListGroup.Item>Countey: {company.country}</ListGroup.Item>
          <ListGroup.Item>Email: {company.email}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Link to={`/companydetails/${company._id}`} id="more">
                    Details
                  </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CompanyCard;
