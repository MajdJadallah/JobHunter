import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const JobDetails = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setJobData(data);
        setIsPending(false);
        setError(null);

        const companyId = data.companyId;
        if (companyId) {
          fetch(`http://localhost:5000/company/${companyId}`)
            .then((res) => {
              if (!res.ok) {
                throw Error('Could not fetch the data for the company');
              }
              return res.json();
            })
            .then((company) => {
              setCompanyData(company);
            })
            .catch((err) => {
              setError(err.message);
            });
        }
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [id]);
  return (
    <div className='JobDetails'>
    <Header/>
      <div id='jobDetailsContent'>
      <h1>Job Details</h1>
      {error && <h1>{error}</h1>}
      {isPending && <h1>Loading...</h1>}
      {jobData && companyData && (
        <div id='job-details-body'>
        <img src={companyData.logo} alt='companyLogo' id='companyId'/>
        <h3>{jobData.title}</h3>
        <div className='job-data'>
        <p>{jobData.category}-{jobData.typeOfEmployment}</p>
        {/* <p>{jobData.jobLevel}</p> */}
        </div>
        <div className='details-card'>
          <h2>We Are Hiring </h2>
          <p>We are Hiring about {jobData.title} employment to be on of our team at  {companyData.name }  {companyData.type} </p>
          <h4>About  {companyData.name} </h4>
          <p>The {companyData.name} was working in the {companyData.indusrty} industry at {companyData.country} for tens years and it achieve alot of achievement in this industry So ,it was senstive to choose their employments to be one of the great team that make it able to make alot of the achievements  </p>
          <p></p>
          <h4>Job Descripition</h4>
          <p>{jobData.desc}</p>
          <Link
          to=
          {`/Applied/${jobData.id}/
          ${jobData.companyId}/
          ${jobData.jobLevel}/
          ${jobData.typeOfEmployment}/
          ${jobData.title}/
          ${companyData.name}`}
          id='applyButton'>
          Apply
          </Link>
          </div>
        </div>
      )}
      </div>
      <Footer/>
    </div>
  );
};
export default JobDetails;
