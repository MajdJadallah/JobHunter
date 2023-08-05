import React from "react";
import Card from "react-bootstrap/Card";
import { Link} from "react-router-dom";

const CompanyCard = ({company,index}) => {
  console.log(company._id)
  return (
    <div className="me-4 mt-4">
      <Card style={{ width: "20rem" ,height:"30rem" , justifyContent:"center" ,alignItems:"center", padding:".5rem 1rem 0",textAlign:"start",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important"}}>
        <Card.Img variant="top" src={company.name} style={{width: "150px"}} />
        <Card.Body>
          <Card.Title style={{fontFamily:"'Roboto Slab', serif"}}>{company.name}</Card.Title>
          <Card.Text>{company.name }is a specialicit company in {company.industry} located on {company.country}
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            {/* <br></br>
            <br></br>
            Email: {company.email} */}
          </Card.Text>
        </Card.Body>
        {/* <ListGroup className="list-group-flush"> */}
          {/* <ListGroup.Item>industry : {company.industry}</ListGroup.Item>
          <ListGroup.Item>Countey: {company.country}</ListGroup.Item> */}
          {/* <ListGroup.Item></ListGroup.Item>
        </ListGroup> */}
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
