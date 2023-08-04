import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const JobsCards = ({ jobs }) => {
  return (
    <Row>
      {jobs.slice(0, 12).map((job) => (
        <Col key={job.id} md={6} className="h-100">
          <Card id="card">
            <Card.Body>
              <Card.Title id="title-job">{job.title}</Card.Title>
              <Card.Text>{job.desc}</Card.Text>
              <Link to={`/jobdetails/${job.id}`} id='more'>
                Details
              </Link>
            </Card.Body>
          </Card>
          <br />
        </Col>
      ))}
    </Row>
  );
};

export default JobsCards;
