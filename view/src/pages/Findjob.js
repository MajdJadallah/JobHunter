import React from 'react';
import Header from '../components/Header';
// import JobSearch from '../components/JobSearch';
import TestSearch from '../components/TestSearch';
import jobSeeker from '../images/find job.png'
import Footer from '../components/Footer';

const Findjob = () => {
  return (
    <div className='find-job'>
      <Header active='find'/>
      <div id='findJobJumbotron'>
      <div id='text'>
      <h1 id='h1'>Find Your Dream Job</h1>
      <p id='p'>Find your next career at companies like Discorde ,Drobbox and Amazon.</p>
      <button id='lets-start'>Lets start</button>
      </div>
      <img src={jobSeeker} alt='job seeker' id='jobSeeker'/>
      </div>
      <div className='content'>
        <div className="row m-0 g-5">
          <TestSearch/>
        </div>
        

      </div>
      <Footer/>
    </div>
  )
}
export default Findjob;
