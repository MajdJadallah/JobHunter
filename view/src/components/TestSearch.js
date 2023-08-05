import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
function TestSearch() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState('');
  const { category: urlCategory } = useParams ();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { category } = useParams();
  let [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/jobs/getjobs')
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let fetchResult = jobs.filter((job) => job.category === category);
    setFilteredCategories(fetchResult);
  }, [jobs]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((c) => c !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  const filteredList = jobs.filter((job) => {
    const jobTitle = job.title.toLowerCase();
    const jobCategory = job.category.toLowerCase();
    const searchTerm = search.toLowerCase();
    const categoryFilter =
      selectedCategories.length === 0 || selectedCategories.includes(jobCategory);
    const titleFilter = jobTitle.includes(searchTerm);
    return categoryFilter && titleFilter;
  });
  const categories = [
    'Technology',
    'Medical',
    'Accounting',
    'Marketing',
    'Sales',
    'Teaching',
    'Engineering',
    'Business',
  ];

  return (
    <div>
      <div id="jobs-container">
        <Row>
        <div className='col-3'>
        <div>
            <h3 style={{fontFamily: "'Roboto Slab', serif",marginBottom:"2rem"}}>Category</h3>
          {categories.map((category) => (
            <div>
            <label key={category} style={{fontFamily: "'Roboto Slab', serif",paddingLeft:".5rem"}}>
              <input
                type="checkbox"
                value={category.toLowerCase()}
                checked={selectedCategories.includes(category.toLowerCase())}
                onChange={handleCategoryChange}
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
        <h1 id="title-of-card">All Jobs</h1>
        <input
          type="text"
          placeholder="Search for a Job"
          onChange={handleSearch}
          value={search}
          id="inputField"
        />
      </div>

        {/* {filteredList.length > 0 ? (
            filteredList.map((job) => (
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
            ))
          ) : (
            <p>No jobs found.</p>
          )} */}
            {/* ... Rest of the JSX ... */}

      {filteredCategories.length > 0 ? (
        <>
          {filteredCategories.map((job) => (
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
        </>
      ) : (
        <>
          {filteredList.map((job) => (
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
        </>
      )}

        </Row>
        </Col>
        </Row>
      </div>
    </div>
  );
}

export default TestSearch;
